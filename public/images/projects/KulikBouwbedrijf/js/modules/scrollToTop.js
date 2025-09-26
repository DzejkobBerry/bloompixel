// Moduł obsługujący przycisk scroll to top
export function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (!scrollToTopBtn) return;
    
    // Funkcja sprawdzająca pozycję scrolla
    function checkScrollPosition() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
    
    // Funkcja przewijająca do góry
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Event listenery
    window.addEventListener('scroll', checkScrollPosition);
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    // Sprawdź pozycję przy załadowaniu strony
    checkScrollPosition();
    
    // Dodaj efekt hover
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
}