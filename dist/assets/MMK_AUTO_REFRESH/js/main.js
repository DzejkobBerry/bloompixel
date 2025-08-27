/**
 * MMK AUTO REFRESH - Główny plik JavaScript
 * Autor: Maciej Nowak
 * Data: 2023
 */

// Ukryj preloader po załadowaniu strony
// Obsługa preloadera z animacją ładowania
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const loadingBar = document.getElementById('loading-bar');
    const loadingPercentage = document.getElementById('loading-percentage');
    
    if (preloader) {
        // Symulacja ładowania
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress > 100) progress = 100;
            
            loadingBar.style.width = `${progress}%`;
            loadingPercentage.textContent = `${Math.round(progress)}%`;
            
            if (progress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    preloader.classList.add('hide');
                }, 500);
            }
        }, 200);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicjalizacja wszystkich komponentów
    initNavigation();
    initScrollToSection();
    initBackToTop();
    initParticles();
    initVideoBackground();
    initScrollSpy(); // Dodana nowa funkcja
});

// Obsługa nawigacji mobilnej
// Obsługa nawigacji mobilnej
// Obsługa nawigacji mobilnej
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navItems = document.querySelectorAll('.nav-item');
    const header = document.querySelector('.header');
    
    // Funkcja do ustawiania stanu menu w zależności od szerokości okna
    function setMenuState() {
        if (window.innerWidth <= 576) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navMenu.style.display = 'none';
            document.body.classList.remove('no-scroll');
        } else {
            navMenu.style.display = 'flex';
        }
    }
    
    // Ustaw początkowy stan menu
    setMenuState();
    
    // Nasłuchuj na zmianę rozmiaru okna
    window.addEventListener('resize', setMenuState);
    
    // Dodaj indeksy do elementów menu dla opóźnionej animacji
    navItems.forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Dodaj jawne ustawienie stylu display
            if (navMenu.classList.contains('active')) {
                navMenu.style.display = 'flex';
            } else {
                // Opóźnij ukrycie menu, aby animacja mogła się zakończyć
                setTimeout(() => {
                    if (!navMenu.classList.contains('active')) {
                        navMenu.style.display = 'none';
                    }
                }, 400); // Czas powinien odpowiadać czasowi trwania animacji
            }
            
            document.body.classList.toggle('no-scroll');
        });
        
        // Zamykanie menu po kliknięciu w link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
                
                // Dodaj opóźnione ukrycie menu po kliknięciu w link
                setTimeout(() => {
                    if (!navMenu.classList.contains('active') && window.innerWidth <= 576) {
                        navMenu.style.display = 'none';
                    }
                }, 400);
            });
        });
    }
    
    // Dodanie efektu przyklejania nawigacji
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Płynne przewijanie do sekcji po kliknięciu w link
function initScrollToSection() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Przycisk powrotu na górę strony
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show'); // Zmieniono z 'visible' na 'show'
            } else {
                backToTopButton.classList.remove('show'); // Zmieniono z 'visible' na 'show'
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            // Znajdź sekcję hero
            const heroSection = document.getElementById('home');
            
            if (heroSection) {
                // Przewiń do sekcji hero
                heroSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Jeśli nie znaleziono sekcji hero, przewiń na górę strony
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Inicjalizacja cząsteczek w tle
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
        // Tworzenie cząsteczek
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Losowe pozycjonowanie
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const size = Math.random() * 5 + 2;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
}

// Obsługa wideo w tle
function initVideoBackground() {
    const heroVideo = document.getElementById('heroVideo');
    const opinionsVideo = document.getElementById('opinionsVideo');
    
    // Funkcja do sprawdzania, czy urządzenie jest mobilne
    function isMobileDevice() {
        return (window.innerWidth <= 768) || 
               ('ontouchstart' in window) || 
               (navigator.maxTouchPoints > 0);
    }
    
    // Optymalizacja wideo dla urządzeń mobilnych
    if (heroVideo) {
        if (isMobileDevice()) {
            // Użyj wersji o niższej jakości dla urządzeń mobilnych
            heroVideo.setAttribute('playsinline', '');
            heroVideo.setAttribute('preload', 'metadata');
            
            // Opóźnij ładowanie wideo na urządzeniach mobilnych
            window.addEventListener('load', function() {
                setTimeout(() => {
                    heroVideo.play();
                }, 1000);
            });
        } else {
            heroVideo.play();
        }
    }
    
    // Podobna logika dla innych wideo
    if (opinionsVideo) {
        // Podobna implementacja
    }
}

// Nowa funkcja - ScrollSpy do śledzenia aktywnych sekcji
function initScrollSpy() {
    console.log('Inicjalizacja ScrollSpy...');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log('Znalezione sekcje:', sections.length);
    console.log('Znalezione linki nawigacyjne:', navLinks.length);
    
    // Wypisz wszystkie sekcje i ich ID dla debugowania
    sections.forEach(section => {
        console.log('Sekcja ID:', section.id);
    });
    
    // Wypisz wszystkie linki i ich href dla debugowania
    navLinks.forEach(link => {
        console.log('Link href:', link.getAttribute('href'));
    });
    
    function highlightNavLink() {
        // Dodajemy offset dla lepszego działania
        const scrollPosition = window.scrollY + 100;
        
        // Iterujemy przez wszystkie sekcje, aby znaleźć aktualnie widoczną
        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector('.header').offsetHeight;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            console.log(`Sprawdzam sekcję ${sectionId}: pozycja=${scrollPosition}, sectionTop=${sectionTop}, sectionHeight=${sectionHeight}`);
            
            // Sprawdzamy, czy sekcja jest aktualnie widoczna
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                console.log(`Aktywna sekcja: ${sectionId}`);
                
                // Usuwamy klasę 'active' ze wszystkich linków
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Dodajemy klasę 'active' do odpowiedniego linku
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    console.log(`Aktywuję link: ${activeLink.getAttribute('href')}`);
                    activeLink.classList.add('active');
                } else {
                    console.log(`Nie znaleziono linku dla sekcji #${sectionId}`);
                }
            }
        });
    }
    
    // Wywołujemy funkcję przy przewijaniu
    window.addEventListener('scroll', highlightNavLink);
    
    // Wywołujemy funkcję przy załadowaniu strony
    highlightNavLink();
}

