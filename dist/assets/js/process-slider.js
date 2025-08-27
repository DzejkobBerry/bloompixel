// ===== PROCESS SLIDER =====
// Flaga do śledzenia, czy slider został już zainicjalizowany
let processSliderInitialized = false;

document.addEventListener('DOMContentLoaded', function() {
    // Sprawdź, czy slider nie został już zainicjalizowany
    if (!processSliderInitialized) {
        initProcessSlider();
        processSliderInitialized = true;
    }
});

function initProcessSlider() {
    const slider = document.querySelector('.process-slider');
    if (!slider) {
        console.error('Nie znaleziono elementu .process-slider');
        return;
    }
    
    const track = slider.querySelector('.process-track');
    const steps = slider.querySelectorAll('.process-step');
    const prevBtn = slider.querySelector('.process-prev');
    const nextBtn = slider.querySelector('.process-next');
    // Usuń lub zakomentuj poniższe dwie linie
    // const progressBar = slider.querySelector('.progress-bar');
    // const progressPercentage = slider.querySelector('.progress-percentage');
    const dotsContainer = slider.querySelector('.process-dots');
    
    if (!track || !steps.length || !prevBtn || !nextBtn || !dotsContainer) {
        console.error('Nie znaleziono wszystkich wymaganych elementów slidera');
        return;
    }
    
    // Resetowanie transformacji track na początku
    track.style.transform = 'translateX(0)';
    
    let currentStep = 0;
    const totalSteps = steps.length;
    
    // Inicjalizacja kropek nawigacyjnych
    // Zawsze czyścimy istniejące kropki i generujemy nowe
    dotsContainer.innerHTML = ''; // Wyczyść istniejące kropki
    
    // Generuj dokładnie tyle kropek, ile jest kroków procesu
    for (let i = 0; i < totalSteps; i++) {
        const dot = document.createElement('div');
        dot.classList.add('process-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToStep(i));
        dotsContainer.appendChild(dot);
    }
    
    // Wyświetl informację o liczbie kroków i kropek w konsoli
    console.log(`Liczba kroków procesu: ${totalSteps}`);
    console.log(`Liczba kropek nawigacyjnych: ${dotsContainer.querySelectorAll('.process-dot').length}`);
    
    // Inicjalizacja pierwszego kroku
    updateSlider();
    
    // Obsługa przycisków
    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateSlider();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps - 1) {
            currentStep++;
            updateSlider();
        }
    });
    
    // Obsługa klawiszy strzałek
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentStep > 0) {
            currentStep--;
            updateSlider();
        } else if (e.key === 'ArrowRight' && currentStep < totalSteps - 1) {
            currentStep++;
            updateSlider();
        }
    });
    
    // Obsługa przewijania
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold && currentStep < totalSteps - 1) {
            // Przesunięcie w lewo
            currentStep++;
            updateSlider();
        } else if (touchEndX > touchStartX + swipeThreshold && currentStep > 0) {
            // Przesunięcie w prawo
            currentStep--;
            updateSlider();
        }
    }
    
    // Funkcja do przejścia do konkretnego kroku
    function goToStep(stepIndex) {
        currentStep = stepIndex;
        updateSlider();
    }
    
    // Aktualizacja slidera
    function updateSlider() {
        // Aktualizacja pozycji track
        const stepWidth = steps[0].offsetWidth + parseInt(window.getComputedStyle(steps[0]).marginRight);
        
        // Sprawdzenie szerokości ekranu i dostosowanie transformacji
        let offset = currentStep * stepWidth;
        
        // Zapewnienie, że slider nie wyjdzie poza granice
        const maxOffset = (steps.length - 1) * stepWidth;
        offset = Math.min(offset, maxOffset);
        
        track.style.transform = `translateX(-${offset}px)`;
        
        // Aktualizacja aktywnego kroku
        steps.forEach((step, index) => {
            step.classList.remove('active', 'animate-in');
            if (index === currentStep) {
                step.classList.add('active');
                // Dodanie klasy z opóźnieniem dla animacji
                setTimeout(() => {
                    step.classList.add('animate-in');
                }, 50);
            }
        });
        
        // Usuń lub zakomentuj poniższy kod odpowiedzialny za aktualizację paska postępu
        /*
        // Aktualizacja paska postępu
        const progress = (currentStep / (totalSteps - 1)) * 100;
        progressBar.style.width = `${progress}%`;
        
        // Aktualizacja procentów
        if (progressPercentage) {
            progressPercentage.textContent = `${Math.round(progress)}%`;
            // Przesunięcie tekstu procentów, aby zawsze był widoczny
            progressPercentage.style.right = progress > 90 ? '20px' : '0';
        }
        */
        
        // Pozostaw kod dla dolnego paska postępu, jeśli istnieje
        const progress = (currentStep / (totalSteps - 1)) * 100;
        const progressBottomFill = slider.querySelector('.progress-bottom-fill');
        const progressBottomPercentage = slider.querySelector('.progress-bottom-percentage');
        
        if (progressBottomFill && progressBottomPercentage) {
            progressBottomFill.style.width = `${progress}%`;
            progressBottomPercentage.textContent = `${Math.round(progress)}%`;
        }
        
        // Aktualizacja kropek
        const dots = dotsContainer.querySelectorAll('.process-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentStep);
        });
        
        // Aktualizacja stanu przycisków
        prevBtn.disabled = currentStep === 0;
        nextBtn.disabled = currentStep === totalSteps - 1;
        
        // Dodanie klasy dla wizualnego stanu przycisków
        prevBtn.classList.toggle('disabled', currentStep === 0);
        nextBtn.classList.toggle('disabled', currentStep === totalSteps - 1);
    }
    
    // Automatyczne przełączanie kroków
    let autoplayInterval;
    
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            if (currentStep < totalSteps - 1) {
                currentStep++;
            } else {
                currentStep = 0;
            }
            updateSlider();
        }, 8000); // Zmiana co 8 sekund - wolniejsze przewijanie
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Zatrzymanie autoplay przy interakcji użytkownika
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
    slider.addEventListener('touchstart', stopAutoplay);
    
    // Uruchomienie autoplay
    startAutoplay();
    
    // Obserwator przecięcia do animacji przy wejściu w widok
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Resetowanie do pierwszego kroku przy wejściu w widok
                currentStep = 0;
                updateSlider();
                startAutoplay();
            } else {
                stopAutoplay();
            }
        });
    }, {
        threshold: 0.3
    });
    
    processObserver.observe(slider);
}