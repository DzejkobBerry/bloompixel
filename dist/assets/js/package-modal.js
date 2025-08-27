// ===== PACKAGE MODAL =====
document.addEventListener('DOMContentLoaded', function() {
    // Zakomentuj wywołanie funkcji inicjalizującej, jeśli chcesz używać starego designu
    initPackageModal();
});

// Reszta kodu pozostaje bez zmian
function initPackageModal() {
    // Dane pakietów
    const packageData = {
        'basic': {
            name: 'Basic',
            price: '300',
            currency: 'EUR',
            description: 'Idealne dla małych firm i freelancerów',
            fullDescription: 'Pakiet Basic to idealne rozwiązanie dla małych firm i freelancerów, którzy potrzebują profesjonalnej obecności w internecie. Oferujemy responsywną stronę typu wizytówka z podstawowym designem, formularzem kontaktowym oraz podstawową optymalizacją SEO.',
            features: [
                {
                    icon: 'fas fa-laptop-code',
                    title: 'Responsywna strona',
                    description: 'Strona dostosowana do wszystkich urządzeń - komputerów, tabletów i smartfonów.'
                },
                {
                    icon: 'fas fa-palette',
                    title: 'Podstawowy design',
                    description: 'Profesjonalny wygląd strony z podstawowymi elementami graficznymi i maksymalnie 5 podstronami.'
                },
                {
                    icon: 'fas fa-envelope',
                    title: 'Formularz kontaktowy',
                    description: 'Prosty formularz kontaktowy umożliwiający klientom łatwe skontaktowanie się z Tobą.'
                },
                {
                    icon: 'fas fa-search',
                    title: 'Podstawowa optymalizacja SEO',
                    description: 'Podstawowe ustawienia SEO, które pomogą Twojej stronie być widoczną w wyszukiwarkach.'
                },
                {
                    icon: 'fas fa-chart-line',
                    title: 'Google Analytics',
                    description: 'Integracja z Google Analytics do śledzenia ruchu na stronie i podstawowych statystyk.'
                },
                {
                    icon: 'fas fa-share-alt',
                    title: 'Integracja z social media',
                    description: 'Połączenie strony z Twoimi profilami w mediach społecznościowych.'
                }
            ],
            // Dla pakietu Basic (około linia 63)
            additionalInfo: [
                {
                    icon: 'fas fa-server',
                    title: 'Hosting i domena',
                    description: 'Cena nie obejmuje hostingu i domeny. Możesz wykupić subskrypcję za 55 EUR za pierwszy miesiąc (każdy kolejny miesiąc 35 EUR), która zawiera hosting i domenę.'
                },
                {
                    icon: 'fas fa-clock',
                    title: 'Czas realizacji',
                    description: 'Standardowy czas realizacji pakietu Basic wynosi 2-3 tygodnie od dostarczenia wszystkich materiałów.'
                },
                {
                    icon: 'fas fa-life-ring',
                    title: 'Wsparcie techniczne',
                    description: 'Zapewniamy podstawowe wsparcie techniczne przez 3 miesiące od uruchomienia strony.'
                }
            ],
            includedFeatures: [
                'Responsywna strona typu wizytówka (do 5 podstron)',
                'Podstawowy design',
                'Formularz kontaktowy',
                'Podstawowa optymalizacja SEO',
                'Integracja z Google Analytics',
                'Integracja z social media',
                'Optymalizacja mobilna',
                'Szybkie ładowanie strony'
            ],
            excludedFeatures: [
                'System CMS',
                'Blog',
                'Zaawansowane animacje',
                'Integracja z systemami zewnętrznymi'
            ]
        },
        'premium': {
            name: 'Premium',
            price: '500',
            currency: 'EUR',
            description: 'Dla rozwijających się firm',
            fullDescription: 'Pakiet Premium to rozszerzona oferta dla rozwijających się firm, które potrzebują bardziej zaawansowanej strony internetowej. Oferujemy responsywną stronę do 10 podstron z zaawansowanym designem, formularzem kontaktowym oraz zaawansowaną optymalizacją SEO.',
            features: [
                {
                    icon: 'fas fa-laptop-code',
                    title: 'Rozbudowana strona',
                    description: 'Strona z możliwością dodania do 10 podstron, dostosowana do wszystkich urządzeń.'
                },
                {
                    icon: 'fas fa-palette',
                    title: 'Zaawansowany design',
                    description: 'Nowoczesny, profesjonalny wygląd strony z zaawansowanymi elementami graficznymi i animacjami.'
                },
                {
                    icon: 'fas fa-envelope',
                    title: 'Rozbudowany formularz kontaktowy',
                    description: 'Zaawansowany formularz kontaktowy z dodatkowymi polami, walidacją i możliwością załączania plików.'
                },
                {
                    icon: 'fas fa-search',
                    title: 'Zaawansowana optymalizacja SEO',
                    description: 'Kompleksowa optymalizacja SEO, która zwiększy widoczność Twojej strony w wyszukiwarkach, w tym meta tagi, sitemap i optymalizacja treści.'
                },
                {
                    icon: 'fas fa-share-alt',
                    title: 'Zaawansowana integracja z social media',
                    description: 'Zaawansowana integracja z mediami społecznościowymi, w tym feed z Instagrama czy Twittera oraz przyciski udostępniania.'
                },
                {
                    icon: 'fas fa-film',
                    title: 'Podstawowe animacje',
                    description: 'Profesjonalne animacje zwiększające atrakcyjność strony i poprawiające UX, w tym animacje przewijania i interaktywne elementy.'
                }
            ],
            // Dla pakietu Premium (około linia 127)
            additionalInfo: [
                {
                    icon: 'fas fa-server',
                    title: 'Hosting i domena',
                    description: 'Cena nie obejmuje hostingu i domeny. Możesz wykupić subskrypcję za 55 EUR za pierwszy miesiąc (każdy kolejny miesiąc 35 EUR), która zawiera hosting i domenę.'
                },
                {
                    icon: 'fas fa-clock',
                    title: 'Czas realizacji',
                    description: 'Standardowy czas realizacji pakietu Premium wynosi 3-5 tygodni od dostarczenia wszystkich materiałów.'
                },
                {
                    icon: 'fas fa-life-ring',
                    title: 'Wsparcie techniczne',
                    description: 'Zapewniamy rozszerzone wsparcie techniczne przez 6 miesięcy od uruchomienia strony, w tym pomoc w aktualizacjach i rozwiązywaniu problemów.'
                }
            ],
            includedFeatures: [
                'Responsywna strona do 10 podstron',
                'Zaawansowany design z animacjami',
                'Rozbudowany formularz kontaktowy',
                'Zaawansowana optymalizacja SEO',
                'Zaawansowana integracja z social media',
                'Wielojęzyczność (2 języki)',
                'Rozszerzona analityka',
                'Certyfikat SSL',
                'Zaawansowana optymalizacja mobilna'
            ],
            excludedFeatures: [
                'System CMS',
                'Blog',
                'Integracja z systemami płatności'
            ]
        },
        'enterprise': {
            name: 'Enterprise',
            price: '2000+',
            currency: 'EUR',
            description: 'Dla dużych firm i korporacji',
            fullDescription: 'Pakiet Enterprise to kompleksowe rozwiązanie dla dużych firm i korporacji, które potrzebują zaawansowanej strony internetowej z systemem CMS i blogiem. Oferujemy nieograniczoną liczbę podstron, premium design, zaawansowany system CMS oraz blog z kategoriami i tagami.',
            features: [
                {
                    icon: 'fas fa-laptop-code',
                    title: 'Nieograniczona liczba podstron',
                    description: 'Możliwość dodania nieograniczonej liczby podstron, dostosowanych do wszystkich urządzeń.'
                },
                {
                    icon: 'fas fa-palette',
                    title: 'Premium design',
                    description: 'Ekskluzywny, unikalny design dostosowany do identyfikacji wizualnej Twojej firmy, z zaawansowanymi animacjami i efektami.'
                },
                {
                    icon: 'fas fa-cogs',
                    title: 'Zaawansowany system CMS',
                    description: 'System zarządzania treścią umożliwiający łatwe aktualizowanie strony bez wiedzy technicznej, z niestandardowymi typami treści i polami.'
                },
                {
                    icon: 'fas fa-blog',
                    title: 'Blog z kategoriami i tagami',
                    description: 'Profesjonalny blog z systemem kategorii, tagów, wyszukiwania i komentarzy, z możliwością planowania publikacji.'
                },
                {
                    icon: 'fas fa-envelope',
                    title: 'Zaawansowane formularze',
                    description: 'Różnorodne formularze dostosowane do potrzeb Twojej firmy, z zaawansowaną walidacją, integracją z CRM i automatycznymi powiadomieniami.'
                },
                {
                    icon: 'fas fa-search',
                    title: 'Kompleksowa optymalizacja SEO',
                    description: 'Pełna optymalizacja SEO, która zapewni wysokie pozycje w wyszukiwarkach, w tym zaawansowane meta tagi, strukturalne dane i optymalizacja wydajności.'
                }
            ],
            additionalInfo: [
                {
                    icon: 'fas fa-server',
                    title: 'Hosting i domena',
                    description: 'Cena nie obejmuje hostingu i domeny. Dla projektów Enterprise oferujemy również dedykowane serwery z zwiększoną wydajnością.'
                },
                {
                    icon: 'fas fa-clock',
                    title: 'Czas realizacji',
                    description: 'Standardowy czas realizacji pakietu Enterprise wynosi 8-12 tygodni od dostarczenia wszystkich materiałów, w zależności od złożoności projektu.'
                },
                {
                    icon: 'fas fa-life-ring',
                    title: 'Wsparcie techniczne',
                    description: 'Zapewniamy pełne wsparcie techniczne przez 12 miesięcy od uruchomienia strony, w tym dedykowanego opiekuna projektu i regularne konsultacje.'
                }
            ],
            includedFeatures: [
                'Nieograniczona liczba podstron',
                'Premium design z zaawansowanymi animacjami',
                'Zaawansowany system CMS',
                'Blog z kategoriami i tagami',
                'Zaawansowane formularze',
                'Kompleksowa optymalizacja SEO',
                'Integracja z systemami zewnętrznymi',
                'Wielojęzyczność',
                'Strefa klienta / użytkownika',
                'Funkcje e-commerce',
                'Zaawansowana analityka',
                'Szkolenie z obsługi CMS',
                'Zaawansowane zabezpieczenia'
            ],
            excludedFeatures: []
        }
    };

    // Tworzenie struktury HTML dla modalu
    createModalStructure();

    // Pobieranie elementów DOM
    const packageButtons = document.querySelectorAll('.pricing-footer a');
    const modalOverlay = document.querySelector('.package-modal-overlay');
    const modal = document.querySelector('.package-modal');
    const closeButton = document.querySelector('.package-modal-close');
    const contactButton = document.querySelector('.package-cta-button');

    // Dodawanie event listenerów do przycisków pakietów
    packageButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Zapobieganie domyślnemu zachowaniu linku
            e.preventDefault();
            
            // Określenie typu pakietu na podstawie najbliższego elementu pricing-card
            const pricingCard = this.closest('.pricing-card');
            const packageTitle = pricingCard.querySelector('.pricing-header h3').textContent.toLowerCase();
            
            // Otwieranie modalu z odpowiednim pakietem
            openPackageModal(packageTitle);
        });
    });

    // Zamykanie modalu po kliknięciu przycisku zamknięcia
