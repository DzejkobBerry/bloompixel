<?php
/**
 * Skrypt obsługi formularza kontaktowego
 * Hydroxy M&S - System wycen
 */

// Rozpoczęcie sesji dla CSRF token
session_start();

// Ustawienia błędów i logowania
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/logs/error.log');

// Nagłówki bezpieczeństwa
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Sprawdzenie metody POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Metoda nie jest dozwolona'
    ]);
    exit;
}

// Rate limiting - prosty mechanizm
if (!checkRateLimit()) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'message' => 'Zbyt wiele żądań. Spróbuj ponownie za chwilę.'
    ]);
    exit;
}

try {
    // Pobranie i sanityzacja danych
    $data = sanitizeInput($_POST);
    
    // Walidacja danych
    $validation = validateFormData($data);
    
    if (!$validation['valid']) {
        echo json_encode([
            'success' => false,
            'message' => 'Błędy walidacji',
            'errors' => $validation['errors']
        ]);
        exit;
    }
    
    // Wysłanie emaila
    $emailResult = sendQuoteEmail($data);
    
    if ($emailResult['success']) {
        // Logowanie sukcesu
        logMessage('INFO', 'Email wysłany pomyślnie dla: ' . $data['email']);
        
        echo json_encode([
            'success' => true,
            'message' => 'Dziękujemy za zapytanie! Skontaktujemy się z Państwem w ciągu 24 godzin.'
        ]);
    } else {
        throw new Exception('Błąd wysyłania emaila: ' . $emailResult['message']);
    }
    
} catch (Exception $e) {
    // Logowanie błędu
    logMessage('ERROR', $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Wystąpił błąd podczas przetwarzania żądania. Spróbuj ponownie.'
    ]);
}

/**
 * Sanityzacja danych wejściowych
 */
function sanitizeInput($data) {
    $sanitized = [];
    
    $sanitized['fullName'] = trim(filter_var($data['fullName'] ?? '', FILTER_SANITIZE_STRING));
    $sanitized['email'] = trim(filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL));
    $sanitized['phone'] = trim(filter_var($data['phone'] ?? '', FILTER_SANITIZE_STRING));
    $sanitized['area'] = trim(filter_var($data['area'] ?? '', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION));
    $sanitized['surface'] = trim(filter_var($data['surface'] ?? '', FILTER_SANITIZE_STRING));
    $sanitized['date'] = trim(filter_var($data['date'] ?? '', FILTER_SANITIZE_STRING));
    $sanitized['details'] = trim(filter_var($data['details'] ?? '', FILTER_SANITIZE_STRING));
    
    return $sanitized;
}

/**
 * Walidacja danych formularza
 */
function validateFormData($data) {
    $errors = [];
    
    // Walidacja imienia i nazwiska
    if (empty($data['fullName'])) {
        $errors['fullName'] = 'Imię i nazwisko jest wymagane';
    } elseif (strlen($data['fullName']) < 2) {
        $errors['fullName'] = 'Imię i nazwisko musi mieć co najmniej 2 znaki';
    }
    
    // Walidacja emaila
    if (empty($data['email'])) {
        $errors['email'] = 'Adres email jest wymagany';
    } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Nieprawidłowy format adresu email';
    }
    
    // Walidacja telefonu
    if (empty($data['phone'])) {
        $errors['phone'] = 'Numer telefonu jest wymagany';
    } elseif (!preg_match('/^[+]?[0-9\s\-\(\)]{9,15}$/', $data['phone'])) {
        $errors['phone'] = 'Nieprawidłowy format numeru telefonu';
    }
    
    // Walidacja powierzchni
    if (empty($data['area'])) {
        $errors['area'] = 'Powierzchnia projektu jest wymagana';
    } elseif (!is_numeric($data['area']) || floatval($data['area']) <= 0) {
        $errors['area'] = 'Powierzchnia musi być liczbą większą od 0';
    }
    
    // Walidacja typu usługi - ZAKTUALIZOWANE OPCJE
    $allowedSurfaces = [
        'waterproofing_garage', 'waterproofing_terrace', 'waterproofing_balcony', 'waterproofing_foundations',
        'epoxy_garage', 'epoxy_livingroom' => 'Podłoga żywiczna - Salon', 'epoxy_office', 'epoxy_premises', 'epoxy_apartment', 'epoxy_wall'
    ];
    if (empty($data['surface'])) {
        $errors['surface'] = 'Typ usługi jest wymagany';
    } elseif (!in_array($data['surface'], $allowedSurfaces)) {
        $errors['surface'] = 'Nieprawidłowy typ usługi';
    }
    
    // Walidacja daty
    if (empty($data['date'])) {
        $errors['date'] = 'Preferowana data rozpoczęcia jest wymagana';
    } elseif (!validateDate($data['date'])) {
        $errors['date'] = 'Nieprawidłowy format daty';
    }
    
    return [
        'valid' => empty($errors),
        'errors' => $errors
    ];
}

