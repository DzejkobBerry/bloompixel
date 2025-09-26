// Funkcja do ładowania komponentów HTML
async function loadComponent(elementId, componentPath, callback) {
    try {
        // Dodaj parametr czasowy, aby zapobiec cache'owaniu
        const cacheBuster = `?v=${new Date().getTime()}`;
        const response = await fetch(componentPath + cacheBuster);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        if (callback) callback();
    } catch (error) {
        console.error(`Nie udało się załadować komponentu: ${componentPath}`, error);
    }
}

// Ładowanie komponentów po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-container', 'components/header.html');
    loadComponent('hero-container', 'components/sections/hero.html');
    loadComponent('about-container', 'components/sections/about.html');
    loadComponent('services-container', 'components/sections/services.html');
    loadComponent('projects-container', 'components/sections/projects.html');
    loadComponent('testimonials-container', 'components/sections/testimonials.html', function() {
        // Dodatkowe sprawdzenie, czy slider jest widoczny po załadowaniu
        setTimeout(() => {
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            if (testimonialCards.length > 0) {
                testimonialCards.forEach(card => {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.visibility = 'visible';
                });
                console.log('Dodatkowe ustawienie widoczności kart testimonials');
            }
        }, 1000);
    });
    loadComponent('contact-container', 'components/sections/contact.html', function() {
        // Dodatkowe sprawdzenie, czy sekcja kontaktowa jest widoczna po załadowaniu
        setTimeout(() => {
            const contactElements = document.querySelectorAll('.contact-info, .contact-header, .contact-items-container, .social-media, .contact-form-container');
            if (contactElements.length > 0) {
                contactElements.forEach(element => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.style.visibility = 'visible';
                });
                console.log('Dodatkowe ustawienie widoczności elementów kontaktowych');
            }
        }, 1000);
    });
    loadComponent('footer-container', 'components/footer.html');
});