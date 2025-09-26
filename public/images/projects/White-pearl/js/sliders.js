/**
 * White Pearl - Obsługa sliderów
 * Autor: Maciej Nowak
 * Data: 2023
 */

document.addEventListener('DOMContentLoaded', function() {
    initTestimonialsSlider();
    initPartnersSlider();
});

// Slider opinii klientów
function initTestimonialsSlider() {
    const slider = document.getElementById('testimonialsSlider');
    if (!slider) return;
    
    const wrapper = slider.querySelector('.testimonials-wrapper');
    const items = slider.querySelectorAll('.testimonial-item');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    const dotsContainer = document.getElementById('testimonialDots');
    
    let currentIndex = 0;
    let autoplayInterval;
    let startX, endX;
    const minSwipeDistance = 50;
    
    // Ustawienie szerokości wrappera i elementów w zależności od szerokości ekranu
    function setSliderDimensions() {
        const sliderWidth = slider.offsetWidth;
        const itemWidth = sliderWidth;
        
        // Ustaw szerokość każdego elementu
        items.forEach(item => {
            item.style.minWidth = `${itemWidth}px`;
        });
        
        // Ustaw szerokość wrappera
        wrapper.style.width = `${itemWidth * items.length}px`;
        
        // Przesuń do aktualnego slajdu bez animacji
        wrapper.style.transition = 'none';
        wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        setTimeout(() => {
            wrapper.style.transition = 'transform 0.5s ease';
        }, 50);
    }
    
    // Inicjalizacja kropek nawigacyjnych
    function initDots() {
        dotsContainer.innerHTML = '';
        items.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('testimonial-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Przejście do konkretnego slajdu
    function goToSlide(index) {
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;
        
        currentIndex = index;
        const itemWidth = slider.offsetWidth;
        wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        
        // Aktualizacja aktywnej kropki
        const dots = dotsContainer.querySelectorAll('.testimonial-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    // Przejście do następnego slajdu
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Przejście do poprzedniego slajdu
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Uruchomienie automatycznego przewijania
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, 5000);
    }
    
    // Zatrzymanie automatycznego przewijania
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }
    
    // Obsługa gestów dotykowych (swipe)
    function handleTouchStart(e) {
        startX = e.touches[0].clientX;
    }
    
    function handleTouchMove(e) {
        if (!startX) return;
        endX = e.touches[0].clientX;
    }
    
    function handleTouchEnd() {
        if (!startX || !endX) return;
        
        const diff = startX - endX;
        if (Math.abs(diff) >= minSwipeDistance) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        startX = null;
        endX = null;
    }
    
    // Inicjalizacja slidera
    setSliderDimensions();
    initDots();
    startAutoplay();
    
    // Nasłuchiwanie zdarzeń
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoplay();
        startAutoplay();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoplay();
        startAutoplay();
    });
    
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
    
    slider.addEventListener('touchstart', handleTouchStart, {passive: true});
    slider.addEventListener('touchmove', handleTouchMove, {passive: true});
    slider.addEventListener('touchend', handleTouchEnd, {passive: true});
    
    // Dostosowanie wymiarów przy zmianie rozmiaru okna
    window.addEventListener('resize', setSliderDimensions);
}

// Slider partnerów
// Slider partnerów
function initPartnersSlider() {
    const slider = document.getElementById('partnersSlider');
    if (!slider) return;
    
    const wrapper = slider.querySelector('.partners-wrapper');
    const items = slider.querySelectorAll('.partner-item');
    
    let currentPosition = 0;
    let autoplayInterval;
    const scrollSpeed = 0.05; // Zmniejszona prędkość dla płynniejszego przewijania
    
    // Funkcja przesuwająca slider
    function moveSlider() {
        currentPosition -= scrollSpeed;
        
        // Resetowanie pozycji po przesunięciu wszystkich elementów
        const wrapperWidth = wrapper.offsetWidth;
        const visibleWidth = slider.offsetWidth;
        
        if (Math.abs(currentPosition) >= (wrapperWidth / 2)) {
            currentPosition = 0;
        }
        
        wrapper.style.transform = `translateX(${currentPosition}%)`;
    }
    
    // Funkcja uruchamiająca automatyczne przewijanie
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(moveSlider, 50);
    }
    
    // Funkcja zatrzymująca automatyczne przewijanie
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }
    
    // Duplikuj elementy, aby uzyskać efekt nieskończonego przewijania
    function duplicateItems() {
        const itemsArray = Array.from(items);
        
        itemsArray.forEach(item => {
            const clone = item.cloneNode(true);
            wrapper.appendChild(clone);
        });
    }
    
    // Inicjalizacja slidera
    duplicateItems();
    startAutoplay();
    
    // Zatrzymaj autoplay przy najechaniu myszą
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
}