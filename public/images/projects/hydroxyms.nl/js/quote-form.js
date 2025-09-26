/**
 * Obsługa formularza kontaktowego
 * Hydroxy M&S
 */

class QuoteForm {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        if (!this.form) {
            console.error('Formularz nie został znaleziony:', formSelector);
            return;
        }
        
        this.submitButton = this.form.querySelector('button[type="submit"]');
        
        // Utworzenie kontenera na komunikaty jeśli nie istnieje
        this.createMessageContainer();
        
        this.init();
    }
    
    createMessageContainer() {
        // Sprawdź czy kontener już istnieje
        this.messageContainer = this.form.querySelector('.form-message');
        
        if (!this.messageContainer) {
            // Utwórz kontener na komunikaty
            this.messageContainer = document.createElement('div');
            this.messageContainer.className = 'form-message';
            this.messageContainer.style.cssText = `
                padding: 10px;
                border-radius: 4px;
                margin-bottom: 20px;
                display: none;
            `;
            
            // Wstaw na początku formularza
            this.form.insertBefore(this.messageContainer, this.form.firstChild);
        }
    }
    
    init() {
        // Dodajemy obsługę formularza
        this.addRealTimeValidation();
        this.addErrorContainers();
        
        // Obsługa wysyłania formularza
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }
    

    
    /**
     * Dodanie kontenerów na błędy do każdego pola
     */
    addErrorContainers() {
        const fields = ['fullName', 'email', 'phone', 'area', 'surface', 'date'];
        
        fields.forEach(fieldName => {
            const field = this.form[fieldName];
            if (field && !field.parentNode.querySelector('.field-error')) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'field-error';
                errorDiv.style.cssText = `
                    color: #e74c3c;
                    font-size: 14px;
                    margin-top: 5px;
                    display: none;
                `;
                field.parentNode.appendChild(errorDiv);
            }
        });
    }
    
    /**
     * Obsługa wysyłania formularza
     */
    async handleSubmit(e) {
        e.preventDefault();
        
        // Walidacja po stronie klienta
        if (!this.validateForm()) {
            return;
        }
        
        this.setLoading(true);
        
        try {
            const formData = new FormData(this.form);
            
            const response = await fetch('send.php', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });
            
            const result = await response.json();
            
            if (result.success) {
                this.showMessage(result.message, 'success');
                this.form.reset();
                this.clearErrors();
            } else {
                this.showMessage(result.message, 'error');
                
                // Wyświetlenie błędów walidacji
                if (result.errors) {
                    this.displayValidationErrors(result.errors);
                }
            }
            
        } catch (error) {
            console.error('Błąd:', error);
            this.showMessage('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.', 'error');
        } finally {
            this.setLoading(false);
        }
    }
    
    /**
     * Walidacja formularza po stronie klienta
     */
    validateForm() {
        let isValid = true;
        this.clearErrors();
        
        // Walidacja imienia i nazwiska
        const fullName = this.form.fullName.value.trim();
        if (!fullName) {
            this.showFieldError('fullName', 'Imię i nazwisko jest wymagane');
            isValid = false;
        } else if (fullName.length < 2) {
            this.showFieldError('fullName', 'Imię i nazwisko musi mieć co najmniej 2 znaki');
            isValid = false;
        }
        
        // Walidacja emaila
        const email = this.form.email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            this.showFieldError('email', 'Adres email jest wymagany');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            this.showFieldError('email', 'Nieprawidłowy format adresu email');
            isValid = false;
        }
        
        // Walidacja telefonu
        const phone = this.form.phone.value.trim();
        const phoneRegex = /^[+]?[0-9\s\-\(\)]{9,15}$/;
        if (!phone) {
            this.showFieldError('phone', 'Numer telefonu jest wymagany');
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            this.showFieldError('phone', 'Nieprawidłowy format numeru telefonu');
            isValid = false;
        }
        
        // Walidacja powierzchni
        const area = this.form.area.value.trim();
        if (!area) {
            this.showFieldError('area', 'Powierzchnia projektu jest wymagana');
            isValid = false;
        } else if (isNaN(area) || parseFloat(area) <= 0) {
            this.showFieldError('area', 'Powierzchnia musi być liczbą większą od 0');
            isValid = false;
        }
        
        // Walidacja typu usługi
        const surface = this.form.surface.value;
        if (!surface) {
            this.showFieldError('surface', 'Typ usługi jest wymagany');
            isValid = false;
        }
        
        // Walidacja daty
        const date = this.form.date.value;
        if (!date) {
            this.showFieldError('date', 'Preferowana data rozpoczęcia jest wymagana');
            isValid = false;
        } else {
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                this.showFieldError('date', 'Data nie może być z przeszłości');
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    /**
     * Walidacja w czasie rzeczywistym
     */
    addRealTimeValidation() {
        const fields = ['fullName', 'email', 'phone', 'area', 'surface', 'date'];
        
        fields.forEach(fieldName => {
            const field = this.form[fieldName];
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName);
                });
                
                field.addEventListener('input', () => {
                    this.clearFieldError(fieldName);
                });
            }
        });
    }
    
    /**
     * Walidacja pojedynczego pola
     */
    validateField(fieldName) {
        const field = this.form[fieldName];
        const value = field.value.trim();
        
        switch (fieldName) {
            case 'fullName':
                if (!value) {
                    this.showFieldError(fieldName, 'Imię i nazwisko jest wymagane');
                } else if (value.length < 2) {
                    this.showFieldError(fieldName, 'Imię i nazwisko musi mieć co najmniej 2 znaki');
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    this.showFieldError(fieldName, 'Adres email jest wymagany');
                } else if (!emailRegex.test(value)) {
                    this.showFieldError(fieldName, 'Nieprawidłowy format adresu email');
                }
                break;
                
            case 'phone':
                const phoneRegex = /^[+]?[0-9\s\-\(\)]{9,15}$/;
                if (!value) {
                    this.showFieldError(fieldName, 'Numer telefonu jest wymagany');
                } else if (!phoneRegex.test(value)) {
                    this.showFieldError(fieldName, 'Nieprawidłowy format numeru telefonu');
                }
                break;
                
            case 'area':
                if (!value) {
                    this.showFieldError(fieldName, 'Powierzchnia projektu jest wymagana');
                } else if (isNaN(value) || parseFloat(value) <= 0) {
                    this.showFieldError(fieldName, 'Powierzchnia musi być liczbą większą od 0');
                }
                break;
        }
    }
    
    /**
     * Wyświetlenie błędu pola
     */
    showFieldError(fieldName, message) {
        const field = this.form[fieldName];
        const errorElement = field.parentNode.querySelector('.field-error');
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        field.style.borderColor = '#e74c3c';
    }
    
    /**
     * Usunięcie błędu pola
     */
    clearFieldError(fieldName) {
        const field = this.form[fieldName];
        const errorElement = field.parentNode.querySelector('.field-error');
        
        if (errorElement) {
            errorElement.style.display = 'none';
        }
        
        field.style.borderColor = '';
    }
    
    /**
     * Wyświetlenie błędów walidacji z serwera
     */
    displayValidationErrors(errors) {
        Object.keys(errors).forEach(fieldName => {
            this.showFieldError(fieldName, errors[fieldName]);
        });
    }
    
    /**
     * Usunięcie wszystkich błędów
     */
    clearErrors() {
        const errorElements = this.form.querySelectorAll('.field-error');
        errorElements.forEach(element => {
            element.style.display = 'none';
        });
        
        const fields = this.form.querySelectorAll('input, select, textarea');
        fields.forEach(field => {
            field.style.borderColor = '';
        });
    }
    
    /**
     * Wyświetlenie wiadomości
     */
    showMessage(message, type) {
        if (type === 'success') {
            // Wyświetl modal sukcesu
            const successModal = document.getElementById('successModal');
            if (successModal) {
                successModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        } else {
            // Wyświetl komunikat błędu w kontenerze
            if (this.messageContainer) {
                this.messageContainer.textContent = message;
                this.messageContainer.className = `form-message ${type}`;
                
                this.messageContainer.style.cssText = `
                    padding: 10px;
                    border-radius: 4px;
                    margin-bottom: 20px;
                    display: block;
                    background-color: #f8d7da;
                    color: #721c24;
                    border: 1px solid #f5c6cb;
                `;
            }
        }
    }
    
    /**
     * Ustawienie stanu ładowania
     */
    setLoading(loading) {
        if (loading) {
            this.submitButton.disabled = true;
            const btnText = this.submitButton.querySelector('.btn-text');
            if (btnText) {
                btnText.textContent = 'Wysyłanie...';
            }
        } else {
            this.submitButton.disabled = false;
            const btnText = this.submitButton.querySelector('.btn-text');
            if (btnText) {
                btnText.textContent = 'Request Quote';
            }
        }
    }
}

// Udostępnienie klasy globalnie
window.QuoteForm = QuoteForm;

// Inicjalizacja jest obsługiwana przez Contact.js