if (closeButton) {
    closeButton.addEventListener('click', closePackageModal);
}

    // Zamykanie modalu po kliknięciu poza nim
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closePackageModal();
            }
        });
    }

    // Przekierowanie do sekcji kontaktowej po kliknięciu przycisku CTA
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            closePackageModal();
            
            // Przewijanie do sekcji kontaktowej
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const contactPosition = contactSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: contactPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Obsługa klawisza Escape do zamykania modalu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closePackageModal();
        }
    });

    // Funkcja do tworzenia struktury HTML modalu
    function createModalStructure() {
        // Sprawdzenie, czy modal już istnieje
        if (document.querySelector('.package-modal-overlay')) {
            return;
        }

        // Tworzenie elementów modalu
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'package-modal-overlay';

        const modalContent = document.createElement('div');
        modalContent.className = 'package-modal';

        // Struktura modalu
        modalContent.innerHTML = `
            <div class="package-modal-header">
                <button class="package-modal-close">X</button>
                <div class="package-header-content">
                    <h3 class="package-name">Nazwa pakietu</h3>
                </div>
            </div>
            <div class="package-modal-body">
                <div class="package-description">
                    <p>Pełny opis pakietu...</p>
                </div>
                <div class="package-tabs-container">
                    <div class="package-tabs">
                        <button class="package-tab active" data-tab="features">Kluczowe funkcje</button>
                        <button class="package-tab" data-tab="additional">Dodatkowe informacje</button>
                        <button class="package-tab" data-tab="included-excluded">Zawarte funkcje</button>
                    </div>
                </div>
                <div class="package-tab-content active" id="features-tab">
                    <h3 class="package-section-title">Kluczowe funkcje</h3>
                    <div class="package-features-list">
                        <!-- Tutaj będą dodawane funkcje pakietu -->
                    </div>
                </div>
                <div class="package-tab-content" id="additional-tab">
                    <h3 class="package-section-title">Dodatkowe informacje</h3>
                    <div class="package-additional-list">
                        <!-- Tutaj będą dodawane dodatkowe informacje -->
                    </div>
                </div>
                <div class="package-tab-content" id="included-excluded-tab">
                    <h3 class="package-section-title">Zawarte i niezawarte funkcje</h3>
                    <div class="package-included-excluded">
                        <div class="package-included">
                            <h4>Zawiera</h4>
                            <ul class="package-included-list">
                                <!-- Tutaj będą dodawane zawarte funkcje -->
                            </ul>
                        </div>
                        <div class="package-excluded">
                            <h4>Nie zawiera</h4>
                            <ul class="package-excluded-list">
                                <!-- Tutaj będą dodawane niezawarte funkcje -->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="package-modal-footer">
                    <a href="#contact" class="package-cta-button">Skontaktuj się</a>
                </div>
            </div>
        `;

        // Dodawanie modalu do DOM
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);

        // Dodawanie event listenerów do zakładek
        const tabButtons = modalContent.querySelectorAll('.package-tab');
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Usuwanie klasy active ze wszystkich zakładek i zawartości
                tabButtons.forEach(btn => btn.classList.remove('active'));
                const tabContents = modalContent.querySelectorAll('.package-tab-content');
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Dodawanie klasy active do klikniętej zakładki i odpowiedniej zawartości
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                const tabContent = modalContent.querySelector(`#${tabId}-tab`);
                if (tabContent) {
                    tabContent.classList.add('active');
                }
            });
        });
    }

    // Funkcja do otwierania modalu z danymi pakietu
    function openPackageModal(packageType) {
        // Sprawdzenie, czy modal istnieje, jeśli nie - utworzenie go
        if (!document.querySelector('.package-modal-overlay')) {
            createModalStructure();
        }
        
        const modalOverlay = document.querySelector('.package-modal-overlay');
        const modal = document.querySelector('.package-modal');
        
        // Usunięcie wszystkich klas pakietów
        modal.classList.remove('basic', 'premium', 'enterprise');
        
        // Dodanie odpowiedniej klasy w zależności od typu pakietu
        modal.classList.add(packageType.toLowerCase());
        
        // Wypełnienie modalu danymi pakietu
        const packageInfo = packageData[packageType];
        
        // Aktualizacja nagłówka
        modal.querySelector('.package-name').textContent = packageInfo.name;
        // Usuwamy poniższe linie, które aktualizują cenę i opis
        // modal.querySelector('.amount').textContent = packageInfo.price;
        // modal.querySelector('.currency').textContent = packageInfo.currency;
        // modal.querySelector('.price-description').textContent = packageInfo.description;
        
        // Aktualizacja opisu
        modal.querySelector('.package-description p').textContent = packageInfo.fullDescription;
        
        // Aktualizacja funkcji
        const featuresContainer = modal.querySelector('.package-features-list');
        featuresContainer.innerHTML = '';
        
        packageInfo.features.forEach((feature, index) => {
            const featureItem = document.createElement('div');
            featureItem.className = 'package-feature-item';
            featureItem.innerHTML = `
                <div class="feature-icon"><i class="${feature.icon}"></i></div>
                <h4 class="feature-title">${feature.title}</h4>
                <p class="feature-description">${feature.description}</p>
            `;
            featuresContainer.appendChild(featureItem);
            
            // Dodanie animacji z opóźnieniem
            setTimeout(() => {
                featureItem.classList.add('animate');
            }, 100 * index);
        });
        
        // Aktualizacja dodatkowych informacji
        const additionalContainer = modal.querySelector('.package-additional-list');
        additionalContainer.innerHTML = '';
        
        packageInfo.additionalInfo.forEach(info => {
            const infoItem = document.createElement('div');
            infoItem.className = 'package-additional-item';
            infoItem.innerHTML = `
                <h4 class="additional-title"><i class="${info.icon}"></i> ${info.title}</h4>
                <p class="additional-description">${info.description}</p>
            `;
            additionalContainer.appendChild(infoItem);
        });
        
        // Aktualizacja zawartych funkcji
        const includedList = modal.querySelector('.package-included-list');
        includedList.innerHTML = '';
        
        packageInfo.includedFeatures.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${item}`;
            includedList.appendChild(li);
        });
        
        // Aktualizacja niezawartych funkcji
        const excludedList = modal.querySelector('.package-excluded-list');
        excludedList.innerHTML = '';
        
        if (packageInfo.excludedFeatures.length > 0) {
            packageInfo.excludedFeatures.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-times"></i> ${item}`;
                excludedList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-info-circle"></i> Ten pakiet zawiera wszystkie dostępne funkcje`;
            excludedList.appendChild(li);
        }
        
        // Pokazanie modalu
        document.body.style.overflow = 'hidden'; // Blokowanie przewijania strony
        modalOverlay.classList.add('active');
        setTimeout(() => {
            modal.classList.add('active');
        }, 100);
    }

    // Funkcja do zamykania modalu
    function closePackageModal() {
        const modalOverlay = document.querySelector('.package-modal-overlay');
        const modal = document.querySelector('.package-modal');

        if (modalOverlay && modal) {
            // Animacja zamknięcia
            modal.classList.remove('active');
            setTimeout(() => {
                modalOverlay.classList.remove('active');
                // Odblokowanie przewijania strony
                document.body.style.overflow = '';
            }, 300);
        }
    }
}