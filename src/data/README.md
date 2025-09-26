# Portfolio Projects - Instrukcje zarządzania

## 📁 Struktura plików:

```
public/images/
├── projects/          # Główne obrazy projektów
├── screenshots/       # Zrzuty ekranu i galerie
└── README.md         # Instrukcje dla obrazów

src/data/
├── projects.ts       # Główny plik z danymi projektów (UŻYWANY)
├── projects.json     # Backup danych
└── README.md        # Ten plik
```

## 🎯 Jak dodać nowy projekt z własnymi plikami:

### Krok 1: Dodaj obrazy
Wrzuć swoje pliki do folderów:
- `public/images/projects/nazwa-projektu-main.jpg` - główny obraz
- `public/images/screenshots/nazwa-projektu-1.jpg` - dodatkowe zrzuty

### Krok 2: Edytuj dane projektu
Otwórz plik `src/data/projects.ts` i dodaj nowy projekt:

```javascript
{
  "id": "moj-nowy-projekt",
  "title": "Nazwa Mojego Projektu",
  "category": "web-app", // lub "website", "ui-design"
  "image": "/images/projects/moj-projekt-main.jpg", // ← LOKALNY PLIK!
  "description": "Szczegółowy opis projektu...",
  "technologies": ["React", "TypeScript", "Tailwind CSS"],
  "demoUrl": "/images/screenshots/moj-projekt-1.jpg", // Może być zrzut ekranu
  "features": [
    "Funkcjonalność 1",
    "Funkcjonalność 2",
    "Funkcjonalność 3"
  ]
}
```

## 📋 Schema projektu:

| Pole | Typ | Opis | Przykład |
|------|-----|------|----------|
| `id` | string | Unikalny identyfikator | `"ecommerce-shop"` |
| `title` | string | Nazwa projektu | `"Sklep E-commerce"` |
| `category` | string | Kategoria projektu | `"web-app"`, `"website"`, `"ui-design"` |
| `image` | string | Ścieżka do głównego obrazu | `"/images/projects/shop.jpg"` |
| `description` | string | Opis projektu | `"Nowoczesny sklep..."` |
| `technologies` | array | Lista technologii | `["React", "Node.js"]` |
| `demoUrl` | string | Link do demo/zrzutu | `"/images/screenshots/shop-1.jpg"` |
| `features` | array | Lista funkcjonalności | `["Koszyk", "Płatności"]` |

## 🎨 Kategorie projektów:

- **`web-app`** - Aplikacje webowe (React, Vue, Angular)
- **`website`** - Strony internetowe (WordPress, HTML/CSS)
- **`ui-design`** - Projekty UI/UX (Figma, Adobe XD)

## ✅ Zalety lokalnych plików:
- 🔒 Pełna kontrola nad zawartością
- ⚡ Szybsze ładowanie (brak zewnętrznych requestów)
- 🛡️ Brak ryzyka usunięcia przez klientów
- 🎯 Możliwość optymalizacji obrazów
- 📱 Lepsze działanie offline

## 🔄 Automatyczne odświeżanie:
Po dodaniu nowego projektu, strona automatycznie się odświeży i pokaże nowe portfolio!