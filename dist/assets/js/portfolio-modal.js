// ===== PORTFOLIO MODAL =====
let portfolioModalData;

document.addEventListener('DOMContentLoaded', function() {
    initPortfolioModal();
});

function initPortfolioModal() {
    // Dane projektów do wyświetlenia w modalu
    portfolioModalData = [
        {
            name: 'Wedding Blueprint',
            description: 'Landing Page stworzona specjalnie dla pary młodej!',
            fullDescription: 'Elegancka i funkcjonalna strona ślubna zaprojektowana dla pary młodej. Zawiera wszystkie niezbędne informacje o uroczystości, formularz RSVP oraz galerię zdjęć.',
            image: 'assets/WeddingBlueprint/assets/images/hero.jpg',
            category: 'landing',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                {
                    icon: 'fa-heart',
                    title: 'Elegancki design',
                    description: 'Nowoczesny i elegancki wygląd dopasowany do charakteru uroczystości.'
                },
                {
                    icon: 'fa-mobile-alt',
                    title: 'Responsywność',
                    description: 'Pełna optymalizacja pod urządzenia mobilne, tablety i komputery.'
                },
                {
                    icon: 'fa-calendar-check',
                    title: 'Formularz RSVP',
                    description: 'Interaktywny formularz potwierdzenia obecności z walidacją danych.'
                },
                {
                    icon: 'fa-map-marker-alt',
                    title: 'Mapa lokalizacji',
                    description: 'Interaktywna mapa z zaznaczonymi lokalizacjami ceremonii i wesela.'
                },
                {
                    icon: 'fa-clock',
                    title: 'Harmonogram dnia',
                    description: 'Przejrzysty harmonogram wydarzeń z animowaną osią czasu.'
                },
                {
                    icon: 'fa-images',
                    title: 'Galeria zdjęć',
                    description: 'Elegancka galeria zdjęć z efektami przejścia i lightboxem.'
                }
            ],
            demoUrl: 'assets/WeddingBlueprint/index.html'
        },
        {
            name: 'MMK Auto Refresh',
            description: 'System automatycznego odświeżania danych w czasie rzeczywistym',
            fullDescription: 'Zaawansowany system automatycznego odświeżania danych w czasie rzeczywistym, który umożliwia natychmiastową aktualizację informacji bez konieczności ręcznego odświeżania strony.',
            image: 'assets/MMK_AUTO_REFRESH/assets/images/gallery/galery1.jpg',
            category: 'apps',
            technologies: ['JavaScript', 'AJAX', 'PHP', 'WebSockets'],
            features: [
                {
                    icon: 'fa-sync',
                    title: 'Auto-odświeżanie',
                    description: 'Automatyczne odświeżanie danych bez przeładowania strony.'
                },
                {
                    icon: 'fa-bolt',
                    title: 'Szybkość działania',
                    description: 'Błyskawiczna aktualizacja danych w czasie rzeczywistym.'
                },
                {
                    icon: 'fa-server',
                    title: 'Optymalizacja serwera',
                    description: 'Zoptymalizowane zapytania do serwera redukujące obciążenie.'
                },
                {
                    icon: 'fa-mobile-alt',
                    title: 'Responsywność',
                    description: 'Pełna kompatybilność z urządzeniami mobilnymi.'
                },
                {
                    icon: 'fa-cogs',
                    title: 'Konfigurowalność',
                    description: 'Łatwa konfiguracja częstotliwości odświeżania i parametrów.'
                },
                {
                    icon: 'fa-chart-line',
                    title: 'Monitorowanie',
                    description: 'Śledzenie statusu połączenia i wydajności systemu.'
                }
            ],
            demoUrl: 'assets/MMK_AUTO_REFRESH/index.html'
        }
    ];

    // Tworzenie struktury HTML dla modalu
    createPortfolioModalStructure();

    // Pobieranie elementów DOM
    const moreProjectsButton = document.querySelector('.portfolio-more a');
    const modalOverlay = document.querySelector('.portfolio-modal-overlay');
    const modal = document.querySelector('.portfolio-modal');
    const closeButton = document.querySelector('.portfolio-modal-close');
    const demoButton = document.querySelector('.portfolio-demo-button');

    // Dodawanie event listenera do przycisku "Zobacz więcej projektów"
    if (moreProjectsButton) {
        moreProjectsButton.addEventListener('click', function(e) {
            // Otwieranie modalu z projektami
            openPortfolioModal();
            
            // Zapobieganie domyślnemu zachowaniu linku
            e.preventDefault();
        });
    }

    // Zamykanie modalu po kliknięciu przycisku zamknięcia
    if (closeButton) {
        closeButton.addEventListener('click', closePortfolioModal);
    }

    // Zamykanie modalu po kliknięciu poza nim
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closePortfolioModal();
            }
        });
    }

    // Obsługa klawisza Escape do zamykania modalu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closePortfolioModal();
        }
    });
}

// Funkcja do tworzenia struktury HTML modalu
function createPortfolioModalStructure() {
    // Sprawdzenie, czy modal już istnieje
    if (document.querySelector('.portfolio-modal-overlay')) {
        return;
    }

    // Tworzenie elementów modalu
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'portfolio-modal-overlay';

    const modalContent = document.createElement('div');
    modalContent.className = 'portfolio-modal';

    // Struktura modalu
    modalContent.innerHTML = `
        <div class="portfolio-modal-header">
            <button class="portfolio-modal-close"><i class="fas fa-times"></i></button>
            <div class="portfolio-header-content">
                <div class="portfolio-badge">Dodatkowe projekty</div>
                <h2 class="portfolio-name">Nasze realizacje</h2>
                <p class="portfolio-description">Zobacz więcej naszych projektów</p>
            </div>
        </div>
        <div class="portfolio-modal-body">
            <div class="portfolio-grid">
                <!-- Tutaj będą dodawane projekty -->
            </div>
        </div>
    `;

    // Dodawanie modalu do DOM
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
}

// Funkcja do otwierania modalu z projektami
function openPortfolioModal() {
    // Sprawdzenie, czy modal istnieje, jeśli nie - utworzenie go
    if (!document.querySelector('.portfolio-modal-overlay')) {
        createPortfolioModalStructure();
    }
    
    const modalOverlay = document.querySelector('.portfolio-modal-overlay');
    const modal = document.querySelector('.portfolio-modal');
    const portfolioGrid = modal.querySelector('.portfolio-grid');
    
    // Czyszczenie siatki projektów
    portfolioGrid.innerHTML = '';
    
    // Dodawanie projektów do siatki
    portfolioModalData.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', project.category);
        
        portfolioItem.innerHTML = `
            <div class="portfolio-item-inner">
                <div class="portfolio-image">
                    <img src="${project.image}" alt="${project.name}">
                    <div class="portfolio-tags">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="portfolio-overlay"></div>
                </div>
                <div class="portfolio-info">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="portfolio-links">
                        <a href="${project.demoUrl}" class="btn btn-outline portfolio-link" target="_blank">Zobacz demo</a>
                        <a href="#" class="portfolio-preview" data-project-index="0"><i class="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Pokazanie modalu
    modalOverlay.classList.add('active');
    setTimeout(() => {
        modal.classList.add('active');
    }, 100);
}

// Funkcja do zamykania modalu
function closePortfolioModal() {
    const modalOverlay = document.querySelector('.portfolio-modal-overlay');
    const modal = document.querySelector('.portfolio-modal');

    if (modalOverlay && modal) {
        // Animacja zamknięcia
        modal.classList.remove('active');
        setTimeout(() => {
            modalOverlay.classList.remove('active');
        }, 300);
    }
}