// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const loadingBar = document.getElementById('loading-bar');
    const loadingPercentage = document.getElementById('loading-percentage');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        loadingBar.style.width = progress + '%';
        loadingPercentage.textContent = Math.round(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('hide');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 500);
        }
    }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicjalizacja wszystkich komponentów
    initNavigation();
    initializeAboutModal();
    initScrollToSection();
    initBackToTop();
    initParticles();
    initVideoBackground();
    initScrollSpy();
});

// About Modal Functionality
function initializeAboutModal() {
    const modal = document.getElementById('aboutModal');
    const btn = document.querySelector('.hero-more-button .btn');
    const closeBtn = document.querySelector('.modal-close');
    
    // Open modal when "Meer over ons" button is clicked
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openAboutModal();
        });
    }
    
    // Close modal when X is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', closeAboutModal);
    }
    
    // Close modal when clicking outside of it
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeAboutModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeAboutModal();
        }
    });
}

function openAboutModal() {
    const modal = document.getElementById('aboutModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeAboutModal() {
    const modal = document.getElementById('aboutModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Obsługa nawigacji mobilnej
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navItems = document.querySelectorAll('.nav-item');
    const header = document.querySelector('.header');
    
    function setMenuState() {
        if (window.innerWidth <= 576) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navMenu.style.display = 'none';
            document.body.classList.remove('no-scroll');
        } else {
            navMenu.style.display = 'flex';
        }
    }
    
    setMenuState();
    window.addEventListener('resize', setMenuState);
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            
            if (navMenu.classList.contains('active')) {
                navMenu.style.display = 'flex';
                navItems.forEach((item, index) => {
                    item.style.setProperty('--item-index', index);
                });
            } else {
                setTimeout(() => {
                    if (!navMenu.classList.contains('active')) {
                        navMenu.style.display = 'none';
                    }
                }, 400);
            }
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 576) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('no-scroll');
                setTimeout(() => {
                    navMenu.style.display = 'none';
                }, 400);
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// POPRAWIONA funkcja scroll - wyklucza przycisk modala
function initScrollToSection() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        // Wyklucz przycisk "Meer over ons" z obsługi scroll
        if (link.closest('.hero-more-button')) {
            return;
        }
        
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Przycisk powrotu na górę strony
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            const heroSection = document.getElementById('home');
            
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Particles animation
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Obsługa wideo w tle
function initVideoBackground() {
    const heroVideo = document.getElementById('heroVideo');
    const opinionsVideo = document.getElementById('opinionsVideo');
    
    function isMobileDevice() {
        return (window.innerWidth <= 768) || 
               ('ontouchstart' in window) || 
               (navigator.maxTouchPoints > 0);
    }
    
    function forceVideoPlay(video) {
        if (!video) return;
        
        // Ustaw wszystkie atrybuty potrzebne do automatycznego odtwarzania
        video.muted = true;
        video.setAttribute('muted', '');
        video.setAttribute('autoplay', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        video.setAttribute('preload', 'auto');
        video.defaultMuted = true;
        
        // Wielokrotne próby odtworzenia
        const attemptPlay = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Wideo odtwarza się automatycznie');
                }).catch(error => {
                    console.log('Próba automatycznego odtworzenia:', error);
                    // Kolejna próba po krótkim czasie
                    setTimeout(attemptPlay, 500);
                });
            }
        };
        
        // Natychmiastowa próba
        attemptPlay();
        
        // Próba po załadowaniu metadanych
        video.addEventListener('loadedmetadata', attemptPlay);
        
        // Próba po pełnym załadowaniu
        video.addEventListener('canplay', attemptPlay);
        
        // Próba po interakcji użytkownika (scroll, touch, click)
        const userInteractionEvents = ['touchstart', 'touchend', 'mousedown', 'keydown', 'scroll'];
        const playOnInteraction = () => {
            attemptPlay();
            // Usuń listenery po pierwszej interakcji
            userInteractionEvents.forEach(event => {
                document.removeEventListener(event, playOnInteraction);
            });
        };
        
        userInteractionEvents.forEach(event => {
            document.addEventListener(event, playOnInteraction, { once: true, passive: true });
        });
    }
    
    if (heroVideo) {
        if (isMobileDevice()) {
            // Agresywne próby automatycznego odtworzenia na mobile
            forceVideoPlay(heroVideo);
            
            // Dodatkowe próby po załadowaniu strony
            window.addEventListener('load', () => {
                setTimeout(() => forceVideoPlay(heroVideo), 100);
                setTimeout(() => forceVideoPlay(heroVideo), 500);
                setTimeout(() => forceVideoPlay(heroVideo), 1000);
                setTimeout(() => forceVideoPlay(heroVideo), 2000);
            });
        } else {
            // Na desktopie standardowe odtwarzanie
            heroVideo.play().catch(error => {
                console.log('Desktop autoplay failed:', error);
            });
        }
    }
    
    if (opinionsVideo) {
        // Podobna implementacja dla wideo w testimonials
        if (isMobileDevice()) {
            forceVideoPlay(opinionsVideo);
        } else {
            opinionsVideo.play().catch(error => {
                console.log('Opinions video autoplay failed:', error);
            });
        }
    }
}

// ScrollSpy functionality
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// Services particles
function initServicesParticles() {
    const servicesSection = document.querySelector('.services');
    if (!servicesSection) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'service-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        servicesSection.appendChild(particle);
    }
}

// Hero text animation
document.addEventListener('DOMContentLoaded', function() {
    const heroTextAnimation = document.getElementById('heroTextAnimation');
    if (heroTextAnimation) {
        const spans = heroTextAnimation.querySelectorAll('span');
        let currentIndex = 0;
        
        function showNextText() {
            spans.forEach(span => span.classList.remove('active'));
            spans[currentIndex].classList.add('active');
            currentIndex = (currentIndex + 1) % spans.length;
        }
        
        showNextText();
        setInterval(showNextText, 3000);
    }
});

// Initialize services particles
document.addEventListener('DOMContentLoaded', function() {
    initServicesParticles();
});

window.addEventListener('resize', function() {
    // Reinitialize particles on resize if needed
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer && window.innerWidth > 768) {
        particlesContainer.innerHTML = '';
        initParticles();
    }
});