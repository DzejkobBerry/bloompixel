function Testimonials() {
    return `
    <!-- Testimonials Section -->
    <section class="testimonials" id="testimonials">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Client Testimonials</h2>
                <p class="section-description">What our satisfied clients say about our work</p>
            </div>
            
            <div class="testimonial-slider">
                <div class="testimonial-controls">
                    <button class="prev-btn" aria-label="Poprzednia opinia"><i class="fas fa-chevron-left"></i></button>
                </div>
                
                <div class="testimonial-container" id="testimonialContainer">
                    <div class="testimonial-card active" aria-hidden="false">
                        <div class="client-info">
                            <div class="client-avatar">
                                <div class="avatar-placeholder">SM</div>
                            </div>
                            <div>
                                <h4>Sarah Mitchell</h4>
                                <p>Residential Client</p>
                            </div>
                        </div>
                        <p class="testimonial-text">"Absolutely stunning result! The epoxy flooring transformed our entire home. Professional service from start to finish."</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    
                    <div class="testimonial-card" aria-hidden="true">
                        <div class="client-info">
                            <div class="client-avatar">
                                <div class="avatar-placeholder">JD</div>
                            </div>
                            <div>
                                <h4>John Davis</h4>
                                <p>Commercial Client</p>
                            </div>
                        </div>
                        <p class="testimonial-text">"Our office floors look incredible after Hydroxy's work. The team was professional, efficient, and the quality exceeded our expectations."</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    
                    <div class="testimonial-card" aria-hidden="true">
                        <div class="client-info">
                            <div class="client-avatar">
                                <div class="avatar-placeholder">AK</div>
                            </div>
                            <div>
                                <h4>Anna Kowalski</h4>
                                <p>Residential Client</p>
                            </div>
                        </div>
                        <p class="testimonial-text">"Hydroxy M&S transformed our bathroom with their waterproofing solutions. The attention to detail and quality of work was exceptional."</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    
                    <!-- Dodatkowe opinie zostały skrócone dla czytelności -->
                </div>
                
                <div class="testimonial-controls">
                    <button class="next-btn" aria-label="Następna opinia"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            
            <div class="testimonial-dots" id="testimonialDots">
                <button class="dot active" aria-label="Opinia 1"></button>
                <button class="dot" aria-label="Opinia 2"></button>
                <button class="dot" aria-label="Opinia 3"></button>
                <!-- Dodatkowe kropki zostały skrócone dla czytelności -->
            </div>
        </div>
    </section>
    `;
}

function initTestimonials() {
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
}

export { Testimonials, initTestimonials };