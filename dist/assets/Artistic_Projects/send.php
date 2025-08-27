<?php
// Konfiguracja
$to = "Artisticprojectsnl@gmail.com";
$subject = "Nowa wiadomość ze strony kontaktowej";

// Funkcja do czyszczenia danych wejściowych
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Sprawdzenie czy formularz został wysłany
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobranie i czyszczenie danych z formularza
    $name = clean_input($_POST["name"]);
    $email = clean_input($_POST["email"]);
    $phone = clean_input($_POST["phone"]);
    $subject = clean_input($_POST["subject"]);
    $service = clean_input($_POST["service"]);
    $message = clean_input($_POST["message"]);
    $source = clean_input($_POST["source"]);

    // Walidacja danych
    $errors = array();

    if (empty($name)) {
        $errors[] = "Imię i nazwisko jest wymagane";
    }

    if (empty($email)) {
        $errors[] = "Adres e-mail jest wymagany";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Nieprawidłowy format adresu e-mail";
    }

    if (empty($subject)) {
        $errors[] = "Temat wiadomości jest wymagany";
    }

    if (empty($service)) {
        $errors[] = "Wybierz usługę";
    }

    if (empty($message)) {
        $errors[] = "Wiadomość jest wymagana";
    }

    // Jeśli nie ma błędów, wyślij e-mail
    if (empty($errors)) {
        // Przygotowanie treści e-maila
        $email_content = "Imię i nazwisko: $name\n";
        $email_content .= "E-mail: $email\n";
        if (!empty($phone)) {
            $email_content .= "Telefon: $phone\n";
        }
        $email_content .= "Temat: $subject\n";
        $email_content .= "Usługa: $service\n";
        if (!empty($source)) {
            $email_content .= "Źródło: $source\n";
        }
        $email_content .= "\nWiadomość:\n$message\n";

        // Nagłówki e-maila
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Wysłanie e-maila
        if (mail($to, $subject, $email_content, $headers)) {
            // Sukces
            $response = array(
                "status" => "success",
                "message" => "Dziękujemy za wiadomość! Skontaktujemy się z Tobą najszybciej jak to możliwe."
            );
        } else {
            // Błąd wysyłania
            $response = array(
                "status" => "error",
                "message" => "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później."
            );
        }
    } else {
        // Błędy walidacji
        $response = array(
            "status" => "error",
            "message" => "Proszę poprawić następujące błędy:",
            "errors" => $errors
        );
    }

    // Zwróć odpowiedź w formacie JSON
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?> 