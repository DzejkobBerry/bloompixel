const TemplateEngine = require('./template-engine');
const fs = require('fs');
const path = require('path');

// Tworzenie folderu dist jeśli nie istnieje
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Kopiowanie assets
function copyAssets() {
    const copyRecursive = (src, dest) => {
        if (fs.statSync(src).isDirectory()) {
            if (!fs.existsSync(dest)) {
                fs.mkdirSync(dest, { recursive: true });
            }
            fs.readdirSync(src).forEach(file => {
                copyRecursive(path.join(src, file), path.join(dest, file));
            });
        } else {
            fs.copyFileSync(src, dest);
        }
    };
    
    copyRecursive('assets', 'dist/assets');
    console.log('✅ Assets skopiowane');
}

// Główna funkcja budowania
function build() {
    console.log('🚀 Rozpoczynam budowanie strony...');
    
    // Kopiowanie assets
    copyAssets();
    
    // Budowanie HTML
    const engine = new TemplateEngine();
    engine.build();
    
    console.log('🎉 Budowanie zakończone pomyślnie!');
    console.log('📁 Pliki wynikowe znajdują się w folderze dist/');
}

// Uruchomienie budowania
build();