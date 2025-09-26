import {
    Header,
    Hero,
    About,
    Process,
    Projects,
    Testimonials,
    Contact,
    Footer,
    ScrollToTopButton,
    Modal,
    initMobileMenu,
    initProjects,
    initTestimonials,
    initContact,
    initScrollToTopButton,
    initImageModal
} from './components/index.js';

// Import systemu językowego
import { languageManager } from './language.js';

function App() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        ${Header()}
        <main>
            ${Hero()}
            ${About()}
            ${Process()}
            ${Projects()}
            ${Testimonials()}
            ${Contact()}
        </main>
        ${Footer()}
        ${ScrollToTopButton()}
        ${Modal()}
    `;
    
    // Inicjalizacja skryptów po załadowaniu komponentów
    initializeScripts();
}

function initializeScripts() {
    // Inicjalizacja wszystkich funkcji z komponentów
    initMobileMenu();
    initProjects();
    initTestimonials();
    initContact();
    initScrollToTopButton();
    initImageModal();
    
    // Inicjalizacja systemu językowego
    // System językowy zostanie automatycznie zainicjalizowany przez import

    // Dodaj efekt paralaksy dla sekcji hero
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.scrollY;
        
        if (hero) {
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });

    // Dodaj efekt przewijania dla nawigacji
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
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
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Dodaj efekt pojawiania się dla wszystkich sekcji
    const sections = document.querySelectorAll('section');
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
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
}

// Inicjalizacja aplikacji po załadowaniu DOM
document.addEventListener('DOMContentLoaded', App);