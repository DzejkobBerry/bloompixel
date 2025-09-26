function Hero() {
    return `
    <!-- Hero Section -->
    <section class="hero" id="hero">
        <div class="hero-content">
            <h1><span class="highlight">Hydroxy M&S</span></h1>
            <p>Strength in every space.<br>Our resin and waterproofing coatings protect surfaces at home and at work.<br>Resistance to loads, moisture, and everyday use – durability for many years.</p>
            <div class="hero-buttons">
                <a href="#contact" class="btn btn-primary">
                    <span class="btn-text">Get Free Quote</span>
                    <span class="btn-icon"><i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="#projects" class="btn btn-secondary">
                    <span class="btn-text">View Projects</span>
                </a>
            </div>
        </div>
        <div class="hero-overlay"></div>
        <div class="scroll-indicator">
            <span class="mouse">
                <span class="mouse-wheel"></span>
            </span>
            <span class="scroll-text">Scroll Down</span>
        </div>
    </section>
    `;
}

function initHero() {
    // Dodaj efekt paralaksy dla sekcji hero
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.scrollY;
        
        if (hero) {
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
}

export { Hero, initHero };