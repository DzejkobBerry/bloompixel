// Importowanie modułów
import { initNavigation } from './modules/navigation.js';
import { initScrollEffects, initAnimations, initHeroButtonEffects } from './modules/animations.js';
import { initTestimonialSlider } from './modules/testimonialSlider.js';
import { initContactForm } from './modules/contactForm.js';
import { initMobileMenu } from './modules/mobileMenu.js';
import { initScrollToTop } from './modules/scrollToTop.js';

// Główna funkcja inicjalizująca wszystkie funkcjonalności strony
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initNavigation();
        initScrollEffects();
        initAnimations();
        initHeroButtonEffects();
        initTestimonialSlider();
        initContactForm();
        initMobileMenu();
        initScrollToTop();
    }, 1000);
});