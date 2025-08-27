// Nawigacja mobilna
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Funkcja do aktualizacji aktywnego linku
const updateActiveLink = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Obsługa menu mobilnego
navToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Zatrzymaj propagację zdarzenia
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Dodaj animację dla linków w menu mobilnym
    if (navMenu.classList.contains('active')) {
        navLinks.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(20px)';
            setTimeout(() => {
                link.style.transition = 'all 0.3s ease';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 100 * index);
        });
        // Zablokuj przewijanie strony gdy menu jest otwarte
        document.body.style.overflow = 'hidden';
    } else {
        // Przywróć przewijanie strony gdy menu jest zamknięte
        document.body.style.overflow = '';
    }
});

// Zamknij menu po kliknięciu poza nim
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Efekt przewijania dla nawigacji
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Dodaj klasę scrolled gdy przewijamy
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Ukryj/pokaż nawigację podczas przewijania
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
    
    // Aktualizuj aktywny link
    updateActiveLink();
});

// Płynne przewijanie do sekcji
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        // Zamknij menu mobilne po kliknięciu w link
        if (window.innerWidth <= 992) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Sprawdź, czy link prowadzi do sekcji na tej samej stronie
        if (targetId.startsWith('#')) {
            e.preventDefault();
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Zamknij menu mobilne
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
            
            // Płynne przewijanie
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Aktualizuj aktywny link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
        }
        // Jeśli link prowadzi do innej strony, pozwól na domyślne zachowanie
    });
});

// Efekt hover dla linków
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (!link.classList.contains('active')) {
            link.style.color = 'var(--color-primary)';
        }
    });
    
    link.addEventListener('mouseleave', () => {
        if (!link.classList.contains('active')) {
            link.style.color = 'var(--color-text)';
        }
    });
});

// Animacja liczb
const animateNumbers = () => {
    const numbers = document.querySelectorAll('.number');
    
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        const duration = 2000; // 2 sekundy
        const step = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateNumber = () => {
            current += step;
            if (current < target) {
                number.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target;
            }
        };
        
        updateNumber();
    });
};

// Obserwator widoczności dla animacji
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Dodaj opóźnienie dla elementów w sekcji
            if (entry.target.classList.contains('service-card') ||
                entry.target.classList.contains('portfolio-item') ||
                entry.target.classList.contains('testimonial-card')) {
                const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.1}s`;
            }
        }
    });
}, observerOptions);

// Obserwuj elementy
document.querySelectorAll('.section-header, .service-card, .feature, .portfolio-item, .testimonial-card, .contact-card, .contact-form').forEach(element => {
    observer.observe(element);
});

// Rozbudowane animacje dla sekcji
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-header, .service-card, .feature, .portfolio-item');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 100);
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Efekt parallax dla sekcji hero
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');
const heroShape = document.querySelector('.hero-shape');
const heroPattern = document.querySelector('.hero-pattern');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${rate * 0.5}px)`;
    }
    if (heroShape) {
        heroShape.style.transform = `translate(-50%, -50%) translateY(${rate * 0.2}px)`;
    }
    if (heroPattern) {
        heroPattern.style.transform = `rotate(${rate * 0.1}deg)`;
    }
});

// Efekt hover dla kart usług
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0)';
        }
    });
});

// Efekt hover dla elementów portfolio
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        const image = item.querySelector('.portfolio-image img');
        
        if (overlay) {
            overlay.style.transform = 'translateY(0)';
            overlay.style.opacity = '1';
        }
        if (image) {
            image.style.transform = 'scale(1.1)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        const image = item.querySelector('.portfolio-image img');
        
        if (overlay) {
            overlay.style.transform = 'translateY(100%)';
            overlay.style.opacity = '0';
        }
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// Efekt hover dla przycisków
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = 'var(--shadow-hover)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'var(--shadow-md)';
    });
});

// Efekt hover dla ikon społecznościowych
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        const icon = link.querySelector('i');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(360deg)';
        }
    });
    
    link.addEventListener('mouseleave', () => {
        const icon = link.querySelector('i');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0)';
        }
    });
});

// Rozbudowana obsługa formularza
const contactForm = document.querySelector('.contact-form');
const formGroups = document.querySelectorAll('.form-group');