// Efekt cząsteczek dla sekcji usług
function initServicesParticles() {
    const servicesSection = document.getElementById('services');
    if (!servicesSection) return;
    
    // Utwórz kontener dla cząsteczek
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'services-particles-container';
    servicesSection.appendChild(particlesContainer);
    
    // Utwórz cząsteczki
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'services-particle';
        
        // Losowe pozycje i rozmiary
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Dodaj wywołanie funkcji w DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Istniejące wywołania funkcji
    // ...
    
    // Nowe wywołanie
    initServicesParticles();
});

// Obsługa przycisku galerii
document.addEventListener('DOMContentLoaded', function() {
    const galleryButton = document.getElementById('galleryButton');
    
    if (galleryButton) {
        galleryButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Zmiana selektora, aby pasował do HTML
            const firstGalleryImage = document.querySelector('[data-lightbox="gallery-preview"]');
            if (firstGalleryImage) {
                firstGalleryImage.click();
            } else {
                // Jeśli nie znaleziono zdjęć, przekieruj do sekcji galerii
                window.location.href = '#gallery';
            }
        });
    }
});
// Dodaj nasłuchiwanie na zmianę rozmiaru okna
window.addEventListener('resize', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (window.innerWidth > 576) {
        // Na większych ekranach menu powinno być widoczne
        navMenu.style.display = 'flex';
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('no-scroll');
    } else if (!navMenu.classList.contains('active')) {
        // Na mniejszych ekranach menu powinno być ukryte, jeśli nie jest aktywne
        navMenu.style.display = 'none';
    }
});

// Dodaj na końcu pliku main.js

