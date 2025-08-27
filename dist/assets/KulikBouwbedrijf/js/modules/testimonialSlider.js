// Funkcja inicjalizująca slider z opiniami klientów
export function initTestimonialSlider() {
    console.log('Rozpoczęcie inicjalizacji slidera testimonials');
    
    // Opóźnij inicjalizację, aby upewnić się, że komponenty HTML są załadowane
    setTimeout(() => {
        const testimonialSection = document.querySelector('#testimonials');
        if (!testimonialSection) {
            console.error('Nie znaleziono sekcji testimonials');
            return;
        }
        
        console.log('Sekcja testimonials znaleziona, inicjalizacja slidera');
        
        // Upewnij się, że wszystkie elementy są widoczne
        const testimonialsSlider = testimonialSection.querySelector('.testimonials-slider');
        const testimonialsContainer = testimonialSection.querySelector('.testimonials-container');
        const testimonialCards = testimonialSection.querySelectorAll('.testimonial-card');
        
        if (!testimonialsContainer || testimonialCards.length === 0) {
            console.error('Nie znaleziono kontenera testimonials lub kart');
            return;
        }
        
        console.log(`Znaleziono ${testimonialCards.length} kart testimonials`);
        
        // Ustaw prawidłowe style dla slidera
        if (testimonialsSlider) {
            testimonialsSlider.style.display = 'block';
            testimonialsSlider.style.minHeight = '300px';
            testimonialsSlider.style.visibility = 'visible';
            testimonialsSlider.style.overflow = 'hidden';
        }
        
        // Ustaw prawidłowe style dla kontenera
        testimonialsContainer.style.display = 'flex';
        testimonialsContainer.style.minHeight = '250px';
        testimonialsContainer.style.width = `${testimonialCards.length * 100}%`; // Dynamiczna szerokość
        testimonialsContainer.style.position = 'relative';
        testimonialsContainer.style.zIndex = '1';
        testimonialsContainer.style.visibility = 'visible';
        testimonialsContainer.style.transition = 'transform 0.5s ease';
        
        // Ustaw prawidłowe style dla kart
        const cardWidth = 100 / testimonialCards.length; // Dynamiczna szerokość karty
        testimonialCards.forEach((card, index) => {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.minHeight = '200px';
            card.style.position = 'relative';
            card.style.visibility = 'visible';
            card.style.width = `${cardWidth}%`;
            card.style.flex = `0 0 ${cardWidth}%`;
            card.style.boxSizing = 'border-box';
        });
        
        // Kontynuuj z oryginalną inicjalizacją slidera
        initSlider(testimonialSection);
    }, 1000);
    
    // Oryginalna funkcja inicjalizacji slidera
    function initSlider(testimonialSection) {
        const testimonialsContainer = testimonialSection.querySelector('.testimonials-container');
        const prevBtn = testimonialSection.querySelector('.prev-btn');
        const nextBtn = testimonialSection.querySelector('.next-btn');
        const testimonialDots = testimonialSection.querySelector('.testimonial-dots');
        const progressBar = testimonialSection.querySelector('.progress-bar');
        
        if (!testimonialsContainer || !prevBtn || !nextBtn || !testimonialDots) {
            console.error('Nie znaleziono wszystkich wymaganych elementów dla slidera testimonials');
            return;
        }
        
        const testimonialCards = testimonialSection.querySelectorAll('.testimonial-card');
        
        if (testimonialCards.length === 0) {
            console.error('Nie znaleziono kart testimonials');
            return;
        }
        
        let currentIndex = 0;
        let autoSlideInterval;
        let progressInterval;
        const autoSlideDuration = 8000;
        
        // Inicjalizacja pozycji kontenera
        testimonialsContainer.style.transform = 'translateX(0)';
        
        // Dodanie klasy active do pierwszej karty
        testimonialCards[0].classList.add('active');
        
        // Czyszczenie istniejących kropek
        testimonialDots.innerHTML = '';
        
        // Tworzenie kropek nawigacyjnych
        testimonialCards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            testimonialDots.appendChild(dot);
        });
        
        // Funkcja do aktualizacji kropek
        function updateDots() {
            const dots = testimonialDots.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Funkcja do przejścia do konkretnego slajdu
        function goToSlide(index) {
            testimonialCards.forEach(card => card.classList.remove('active'));
            
            currentIndex = index;
            const translateX = -(currentIndex * (100 / testimonialCards.length));
            testimonialsContainer.style.transform = `translateX(${translateX}%)`;
            
            testimonialCards[currentIndex].classList.add('active');
            
            updateDots();
            updateButtons();
            resetProgressBar();
        }
        
        // Funkcja do aktualizacji stanu przycisków
        function updateButtons() {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === testimonialCards.length - 1;
        }
        
        // Obsługa przycisków
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                goToSlide(currentIndex - 1);
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < testimonialCards.length - 1) {
                goToSlide(currentIndex + 1);
            }
        });
        
        updateButtons();
        
        // Funkcja do resetowania paska postępu
        function resetProgressBar() {
            if (progressBar) {
                clearInterval(progressInterval);
                progressBar.style.width = '0%';
                
                let progress = 0;
                const increment = 100 / (autoSlideDuration / 100);
                
                progressInterval = setInterval(() => {
                    progress += increment;
                    if (progress >= 100) {
                        progress = 100;
                        clearInterval(progressInterval);
                    }
                    progressBar.style.width = `${progress}%`;
                }, 100);
            }
        }
        
        // Automatyczne przewijanie
        function startAutoSlide() {
            resetProgressBar();
            
            autoSlideInterval = setInterval(() => {
                if (currentIndex < testimonialCards.length - 1) {
                    goToSlide(currentIndex + 1);
                } else {
                    goToSlide(0);
                }
            }, autoSlideDuration);
        }
        
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
            clearInterval(progressInterval);
            if (progressBar) {
                progressBar.style.width = '0%';
            }
        }
        
        startAutoSlide();
        
        const sliderElement = testimonialSection.querySelector('.testimonials-slider');
        if (sliderElement) {
            sliderElement.addEventListener('mouseenter', stopAutoSlide);
            sliderElement.addEventListener('mouseleave', startAutoSlide);
        }
        
        console.log('Slider testimonials zainicjalizowany pomyślnie');
    }
}