if (contactForm && formGroups.length > 0) {
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            input.addEventListener('focus', () => {
                label.style.color = 'var(--color-primary)';
                label.style.transform = 'translateY(-50%) scale(0.9)';
                group.style.animation = 'borderGlow 2s infinite';
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.style.color = 'var(--color-text)';
                    label.style.transform = 'translateY(-50%) scale(1)';
                    group.style.animation = 'none';
                }
            });
        }
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (!submitButton) return;
        
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Wysyłanie...';
        submitButton.style.opacity = '0.7';
        
        // Symulacja wysyłania
        setTimeout(() => {
            submitButton.textContent = 'Wysłano!';
            submitButton.style.opacity = '1';
            submitButton.style.background = 'var(--color-secondary)';
            contactForm.reset();
            
            // Animacja resetu formularza
            formGroups.forEach(group => {
                const label = group.querySelector('label');
                if (label) {
                    label.style.color = 'var(--color-text)';
                    label.style.transform = 'translateY(-50%) scale(1)';
                }
            });
            
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                submitButton.style.background = '';
            }, 2000);
        }, 1500);
    });
}

// Animacja dla sekcji o nas
const aboutSection = document.querySelector('.about');
const aboutImage = document.querySelector('.about-image');
const features = document.querySelectorAll('.feature');

if (aboutSection && aboutImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const aboutTop = aboutSection.getBoundingClientRect().top;
        
        if (aboutTop < window.innerHeight && aboutTop > -aboutSection.offsetHeight) {
            const rate = (window.innerHeight - aboutTop) * 0.1;
            aboutImage.style.transform = `translateY(${rate}px)`;
            
            // Animacja dla cech
            features.forEach((feature, index) => {
                if (aboutTop < window.innerHeight - 100) {
                    setTimeout(() => {
                        feature.classList.add('visible');
                    }, index * 100);
                }
            });
        }
    });
}

// Animacja dla sekcji testimonials
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Efekt hover dla sekcji kontakt
const contactCard = document.querySelector('.contact-card');
const contactItems = document.querySelectorAll('.contact-item');

if (contactItems.length > 0) {
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.background = 'var(--gradient-secondary)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.background = 'var(--gradient-primary)';
            }
        });
    });
}

// Inicjalizacja wszystkich funkcjonalności po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    // Inicjalizacja slidera hero tylko jeśli element istnieje
    if (document.querySelector('.hero-slider')) {
    initHeroSlider();
    }
    
    // Inicjalizacja slidera opinii
    initTestimonialsSlider();
    
    // Inicjalizacja animacji
    initAnimations();
});

