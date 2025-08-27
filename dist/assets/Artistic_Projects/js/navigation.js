// Funkcja do obsługi nawigacji i zakładek
class NavigationService {
    constructor() {
        this.tabs = document.querySelectorAll('.nav-tab');
        this.contentSections = document.querySelectorAll('.content-section');
        this.init();
    }

    init() {
        // Dodanie nasłuchiwania zdarzeń do zakładek
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => this.handleTabClick(e));
        });
    }

    handleTabClick(event) {
        const clickedTab = event.currentTarget;
        const targetId = clickedTab.getAttribute('data-target');

        // Usunięcie klasy aktywnej ze wszystkich zakładek
        this.tabs.forEach(tab => tab.classList.remove('active'));
        
        // Ukrycie wszystkich sekcji zawartości
        this.contentSections.forEach(section => section.classList.remove('active'));

        // Aktywacja wybranej zakładki i sekcji
        clickedTab.classList.add('active');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }
}

// Inicjalizacja usługi nawigacji po załadowaniu dokumentu
document.addEventListener('DOMContentLoaded', () => {
    new NavigationService();
}); 