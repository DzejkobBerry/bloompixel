// Skrypt obsługujący formularz kontaktowy z Formspree
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Wyświetl animację ładowania
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Wysyłanie...';
            submitButton.disabled = true;
            
            // Zbierz dane formularza
            const formData = new FormData(contactForm);
            
            // Wyślij dane do Formspree
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Wystąpił błąd podczas wysyłania formularza.');
                }
            })
            .then(data => {
                // Sukces - wyświetl komunikat
                showFormMessage('success', 'Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.');
                
                // Resetuj formularz
                contactForm.reset();
            })
            .catch(error => {
                // Błąd - wyświetl komunikat
                showFormMessage('error', error.message || 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.');
            })
            .finally(() => {
                // Przywróć oryginalny tekst przycisku
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }
    
    // Funkcja do wyświetlania komunikatów
    function showFormMessage(type, message) {
        // Usuń istniejące komunikaty
        const existingMessages = document.querySelectorAll('.form-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Utwórz nowy element komunikatu
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type === 'success' ? 'form-message-success' : 'form-message-error'}`;
        messageElement.innerHTML = `
            <div class="message-icon">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            </div>
            <div class="message-content">
                <p>${message}</p>
            </div>
            <button class="message-close"><i class="fas fa-times"></i></button>
        `;
        
        // Dodaj komunikat przed formularzem
        contactForm.parentNode.insertBefore(messageElement, contactForm);
        
        // Dodaj obsługę przycisku zamykania
        const closeButton = messageElement.querySelector('.message-close');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                messageElement.remove();
            });
        }
        
        // Automatycznie ukryj komunikat po 5 sekundach (tylko dla sukcesu)
        if (type === 'success') {
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.classList.add('fade-out');
                    setTimeout(() => {
                        if (messageElement.parentNode) {
                            messageElement.remove();
                        }
                    }, 500);
                }
            }, 5000);
        }
    }
});