// ===== PRELOADER =====
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.preloader-progress-bar');
    const percentageText = document.querySelector('.preloader-percentage');
    
    if (preloader) {
        // Symulacja ładowania strony z aktualizacją procentów
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 5) + 1;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = `${progress}%`;
            percentageText.textContent = `${progress}%`;
            
            if (progress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    preloader.classList.add('preloader-hide');
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 1000);
                }, 500);
            }
        }, 100);
    }
});

// Inicjalizacja particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#8b5cf6' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#8b5cf6',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });
});

// ===== MOBILE MENU =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle && nav) {
    // Funkcja do tworzenia elementów mobilnego menu
    function createMobileMenuElements() {
        // Sprawdź, czy elementy już istnieją
        if (document.querySelector('.mobile-menu-bottom')) return;
        
        // Utwórz kontener dla elementów na dole menu mobilnego
        const mobileMenuBottom = document.createElement('div');
        mobileMenuBottom.className = 'mobile-menu-bottom';
        
        // Klonuj przycisk kontaktowy
        const ctaButton = document.querySelector('.header-right .cta-button').cloneNode(true);
        ctaButton.className = 'mobile-cta-button';
        
        // Klonuj przełącznik języka
        const langSwitcher = document.querySelector('.header-right .language-switcher').cloneNode(true);
        langSwitcher.className = 'mobile-language-switcher';
        
        // Dodaj ikonę do przełącznika języka w menu mobilnym
        const mobileLangCurrent = langSwitcher.querySelector('.current-lang');
        const mobileLangDropdown = langSwitcher.querySelector('.lang-dropdown');
        
        if (mobileLangCurrent) {
            const langText = mobileLangCurrent.textContent.trim();
            mobileLangCurrent.innerHTML = `<i class="fas fa-globe"></i> ${langText} <i class="fas fa-chevron-down"></i>`;
        }
        
        // Dodaj elementy do kontenera
        mobileMenuBottom.appendChild(ctaButton);
        mobileMenuBottom.appendChild(langSwitcher);
        
        // Dodaj kontener do nawigacji
        nav.appendChild(mobileMenuBottom);
        
        // Dodaj obsługę kliknięć dla przełącznika języka w menu mobilnym
        if (mobileLangCurrent && mobileLangDropdown) {
            // Upewnij się, że dropdown jest domyślnie ukryty
            mobileLangDropdown.classList.remove('active');
            
            mobileLangCurrent.addEventListener('click', function(e) {
                e.stopPropagation();
                mobileLangDropdown.classList.toggle('active');
            });
            
            const mobileLangOptions = langSwitcher.querySelectorAll('.lang-option');
            mobileLangOptions.forEach(option => {
                option.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const lang = this.getAttribute('data-lang');
                    const langText = lang.toUpperCase();
                    
                    mobileLangCurrent.innerHTML = `<i class="fas fa-globe"></i> ${langText} <i class="fas fa-chevron-down"></i>`;
                    
                    mobileLangOptions.forEach(opt => {
                        opt.classList.remove('active');
                    });
                    
                    this.classList.add('active');
                    mobileLangDropdown.classList.remove('active');
                    
                    // Aktualizuj również główny przełącznik języka
                    const mainLangCurrent = document.querySelector('.header-right .current-lang');
                    const mainLangOptions = document.querySelectorAll('.header-right .lang-option');
                    
                    if (mainLangCurrent) {
                        mainLangCurrent.innerHTML = `${langText} <i class="fas fa-chevron-down"></i>`;
                    }
                    
                    if (mainLangOptions) {
                        mainLangOptions.forEach(opt => {
                            opt.classList.remove('active');
                            if (opt.getAttribute('data-lang') === lang) {
                                opt.classList.add('active');
                            }
                        });
                    }
                });
            });
        }
    }
    
    // Funkcja do inicjalizacji rozwijanego menu "Więcej" w menu mobilnym
    function initMobileExpandMore() {
        // Znajdź elementy "więcej" w aktywnym menu mobilnym
        const mobileNav = document.querySelector('.nav.active');
        if (!mobileNav) return;
        
        const expandMore = mobileNav.querySelector('.expand-more');
        const expandDropdown = mobileNav.querySelector('.expand-dropdown');
        const expandTrigger = mobileNav.querySelector('.expand-more-trigger');
        
        if (!expandTrigger || !expandDropdown) return;
        
        // Usuń istniejącą ikonę jeśli istnieje
        const oldIcon = expandTrigger.querySelector('.mobile-expand-icon');
        if (oldIcon) {
            oldIcon.remove();
        }
        
        // Dodaj ikonę strzałki w dół
        const mobileExpandIcon = document.createElement('i');
        mobileExpandIcon.className = 'fas fa-chevron-down mobile-expand-icon';
        expandTrigger.insertBefore(mobileExpandIcon, expandTrigger.firstChild);
        
        // Ukryj dropdown domyślnie
        expandDropdown.style.display = 'none';
        expandDropdown.style.visibility = 'hidden';
        
        // Stwórz nowy element trigger, aby uniknąć duplikacji event listenerów
        const newTrigger = expandTrigger.cloneNode(true);
        expandTrigger.parentNode.replaceChild(newTrigger, expandTrigger);
        
        // Dodaj obsługę kliknięcia
        newTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Efekt kliknięcia
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            // Obsługa otwierania/zamykania menu
            const icon = this.querySelector('.mobile-expand-icon');
            
            if (expandDropdown.style.display === 'none') {
                expandDropdown.style.display = 'block';
                expandDropdown.style.visibility = 'visible';
                if (icon) icon.style.transform = 'rotate(180deg)';
            } else {
                expandDropdown.style.display = 'none';
                expandDropdown.style.visibility = 'hidden';
                if (icon) icon.style.transform = 'rotate(0)';
            }
        });
    }
    
    // Funkcja do usuwania elementów mobilnego menu
    function removeMobileMenuElements() {
        const mobileMenuBottom = document.querySelector('.mobile-menu-bottom');
        if (mobileMenuBottom) {
            mobileMenuBottom.remove();
        }
    }
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        
        // Dodaj lub usuń elementy w zależności od stanu menu
        if (this.classList.contains('active')) {
            createMobileMenuElements();
            
            // Inicjalizacja menu "więcej" w menu mobilnym
            initMobileExpandMore();
        } else {
            // Opcjonalnie: usuń elementy gdy menu jest zamknięte
            // removeMobileMenuElements();
        }
    });
}

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenuToggle && mobileMenuToggle.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
            
            // Opcjonalnie: usuń elementy gdy menu jest zamknięte
            // removeMobileMenuElements();
        }
    });
});

