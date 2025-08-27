function Header() {
    return `
    <!-- Nawigacja -->
    <header class="navbar" id="navbar">
        <div class="container">
            <div class="logo">
                <a href="index.html" aria-label="Strona główna Hydroxy M&S">
                    <span class="logo-text">Hydroxy M&S</span>
                    <span class="tagline">Waterproofing & Epoxy Systems</span>
                </a>
            </div>
            <nav>
                <ul class="nav-links" id="navLinks">
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#projects">View Projects</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
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
}

export { Header, initHeader };