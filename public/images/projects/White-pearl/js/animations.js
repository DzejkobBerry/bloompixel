/**
 * White Pearl - Skrypty animacji
 * Autor: Maciej Nowak
 * Data: 2023
 */

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initCounterAnimations();
    initHeroTextAnimation();
});

// Animacje przy przewijaniu
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fadeIn, .fadeInUp, .fadeInDown, .fadeInLeft, .fadeInRight');
    
    // Funkcja sprawdzająca czy element jest widoczny
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Funkcja animująca elementy
    function animateElements() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }
    
    // Wywołanie animacji przy załadowaniu i przewijaniu
    animateElements();
    window.addEventListener('scroll', animateElements);
    window.addEventListener('resize', animateElements);
}

// Animacje liczników
function initCounterAnimations() {
    const counters = document.querySelectorAll('.counter-number, .achievement-number');
    const speed = 200; // Szybkość animacji (ms)
    
    function animateCounter() {
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0 && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                const increment = Math.ceil(target / (2000 / speed));
                
                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        counter.innerText = count;
                        setTimeout(updateCount, speed);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                updateCount();
            }
        });
    }
    
    // Wywołanie animacji przy przewijaniu
    window.addEventListener('scroll', animateCounter);
    // Wywołanie animacji przy załadowaniu
    setTimeout(animateCounter, 500);
}

// Animacja tekstu w sekcji hero
function initHeroTextAnimation() {
    const textAnimation = document.getElementById('heroTextAnimation');
    
    if (textAnimation) {
        const textItems = textAnimation.querySelectorAll('span');
        let currentIndex = 0;
        
        // Ukryj wszystkie elementy oprócz pierwszego
        textItems.forEach((item, index) => {
            if (index !== 0) {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            } else {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
        
        // Funkcja zmieniająca tekst
        function changeText() {
            // Ukryj aktualny tekst
            textItems[currentIndex].style.opacity = '0';
            textItems[currentIndex].style.transform = 'translateY(-20px)';
            
            // Przejdź do następnego tekstu
            currentIndex = (currentIndex + 1) % textItems.length;
            
            // Pokaż następny tekst
            setTimeout(() => {
                textItems.forEach((item, index) => {
                    if (index === currentIndex) {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                    }
                });
            }, 500);
        }
        
        // Uruchom animację co 4 sekundy
        setInterval(changeText, 4000);
    }
}

// Funkcja do eleganckiej animacji hero title
function initHeroTitleAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.classList.add('hero-title-animated');
        
        // Po zakończeniu fade-in, dodaj klasę loaded dla ciągłych animacji
        setTimeout(() => {
            heroTitle.classList.add('loaded');
        }, 2000); // 0.3s delay + 1.5s fade-in + 0.2s buffer
    }
}

// Dodaj na końcu pliku animations.js

// Animacje dla Timeline
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        timelineItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8) {
                // Dodaj opóźnienie dla każdego kolejnego elementu
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 200);
            }
        });
    }
    
    // Dodaj klasę dla animacji przy przewijaniu
    window.addEventListener('scroll', animateTimeline);
    // Wywołaj animację przy załadowaniu
    setTimeout(animateTimeline, 500);
}

// Rozszerzona animacja liczników
function enhancedCounterAnimations() {
    const counterItems = document.querySelectorAll('.counter-item');
    
    function animateCounterItems() {
        counterItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8 && !item.classList.contains('animated')) {
                item.classList.add('animated');
                // Dodaj opóźnienie dla każdego kolejnego elementu
                setTimeout(() => {
                    item.classList.add('visible');
                    // Dodaj efekt fali
                    const wave = document.createElement('div');
                    wave.classList.add('counter-wave');
                    item.appendChild(wave);
                    setTimeout(() => {
                        wave.remove();
                    }, 2000);
                }, index * 150);
            }
        });
    }
    
    // Wywołaj animację przy przewijaniu
    window.addEventListener('scroll', animateCounterItems);
    // Wywołaj animację przy załadowaniu
    setTimeout(animateCounterItems, 800);
}

// Animacje dla sekcji usług
// Animacje dla sekcji usług
function initServicesAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceIcons = document.querySelectorAll('.service-icon i');
    
    // Dodaj klasę float do ikon
    serviceIcons.forEach(icon => {
        icon.classList.add('icon-float');
    });
    
    // Funkcja animująca karty usług przy przewijaniu
    function animateServiceCards() {
        serviceCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.9 && !card.classList.contains('animated')) {
                card.classList.add('animated');
                // Dodaj opóźnienie dla każdego kolejnego elementu
                setTimeout(() => {
                    card.classList.add('service-card-animation');
                    
                    // Dodaj efekt fali
                    setTimeout(() => {
                        const wave = document.createElement('div');
                        wave.classList.add('service-wave');
                        card.appendChild(wave);
                        setTimeout(() => {
                            wave.remove();
                        }, 1500);
                    }, 300);
                    
                }, index * 150);
            }
        });
    }
    
    // Usunięto efekt fali przy najechaniu na karty
    
    // Wywołaj animację przy przewijaniu
    window.addEventListener('scroll', animateServiceCards);
    // Wywołaj animację przy załadowaniu
    setTimeout(animateServiceCards, 500);
}

// Dodaj wywołanie nowej funkcji w DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Istniejące wywołania
    initScrollAnimations();
    initCounterAnimations();
    initHeroTextAnimation();
    initHeroTitleAnimation();
    initTimelineAnimations();
    enhancedCounterAnimations();
    
    // Nowe wywołanie
    initServicesAnimations();
});