/**
 * MMK AUTO REFRESH - Walidacja formularza
 * Autor: Maciej Nowak
 * Data: 2023
 */

document.addEventListener('DOMContentLoaded', function() {
    initFormValidation();
});

function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ukryj komunikaty
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
            
            // Pobierz pola formularza
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            // Usuń lub zakomentuj tę linię
            // const vehicleType = document.getElementById('vehicleType');
            const service = document.getElementById('service');
            const gdpr = document.getElementById('gdpr');
            
            // Walidacja pól
            let isValid = true;
            
            // Imię i nazwisko
            if (!validateField(name, isNotEmpty)) {
                isValid = false;
            }
            
            // Email
            if (!validateField(email, isValidEmail)) {
                isValid = false;
            }
            
            // Telefon
            if (!validateField(phone, isValidPhone)) {
                isValid = false;
            }
            
            // Usuń lub zakomentuj ten blok walidacji
            // Typ pojazdu
            // if (!validateField(vehicleType, isNotEmpty)) {
            //     isValid = false;
            // }
            
            // Usługa
            if (!validateField(service, isNotEmpty)) {
                isValid = false;
            }
            
            // RODO
            if (!gdpr.checked) {
                showError(gdpr, 'Zgoda na przetwarzanie danych jest wymagana');
                isValid = false;
            } else {
                hideError(gdpr);
            }
            
            // Jeśli formularz jest poprawny, wyślij dane
            if (isValid) {
                // Tutaj normalnie byłby kod do wysyłki formularza
                // Dla celów demonstracyjnych pokazujemy komunikat sukcesu
                simulateFormSubmission(contactForm);
            }
        });
        
        // Dodaj walidację na bieżąco dla pól
        const formFields = contactForm.querySelectorAll('input, select, textarea');
        formFields.forEach(field => {
            field.addEventListener('blur', function() {
                if (field.id === 'email') {
                    validateField(field, isValidEmail);
                } else if (field.id === 'phone') {
                    validateField(field, isValidPhone);
                } else if (field.required) {
                    validateField(field, isNotEmpty);
                }
            });
            
            field.addEventListener('input', function() {
                hideError(field);
            });
        });
    }
}

// Funkcje walidacyjne
function isNotEmpty(value) {
    return value.trim() !== '';
}

function isValidEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}

function isValidPhone(value) {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/;
    return phoneRegex.test(value.trim());
}

// Funkcje pomocnicze
function validateField(field, validationFunction) {
    if (!validationFunction(field.value)) {
        let errorMessage = 'To pole jest wymagane';
        
        if (field.id === 'email' && field.value.trim() !== '') {
            errorMessage = 'Wprowadź poprawny adres email';
        } else if (field.id === 'phone' && field.value.trim() !== '') {
            errorMessage = 'Wprowadź poprawny numer telefonu';
        }
        
        showError(field, errorMessage);
        return false;
    } else {
        hideError(field);
        return true;
    }
}

function showError(field, message) {
    field.classList.add('error');
    
    // Sprawdź, czy komunikat błędu już istnieje
    let errorElement = field.parentElement.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentElement.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(field) {
    field.classList.remove('error');
    
    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

function simulateFormSubmission(form) {
    const submitButton = form.querySelector('.btn-submit');
    const formModal = document.getElementById('formModal');
    const modalName = document.getElementById('modalName');
    const modalEmail = document.getElementById('modalEmail');
    const modalService = document.getElementById('modalService');
    const formModalClose = document.getElementById('formModalClose');
    const originalText = submitButton.textContent;
    
    // Pobierz wartości z formularza
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const serviceValue = document.getElementById('service').value;
    
    // Zmień tekst przycisku i dodaj klasę ładowania
    submitButton.textContent = 'Wysyłanie...';
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    // Symulacja opóźnienia sieciowego
    setTimeout(() => {
        // Przywróć oryginalny stan przycisku
        submitButton.textContent = originalText;
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        
        // Wypełnij dane w modalu
        modalName.textContent = nameValue;
        modalEmail.textContent = emailValue;
        modalService.textContent = serviceValue;
        
        // Pokaż modal
        formModal.classList.add('show');
        
        // Zresetuj formularz
        form.reset();
        
        // Obsługa zamknięcia modalu
        formModalClose.addEventListener('click', function() {
            formModal.classList.remove('show');
        });
        
        // Zamknij modal po kliknięciu poza nim
        formModal.addEventListener('click', function(e) {
            if (e.target === formModal) {
                formModal.classList.remove('show');
            }
        });
    }, 2000);
}

// Dodaj na końcu pliku
document.addEventListener('DOMContentLoaded', function() {
    // Istniejący kod inicjalizacji
    
    // Dodaj obsługę klawisza Escape do zamykania modalu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const formModal = document.getElementById('formModal');
            if (formModal.classList.contains('show')) {
                formModal.classList.remove('show');
            }
        }
    });
});