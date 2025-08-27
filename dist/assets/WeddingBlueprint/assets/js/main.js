// ===== NAVIGATION SCROLL EFFECT =====
const nav = document.querySelector('.main-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
});

// ===== MOBILE NAVIGATION =====
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');
    
    // Burger Animation
    burger.classList.toggle('toggle');
    
    // Pokaż przycisk zamykania
    if (closeMenu) {
        closeMenu.style.display = navLinks.classList.contains('nav-active') ? 'block' : 'none';
    }
});

// Dodanie obsługi przycisku zamykania menu
if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
        closeMenu.style.display = 'none';
    });
}

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links li');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
            if (closeMenu) {
                closeMenu.style.display = 'none';
            }
        }
    });
});

// ===== SMOOTH SCROLLING FOR INTERNAL LINKS =====
document.addEventListener('DOMContentLoaded', function() {
    // Dodajemy bezpośredni nasłuchiwacz dla przycisku "Poznaj naszą historię"
    const storyButton = document.getElementById('story-button');
    
    if (storyButton) {
        console.log('Story button found');
        
        // Usuwamy wszystkie istniejące nasłuchiwacze zdarzeń
        const newStoryButton = storyButton.cloneNode(true);
        storyButton.parentNode.replaceChild(newStoryButton, storyButton);
        
        // Dodajemy nowy nasłuchiwacz
        newStoryButton.addEventListener('click', function(e) {
            console.log('Story button clicked');
            e.preventDefault();
            e.stopPropagation(); // Zatrzymujemy propagację zdarzenia
            
            // Dodajemy klasę dla animacji kliknięcia
            this.classList.add('cta-clicked');
            
            // Usuwamy klasę po zakończeniu animacji
            setTimeout(() => {
                this.classList.remove('cta-clicked');
            }, 700);
            
            const targetElement = document.querySelector('#story');
            if (targetElement) {
                // Przewijanie z opóźnieniem
                setTimeout(() => {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 300);
            } else {
                console.error('Story section not found');
            }
        });
    } else {
        console.error('Story button not found');
    }
    
    // Zachowujemy ogólny kod dla innych linków wewnętrznych
    document.querySelectorAll('a[href^="#"]:not([href="#story"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                console.log(`Scrolling to ${targetId}`);
                
                // Dodajemy klasę dla animacji kliknięcia
                this.classList.add('cta-clicked');
                
                // Usuwamy klasę po zakończeniu animacji
                setTimeout(() => {
                    this.classList.remove('cta-clicked');
                }, 700);
                
                // Przewijanie z opóźnieniem
                setTimeout(() => {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 300);
            } else {
                console.error(`Element ${targetId} not found`);
            }
        });
    });
});

// ===== ANIMATION ON SCROLL =====
function revealOnScroll() {
    // Animacja sekcji
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 150) {
            section.classList.add('revealed');
            
            // Jeśli to sekcja z programem dnia, animuj jej elementy
            if (section.id === 'schedule') {
                animateScheduleItems(section);
            }
        }
    });
}

