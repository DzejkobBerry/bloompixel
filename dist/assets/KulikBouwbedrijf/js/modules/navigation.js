// Funkcja inicjalizująca nawigację
export function initNavigation() {
    const navLinks = document.querySelectorAll('nav a, .hero-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Zamknij mobilne menu po kliknięciu w link
                    const mobileMenu = document.querySelector('nav ul');
                    if (mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                    }
                }
            }
        });
    });
}