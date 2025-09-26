<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Ustawienie nagłówka JSON
header('Content-Type: application/json');

// Funkcja do walidacji danych
function validateInput($data) {
    $errors = [];
    
    // Walidacja imienia i nazwiska
    if (empty($data['fullName']) || strlen(trim($data['fullName'])) < 2) {
        $errors['fullName'] = 'Imię i nazwisko musi mieć co najmniej 2 znaki';
    }
    
    // Walidacja email
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Podaj prawidłowy adres email';
    }
    
    // Walidacja telefonu
    if (empty($data['phone']) || !preg_match('/^[+]?[0-9\s\-\(\)]{8,15}$/', $data['phone'])) {
        $errors['phone'] = 'Podaj prawidłowy numer telefonu';
    }
    
    // Walidacja powierzchni
    if (empty($data['area']) || !is_numeric($data['area']) || $data['area'] <= 0) {
        $errors['area'] = 'Powierzchnia musi być liczbą większą od 0';
    }
    
    // Walidacja usługi
    if (empty($data['surface'])) {
        $errors['surface'] = 'Wybierz rodzaj usługi';
    }
    
    // Walidacja daty
    if (empty($data['date'])) {
        $errors['date'] = 'Wybierz preferowaną datę rozpoczęcia';
    }
    
    return $errors;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        // Pobranie i oczyszczenie danych
        $fullName = trim($_POST['fullName'] ?? '');
        $email = trim($_POST['email'] ?? '');
        $phone = trim($_POST['phone'] ?? '');
        $area = trim($_POST['area'] ?? '');
        $surface = trim($_POST['surface'] ?? '');
        $date = trim($_POST['date'] ?? '');
        $details = trim($_POST['details'] ?? '');
        
        // Walidacja danych
        $errors = validateInput([
            'fullName' => $fullName,
            'email' => $email,
            'phone' => $phone,
            'area' => $area,
            'surface' => $surface,
            'date' => $date
        ]);
        
        if (!empty($errors)) {
            echo json_encode([
                'success' => false,
                'message' => 'Proszę poprawić błędy w formularzu',
                'errors' => $errors
            ]);
            exit;
        }
        
        // Konfiguracja PHPMailer
        $mail = new PHPMailer(true);
        
        // Ustawienia serwera SMTP
        $mail->isSMTP();
        $mail->Host       = 'mail1.hostuno.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@hydroxyms.nl';
        $mail->Password   = 'Admin12.';
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        $mail->CharSet    = 'UTF-8';
        
        // Nadawca
        $mail->setFrom('info@hydroxyms.nl', 'Hydroxy M&S - Formularz kontaktowy');
        $mail->addReplyTo($email, $fullName);
        
        // Odbiorca
        $mail->addAddress('info@hydroxyms.nl', 'Hydroxy M&S');
        
        // Mapowanie nazw usług
        $serviceNames = [
            'waterproofing_garage' => 'Uszczelnienie garażu',
            'waterproofing_terrace' => 'Uszczelnienie tarasu',
            'waterproofing_balcony' => 'Uszczelnienie balkonu',
            'waterproofing_foundations' => 'Uszczelnienie fundamentów',
            'waterproofing_basement' => 'Uszczelnienie piwnicy',
            'waterproofing_roof' => 'Uszczelnienie dachu',
            'waterproofing_bathroom' => 'Uszczelnienie łazienki',
            'waterproofing_pool' => 'Uszczelnienie basenu',
            'epoxy_garage' => 'Podłoga epoksydowa w garażu',
            'epoxy_livingroom' => 'Podłoga epoksydowa w salonie',
            'epoxy_office' => 'Podłoga epoksydowa w biurze',
            'epoxy_premises' => 'Podłoga epoksydowa w lokalu komercyjnym',
            'epoxy_apartment' => 'Podłoga epoksydowa w mieszkaniu',
            'epoxy_wall' => 'Powłoka epoksydowa na ścianie',
            'epoxy_industrial' => 'Przemysłowa podłoga epoksydowa',
            'epoxy_kitchen' => 'Podłoga epoksydowa w kuchni',
            'epoxy_workshop' => 'Podłoga epoksydowa w warsztacie',
            'epoxy_bathroom' => 'Podłoga epoksydowa w łazience',
            'repair_cracks' => 'Naprawa i uszczelnienie pęknięć',
            'moisture_treatment' => 'Leczenie wilgoci',
            'surface_preparation' => 'Przygotowanie powierzchni',
            'maintenance_service' => 'Konserwacja i inspekcja',
            'emergency_repair' => 'Naprawa awaryjna',
            'consultation' => 'Konsultacja profesjonalna'
        ];
        
        $serviceName = $serviceNames[$surface] ?? $surface;
        
        // Temat i treść
        $mail->isHTML(true);
        $mail->Subject = 'Nowe zapytanie o wycenę - ' . $serviceName;
        
        $mail->Body = "
        <html>
        <head>
            <meta charset='UTF-8'>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .header { background: #d4af37; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #d4af37; }
                .value { margin-left: 10px; }
            </style>
        </head>
        <body>
            <div class='header'>
                <h2>Nowe zapytanie o wycenę</h2>
                <p>Hydroxy M&S - Formularz kontaktowy</p>
            </div>
            <div class='content'>
                <div class='field'>
                    <span class='label'>Imię i nazwisko:</span>
                    <span class='value'>{$fullName}</span>
                </div>
                <div class='field'>
                    <span class='label'>Email:</span>
                    <span class='value'>{$email}</span>
                </div>
                <div class='field'>
                    <span class='label'>Telefon:</span>
                    <span class='value'>{$phone}</span>
                </div>
                <div class='field'>
                    <span class='label'>Powierzchnia projektu:</span>
                    <span class='value'>{$area} m²</span>
                </div>
                <div class='field'>
                    <span class='label'>Rodzaj usługi:</span>
                    <span class='value'>{$serviceName}</span>
                </div>
                <div class='field'>
                    <span class='label'>Preferowana data rozpoczęcia:</span>
                    <span class='value'>{$date}</span>
                </div>
                " . (!empty($details) ? "<div class='field'>
                    <span class='label'>Szczegóły projektu:</span>
                    <div class='value'>" . nl2br(htmlspecialchars($details)) . "</div>
                </div>" : "") . "
            </div>
        </body>
        </html>
        ";
        
        // Wersja tekstowa
        $mail->AltBody = "Nowe zapytanie o wycenę\n\n" .
                        "Imię i nazwisko: {$fullName}\n" .
                        "Email: {$email}\n" .
                        "Telefon: {$phone}\n" .
                        "Powierzchnia: {$area} m²\n" .
                        "Usługa: {$serviceName}\n" .
                        "Data: {$date}\n" .
                        (!empty($details) ? "Szczegóły: {$details}\n" : "");
        
        $mail->send();
        
        echo json_encode([
            'success' => true,
            'message' => 'Dziękujemy za zapytanie! Skontaktujemy się z Państwem w ciągu 24 godzin.'
        ]);
        
    } catch (Exception $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie lub skontaktować się telefonicznie.',
            'error' => $mail->ErrorInfo ?? $e->getMessage()
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Nieprawidłowa metoda żądania'
    ]);
}
?>