// Funkcja inicjalizująca slider hero
function initHeroSlider() {
    console.log('Inicjalizacja slidera hero...');
    
    const slider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    if (!slider) {
        console.error('Nie znaleziono elementu .hero-slider');
        return;
    }
    
    if (!slides.length) {
        console.error('Nie znaleziono elementów .slide');
        return;
    }
    
    if (!prevBtn || !nextBtn) {
        console.error('Nie znaleziono przycisków nawigacyjnych');
        return;
    }
    
    console.log('Znaleziono elementy:', {
        slider,
        slides: slides.length,
        prevBtn,
        nextBtn
    });
    
    let currentSlide = 0;
    let slideInterval;
    let isAnimating = false;

    function showSlide(index) {
        if (isAnimating) {
            console.log('Animacja w toku, pomijam zmianę slajdu');
            return;
        }
        
        console.log('Zmiana slajdu na:', index);
        isAnimating = true;

        // Ukryj wszystkie slajdy
        slides.forEach(slide => {
            slide.classList.remove('active');
            const content = slide.querySelector('.slide-content');
            if (content) {
                content.style.opacity = '0';
                content.style.transform = 'translateY(30px)';
            }
        });

        // Pokaż wybrany slajd
        slides[index].classList.add('active');
        const activeContent = slides[index].querySelector('.slide-content');
        if (activeContent) {
            requestAnimationFrame(() => {
                activeContent.style.opacity = '1';
                activeContent.style.transform = 'translateY(0)';
            });
        }

        currentSlide = index;
        
        setTimeout(() => {
            isAnimating = false;
            console.log('Animacja zakończona');
        }, 800);
    }

    function nextSlide() {
        console.log('Próba przejścia do następnego slajdu');
        if (isAnimating) {
            console.log('Animacja w toku, pomijam');
            return;
        }
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }

    function prevSlide() {
        console.log('Próba przejścia do poprzedniego slajdu');
        if (isAnimating) {
            console.log('Animacja w toku, pomijam');
            return;
        }
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = slides.length - 1;
        }
        showSlide(prev);
    }

    function startSlideInterval() {
        console.log('Uruchamianie automatycznego przewijania');
        stopSlideInterval();
        slideInterval = setInterval(() => {
            console.log('Automatyczne przewijanie');
            nextSlide();
        }, 5000);
    }

    function stopSlideInterval() {
        console.log('Zatrzymywanie automatycznego przewijania');
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }

    // Event listeners dla przycisków
    prevBtn.addEventListener('click', (e) => {
        console.log('Kliknięto przycisk prev');
        e.preventDefault();
        e.stopPropagation();
        if (!isAnimating) {
            prevSlide();
            startSlideInterval();
        }
    });

    nextBtn.addEventListener('click', (e) => {
        console.log('Kliknięto przycisk next');
        e.preventDefault();
        e.stopPropagation();
        if (!isAnimating) {
            nextSlide();
            startSlideInterval();
        }
    });

    // Touch events
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        console.log('Rozpoczęto dotyk');
        touchStartX = e.changedTouches[0].screenX;
        stopSlideInterval();
    });

    slider.addEventListener('touchend', (e) => {
        console.log('Zakończono dotyk');
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startSlideInterval();
    });

    function handleSwipe() {
        if (isAnimating) return;
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Mouse events
    slider.addEventListener('mouseenter', () => {
        console.log('Mysz weszła na slider');
        stopSlideInterval();
    });
    
    slider.addEventListener('mouseleave', () => {
        console.log('Mysz opuściła slider');
        startSlideInterval();
    });

    // Visibility change
    document.addEventListener('visibilitychange', () => {
        console.log('Zmiana widoczności strony:', document.hidden ? 'ukryta' : 'widoczna');
        if (document.hidden) {
            stopSlideInterval();
        } else {
            startSlideInterval();
        }
    });

    // Initialize
    console.log('Inicjalizacja slidera zakończona');
    showSlide(0);
    startSlideInterval();

    // Dodaj obsługę błędów
    window.addEventListener('error', (e) => {
        console.error('Wystąpił błąd:', e.message);
    });
}

// Funkcja inicjalizująca slider opinii
function initTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!track || !cards.length) return;
    
    let currentIndex = 0;
    let isAnimating = false;
    let slideInterval;
    
    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            if (!isAnimating) goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateSlider() {
        isAnimating = true;
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        cards.forEach((card, index) => {
            card.style.opacity = index === currentIndex ? '1' : '0.5';
            card.style.transform = index === currentIndex ? 'scale(1)' : 'scale(0.95)';
        });
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
    
    function goToSlide(index) {
        if (isAnimating) return;
        currentIndex = index;
        updateSlider();
    }
    
    function nextSlide() {
        if (isAnimating) return;
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlider();
    }
    
    function prevSlide() {
        if (isAnimating) return;
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlider();
    }
    
    function startAutoSlide() {
        stopAutoSlide();
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }
    
    // Event listeners
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (!isAnimating) {
                nextSlide();
                startAutoSlide();
            }
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (!isAnimating) {
                prevSlide();
                startAutoSlide();
            }
        });
    }
    
    // Touch events
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoSlide();
    });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Mouse events
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
            }, 50);
        }, 250);
    });
    
    // Initialize
    updateSlider();
    startAutoSlide();
}

// Funkcja inicjalizująca animacje
function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.classList.contains('service-card') ||
                    entry.target.classList.contains('portfolio-item') ||
                    entry.target.classList.contains('testimonial-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    // Obserwuj elementy
    document.querySelectorAll('.section-header, .service-card, .feature, .portfolio-item, .testimonial-card, .contact-card, .contact-form').forEach(element => {
        observer.observe(element);
    });
}