// Optymalizacja wideo dla urządzeń mobilnych
// Funkcja do tworzenia setek wędrujących kuleczek na mobile - ZWIĘKSZONA DO 12000!
function initMobileParticles() {
    // Sprawdź czy to urządzenie mobilne
    if (window.innerWidth > 768) return;
    
    const heroSection = document.querySelector('.hero');
    const particlesContainer = heroSection.querySelector('.particles-container');
    
    if (!particlesContainer) return;
    
    // Usuń wszystkie istniejące cząsteczki
    particlesContainer.innerHTML = '';
    
    // ABSOLUTNIE EKSTREMALNA liczba cząsteczek - zwiększona do 12000! (x2)
    const particleCount = 12000;
    
    // W funkcji createParticle, zaktualizuj tablice:
    const animations = [
        'floatUp1', 'floatUp2', 'floatUp3', 'floatUp4', 'floatUp5', 'floatUp6',
        'floatDiagonal1', 'floatDiagonal2', 'floatDiagonal3', 'floatDiagonal4'
    ];
    
    const sizes = ['size-xs', 'size-sm', 'size-md', 'size-lg', 'size-xl', 'size-xxl'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = `mobile-particle ${sizes[Math.floor(Math.random() * sizes.length)]}`;
        
        // Rozszerzone pozycje startowe - cząsteczki mogą startować z każdej strony
        const startSide = Math.random();
        let posX, posY;
        
        if (startSide < 0.4) {
            // 40% cząsteczek startuje z dołu
            posX = Math.random() * 120 - 10; // -10% do 110%
            posY = 100 + Math.random() * 50; // Dalej poza ekranem
        } else if (startSide < 0.6) {
            // 20% z lewej strony
            posX = -20 - Math.random() * 20;
            posY = Math.random() * 120 - 10;
        } else if (startSide < 0.8) {
            // 20% z prawej strony
            posX = 100 + Math.random() * 40;
            posY = Math.random() * 120 - 10;
        } else {
            // 20% z góry
            posX = Math.random() * 120 - 10;
            posY = -20 - Math.random() * 30;
        }
        
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Losowa animacja z różnymi prędkościami
        const animation = animations[Math.floor(Math.random() * animations.length)];
        const duration = Math.random() * 40 + 1; // 1-41s (maksymalna różnorodność)
        const delay = Math.random() * 5; // 0-5s opóźnienia
        
        particle.style.animation = `${animation} ${duration}s linear infinite`;
        particle.style.animationDelay = `${delay}s`;
        
        // Dodaj losową rotację dla większej różnorodności
        const rotation = Math.random() * 360;
        particle.style.transform = `rotate(${rotation}deg)`;
        
        particlesContainer.appendChild(particle);
        
        // Usuń cząsteczkę po zakończeniu animacji i utwórz nową
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
                // Natychmiast utwórz nową cząsteczkę
                setTimeout(createParticle, Math.random() * 150);
            }
        }, (duration + delay) * 1000);
    }
    
    // Utwórz początkowe cząsteczki z bardzo krótkimi opóźnieniami
    for (let i = 0; i < particleCount; i++) {
        setTimeout(createParticle, Math.random() * 15000); // Rozłóż w czasie 15s
    }
    
    // MEGA HYPER częste tworzenie nowych cząsteczek - co 10ms!
    const megaHyperInterval = setInterval(() => {
        if (window.innerWidth <= 768 && particlesContainer.children.length < particleCount * 0.6) {
            for (let i = 0; i < 8; i++) {
                createParticle(); // Utwórz osiem naraz
            }
        }
    }, 10);
    
    // HYPER częste tworzenie nowych cząsteczek - co 12ms!
    const hyperFastInterval = setInterval(() => {
        if (window.innerWidth <= 768 && particlesContainer.children.length < particleCount * 0.8) {
            for (let i = 0; i < 10; i++) {
                createParticle(); // Utwórz dziesięć naraz
            }
        }
    }, 12);
    
    // ULTRA częste tworzenie nowych cząsteczek - co 15ms!
    const ultraFastInterval = setInterval(() => {
        if (window.innerWidth <= 768 && particlesContainer.children.length < particleCount) {
            for (let i = 0; i < 12; i++) {
                createParticle(); // Utwórz dwanaście naraz
            }
        }
    }, 15);
    
    // BARDZO częste tworzenie nowych cząsteczek - co 20ms!
    const fastInterval = setInterval(() => {
        if (window.innerWidth <= 768 && particlesContainer.children.length < particleCount * 1.2) {
            for (let i = 0; i < 15; i++) {
                createParticle(); // Utwórz piętnaście naraz
            }
        }
    }, 20);
    
    // Dodatkowy interval dla jeszcze większej gęstości - co 25ms
    const mediumInterval = setInterval(() => {
        if (window.innerWidth <= 768 && particlesContainer.children.length < particleCount * 1.5) {
            for (let i = 0; i < 20; i++) {
                createParticle(); // Utwórz dwadzieścia naraz
            }
        }
    }, 25);
    
    // Ostatni interval dla maksymalnej gęstości - co 30ms
    const slowInterval = setInterval(() => {
        if (window.innerWidth <= 768 && particlesContainer.children.length < particleCount * 2) {
            for (let i = 0; i < 25; i++) {
                createParticle(); // Utwórz dwadzieścia pięć naraz
            }
        }
    }, 30);
    
    // Zapisz intervaly do window dla możliwości wyczyszczenia
    window.particleIntervals = [megaHyperInterval, hyperFastInterval, ultraFastInterval, fastInterval, mediumInterval, slowInterval];
    
    // Dodaj obsługę czyszczenia intervalów przy zmianie rozmiaru okna
    const resizeHandler = () => {
        if (window.innerWidth > 768 && window.particleIntervals) {
            window.particleIntervals.forEach(interval => clearInterval(interval));
            window.particleIntervals = [];
            particlesContainer.innerHTML = '';
        }
    };
    
    window.addEventListener('resize', resizeHandler);
}