// ===== STICKY HEADER =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
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

// ===== TYPEWRITER EFFECT =====
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    
    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
        
        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        
        // Initial Type Speed
        let typeSpeed = 100;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
// ===== PARALLAX BACKGROUND EFFECT =====
function initParallaxBackground() {
    const heroBg = document.querySelector('.robot-bg');
    const heroSection = document.querySelector('.hero');
    
    if (!heroBg || !heroSection) return;
    
    heroSection.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Subtelny efekt parallax dla tła
        heroBg.style.transform = `scale(1.05) translate(${x * -10}px, ${y * -10}px)`;
    });
}

// Dodaj wywołanie funkcji w init
function init() {
    const txtElement = document.querySelector('.highlight');
    const words = ['futurystyczne', 'responsywne', 'szybkie', 'nowoczesne', 'innowacyjne'];
    const wait = 2000;
    
    // Init TypeWriter
    if (txtElement) {
        new TypeWriter(txtElement, words, wait);
    }
    
    // Inicjalizacja animacji fade-in
    initFadeInElements();
    
    // Inicjalizacja animacji liczników
    initCounters();
    
    // Inicjalizacja animacji robota
    animateRobot();
    
    // Inicjalizacja efektu parallax dla tła
    initParallaxBackground();
}

// ===== FADE IN ANIMATION =====
function initFadeInElements() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
}

// ===== COUNTER ANIMATION =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                const updateCounter = () => {
                    const increment = countTo / 50;
                    if (count < countTo) {
                        count += increment;
                        target.textContent = Math.ceil(count);
                        setTimeout(updateCounter, 30);
                    } else {
                        target.textContent = countTo;
                    }
                };
                updateCounter();
                counterObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ===== ROBOT ANIMATION =====
