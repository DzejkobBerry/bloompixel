// Dodaj tę funkcję do istniejącego pliku animations.js

export function initScrollEffects() {
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Dodaj animację dla sekcji kontaktowej
    const contactItems = document.querySelectorAll('.contact-item');
    const contactMap = document.querySelector('.contact-map');
    const socialIcons = document.querySelectorAll('.social-icon');
    
    // Animacja dla elementów kontaktowych
    if (contactItems.length > 0) {
        contactItems.forEach((item, index) => {
            // Dodanie opóźnienia dla każdego kolejnego elementu
            const delay = index * 100;
            item.style.transitionDelay = `${delay}ms`;
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            // Obserwator przewijania
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, delay);
                        observer.unobserve(item);
                    }
                });
            }, { threshold: 0.2 });
            
            observer.observe(item);
        });
    }
    
    // Animacja dla mapy
    if (contactMap) {
        contactMap.style.opacity = '0';
        contactMap.style.transform = 'translateY(20px)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        contactMap.style.opacity = '1';
                        contactMap.style.transform = 'translateY(0)';
                    }, 500);
                    observer.unobserve(contactMap);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(contactMap);
    }
    
    // Animacja dla ikon społecznościowych
    if (socialIcons.length > 0) {
        socialIcons.forEach((icon, index) => {
            const delay = index * 100 + 300;
            icon.style.opacity = '0';
            icon.style.transform = 'scale(0.5)';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            icon.style.opacity = '1';
                            icon.style.transform = 'scale(1)';
                        }, delay);
                        observer.unobserve(icon);
                    }
                });
            }, { threshold: 0.2 });
            
            observer.observe(icon);
        });
    }
}

// Funkcja inicjalizująca animacje
export function initAnimations() {
    const elementsToAnimateSelector = '.service-card, .project-card, .over-ons-content, .testimonial-card, .contact-item, .contact-form, .contact-header, .social-media';
    
    // Funkcja animująca elementy podczas przewijania
    const animateOnScroll = function() {
        const elements = document.querySelectorAll(elementsToAnimateSelector);
        
        if (elements.length > 0) {
            // NIE ZMIENIAJ STYLÓW PRZYCISKÓW!
            elements.forEach(element => {
                // Pomiń przyciski - nie zmieniaj ich stylów
                if (element.classList.contains('btn') || element.closest('.btn')) {
                    return;
                }
                
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                element.style.visibility = 'visible';
            });
        }
    };
    
    // Wywołanie animacji przy ładowaniu
    setTimeout(() => {
        animateOnScroll();
        window.addEventListener('scroll', animateOnScroll);
        
        // Dodatkowe sprawdzenie dla sekcji kontaktowej
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
            const contactElements = document.querySelectorAll('.contact-info, .contact-header, .contact-items-container, .social-media, .contact-form-container');
            contactElements.forEach(element => {
                // Pomiń przyciski
                if (element.classList.contains('btn') || element.closest('.btn')) {
                    return;
                }
                
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.visibility = 'visible';
            });
        }
    }, 300);
}

// Dodaj tę funkcję na końcu pliku
export function initHeroButtonEffects() {
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    
    heroButtons.forEach(button => {
        // Efekt śledzenia kursora
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', x + 'px');
            button.style.setProperty('--mouse-y', y + 'px');
        });
        
        // Efekt kliknięcia - ripple
        button.addEventListener('click', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: 20px;
                height: 20px;
                margin-left: -10px;
                margin-top: -10px;
                pointer-events: none;
            `;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Dodaj animację ripple do CSS (dodaj to do hero.css)
/*
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
*/