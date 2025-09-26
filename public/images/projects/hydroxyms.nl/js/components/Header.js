function Header() {
    return `
    <!-- Nawigacja -->
    <header class="navbar" id="navbar">
        <div class="container">
            <div class="logo">
                <a href="index.html" aria-label="Strona główna Hydroxy M&S">
                    <span class="logo-text">Hydroxy M&S</span>
                    <span class="tagline" data-translate="tagline">Waterproofing & Epoxy Systems</span>
                </a>
            </div>
            <nav>
                <ul class="nav-links" id="navLinks">
                    <li><a href="index.html" class="active" data-translate="home">Home</a></li>
                    <li><a href="#about" data-translate="about">About Us</a></li>
                    <li><a href="#projects" data-translate="projects">View Projects</a></li>
                    <li><a href="#testimonials" data-translate="testimonials">Testimonials</a></li>
                    <li><a href="#contact" data-translate="contact">Contact</a></li>
                    
                    <!-- Suwak językowy w menu mobilnym -->
                    <li class="mobile-language-switcher">
                        <div class="language-switch">
                            <span class="language-label en">EN</span>
                            <label class="switch">
                                <input type="checkbox" class="language-switch-input">
                                <span class="slider"></span>
                            </label>
                            <span class="language-label nl">NL</span>
                        </div>
                    </li>
                </ul>
            </nav>
            
            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menu mobilne">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </header>
    `;
}

function initHeader() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Zamykanie menu po kliknięciu w link
    const navLinksItems = document.querySelectorAll('.nav-links li a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Efekt przewijania dla nawigacji
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Inicjalizacja systemu językowego
    import('../language.js').then(module => {
        const { languageManager } = module;
        // System językowy zostanie automatycznie zainicjalizowany
    }).catch(error => {
        console.error('Błąd ładowania systemu językowego:', error);
    });
}

export { Header, initHeader };