class TemplateEngine {
    constructor() {
        this.components = new Map();
        this.data = new Map();
    }

    // Ładowanie komponentu
    loadComponent(name, path) {
        const fs = require('fs');
        const content = fs.readFileSync(path, 'utf8');
        this.components.set(name, content);
        return this;
    }

    // Ładowanie danych
    loadData(name, path) {
        const fs = require('fs');
        const data = JSON.parse(fs.readFileSync(path, 'utf8'));
        this.data.set(name, data);
        return this;
    }

    // Renderowanie szablonu
    render(template, data = {}) {
        // Zastępowanie {{> ComponentName}}
        template = template.replace(/{{>\s*(\w+)}}/g, (match, componentName) => {
            return this.components.get(componentName) || match;
        });

        // Zastępowanie {{variable}}
        template = template.replace(/{{(\w+)}}/g, (match, variable) => {
            return data[variable] || match;
        });

        // Obsługa pętli {{#each array}}
        template = template.replace(/{{#each\s+(\w+)}}([\s\S]*?){{\/each}}/g, (match, arrayName, content) => {
            const array = data[arrayName] || [];
            return array.map(item => this.render(content, item)).join('');
        });

        // Obsługa warunków {{#if condition}}
        template = template.replace(/{{#if\s+(\w+)}}([\s\S]*?){{\/if}}/g, (match, condition, content) => {
            return data[condition] ? content : '';
        });

        return template;
    }

    // Budowanie strony
    build() {
        const fs = require('fs');
        const path = require('path');
        
        // Ładowanie wszystkich komponentów
        this.loadAllComponents();
        
        // Ładowanie danych
        this.loadAllData();
        
        // Renderowanie głównego szablonu
        const mainTemplate = fs.readFileSync('index.html', 'utf8');
        const rendered = this.render(mainTemplate, this.getAllData());
        
        // Zapis do pliku wynikowego
        fs.writeFileSync('dist/index.html', rendered);
        
        console.log('✅ Strona została zbudowana pomyślnie!');
    }

    loadAllComponents() {
        const fs = require('fs');
        const path = require('path');
        
        // Ładowanie komponentów layout
        this.loadComponent('Header', 'components/layout/Header.html')
            .loadComponent('Footer', 'components/layout/Footer.html')
            .loadComponent('Navigation', 'components/layout/Navigation.html')
            .loadComponent('Preloader', 'components/layout/Preloader.html');
        
        // Ładowanie sekcji
        const sections = [
            'HeroSection', 'AboutSection', 'ServicesSection', 'PortfolioSection',
            'TechnologiesSection', 'ProcessSection', 'PricingSection', 
            'TestimonialsSection', 'BlogSection', 'ContactSection',
            'BookingSection', 'WhyChooseSection', 'CertificatesSection', 'FaqSection'
        ];
        
        sections.forEach(section => {
            this.loadComponent(section, `components/sections/${section}.html`);
        });
        
        // Ładowanie komponentów UI
        const uiComponents = [
            'ServiceCard', 'PortfolioItem', 'PricingCard', 'TestimonialItem',
            'BlogCard', 'FeatureCard', 'CertificateCard', 'FaqItem'
        ];
        
        uiComponents.forEach(component => {
            this.loadComponent(component, `components/ui/${component}.html`);
        });
    }

    loadAllData() {
        this.loadData('services', 'data/services.json')
            .loadData('portfolio', 'data/portfolio.json')
            .loadData('testimonials', 'data/testimonials.json')
            .loadData('technologies', 'data/technologies.json');
    }

    getAllData() {
        const allData = {};
        this.data.forEach((value, key) => {
            allData[key] = value;
        });
        return allData;
    }
}

module.exports = TemplateEngine;