// Funkcja do animacji elementów programu dnia
function animateScheduleItems(scheduleSection) {
    const scheduleItems = scheduleSection.querySelectorAll('.schedule-item');
    
    scheduleItems.forEach((item, index) => {
        // Dodajemy opóźnienie dla każdego kolejnego elementu
        setTimeout(() => {
            item.classList.add('revealed');
        }, 150 * index); // Każdy kolejny element pojawia się z opóźnieniem 150ms
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== GOOGLE MAP INITIALIZATION =====
function initMap() {
    // Replace with actual coordinates for the venue
    const venueLocation = { lat: 52.1234, lng: 21.5678 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: venueLocation,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f9f9f9"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#c4e5f9"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#e0f3f9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });
    
    const marker = new google.maps.Marker({
        position: venueLocation,
        map: map,
        title: 'Pałac Rozalin',
        animation: google.maps.Animation.DROP
    });
    
    const infoWindow = new google.maps.InfoWindow({
        content: '<div style="width:200px;text-align:center;padding:10px;"><strong>Pałac Rozalin</strong><br>Miejsce naszego ślubu</div>'
    });
    
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// Make initMap global for the Google Maps callback
window.initMap = initMap;

// ===== RSVP FORM SUBMISSION =====
const rsvpForm = document.getElementById('rsvpForm');

if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would normally send the form data to a server
        // For now, we'll just show a success message
        
        const formData = new FormData(rsvpForm);
        const formValues = {};
        
        for (let [key, value] of formData.entries()) {
            formValues[key] = value;
        }
        
        console.log('Form submitted with values:', formValues);
        
        // Show success message
        rsvpForm.innerHTML = `
            <div class="success-message">
                <h3>Dziękujemy za potwierdzenie!</h3>
                <p>Twoja odpowiedź została zapisana. Nie możemy się doczekać, aby świętować razem z Tobą!</p>
            </div>
        `;
    });
}

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    const weddingDate = new Date('July 20, 2025 15:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Update countdown elements if they exist
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">Dni</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">Godzin</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">Minut</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-label">Sekund</span>
            </div>
        `;
    }
}

// Update countdown every second if the element exists
if (document.getElementById('countdown')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== GALLERY FUNCTIONALITY =====
const galleryButton = document.getElementById('galleryButton');
const galleryModal = document.getElementById('galleryModal');
const closeGallery = document.querySelector('.close-gallery');
const galleryTabs = document.querySelectorAll('.gallery-tab');
const tabPanes = document.querySelectorAll('.tab-pane');

// Funkcja do inicjalizacji obsługi kliknięć dla elementów galerii
function initGalleryItemsClickHandlers() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Tworzenie lightboxa
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            
            // Tworzenie kontenera na zawartość
            const lightboxContent = document.createElement('div');
            lightboxContent.classList.add('lightbox-content');
            
            // Tworzenie obrazu
            const img = document.createElement('img');
            img.src = this.src;
            img.alt = this.alt;
            
            // Tworzenie przycisku zamykania
            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close-lightbox');
            closeBtn.innerHTML = '&times;';
            
            // Dodawanie elementów do DOM
            lightboxContent.appendChild(img);
            lightboxContent.appendChild(closeBtn); // Zmiana: dodanie przycisku zamykania do lightboxContent
            lightbox.appendChild(lightboxContent);
            document.body.appendChild(lightbox);
            
            // Animacja pojawienia się lightboxa
            setTimeout(() => {
                lightbox.classList.add('show');
            }, 10);
            
            // Obsługa zamykania lightboxa
            closeBtn.addEventListener('click', () => {
                lightbox.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                }, 300);
            });
            
            // Zamykanie lightboxa po kliknięciu poza obrazem
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(lightbox);
                    }, 300);
                }
            });
        });
    });
}

// Otwieranie galerii
if (galleryButton) {
    galleryButton.addEventListener('click', () => {
        galleryModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Blokuje przewijanie strony pod modalem
        
        // Resetowanie i uruchamianie animacji napisu
        const introTitle = document.querySelector('.gallery-intro h2');
        if (introTitle) {
            introTitle.style.opacity = '0';
            setTimeout(() => {
                introTitle.style.opacity = '1';
            }, 300);
        }
        
        // Dodanie animacji do elementów galerii
        const activeTab = document.querySelector('.tab-pane.active');
        if (activeTab) {
            const galleryItems = activeTab.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, 100 * index);
            });
        }
        
        // Inicjalizuj obsługę kliknięć dla elementów galerii
        initGalleryItemsClickHandlers();
    });
}

// Zamykanie galerii
if (closeGallery) {
    closeGallery.addEventListener('click', () => {
        galleryModal.classList.remove('show');
        document.body.style.overflow = ''; // Przywraca przewijanie strony
    });
}

// Zamykanie galerii po kliknięciu poza zawartością
window.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        galleryModal.classList.remove('show');
        document.body.style.overflow = '';
    }
});

// Obsługa zakładek galerii
galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Usuń klasę active ze wszystkich zakładek
        galleryTabs.forEach(t => t.classList.remove('active'));
        
        // Dodaj klasę active do klikniętej zakładki
        tab.classList.add('active');
        
        // Ukryj wszystkie panele
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
            // Usuń klasę visible ze wszystkich elementów galerii
            const items = pane.querySelectorAll('.gallery-item');
            items.forEach(item => item.classList.remove('visible'));
        });
        
        // Pokaż odpowiedni panel
        const tabId = tab.getAttribute('data-tab');
        const activePane = document.getElementById(tabId);
        activePane.classList.add('active');
        
        // Dodaj animację do elementów galerii w aktywnej zakładce
        const galleryItems = activePane.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, 100 * index);
        });
    });
});

// Powiększanie zdjęć po kliknięciu
// Usuń lub zakomentuj ten fragment kodu (linie 541-580)
/*
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${imgSrc}" alt="Powiększone zdjęcie">
                <span class="close-lightbox">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        // Animacja pokazywania lightboxa
        setTimeout(() => {
            lightbox.classList.add('show');
        }, 10);
        
        // Zamykanie lightboxa
        const closeLightbox = lightbox.querySelector('.close-lightbox');
        closeLightbox.addEventListener('click', () => {
            lightbox.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(lightbox);
            }, 300);
        });
        
        // Zamykanie lightboxa po kliknięciu poza zdjęciem
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                }, 300);
            }
        });
    });
});
*/

// ===== HERO SECTION ANIMATIONS =====

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.documentElement.style.setProperty('--scroll-y', `${scrollY * 0.5}px`);
});

// Generate floating particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('floating-particles');
    
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    heroSection.appendChild(particlesContainer);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positioning
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

// Observer for About section
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            aboutObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer for Timeline items
// Funkcja inicjalizująca animacje timeline
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Obserwator przecięcia dla elementów timeline
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dodanie klasy visible z opóźnieniem zależnym od indeksu
                const timelineItem = entry.target;
                const index = parseInt(timelineItem.getAttribute('data-index') || '0');
                
                setTimeout(() => {
                    timelineItem.classList.add('visible');
                }, index * 200);
                
                // Przestajemy obserwować element po animacji
                timelineObserver.unobserve(timelineItem);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Dodanie indeksu do elementów timeline dla opóźnień
    timelineItems.forEach((item, index) => {
        item.setAttribute('data-index', index);
        
        // Rozpoczęcie obserwacji elementu
        timelineObserver.observe(item);
    });
}

// Inicjalizacja wszystkich animacji
document.addEventListener('DOMContentLoaded', () => {
    // Istniejące inicjalizacje
    
    // Dodajemy inicjalizację animacji timeline
    initTimelineAnimations();
    
    // Dodatkowe wywołanie po krótkim opóźnieniu, aby upewnić się, że funkcja zostanie wykonana
    setTimeout(() => {
        console.log('Ponowne wywołanie initTimelineAnimations');
        initTimelineAnimations();
        
        // Ręczne dodanie klasy visible do elementów timeline, jeśli nie zostały dodane przez observer
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                if (!item.classList.contains('visible')) {
                    console.log('Ręczne dodanie klasy visible do elementu timeline');
                    item.classList.add('visible');
                }
            }, index * 200);
        });
    }, 1000);
});

// ===== ANIMACJA PISANIA CYTATÓW =====
const quotes = document.querySelectorAll('.story-section .quote');

// Przygotowanie cytatów do animacji - owinięcie każdej litery w span
quotes.forEach(quote => {
    const text = quote.textContent;
    quote.textContent = '';
    
    // Dodanie symbolu pióra na początku
    const penSymbol = document.createElement('span');
    penSymbol.textContent = '✒️ ';
    penSymbol.style.position = 'absolute';
    penSymbol.style.left = '5px';
    penSymbol.style.top = '5px';
    penSymbol.style.fontSize = '0.8rem';
    penSymbol.style.opacity = '0.7';
    quote.appendChild(penSymbol);
    
    // Dodanie spacji po symbolu pióra
    const textContainer = document.createElement('span');
    textContainer.style.marginLeft = '20px';
    quote.appendChild(textContainer);
    
    // Owinięcie każdej litery w span
    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transitionDelay = `${index * 50}ms`;
        textContainer.appendChild(span);
    });
});

// Funkcja sprawdzająca, czy element jest widoczny w oknie przeglądarki
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    );
}

// Funkcja uruchamiająca animację dla widocznych cytatów
function animateQuotesOnScroll() {
    quotes.forEach(quote => {
        if (isElementInViewport(quote) && !quote.classList.contains('animate-writing')) {
            quote.classList.add('animate-writing');
        }
    });
}

// Uruchomienie animacji przy przewijaniu
window.addEventListener('scroll', animateQuotesOnScroll);

// Uruchomienie animacji przy załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    // Opóźnienie animacji, aby strona zdążyła się załadować
    setTimeout(animateQuotesOnScroll, 500);
});

// Funkcja do animacji elementów wskazówek dojazdu
function animateDirectionItems() {
    const locationSection = document.querySelector('.location-section');
    if (locationSection) {
        locationSection.classList.add('revealed');
    }
}

// Dodaj wywołanie funkcji do istniejącego nasłuchiwacza zdarzeń
window.addEventListener('load', function() {
    revealOnScroll(); // Istniejąca funkcja
    animateDirectionItems();
});

// W funkcji initMap() po utworzeniu markera i infoWindow

// Przykładowe współrzędne Warszawy (punkt startowy)
const startPoint = { lat: 52.2297, lng: 21.0122 };

// Rysowanie trasy między Warszawą a miejscem docelowym
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    polylineOptions: {
        strokeColor: '#D4AF37',
        strokeWeight: 5,
        strokeOpacity: 0.7
    }
});

directionsRenderer.setMap(map);

directionsService.route({
    origin: startPoint,
    destination: venueLocation,
    travelMode: google.maps.TravelMode.DRIVING
}, (response, status) => {
    if (status === 'OK') {
        directionsRenderer.setDirections(response);
    } else {
        console.error('Directions request failed due to ' + status);
    }
});

// Dodaj marker dla punktu startowego
const startMarker = new google.maps.Marker({
    position: startPoint,
    map: map,
    title: 'Warszawa',
    icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: '#9CAF88',
        fillOpacity: 1,
        strokeColor: '#FFFFFF',
        strokeWeight: 2
    }
});