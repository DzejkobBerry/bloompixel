function ScrollToTopButton() {
    return `
    <!-- Przycisk przewijania do góry -->
    <button id="scrollToTopBtn" class="scroll-to-top-btn" aria-label="Przewiń do góry">
        <i class="fas fa-arrow-up"></i>
    </button>
    `;
}

function initScrollToTopButton() {
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
}

export { ScrollToTopButton, initScrollToTopButton };