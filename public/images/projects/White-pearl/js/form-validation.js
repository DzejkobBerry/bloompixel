function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Zawsze blokuj domyślne wysyłanie
            
            // Ukryj komunikaty
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
            
            // Pobierz pola formularza
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const service = document.getElementById('service');
            const message = document.getElementById('message');
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
            
            // Usługa
            if (!validateField(service, isNotEmpty)) {
                isValid = false;
            }
            
            // GDPR
            if (!gdpr.checked) {
                showError(gdpr, 'Musisz zaakceptować przetwarzanie danych osobowych');
                isValid = false;
            } else {
                hideError(gdpr);
            }
            
            // Jeśli walidacja nie przeszła, zatrzymaj wysyłanie
            if (!isValid) {
                errorMessage.style.display = 'block';
                return false;
            }
            
            // Pokaż komunikat o wysyłaniu
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Wysyłanie...';
            submitButton.disabled = true;
            
            // Przygotuj dane formularza
            const formData = new FormData(contactForm);
            
            // Wyślij formularz przez AJAX
            fetch('https://formspree.io/f/mblknrpv', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Sukces - pokaż modal
                    showSuccessModal(name.value, email.value, service.value);
                    contactForm.reset(); // Wyczyść formularz
                } else {
                    throw new Error('Błąd wysyłania formularza');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                errorMessage.style.display = 'block';
            })
            .finally(() => {
                // Przywróć przycisk
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
}

// Funkcja do pokazania modala sukcesu
function showSuccessModal(name, email, service) {
    const modal = document.getElementById('formModal');
    const modalName = document.getElementById('modalName');
    const modalEmail = document.getElementById('modalEmail');
    const modalService = document.getElementById('modalService');
    const closeButton = document.getElementById('formModalClose');
    
    // Wypełnij dane w modalu
    if (modalName) modalName.textContent = name;
    if (modalEmail) modalEmail.textContent = email;
    if (modalService) modalService.textContent = service;
    
    // Pokaż modal
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    // Obsługa zamykania modala
    if (closeButton) {
        closeButton.addEventListener('click', closeSuccessModal);
    }
    
    // Zamknij modal po kliknięciu w tło
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeSuccessModal();
            }
        });
    }
    
    // Zamknij modal klawiszem Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeSuccessModal();
        }
    });
}

// Funkcja do zamykania modala sukcesu
function closeSuccessModal() {
    const modal = document.getElementById('formModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}