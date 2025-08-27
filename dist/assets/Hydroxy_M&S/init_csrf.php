<?php
/**
 * Inicjalizacja CSRF token
 * Dołącz ten plik przed wyświetleniem formularza
 */
session_start();

if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

function getCSRFToken() {
    return $_SESSION['csrf_token'];
}
?>