// Dodaj do istniejącej funkcji DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Istniejące funkcje...
    optimizeVideoForMobile();
});

// Obsługa zmiany orientacji
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        optimizeVideoForMobile();
    }, 500);
});

// Poprawka dla wysokości viewport na urządzeniach mobilnych
function setMobileVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Wywołaj przy załadowaniu i zmianie orientacji
window.addEventListener('load', setMobileVH);
window.addEventListener('resize', setMobileVH);
window.addEventListener('orientationchange', () => {
    setTimeout(setMobileVH, 100);
});

// Poprawiona funkcja animacji tekstu Hero na mobilnych
function optimizeHeroAnimationForMobile() {
    const heroTextAnimation = document.getElementById('heroTextAnimation');
    if (!heroTextAnimation) return;
    
    const spans = heroTextAnimation.querySelectorAll('span');
    if (spans.length === 0) return;
    
    let currentIndex = 0;
    let animationInterval;
    
    // Funkcja do pokazania konkretnego tekstu
    function showText(index) {
        spans.forEach((span, i) => {
            span.classList.remove('active');
            if (i === index) {
                span.classList.add('active');
            }
        });
    }
    
    // Funkcja do przejścia do następnego tekstu
    function showNextText() {
        currentIndex = (currentIndex + 1) % spans.length;
        showText(currentIndex);
    }
    
    // Inicjalizacja - pokaż pierwszy tekst
    showText(0);
    
    // Wyczyść poprzedni interval jeśli istnieje
    if (animationInterval) {
        clearInterval(animationInterval);
    }
    
    // Ustaw nowy interval
    if (window.innerWidth <= 768) {
        // Na mobilnych wolniejsza animacja - co 5 sekund
        animationInterval = setInterval(showNextText, 5000);
    } else {
        // Na desktop szybsza animacja - co 4 sekundy
        animationInterval = setInterval(showNextText, 4000);
    }
    
    // Zapisz interval do window dla możliwości wyczyszczenia
    window.heroAnimationInterval = animationInterval;
}

// Dodaj do DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Istniejące funkcje...
    optimizeHeroAnimationForMobile();
});

// Dodaj obsługę zmiany rozmiaru okna
window.addEventListener('resize', function() {
    // Wyczyść poprzedni interval
    if (window.heroAnimationInterval) {
        clearInterval(window.heroAnimationInterval);
    }
    
    // Ponownie zainicjalizuj animację
    setTimeout(optimizeHeroAnimationForMobile, 300);
});