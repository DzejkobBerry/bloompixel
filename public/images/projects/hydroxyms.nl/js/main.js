// Import language system
import { languageManager } from './language.js';

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language manager
    languageManager.init();
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Zamykanie menu po kliknięciu w link
    const navLinksItems = document.querySelectorAll('.nav-links li a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Efekt przewijania dla nawigacji
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Testimonial slider
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    let currentIndex = 0;
    let testimonialInterval;
    const autoScrollDelay = 5000; // Czas w milisekundach między automatycznymi zmianami opinii (5 sekund)
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
        
        // Aktualizacja aktywnej kropki
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    // Funkcja do automatycznego przewijania opinii
    function startAutoScroll() {
        testimonialInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, autoScrollDelay);
    }
    
    // Funkcja do zatrzymania automatycznego przewijania
    function stopAutoScroll() {
        clearInterval(testimonialInterval);
    }
    
    if (prevBtn && nextBtn && testimonials.length > 0) {
        prevBtn.addEventListener('click', function() {
            stopAutoScroll(); // Zatrzymaj automatyczne przewijanie po kliknięciu
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
            startAutoScroll(); // Uruchom ponownie automatyczne przewijanie
        });
        
        nextBtn.addEventListener('click', function() {
            stopAutoScroll(); // Zatrzymaj automatyczne przewijanie po kliknięciu
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
            startAutoScroll(); // Uruchom ponownie automatyczne przewijanie
        });
        
        // Dodaj obsługę kliknięć na kropki nawigacyjne
        dots.forEach((dot, i) => {
            dot.addEventListener('click', function() {
                stopAutoScroll(); // Zatrzymaj automatyczne przewijanie po kliknięciu
                currentIndex = i;
                showTestimonial(currentIndex);
                startAutoScroll(); // Uruchom ponownie automatyczne przewijanie
            });
        });
        
        // Zatrzymaj automatyczne przewijanie, gdy użytkownik najedzie myszką na slider
        const testimonialSlider = document.querySelector('.testimonial-slider');
        if (testimonialSlider) {
            testimonialSlider.addEventListener('mouseenter', stopAutoScroll);
            testimonialSlider.addEventListener('mouseleave', startAutoScroll);
        }
        
        // Uruchom automatyczne przewijanie po załadowaniu strony
        startAutoScroll();
    }
    
    // Zamykanie modalu z informacją o pomyślnym wysłaniu
    /*
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', function() {
            successModal.classList.remove('show');
            document.body.style.overflow = ''; // Przywraca przewijanie strony
        });
    }
    */
    
    // Dodanie obsługi zamykania modalu z informacją o pomyślnym wysłaniu po kliknięciu w X
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Przywraca przewijanie strony
        });
    });
    
    // Zamykanie modali po kliknięciu poza zawartością
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
            document.body.style.overflow = ''; // Przywraca przewijanie strony
        }
    });
    
    // Smooth scrolling dla linków nawigacyjnych
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Odjęcie wysokości nawigacji
                    behavior: 'smooth'
                });
                
                // Zamknij mobilne menu po kliknięciu
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // Animacja pojawiania się elementów podczas przewijania
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .project-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Wywołaj animację przy załadowaniu strony
    animateOnScroll();
    
    // Wywołaj animację podczas przewijania
    window.addEventListener('scroll', animateOnScroll);
    
    // Dodaj efekt przewijania dla nawigacji
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Dodaj efekt paralaksy dla sekcji hero
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.scrollY;
        
        if (hero) {
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
    
    // Dodaj licznik dla statystyk
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }
    
    // Funkcja do sprawdzania, czy element jest widoczny w oknie przeglądarki
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Dodaj efekt pojawiania się dla wszystkich sekcji
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    });
    
    // Inicjalizacja liczników w sekcji stats
    const statsSection = document.getElementById('collaboration-process'); // Zmiana z 'stats' na 'collaboration-process'
    const projectsCount = document.getElementById('projectsCount');
    const clientsCount = document.getElementById('clientsCount');
    const experienceCount = document.getElementById('experienceCount');
    const teamCount = document.getElementById('teamCount');
    
    function animateStats() {
        if (statsSection && isElementInViewport(statsSection)) { // Dodanie sprawdzenia czy statsSection istnieje
            if (projectsCount) animateCounter(projectsCount, 150, 2000);
            if (clientsCount) animateCounter(clientsCount, 120, 2000);
            if (experienceCount) animateCounter(experienceCount, 15, 2000);
            if (teamCount) animateCounter(teamCount, 25, 2000);
            
            // Dodaj klasę animate do elementów stat-item
            document.querySelectorAll('.stat-item').forEach(item => {
                item.classList.add('animate');
            });
            
            // Usuń nasłuchiwanie po pierwszej animacji
            window.removeEventListener('scroll', animateStats);
        }
    }
    
    // Wywołaj animację przy załadowaniu strony
    animateStats();
    
    // Wywołaj animację podczas przewijania
    window.addEventListener('scroll', animateStats);
    
    // Animacja procesu współpracy
    const processItems = document.querySelectorAll('.process-item');
    
    const observerProcess = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observerProcess.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    processItems.forEach((item, index) => {
        item.style.setProperty('--animation-order', index + 1);
        observerProcess.observe(item);
    });
});


// Obsługa modalu ze zdjęciami
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.querySelector('.close-modal');
const projectLinks = document.querySelectorAll('.project-link');

// Otwieranie modalu po kliknięciu w ikonkę lupki
projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imageUrl = this.getAttribute('data-image');
        const title = this.closest('.project-info').querySelector('h3').textContent;
        
        modalImg.src = imageUrl;
        modalTitle.textContent = title;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Blokuje przewijanie strony pod modalem
    });
});

// Zamykanie modalu po kliknięciu w X
if (closeModal) {
    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        document.body.style.overflow = ''; // Przywraca przewijanie strony
    });
}

// Zamykanie modalu po kliknięciu poza obrazem
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        document.body.style.overflow = ''; // Przywraca przewijanie strony
    }
});

    // Przycisk przewijania do góry
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Pokazywanie/ukrywanie przycisku podczas przewijania
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Obsługa kliknięcia przycisku
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });