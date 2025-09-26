function About() {
    return `
    <!-- About Section -->
    <section class="about" id="about">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">About Hydroxy M&S</h2>
                <p class="section-description">We specialize in durable waterproofing systems and resin flooring for homes, commercial buildings, and industrial spaces.<br>We combine experience, proven technologies, and top-quality materials to create solutions resistant to loads, moisture, and heavy use.<br>Our mission is to provide reliable concrete protection and long-lasting surfaces that can withstand any challenge.</p>
            </div>
            
            <div class="features">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Premium Quality</h3>
                    <p>Only the finest materials and proven techniques for lasting results.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Expert Team</h3>
                    <p>Certified professionals with extensive industry experience.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-medal"></i>
                    </div>
                    <h3>Guaranteed Results</h3>
                    <p>Full warranty coverage and satisfaction guarantee.</p>
                </div>
            </div>
        </div>
    </section>
    `;
}

function initAbout() {
    // Animacja pojawiania się elementów podczas przewijania
    const animateFeatureCards = function() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardPosition < windowHeight - 100) {
                card.classList.add('animate');
            }
        });
    };
    
    // Wywołaj animację przy załadowaniu strony
    animateFeatureCards();
    
    // Wywołaj animację podczas przewijania
    window.addEventListener('scroll', animateFeatureCards);
}

export { About, initAbout };