function animateRobot() {
    const robotImg = document.querySelector('.robot-img');
    if (!robotImg) return;
    
    // Dodatkowe efekty dla obrazu robota
    window.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 10;
        
        // Subtelny efekt parallax dla obrazu robota
        robotImg.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px)`;
    });
}

// Inicjalizacja animacji robota po załadowaniu DOM
document.addEventListener('DOMContentLoaded', () => {
    animateRobot();
    
    // Dodanie klas fade-in do elementów, które mają się animować
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Dodanie efektu parallax dla tła hero
    window.addEventListener('mousemove', (e) => {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;
        
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const robotBg = document.querySelector('.robot-bg');
        if (robotBg) {
            robotBg.style.transform = `translate(${mouseX * -20}px, ${mouseY * -20}px)`;
        }
        
        const heroParticles = document.querySelector('.hero-particles');
        if (heroParticles) {
            heroParticles.style.transform = `translate(${mouseX * -10}px, ${mouseY * -10}px)`;
        }
    });
});

// ===== BACK TO TOP BUTTON =====
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== ENHANCED ABOUT SECTION ANIMATIONS =====
function initAboutSectionAnimations() {
    // Parallax effect for about image
    const aboutSection = document.querySelector('#about');
    const imageContainer = document.querySelector('.image-container');
    
    if (aboutSection && imageContainer) {
        aboutSection.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            imageContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        // Reset transform when mouse leaves
        aboutSection.addEventListener('mouseleave', () => {
            imageContainer.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    }
    
    // Enhanced counter animation with easing
    const enhancedCounters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                let startTime = null;
                const duration = 2000; // 2 seconds
                
                function easeOutQuart(t) {
                    return 1 - Math.pow(1 - t, 4);
                }
                
                function animateCount(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const easedProgress = easeOutQuart(progress);
                    const currentCount = Math.floor(easedProgress * countTo);
                    
                    target.textContent = currentCount;
                    
                    if (progress < 1) {
                        requestAnimationFrame(animateCount);
                    } else {
                        target.textContent = countTo;
                    }
                }
                
                requestAnimationFrame(animateCount);
                counterObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    enhancedCounters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ===== LANGUAGE SWITCHER =====
document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.querySelector('.language-switcher');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLang = document.querySelector('.current-lang');
    const langDropdown = document.querySelector('.lang-dropdown');
    
    // Dodanie animacji przy kliknięciu
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation(); // Zapobiega zamknięciu dropdown przy kliknięciu
            
            // Efekt kliknięcia
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
            
            // Usuń klasę active ze wszystkich opcji
            langOptions.forEach(opt => opt.classList.remove('active'));
            
            // Dodaj klasę active do klikniętej opcji
            this.classList.add('active');
            
            // Aktualizuj wyświetlany język
            const langCode = this.getAttribute('data-lang');
            currentLang.innerHTML = langCode.toUpperCase() + ' <i class="fas fa-chevron-down"></i>';
            
            // Zamknij dropdown po wyborze
            setTimeout(() => {
                langDropdown.style.opacity = '0';
                langDropdown.style.visibility = 'hidden';
                langDropdown.style.transform = 'translateY(10px) scale(0.95)';
                
                // Przywróć dropdown do normalnego stanu po animacji
                setTimeout(() => {
                    langDropdown.removeAttribute('style');
                }, 300);
            }, 150);
            
            // Tutaj można dodać kod do faktycznej zmiany języka strony
            console.log('Zmieniono język na: ' + langCode);
        });
    });
    
    // Zamykanie dropdown po kliknięciu poza nim
    document.addEventListener('click', function(e) {
        if (!langSwitcher.contains(e.target)) {
            langDropdown.style.opacity = '0';
            langDropdown.style.visibility = 'hidden';
            langDropdown.style.transform = 'translateY(10px) scale(0.95)';
            
            // Przywróć dropdown do normalnego stanu po animacji
            setTimeout(() => {
                langDropdown.removeAttribute('style');
            }, 300);
        }
    });
});

// Add to DOM Content Loaded event
document.addEventListener('DOMContentLoaded', () => {
    initAboutSectionAnimations();
    
    // Obsługa rozwijanego menu "Więcej"
    const expandMore = document.querySelector('.expand-more');
    const expandDropdown = document.querySelector('.expand-dropdown');
    const expandTrigger = document.querySelector('.expand-more-trigger');
    
    // Dodanie ikony do menu "więcej" w widoku mobilnym
    if (expandTrigger) {
        // Sprawdź, czy ikona już istnieje
        if (!expandTrigger.querySelector('.mobile-expand-icon')) {
            // Dodaj ikonę menu - zmiana z fa-ellipsis-h na fa-chevron-down
            const mobileExpandIcon = document.createElement('i');
            mobileExpandIcon.className = 'fas fa-chevron-down mobile-expand-icon';
            expandTrigger.insertBefore(mobileExpandIcon, expandTrigger.firstChild);
        }
    }
    
    // Dodanie efektu kliknięcia
    if (expandTrigger) {
        // Ukryj dropdown na urządzeniach mobilnych domyślnie
        if (window.innerWidth < 992 && expandDropdown) {
            expandDropdown.style.display = 'none';
        }
        
        expandTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Efekt kliknięcia
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            // Obsługa otwierania/zamykania menu na urządzeniach mobilnych
            if (window.innerWidth < 992 && expandDropdown) {
                if (expandDropdown.style.display === 'none') {
                    expandDropdown.style.display = 'block';
                    // Obróć ikonę strzałki, gdy menu jest otwarte
                    const icon = this.querySelector('.mobile-expand-icon');
                    if (icon) icon.style.transform = 'rotate(180deg)';
                } else {
                    expandDropdown.style.display = 'none';
                    // Przywróć normalną pozycję ikony, gdy menu jest zamknięte
                    const icon = this.querySelector('.mobile-expand-icon');
                    if (icon) icon.style.transform = 'rotate(0)';
                }
            }
        });
    }
    
    // Zamykanie dropdown po kliknięciu w link
    const expandLinks = document.querySelectorAll('.expand-dropdown a');
    expandLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Efekt kliknięcia
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            if (window.innerWidth < 992) {
                expandDropdown.style.display = 'none';
                setTimeout(() => {
                    expandDropdown.removeAttribute('style');
                }, 300);
            }
        });
    });
    
    // Zamykanie dropdown po kliknięciu poza nim
    document.addEventListener('click', function(e) {
        if (!expandMore.contains(e.target) && window.innerWidth >= 992) {
            expandDropdown.style.opacity = '0';
            expandDropdown.style.visibility = 'hidden';
            expandDropdown.style.transform = 'translateX(-50%) translateY(10px) scale(0.95)';
            
            setTimeout(() => {
                expandDropdown.removeAttribute('style');
            }, 300);
        }
    });
    
    // Inicjalizacja sekcji FAQ
    initFaqSection();
});

// ===== PORTFOLIO FILTERING =====
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const progressFill = document.querySelector('.portfolio-progress-fill');
    const progressCount = document.getElementById('portfolio-progress-count');
    const progressTotal = document.getElementById('portfolio-progress-total');
    
    // Funkcja do filtrowania projektów
    function filterProjects(category) {
        let visibleCount = 0;
        let totalCount = 0;
        
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            // Resetujemy style
            item.style.transition = 'all 0.5s ease';
            
            // Zliczamy projekty dla wybranej kategorii
            if (category === 'all' || itemCategory === category) {
                totalCount++;
            }
            
            if (category === 'all' || itemCategory === category) {
                visibleCount++;
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 500);
            }
        });
        
        // Aktualizacja paska postępu
        const progressPercentage = (visibleCount / totalCount) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        
        // Aktualizacja liczników
        progressCount.textContent = visibleCount;
        progressTotal.textContent = totalCount;
    }
    
    // Inicjalizacja paska postępu przy załadowaniu strony
    progressTotal.textContent = portfolioItems.length;
    progressCount.textContent = portfolioItems.length;
    
    // Obsługa kliknięć przycisków filtrowania
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Usuń klasę active ze wszystkich przycisków
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Dodaj klasę active do klikniętego przycisku
            btn.classList.add('active');
            
            // Filtruj projekty według kategorii
            const category = btn.getAttribute('data-filter');
            filterProjects(category);
            
            // Efekt kliknięcia
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Inicjalizacja podglądu portfolio (lightbox)
    const portfolioPreviews = document.querySelectorAll('.portfolio-preview');
    
    portfolioPreviews.forEach(preview => {
        preview.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Tutaj można dodać kod do wyświetlania lightboxa z podglądem projektu
            console.log('Otwieranie podglądu projektu');
            
            // Efekt kliknięcia
            preview.style.transform = 'scale(0.9)';
            setTimeout(() => {
                preview.style.transform = 'scale(1.1)';
            }, 200);
        });
    });
});

// Dodaj tę funkcję do istniejącego kodu JavaScript

// ===== TECH ICONS ANIMATION =====
function initTechIconsAnimation() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach((icon, index) => {
        // Dodaj opóźnienie dla każdej ikony
        icon.style.transitionDelay = `${index * 0.1}s`;
        
        // Dodaj animację przy przewijaniu
        const iconObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        icon.classList.add('animate-icon');
                    }, index * 100);
                    iconObserver.unobserve(icon);
                }
            });
        }, {
            threshold: 0.5
        });
        
        iconObserver.observe(icon);
    });
}

// Dodaj wywołanie funkcji w miejscu, gdzie inicjalizujesz inne animacje
// Na przykład w funkcji initializeAnimations() lub bezpośrednio w document.addEventListener('DOMContentLoaded', ...)
document.addEventListener('DOMContentLoaded', function() {
    initTechIconsAnimation();
});

// ===== HORIZONTAL PROCESS SECTION =====
// Kod został usunięty, ponieważ ta funkcjonalność jest teraz obsługiwana przez process-slider.js
// document.addEventListener('DOMContentLoaded', function() {
//     initHorizontalProcess();
// });

// function initHorizontalProcess() {
//     const processSection = document.querySelector('#process');
//     if (!processSection) return;
//     
//     const stepsContainer = processSection.querySelector('.process-track');
//     const steps = processSection.querySelectorAll('.process-step');
//     const prevBtn = processSection.querySelector('.process-prev');
//     const nextBtn = processSection.querySelector('.process-next');
//     const progressFill = processSection.querySelector('.progress-bottom-fill');
//     const dotsContainer = processSection.querySelector('.process-dots');
//     
//     if (!stepsContainer || !steps.length || !prevBtn || !nextBtn || !progressFill || !dotsContainer) {
//         console.warn('Brakuje wymaganych elementów dla sekcji procesu');
//         return; // Dodane zabezpieczenie przed próbą dostępu do nieistniejących elementów
//     }
    
//     let currentStep = 0;
//     const totalSteps = steps.length;
//     
//     // Inicjalizacja kropek nawigacyjnych
//     for (let i = 0; i < totalSteps; i++) {
//         const dot = document.createElement('div');
//         dot.classList.add('process-dot');
//         if (i === 0) dot.classList.add('active');
//         dot.addEventListener('click', () => goToStep(i));
//         dotsContainer.appendChild(dot);
//     }
//     
//     // Ustawienie pierwszego kroku jako aktywnego
//     steps[0].classList.add('active', 'animate-in');
//     updateProgress();
    
//     // Obsługa przycisków
//     prevBtn.addEventListener('click', () => {
//         if (currentStep > 0) {
//             currentStep--;
//             updateActiveStep();
//         }
//     });
//     
//     nextBtn.addEventListener('click', () => {
//         if (currentStep < totalSteps - 1) {
//             currentStep++;
//             updateActiveStep();
//         }
//     });
//     
//     // Obsługa przewijania
//     stepsContainer.addEventListener('scroll', () => {
//         // Aktualizacja aktywnego kroku na podstawie pozycji przewijania
//         const scrollPosition = stepsContainer.scrollLeft;
//         const stepWidth = steps[0].offsetWidth + parseInt(getComputedStyle(steps[0]).marginRight);
//         const newStep = Math.round(scrollPosition / stepWidth);
        
//        if (newStep !== currentStep && newStep >= 0 && newStep < totalSteps) {
//            currentStep = newStep;
//            updateActiveStep(false); // false oznacza, że nie przewijamy, bo już przewinęliśmy
//        }
//    });
//    
//    // Funkcja do przejścia do konkretnego kroku
//    function goToStep(stepIndex) {
//        currentStep = stepIndex;
//        updateActiveStep();
//    }
//    
//    // Aktualizacja aktywnego kroku
//    function updateActiveStep(scroll = true) {
//        // Aktualizacja klas aktywnych kroków
//        steps.forEach((step, index) => {
//            step.classList.remove('active', 'animate-in');
//            if (index === currentStep) {
//                step.classList.add('active');
//                setTimeout(() => {
//                    step.classList.add('animate-in');
//                }, 50);
//            }
//        });
//        
//        // Przewijanie do aktywnego kroku
//        if (scroll) {
//            const stepWidth = steps[0].offsetWidth + parseInt(getComputedStyle(steps[0]).marginRight);
//            stepsContainer.scrollTo({
//                left: currentStep * stepWidth,
//                behavior: 'smooth'
//            });
//        }
//        
//        // Aktualizacja kropek
//        const dots = dotsContainer.querySelectorAll('.process-dot');
//        dots.forEach((dot, index) => {
//            dot.classList.toggle('active', index === currentStep);
//        });
        
//        // Aktualizacja paska postępu
//        updateProgress();
//        
//        // Aktualizacja stanu przycisków
//        prevBtn.classList.toggle('disabled', currentStep === 0);
//        nextBtn.classList.toggle('disabled', currentStep === totalSteps - 1);
//    }
//    
//    // Aktualizacja paska postępu
//    function updateProgress() {
//        const progressPercentage = (currentStep / (totalSteps - 1)) * 100;
//        progressFill.style.width = `${progressPercentage}%`;
//    }
    
//    // Automatyczne przełączanie kroków
//    let autoplayInterval;
//    
//    function startAutoplay() {
//        autoplayInterval = setInterval(() => {
//            if (currentStep < totalSteps - 1) {
//                currentStep++;
//            } else {
//                currentStep = 0;
//            }
//            updateActiveStep();
//        }, 5000); // Zmiana co 5 sekund
//    }
//    
//    function stopAutoplay() {
//        clearInterval(autoplayInterval);
//    }
//    
//    // Zatrzymanie autoplay przy interakcji użytkownika
//    processSection.addEventListener('mouseenter', stopAutoplay);
//    processSection.addEventListener('mouseleave', startAutoplay);
//    processSection.addEventListener('touchstart', stopAutoplay);
//    
//    // Obserwator przecięcia do animacji przy wejściu w widok
//    const processObserver = new IntersectionObserver((entries) => {
//        entries.forEach(entry => {
//            if (entry.isIntersecting) {
//                // Resetowanie do pierwszego kroku przy wejściu w widok
//                currentStep = 0;
//                updateActiveStep();
//                startAutoplay();
//            } else {
//                stopAutoplay();
//            }
//        });
//    }, {
//        threshold: 0.3
//    });
//    
//    processObserver.observe(processSection);
    
//    // Uruchomienie autoplay
//    startAutoplay();
//}

// ===== PRICE TYPING ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const priceAmounts = document.querySelectorAll('.pricing-header .amount');
    
    // Funkcja do animacji wpisywania tekstu
    function typePrice(element) {
        const originalText = element.textContent;
        element.textContent = '';
        element.classList.add('typing');
        
        let i = 0;
        const typingSpeed = 150; // Prędkość wpisywania (ms)
        
        function typeChar() {
            if (i < originalText.length) {
                element.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeChar, typingSpeed - Math.random() * 50); // Losowa prędkość dla naturalnego efektu
            } else {
                element.classList.remove('typing');
                element.classList.add('typing-done');
                
                // Po zakończeniu animacji, dodaj efekt podświetlenia
                element.style.textShadow = '0 0 15px rgba(139, 92, 246, 0.7)';
                setTimeout(() => {
                    element.style.textShadow = 'none';
                }, 500);
            }
        }
        
        setTimeout(typeChar, 300); // Opóźnienie przed rozpoczęciem wpisywania
    }
    
    // Obserwator przecięcia do uruchamiania animacji, gdy ceny są widoczne
    const priceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dodaj opóźnienie dla każdego kolejnego elementu
                const delay = Array.from(priceAmounts).indexOf(entry.target) * 500;
                setTimeout(() => {
                    typePrice(entry.target);
                }, delay);
                
                priceObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Obserwuj wszystkie elementy cen
    priceAmounts.forEach(amount => {
        // Zapisz oryginalny tekst jako atrybut data
        amount.setAttribute('data-original-text', amount.textContent);
        priceObserver.observe(amount);
    });
});

// ===== SECTION TITLE TYPING ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Wybierz wszystkie elementy .highlight w tytułach sekcji
    const highlightElements = document.querySelectorAll('.section-header h2 .highlight');
    
    // Funkcja do animacji wpisywania tekstu
    function typeHighlight(element) {
        const originalText = element.textContent;
        element.textContent = '';
        element.classList.add('typing');
        
        let i = 0;
        const typingSpeed = 100; // Prędkość wpisywania (ms)
        
        function typeChar() {
            if (i < originalText.length) {
                element.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeChar, typingSpeed - Math.random() * 30); // Losowa prędkość dla naturalnego efektu
            } else {
                element.classList.remove('typing');
                element.classList.add('typing-done');
                
                // Po zakończeniu animacji, dodaj efekt podświetlenia
                element.style.textShadow = '0 0 15px rgba(139, 92, 246, 0.7)';
                setTimeout(() => {
                    element.style.textShadow = 'none';
                }, 500);
            }
        }
        
        setTimeout(typeChar, 300); // Opóźnienie przed rozpoczęciem wpisywania
    }
    
    // Obserwator przecięcia do uruchamiania animacji, gdy tytuły są widoczne
    const highlightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dodaj opóźnienie dla każdego kolejnego elementu
                const delay = Array.from(highlightElements).indexOf(entry.target) * 300;
                setTimeout(() => {
                    typeHighlight(entry.target);
                }, delay);
                
                highlightObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Obserwuj wszystkie elementy highlight w tytułach sekcji
    highlightElements.forEach(highlight => {
        // Zapisz oryginalny tekst jako atrybut data
        highlight.setAttribute('data-original-text', highlight.textContent);
        highlightObserver.observe(highlight);
    });
});

// ===== TESTIMONIALS SLIDER =====
document.addEventListener('DOMContentLoaded', function() {
    initTestimonialsSlider();
});

function initTestimonialsSlider() {
    const slider = document.querySelector('.testimonials-slider');
    if (!slider) return;
    
    const track = slider.querySelector('.testimonials-track');
    const items = slider.querySelectorAll('.testimonial-item');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    const indicatorsContainer = slider.querySelector('.testimonials-indicators');
    
    if (!track || !items.length || !prevBtn || !nextBtn || !indicatorsContainer) return;
    
    let currentIndex = 0;
    const totalItems = items.length;
    let autoplayInterval;
    let isAnimating = false;
    
    // Inicjalizacja wskaźników
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('testimonial-indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
    
    // Ustawienie pierwszego slajdu jako aktywnego
    items[0].classList.add('active');
    
    // Obsługa przycisków
    prevBtn.addEventListener('click', () => {
        if (isAnimating) return;
        goToSlide(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        if (isAnimating) return;
        goToSlide(currentIndex + 1);
    });
    
    // Funkcja do przejścia do konkretnego slajdu
    function goToSlide(index) {
        if (isAnimating) return;
        isAnimating = true;
        
        // Obsługa zapętlenia
        if (index < 0) index = totalItems - 1;
        if (index >= totalItems) index = 0;
        
        // Usunięcie klasy active z poprzedniego slajdu
        items[currentIndex].classList.remove('active');
        
        // Aktualizacja aktualnego indeksu
        currentIndex = index;
        
        // Dodanie klasy active do nowego slajdu
        items[currentIndex].classList.add('active');
        
        // Przesunięcie track
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Aktualizacja wskaźników
        const indicators = indicatorsContainer.querySelectorAll('.testimonial-indicator');
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });
        
        // Resetowanie timera autoplay
        resetAutoplay();
        
        // Zakończenie animacji po czasie
        setTimeout(() => {
            isAnimating = false;
        }, 800); // Czas trwania animacji
    }
    
    // Automatyczne przełączanie slajdów
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000); // Zmiana co 5 sekund
    }
    
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }
    
    // Zatrzymanie autoplay przy interakcji użytkownika
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        startAutoplay();
    });
    
    // Obsługa gestów dotykowych
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoplayInterval);
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Przesunięcie w lewo - następny slajd
            goToSlide(currentIndex + 1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Przesunięcie w prawo - poprzedni slajd
            goToSlide(currentIndex - 1);
        }
    }
    
    // Dodanie efektu wejścia dla pierwszego slajdu
    setTimeout(() => {
        items[0].querySelector('.testimonial-content').style.transform = 'translateY(0)';
        items[0].querySelector('.testimonial-content').style.opacity = '1';
    }, 500);
    
    // Uruchomienie autoplay
    startAutoplay();
    
    // Obserwator przecięcia do animacji przy wejściu w widok
    const testimonialsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Resetowanie do pierwszego slajdu przy wejściu w widok
                goToSlide(0);
            } else {
                clearInterval(autoplayInterval);
            }
        });
    }, {
        threshold: 0.3
    });
    
    testimonialsObserver.observe(slider);
}

// ===== FAQ SECTION =====
document.addEventListener('DOMContentLoaded', function() {
    initFaqSection();
});

function initFaqSection() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Sprawdź, czy ten element jest już aktywny
            const isActive = item.classList.contains('active');
            
            // Zamknij wszystkie aktywne elementy
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                const answer = faqItem.querySelector('.faq-answer');
                answer.style.maxHeight = null;
            });
            
            // Jeśli element nie był aktywny, otwórz go
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                
                // Dodaj efekt podświetlenia
                item.style.boxShadow = 'var(--neon-shadow)';
                setTimeout(() => {
                    if (item.classList.contains('active')) {
                        item.style.boxShadow = '';
                    }
                }, 1000);
            }
        });
    });
    
    // Animacja wejścia elementów FAQ
    const faqObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Dodaj opóźnienie dla każdego kolejnego elementu
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * 150);
                faqObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Obserwuj wszystkie elementy FAQ
    faqItems.forEach(item => {
        faqObserver.observe(item);
    });
}

// Add to DOM Content Loaded event
document.addEventListener('DOMContentLoaded', () => {
    // Obsługa rozwijanego menu "Więcej"
    const expandMore = document.querySelector('.expand-more');
    const expandDropdown = document.querySelector('.expand-dropdown');
    const expandTrigger = document.querySelector('.expand-more-trigger');
    
    // Dodanie ikony do menu "więcej" TYLKO w widoku mobilnym
    if (expandTrigger) {
        // Sprawdź, czy ikona już istnieje
        const existingMobileIcon = expandTrigger.querySelector('.mobile-expand-icon');
        
        if (window.innerWidth < 992) {
            // Tylko dla widoku mobilnego dodajemy ikonę
            if (!existingMobileIcon) {
                // Dodaj ikonę menu
                const mobileExpandIcon = document.createElement('i');
                mobileExpandIcon.className = 'fas fa-chevron-down mobile-expand-icon';
                expandTrigger.insertBefore(mobileExpandIcon, expandTrigger.firstChild);
            }
        } else {
            // Dla widoku desktopowego usuwamy mobilną ikonę jeśli istnieje
            if (existingMobileIcon) {
                existingMobileIcon.remove();
            }
        }
        
        // Ukryj dropdown na urządzeniach mobilnych domyślnie
        if (window.innerWidth < 992 && expandDropdown) {
            expandDropdown.style.display = 'none';
        }
        
        expandTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Efekt kliknięcia
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            // Obsługa otwierania/zamykania menu na urządzeniach mobilnych
            if (window.innerWidth < 992 && expandDropdown) {
                if (expandDropdown.style.display === 'none') {
                    expandDropdown.style.display = 'block';
                    // Obróć ikonę strzałki, gdy menu jest otwarte
                    const icon = this.querySelector('.mobile-expand-icon');
                    if (icon) icon.style.transform = 'rotate(180deg)';
                } else {
                    expandDropdown.style.display = 'none';
                    // Przywróć normalną pozycję ikony, gdy menu jest zamknięte
                    const icon = this.querySelector('.mobile-expand-icon');
                    if (icon) icon.style.transform = 'rotate(0)';
                }
            }
        });
    }
    
    // Zamykanie dropdown po kliknięciu w link
    const expandLinks = document.querySelectorAll('.expand-dropdown a');
    expandLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Efekt kliknięcia
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            if (window.innerWidth < 992) {
                expandDropdown.style.display = 'none';
                setTimeout(() => {
                    expandDropdown.removeAttribute('style');
                }, 300);
            }
        });
    });
    
    // Zamykanie dropdown po kliknięciu poza nim
    document.addEventListener('click', function(e) {
        if (!expandMore.contains(e.target) && window.innerWidth >= 992) {
            expandDropdown.style.opacity = '0';
            expandDropdown.style.visibility = 'hidden';
            expandDropdown.style.transform = 'translateX(-50%) translateY(10px) scale(0.95)';
            
            setTimeout(() => {
                expandDropdown.removeAttribute('style');
            }, 300);
        }
    });
});

// Obsługa zmiany rozmiaru okna
window.addEventListener('resize', function() {
    const expandTrigger = document.querySelector('.expand-more-trigger');
    if (!expandTrigger) return;
    
    const existingMobileIcon = expandTrigger.querySelector('.mobile-expand-icon');
    
    if (window.innerWidth < 992) {
        // Tylko dla widoku mobilnego dodajemy ikonę
        if (!existingMobileIcon) {
            // Dodaj ikonę menu
            const mobileExpandIcon = document.createElement('i');
            mobileExpandIcon.className = 'fas fa-chevron-down mobile-expand-icon';
            expandTrigger.insertBefore(mobileExpandIcon, expandTrigger.firstChild);
        }
    } else {
        // Dla widoku desktopowego usuwamy mobilną ikonę jeśli istnieje
        if (existingMobileIcon) {
            existingMobileIcon.remove();
        }
    }
});

// Obsługa zmiany rozmiaru okna
window.addEventListener('resize', function() {
    const expandTrigger = document.querySelector('.expand-more-trigger');
    if (!expandTrigger) return;
    
    const existingMobileIcon = expandTrigger.querySelector('.mobile-expand-icon');
    
    if (window.innerWidth < 992) {
        // Tylko dla widoku mobilnego dodajemy ikonę
        if (!existingMobileIcon) {
            // Dodaj ikonę menu
            const mobileExpandIcon = document.createElement('i');
            mobileExpandIcon.className = 'fas fa-chevron-down mobile-expand-icon';
            expandTrigger.insertBefore(mobileExpandIcon, expandTrigger.firstChild);
        }
    } else {
        // Dla widoku desktopowego usuwamy mobilną ikonę jeśli istnieje
        if (existingMobileIcon) {
            existingMobileIcon.remove();
        }
    }
});

// ===== PORTFOLIO FILTERING =====
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const progressFill = document.querySelector('.portfolio-progress-fill');
    const progressCount = document.getElementById('portfolio-progress-count');
    const progressTotal = document.getElementById('portfolio-progress-total');
    
    // Funkcja do filtrowania projektów
    function filterProjects(category) {
        let visibleCount = 0;
        let totalCount = 0;
        
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            // Resetujemy style
            item.style.transition = 'all 0.5s ease';
            
            // Zliczamy projekty dla wybranej kategorii
            if (category === 'all' || itemCategory === category) {
                totalCount++;
            }
            
            if (category === 'all' || itemCategory === category) {
                visibleCount++;
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 500);
            }
        });
        
        // Aktualizacja paska postępu
        const progressPercentage = (visibleCount / totalCount) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        
        // Aktualizacja liczników
        progressCount.textContent = visibleCount;
        progressTotal.textContent = totalCount;
    }
    
    // Inicjalizacja paska postępu przy załadowaniu strony
    progressTotal.textContent = portfolioItems.length;
    progressCount.textContent = portfolioItems.length;
    
    // Obsługa kliknięć przycisków filtrowania
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Usuń klasę active ze wszystkich przycisków
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Dodaj klasę active do klikniętego przycisku
            btn.classList.add('active');
            
            // Filtruj projekty według kategorii
            const category = btn.getAttribute('data-filter');
            filterProjects(category);
            
            // Efekt kliknięcia
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Inicjalizacja podglądu portfolio (lightbox)
    const portfolioPreviews = document.querySelectorAll('.portfolio-preview');
    
    portfolioPreviews.forEach(preview => {
        preview.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Tutaj można dodać kod do wyświetlania lightboxa z podglądem projektu
            console.log('Otwieranie podglądu projektu');
            
            // Efekt kliknięcia
            preview.style.transform = 'scale(0.9)';
            setTimeout(() => {
                preview.style.transform = 'scale(1.1)';
            }, 200);
        });
    });
});

// Dodaj tę funkcję do istniejącego kodu JavaScript

// ===== TECH ICONS ANIMATION =====
function initTechIconsAnimation() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach((icon, index) => {
        // Dodaj opóźnienie dla każdej ikony
        icon.style.transitionDelay = `${index * 0.1}s`;
        
        // Dodaj animację przy przewijaniu
        const iconObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        icon.classList.add('animate-icon');
                    }, index * 100);
                    iconObserver.unobserve(icon);
                }
            });
        }, {
            threshold: 0.5
        });
        
        iconObserver.observe(icon);
    });
}

// Dodaj wywołanie funkcji w miejscu, gdzie inicjalizujesz inne animacje
// Na przykład w funkcji initializeAnimations() lub bezpośrednio w document.addEventListener('DOMContentLoaded', ...)
document.addEventListener('DOMContentLoaded', function() {
    initTechIconsAnimation();
});

// ===== HORIZONTAL PROCESS SECTION =====
// Kod został usunięty, ponieważ ta funkcjonalność jest teraz obsługiwana przez process-slider.js
// document.addEventListener('DOMContentLoaded', function() {
//     initHorizontalProcess();
// });

// function initHorizontalProcess() {
//     const processSection = document.querySelector('#process');
//     if (!processSection) return;
//     
//     const stepsContainer = processSection.querySelector('.process-track');
//     const steps = processSection.querySelectorAll('.process-step');
//     const prevBtn = processSection.querySelector('.process-prev');
//     const nextBtn = processSection.querySelector('.process-next');
//     const progressFill = processSection.querySelector('.progress-bottom-fill');
//     const dotsContainer = processSection.querySelector('.process-dots');
//     
//     if (!stepsContainer || !steps.length || !prevBtn || !nextBtn || !progressFill || !dotsContainer) {
//         console.warn('Brakuje wymaganych elementów dla sekcji procesu');
//         return; // Dodane zabezpieczenie przed próbą dostępu do nieistniejących elementów
//     }
    
//     let currentStep = 0;
//     const totalSteps = steps.length;
//     
//     // Inicjalizacja kropek nawigacyjnych
//     for (let i = 0; i < totalSteps; i++) {
//         const dot = document.createElement('div');
//         dot.classList.add('process-dot');
//         if (i === 0) dot.classList.add('active');
//         dot.addEventListener('click', () => goToStep(i));
//         dotsContainer.appendChild(dot);
//     }
//     
//     // Ustawienie pierwszego kroku jako aktywnego
//     steps[0].classList.add('active', 'animate-in');
//     updateProgress();
    
//     // Obsługa przycisków
//     prevBtn.addEventListener('click', () => {
//         if (currentStep > 0) {
//             currentStep--;
//             updateActiveStep();
//         }
//     });
//     
//     nextBtn.addEventListener('click', () => {
//         if (currentStep < totalSteps - 1) {
//             currentStep++;
//             updateActiveStep();
//         }
//     });
//     
//     // Obsługa przewijania
//     stepsContainer.addEventListener('scroll', () => {
//         // Aktualizacja aktywnego kroku na podstawie pozycji przewijania
//         const scrollPosition = stepsContainer.scrollLeft;
//         const stepWidth = steps[0].offsetWidth + parseInt(getComputedStyle(steps[0]).marginRight);
//         const newStep = Math.round(scrollPosition / stepWidth);
        
//        if (newStep !== currentStep && newStep >= 0 && newStep < totalSteps) {
//            currentStep = newStep;
//            updateActiveStep(false); // false oznacza, że nie przewijamy, bo już przewinęliśmy
//        }
//    });
//    
//    // Funkcja do przejścia do konkretnego kroku
//    function goToStep(stepIndex) {
//        currentStep = stepIndex;
//        updateActiveStep();
//    }
//    
//    // Aktualizacja aktywnego kroku
//    function updateActiveStep(scroll = true) {
//        // Aktualizacja klas aktywnych kroków
//        steps.forEach((step, index) => {
//            step.classList.remove('active', 'animate-in');
//            if (index === currentStep) {
//                step.classList.add('active');
//                setTimeout(() => {
//                    step.classList.add('animate-in');
//                }, 50);
//            }
//        });
//        
//        // Przewijanie do aktywnego kroku
//        if (scroll) {
//            const stepWidth = steps[0].offsetWidth + parseInt(getComputedStyle(steps[0]).marginRight);
//            stepsContainer.scrollTo({
//                left: currentStep * stepWidth,
//                behavior: 'smooth'
//            });
//        }
//        
//        // Aktualizacja kropek
//        const dots = dotsContainer.querySelectorAll('.process-dot');
//        dots.forEach((dot, index) => {
//            dot.classList.toggle('active', index === currentStep);
//        });
        
//        // Aktualizacja paska postępu
//        updateProgress();
//        
//        // Aktualizacja stanu przycisków
//        prevBtn.classList.toggle('disabled', currentStep === 0);
//        nextBtn.classList.toggle('disabled', currentStep === totalSteps - 1);
//    }
//    
//    // Aktualizacja paska postępu
//    function updateProgress() {
//        const progressPercentage = (currentStep / (totalSteps - 1)) * 100;
//        progressFill.style.width = `${progressPercentage}%`;
//    }
    
//    // Automatyczne przełączanie kroków
//    let autoplayInterval;
//    
//    function startAutoplay() {
//        autoplayInterval = setInterval(() => {
//            if (currentStep < totalSteps - 1) {
//                currentStep++;
//            } else {
//                currentStep = 0;
//            }
//            updateActiveStep();
//        }, 5000); // Zmiana co 5 sekund
//    }
//    
//    function stopAutoplay() {
//        clearInterval(autoplayInterval);
//    }
//    
//    // Zatrzymanie autoplay przy interakcji użytkownika
//    processSection.addEventListener('mouseenter', stopAutoplay);
//    processSection.addEventListener('mouseleave', startAutoplay);
//    processSection.addEventListener('touchstart', stopAutoplay);
//    
//    // Obserwator przecięcia do animacji przy wejściu w widok
//    const processObserver = new IntersectionObserver((entries) => {
//        entries.forEach(entry => {
//            if (entry.isIntersecting) {
//                // Resetowanie do pierwszego kroku przy wejściu w widok
//                currentStep = 0;
//                updateActiveStep();
//                startAutoplay();
//            } else {
//                stopAutoplay();
//            }
//        });
//    }, {
//        threshold: 0.3
//    });
//    
//    processObserver.observe(processSection);
    
//    // Uruchomienie autoplay
//    startAutoplay();
//}

// ===== PRICE TYPING ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const priceAmounts = document.querySelectorAll('.pricing-header .amount');
    
    // Funkcja do animacji wpisywania tekstu
    function typePrice(element) {
        const originalText = element.textContent;
        element.textContent = '';
        element.classList.add('typing');
        
        let i = 0;
        const typingSpeed = 150; // Prędkość wpisywania (ms)
        
        function typeChar() {
            if (i < originalText.length) {
                element.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeChar, typingSpeed - Math.random() * 50); // Losowa prędkość dla naturalnego efektu
            } else {
                element.classList.remove('typing');
                element.classList.add('typing-done');
                
                // Po zakończeniu animacji, dodaj efekt podświetlenia
                element.style.textShadow = '0 0 15px rgba(139, 92, 246, 0.7)';
                setTimeout(() => {
                    element.style.textShadow = 'none';
                }, 500);
            }
        }
        
        setTimeout(typeChar, 300); // Opóźnienie przed rozpoczęciem wpisywania
    }
    
    // Obserwator przecięcia do uruchamiania animacji, gdy ceny są widoczne
    const priceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dodaj opóźnienie dla każdego kolejnego elementu
                const delay = Array.from(priceAmounts).indexOf(entry.target) * 500;
                setTimeout(() => {
                    typePrice(entry.target);
                }, delay);
                
                priceObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Obserwuj wszystkie elementy cen
    priceAmounts.forEach(amount => {
        // Zapisz oryginalny tekst jako atrybut data
        amount.setAttribute('data-original-text', amount.textContent);
        priceObserver.observe(amount);
    });
});

// ===== SECTION TITLE TYPING ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Wybierz wszystkie elementy .highlight w tytułach sekcji
    const highlightElements = document.querySelectorAll('.section-header h2 .highlight');
    
    // Funkcja do animacji wpisywania tekstu
    function typeHighlight(element) {
        const originalText = element.textContent;
        element.textContent = '';
        element.classList.add('typing');
        
        let i = 0;
        const typingSpeed = 100; // Prędkość wpisywania (ms)
        
        function typeChar() {
            if (i < originalText.length) {
                element.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeChar, typingSpeed - Math.random() * 30); // Losowa prędkość dla naturalnego efektu
            } else {
                element.classList.remove('typing');
                element.classList.add('typing-done');
                
                // Po zakończeniu animacji, dodaj efekt podświetlenia
                element.style.textShadow = '0 0 15px rgba(139, 92, 246, 0.7)';
                setTimeout(() => {
                    element.style.textShadow = 'none';
                }, 500);
            }
        }
        
        setTimeout(typeChar, 300); // Opóźnienie przed rozpoczęciem wpisywania
    }
    
    // Obserwator przecięcia do uruchamiania animacji, gdy tytuły są widoczne
    const highlightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dodaj opóźnienie dla każdego kolejnego elementu
                const delay = Array.from(highlightElements).indexOf(entry.target) * 300;
                setTimeout(() => {
                    typeHighlight(entry.target);
                }, delay);
                
                highlightObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Obserwuj wszystkie elementy highlight w tytułach sekcji
    highlightElements.forEach(highlight => {
        // Zapisz oryginalny tekst jako atrybut data
        highlight.setAttribute('data-original-text', highlight.textContent);
        highlightObserver.observe(highlight);
    });
});

// ===== TESTIMONIALS SLIDER =====
document.addEventListener('DOMContentLoaded', function() {
    initTestimonialsSlider();
});

function initTestimonialsSlider() {
    const slider = document.querySelector('.testimonials-slider');
    if (!slider) return;
    
    const track = slider.querySelector('.testimonials-track');
    const items = slider.querySelectorAll('.testimonial-item');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    const indicatorsContainer = slider.querySelector('.testimonials-indicators');
    
    if (!track || !items.length || !prevBtn || !nextBtn || !indicatorsContainer) return;
    
    let currentIndex = 0;
    const totalItems = items.length;
    let autoplayInterval;
    let isAnimating = false;
    
    // Inicjalizacja wskaźników
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('testimonial-indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
    
    // Ustawienie pierwszego slajdu jako aktywnego
    items[0].classList.add('active');
    
    // Obsługa przycisków
    prevBtn.addEventListener('click', () => {
        if (isAnimating) return;
        goToSlide(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        if (isAnimating) return;
        goToSlide(currentIndex + 1);
    });
    
    // Funkcja do przejścia do konkretnego slajdu
    function goToSlide(index) {
        if (isAnimating) return;
        isAnimating = true;
        
        // Obsługa zapętlenia
        if (index < 0) index = totalItems - 1;
        if (index >= totalItems) index = 0;
        
        // Usunięcie klasy active z poprzedniego slajdu
        items[currentIndex].classList.remove('active');
        
        // Aktualizacja aktualnego indeksu
        currentIndex = index;
        
        // Dodanie klasy active do nowego slajdu
        items[currentIndex].classList.add('active');
        
        // Przesunięcie track
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Aktualizacja wskaźników
        const indicators = indicatorsContainer.querySelectorAll('.testimonial-indicator');
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });
        
        // Resetowanie timera autoplay
        resetAutoplay();
        
        // Zakończenie animacji po czasie
        setTimeout(() => {
            isAnimating = false;
        }, 800); // Czas trwania animacji
    }
    
    // Automatyczne przełączanie slajdów
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000); // Zmiana co 5 sekund
    }
    
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }
    
    // Zatrzymanie autoplay przy interakcji użytkownika
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        startAutoplay();
    });
    
    // Obsługa gestów dotykowych
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoplayInterval);
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Przesunięcie w lewo - następny slajd
            goToSlide(currentIndex + 1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Przesunięcie w prawo - poprzedni slajd
            goToSlide(currentIndex - 1);
        }
    }
    
    // Dodanie efektu wejścia dla pierwszego slajdu
    setTimeout(() => {
        items[0].querySelector('.testimonial-content').style.transform = 'translateY(0)';
        items[0].querySelector('.testimonial-content').style.opacity = '1';
    }, 500);
    
    // Uruchomienie autoplay
    startAutoplay();
    
    // Obserwator przecięcia do animacji przy wejściu w widok
    const testimonialsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Resetowanie do pierwszego slajdu przy wejściu w widok
                goToSlide(0);
            } else {
                clearInterval(autoplayInterval);
            }
        });
    }, {
        threshold: 0.3
    });
    
    testimonialsObserver.observe(slider);
}

// ===== FAQ SECTION =====
document.addEventListener('DOMContentLoaded', function() {
    initFaqSection();
});

function initFaqSection() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Sprawdź, czy ten element jest już aktywny
            const isActive = item.classList.contains('active');
            
            // Zamknij wszystkie aktywne elementy
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                const answer = faqItem.querySelector('.faq-answer');
                answer.style.maxHeight = null;
            });
            
            // Jeśli element nie był aktywny, otwórz go
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                
                // Dodaj efekt podświetlenia
                item.style.boxShadow = 'var(--neon-shadow)';
                setTimeout(() => {
                    if (item.classList.contains('active')) {
                        item.style.boxShadow = '';
                    }
                }, 1000);
            }
        });
    });
    
    // Animacja wejścia elementów FAQ
    const faqObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Dodaj opóźnienie dla każdego kolejnego elementu
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * 150);
                faqObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Obserwuj wszystkie elementy FAQ
    faqItems.forEach(item => {
        faqObserver.observe(item);
    });
}