/**
 * Walidacja formatu daty
 */
function validateDate($date) {
    $d = DateTime::createFromFormat('Y-m-d', $date);
    return $d && $d->format('Y-m-d') === $date;
}

/**
 * Prosty rate limiting
 */
function checkRateLimit() {
    $ip = $_SERVER['REMOTE_ADDR'];
    $file = __DIR__ . '/logs/rate_limit.json';
    
    if (!file_exists($file)) {
        if (!is_dir(__DIR__ . '/logs')) {
            mkdir(__DIR__ . '/logs', 0755, true);
        }
        file_put_contents($file, json_encode([]));
    }
    
    $data = json_decode(file_get_contents($file), true);
    $now = time();
    $limit = 5; // 5 żądań
    $window = 300; // w ciągu 5 minut
    
    // Czyszczenie starych wpisów
    $data = array_filter($data, function($timestamp) use ($now, $window) {
        return ($now - $timestamp) < $window;
    });
    
    // Sprawdzenie limitu dla IP
    $ipRequests = array_filter($data, function($timestamp, $key) use ($ip) {
        return strpos($key, $ip) === 0;
    }, ARRAY_FILTER_USE_BOTH);
    
    if (count($ipRequests) >= $limit) {
        return false;
    }
    
    // Dodanie nowego żądania
    $data[$ip . '_' . $now] = $now;
    file_put_contents($file, json_encode($data));
    
    return true;
}

/**
 * Wysyłanie emaila z zapytaniem
 */
function sendQuoteEmail($data) {
    $to = 'info@hydroxyms.nl';
    
    // Mapowanie opcji usług na czytelne nazwy
    $surfaceTypes = [
        'waterproofing_garage' => 'Hydroizolacja - Garaż',
        'waterproofing_terrace' => 'Hydroizolacja - Taras',
        'waterproofing_balcony' => 'Hydroizolacja - Balkon',
        'waterproofing_foundations' => 'Hydroizolacja - Fundamenty',
        'epoxy_garage' => 'Podłoga żywiczna - Garaż',
        'epoxy_livingroom' => 'Podłoga żywiczna - Salon',
        'epoxy_office' => 'Podłoga żywiczna - Biuro',
        'epoxy_premises' => 'Podłoga żywiczna - Lokal',
        'epoxy_apartment' => 'Podłoga żywiczna - Mieszkanie',
        'epoxy_wall' => 'Podłoga żywiczna - Ściana'
    ];
    
    $serviceType = $surfaceTypes[$data['surface']] ?? $data['surface'];
    $subject = 'Nowe zapytanie o wycenę - ' . $serviceType;
    
    // Treść emaila
    $message = "
    <html>
    <head>
        <title>Nowe zapytanie o wycenę</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f4f4f4; padding: 10px; border-radius: 5px; }
            .field { margin: 10px 0; }
            .label { font-weight: bold; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Nowe zapytanie o wycenę</h2>
            </div>
            
            <div class='field'>
                <span class='label'>Imię i nazwisko:</span> {$data['fullName']}
            </div>
            
            <div class='field'>
                <span class='label'>Email:</span> {$data['email']}
            </div>
            
            <div class='field'>
                <span class='label'>Telefon:</span> {$data['phone']}
            </div>
            
            <div class='field'>
                <span class='label'>Powierzchnia projektu:</span> {$data['area']} m²
            </div>
            
            <div class='field'>
                <span class='label'>Typ usługi:</span> {$serviceType}
            </div>
            
            <div class='field'>
                <span class='label'>Preferowana data rozpoczęcia:</span> {$data['date']}
            </div>
            
            <div class='field'>
                <span class='label'>Szczegóły projektu:</span><br>
                " . nl2br(htmlspecialchars($data['details'])) . "
            </div>
            
            <div class='field'>
                <span class='label'>Data zapytania:</span> " . date('Y-m-d H:i:s') . "
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Nagłówki emaila
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=utf-8',
        'From: noreply@hydroxyms.nl',
        'Reply-To: ' . $data['email'],
        'X-Mailer: PHP/' . phpversion()
    ];
    
    // Wysłanie emaila
    // Wysłanie emaila
    if (mail($to, $subject, $message, implode("\r\n", $headers))) {
        logMessage('INFO', 'Email wysłany pomyślnie do: ' . $to);
        return ['success' => true];
    } else {
        $error = error_get_last()['message'] ?? 'Nieznany błąd';
        logMessage('ERROR', 'Błąd wysyłania emaila: ' . $error);
        return [
            'success' => false,
            'message' => 'Błąd funkcji mail(): ' . $error
        ];
    }
}

/**
 * Logowanie wiadomości
 */
function logMessage($level, $message) {
    $logDir = __DIR__ . '/logs';
    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }
    
    $logFile = $logDir . '/quote_handler.log';
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[{$timestamp}] {$level}: {$message}" . PHP_EOL;
    
    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
}
?>