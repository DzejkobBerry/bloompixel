// Funkcja inicjalizująca formularz kontaktowy
export function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        // Dodanie efektów focus dla pól formularza
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            // Efekt focus
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('input-focus');
            });
            
            // Usunięcie efektu po utracie fokusu
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('input-focus');
                
                // Walidacja pola po utracie fokusu
                if (this.value.trim() !== '') {
                    validateField(this);
                }
            });
        });
        
        // Obsługa wysyłania formularza
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Resetowanie statusu formularza
            formStatus.textContent = '';
            formStatus.className = 'form-status';
            
            // Zbieranie danych z formularza
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Walidacja formularza
            if (!validateForm(formData)) {
                return;
            }
            
            // Animacja przycisku podczas wysyłania
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verzenden...';
            submitButton.disabled = true;
            
            // Symulacja wysyłania
            setTimeout(() => {
                // Sukces - wyświetl modal overlay
                showSuccessModal();
                
                // Resetowanie formularza
                contactForm.reset();
                
                // Przywrócenie przycisku
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
}

// Funkcja wyświetlająca modal overlay sukcesu
function showSuccessModal() {
    // Stwórz modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <button class="modal-close" onclick="closeSuccessModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Bericht succesvol verzonden!</h3>
                <p>Bedankt voor uw bericht. We nemen binnen 24 uur contact met u op via het opgegeven e-mailadres.</p>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="closeSuccessModal()">
                        <span>Sluiten</span>
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-secondary" onclick="closeSuccessModal(); scrollToForm()">
                        <span>Nieuw bericht</span>
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Dodaj modal do body
    document.body.appendChild(modalOverlay);
    
    // Animacja pojawiania się
    setTimeout(() => {
        modalOverlay.classList.add('show');
    }, 10);
    
    // Zamknij modal po kliknięciu w overlay
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeSuccessModal();
        }
    });
    
    // Zamknij modal po naciśnięciu ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSuccessModal();
        }
    });
}

// Funkcja zamykająca modal
window.closeSuccessModal = function() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
        }, 300);
    }
};

// Funkcja przewijająca do formularza
window.scrollToForm = function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
        // Resetuj formularz
        contactForm.reset();
        // Usuń wszystkie klasy błędów
        const errorElements = contactForm.querySelectorAll('.input-error');
        errorElements.forEach(element => {
            element.classList.remove('input-error');
        });
    }
};

// Funkcja resetująca formularz (wywoływana przez przycisk w modalu)
window.resetForm = function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.querySelector('.success-message');
    
    // Ukryj modal sukcesu i pokaż formularz
    successMessage.style.display = 'none';
    contactForm.style.display = 'block';
    
    // Resetuj formularz
    contactForm.reset();
    
    // Usuń wszystkie klasy błędów
    const errorElements = contactForm.querySelectorAll('.input-error');
    errorElements.forEach(element => {
        element.classList.remove('input-error');
    });
};

// Funkcja walidująca pojedyncze pole
function validateField(field) {
    let isValid = true;
    const errorClass = 'input-error';
    
    // Usunięcie poprzedniego błędu
    field.parentElement.classList.remove(errorClass);
    
    // Walidacja w zależności od typu pola
    if (field.required && field.value.trim() === '') {
        field.parentElement.classList.add(errorClass);
        isValid = false;
    } else if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            field.parentElement.classList.add(errorClass);
            isValid = false;
        }
    } else if (field.id === 'phone' && field.value.trim() !== '') {
        // Prosta walidacja numeru telefonu (jeśli pole nie jest puste)
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (!phoneRegex.test(field.value)) {
            field.parentElement.classList.add(errorClass);
            isValid = false;
        }
    }
    
    return isValid;
}

// Funkcja walidująca cały formularz
function validateForm(formData) {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const messageField = document.getElementById('message');
    
    let isValid = true;
    
    // Walidacja poszczególnych pól
    if (!validateField(nameField)) isValid = false;
    if (!validateField(emailField)) isValid = false;
    if (phoneField.value.trim() !== '' && !validateField(phoneField)) isValid = false;
    if (!validateField(messageField)) isValid = false;
    
    // Wyświetlenie ogólnego komunikatu o błędzie
    if (!isValid) {
        const formStatus = document.getElementById('formStatus');
        formStatus.textContent = 'Controleer de gemarkeerde velden en probeer het opnieuw.';
        formStatus.className = 'form-status error';
    }
    
    return isValid;
}