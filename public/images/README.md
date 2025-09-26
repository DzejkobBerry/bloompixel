# Folder Images - Instrukcje

## 📁 Struktura folderów:

### `/projects/` 
- **Przeznaczenie**: Główne obrazy projektów (hero images)
- **Format**: JPG, PNG, WebP
- **Rozmiar**: Zalecane 1200x800px lub podobne proporcje
- **Nazewnictwo**: `nazwa-projektu-main.jpg`

### `/screenshots/`
- **Przeznaczenie**: Zrzuty ekranu, galerie, dodatkowe obrazy
- **Format**: JPG, PNG, WebP
- **Rozmiar**: Różne, w zależności od potrzeb
- **Nazewnictwo**: `nazwa-projektu-screenshot-1.jpg`

## 🎯 Jak dodać nowy projekt z własnymi obrazami:

1. **Wrzuć obrazy** do odpowiednich folderów:
   ```
   public/images/projects/moj-projekt-main.jpg
   public/images/screenshots/moj-projekt-screenshot-1.jpg
   ```

2. **Edytuj plik** `src/data/projects.ts`

3. **Dodaj nowy projekt** z lokalnym linkiem:
   ```javascript
   {
     "id": "moj-projekt",
     "title": "Mój Projekt",
     "category": "web-app",
     "image": "/images/projects/moj-projekt-main.jpg", // ← Lokalny plik!
     "description": "Opis mojego projektu...",
     // ... reszta danych
   }
   ```

## ✅ Zalety lokalnych plików:
- ✅ Pełna kontrola nad plikami
- ✅ Brak zależności od zewnętrznych serwisów
- ✅ Szybsze ładowanie
- ✅ Brak ryzyka usunięcia przez klientów
- ✅ Możliwość optymalizacji obrazów

## 📝 Przykład ścieżek:
- Główny obraz: `/images/projects/nazwa-projektu.jpg`
- Zrzuty ekranu: `/images/screenshots/nazwa-projektu-1.jpg`
- Dodatkowe: `/images/screenshots/nazwa-projektu-2.jpg`