// System zarządzania językami
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'nl';
        this.translations = {
            en: {
                // Navigation
                home: 'Home',
                about: 'About Us',
                projects: 'View Projects',
                testimonials: 'Testimonials',
                contact: 'Contact',
                tagline: 'Waterproofing & Epoxy Systems',
                
                // Hero Section
                heroTitle: 'Hydroxy M&S',
                heroDescription: 'Strength in every space.<br>Our resin and waterproofing coatings protect surfaces at home and at work.<br>Resistance to loads, moisture, and everyday use – durability for many years.',
                getQuote: 'Get Free Quote',
                viewProjects: 'View Projects',
                scrollDown: 'Scroll Down',
                
                // About Section
                aboutTitle: 'About Hydroxy M&S',
                aboutDescription: 'We specialize in durable waterproofing systems and resin flooring for homes, commercial buildings, and industrial spaces.<br>We combine experience, proven technologies, and top-quality materials to create solutions resistant to loads, moisture, and heavy use.<br>Our mission is to provide reliable concrete protection and long-lasting surfaces that can withstand any challenge.',
                premiumQuality: 'Premium Quality',
                premiumQualityDesc: 'Only the finest materials and proven techniques for lasting results.',
                expertTeam: 'Expert Team',
                expertTeamDesc: 'Certified professionals with extensive industry experience.',
                guaranteedResults: 'Guaranteed Results',
                guaranteedResultsDesc: 'Full warranty coverage and satisfaction guarantee.',
                
                // Process Section
                processTitle: 'Our Collaboration Process',
                processDescription: 'How we work together to deliver exceptional results',
                consultation: 'Consultation',
                consultationDesc: 'Initial meeting to understand your needs and vision',
                design: 'Design',
                designDesc: 'Creating detailed plans and material selection',
                installation: 'Installation',
                installationDesc: 'Expert execution with premium materials',
                qualityAssurance: 'Quality Assurance',
                qualityAssuranceDesc: 'Final inspection and client satisfaction',
                
                // Projects Section
                projectsTitle: 'Projects & Gallery',
                projectsDescription: 'Explore our premium installations and transformations',
                balconies: 'Balconies',
                commercialOffice: 'Commercial Office',
                industrialWarehouse: 'Industrial Warehouse',
                stairs: 'Stairs',
                restaurantFloor: 'Restaurant Floor',
                garageSystem: 'Garage System',
                moreProjects: 'More Projects',
                
                // Testimonials Section
                testimonialsTitle: 'Client Testimonials',
                testimonialsDescription: 'What our satisfied clients say about our work',
                residentialClient: 'Residential Client',
                commercialClient: 'Commercial Client',
                industrialClient: 'Industrial Client',
                
                // Contact Section
                contactTitle: 'Get Your Premium Quote',
                contactDescription: 'Professional consultation and detailed pricing estimate',
                contactInfo: 'Contact Information',
                contactInfoDesc: 'We\'re here to assist you with your project',
                businessHours: 'Business Hours',
                businessHoursDesc: 'Monday - Friday: 7:00 AM - 7:00 PM<br>Saturday: 9:00 AM - 3:00 PM<br>Sunday: Closed',
                phone: 'Phone',
                email: 'Email',
                onSiteService: 'On-Site Service',
                onSiteServiceDesc: 'We provide on-site consultations and services throughout the metropolitan area',
                serviceArea: 'Service Area',
                serviceAreaDesc: 'Noordwijkerhout +50km: Noordwijkerhout, Noordwijk, Katwijk, Hillegom, Lisse, Zandvord, Haga, Rotterdam, Amsterdam, Badhoevendorp, Alsmere and more.',
                
                // Contact Form
                getQuoteForm: 'Get a Quote',
                checkCost: 'Check How Much It Will Cost - Free',
                checkCostDesc: 'Fill out the form and receive an initial quote within 1 business day.',
                formMaintenance: 'Contact Form Temporarily Under Maintenance',
                formMaintenanceDesc: 'We apologize for the inconvenience. Please contact us by phone for immediate assistance.',
                fullName: 'Full Name',
                fullNamePlaceholder: 'Enter your full name',
                emailAddress: 'Email Address',
                emailPlaceholder: 'Enter your email address',
                phoneNumber: 'Phone Number',
                phonePlaceholder: 'Enter your phone number',
                projectArea: 'Project Area (m²)',
                projectAreaPlaceholder: 'Enter project area',
                selectServices: 'Select services',
                selectServiceType: 'Select service type',
                waterproofing: 'Waterproofing',
                epoxySystems: 'Epoxy resin floor',
                garage: 'garage',
                terrace: 'terrace',
                balcony: 'balcony',
                foundations: 'foundations',
                livingRoom: 'living room',
                office: 'office',
                premises: 'premises',
                apartment: 'apartment',
                wall: 'wall',
                preferredDate: 'Preferred Start Date',
                projectDetails: 'Project Details',
                projectDetailsPlaceholder: 'Describe your project requirements...',
                requestQuote: 'Request Quote',
                
                // Testimonials
                testimonial4: "Absolutely stunning result! The epoxy flooring transformed our entire home. Professional service from start to finish.",
                testimonial5: "Our office floors look incredible after Hydroxy's work. The team was professional, efficient, and the quality exceeded our expectations.",
                testimonial6: "Hydroxy M&S transformed our bathroom with their waterproofing solutions. The attention to detail and quality of work was exceptional.",
                testimonial7: "The industrial epoxy flooring installed by Hydroxy M&S has completely transformed our warehouse. Durable, easy to clean, and looks fantastic even after heavy use.",
                testimonial8: "We had our basement waterproofed by Hydroxy M&S and couldn't be happier with the results. No more moisture issues, and the team was incredibly professional and clean.",
                testimonial9: "Our retail store needed a durable yet stylish flooring solution. Hydroxy M&S delivered a stunning metallic epoxy floor that our customers constantly compliment.",
                testimonial10: "The garage floor coating from Hydroxy M&S is simply perfect. It's been two years and it still looks brand new despite heavy use and winter conditions.",
                testimonial11: "We needed a specialized chemical-resistant flooring for our production facility. Hydroxy M&S provided expert advice and a perfect solution that has withstood all challenges.",
                testimonial12: "The waterproofing system Hydroxy M&S installed in our shower has been flawless. No leaks, no mold, and the decorative finish looks as good as the day it was installed.",
                
                // Footer
                footerDescription: 'Durable waterproofing systems and resin flooring – reliable solutions for years to come.',
                contactInfoFooter: 'Contact Info',
                followUs: 'Follow Us',
                copyright: '© 2025 Hydroxy M&S. All rights reserved.',
                websiteCreated: 'The website was created by <a href="https://bloompixel.pl" class="studio-link" target="_blank">bloompixel.pl</a> studio.',
                
                // Modals
                thankYou: 'Thank You for Your Message!',
                appreciateInterest: 'We appreciate your interest in our services.',
                getBackSoon: 'Our team will get back to you within 24 hours.',
                close: 'Close'
            },
            nl: {
                // Navigation
                home: 'Home',
                about: 'Over Ons',
                projects: 'Bekijk Projecten',
                testimonials: 'Getuigenissen',
                contact: 'Contact',
                tagline: 'Waterdichting & Epoxy Systemen',
                
                // Hero Section
                heroTitle: 'Hydroxy M&S',
                heroDescription: 'Kracht in elke ruimte.<br>Onze hars- en waterdichtingscoatings beschermen oppervlakken thuis en op het werk.<br>Weerstand tegen belastingen, vocht en dagelijks gebruik – duurzaamheid voor vele jaren.',
                getQuote: 'Gratis Offerte',
                viewProjects: 'Bekijk Projecten',
                scrollDown: 'Scroll Omlaag',
                
                // About Section
                aboutTitle: 'Over Hydroxy M&S',
                aboutDescription: 'Wij zijn gespecialiseerd in duurzame waterdichtingssystemen en harsvloeren voor woningen, commerciële gebouwen en industriële ruimtes.<br>Wij combineren ervaring, bewezen technologieën en materialen van topkwaliteit om oplossingen te creëren die bestand zijn tegen belastingen, vocht en zwaar gebruik.<br>Onze missie is het bieden van betrouwbare betonbescherming en langdurige oppervlakken die elke uitdaging aankunnen.',
                premiumQuality: 'Premium Kwaliteit',
                premiumQualityDesc: 'Alleen de beste materialen en bewezen technieken voor blijvende resultaten.',
                expertTeam: 'Expert Team',
                expertTeamDesc: 'Gecertificeerde professionals met uitgebreide branche-ervaring.',
                guaranteedResults: 'Gegarandeerde Resultaten',
                guaranteedResultsDesc: 'Volledige garantiedekking en tevredenheidsgarantie.',
                
                // Process Section
                processTitle: 'Ons Samenwerkingsproces',
                processDescription: 'Hoe we samenwerken om uitzonderlijke resultaten te leveren',
                consultation: 'Consultatie',
                consultationDesc: 'Eerste ontmoeting om uw behoeften en visie te begrijpen',
                design: 'Ontwerp',
                designDesc: 'Gedetailleerde plannen maken en materiaalselectie',
                installation: 'Installatie',
                installationDesc: 'Deskundige uitvoering met premium materialen',
                qualityAssurance: 'Kwaliteitsborging',
                qualityAssuranceDesc: 'Eindcontrole en klanttevredenheid',
                
                // Projects Section
                projectsTitle: 'Projecten & Galerij',
                projectsDescription: 'Ontdek onze premium installaties en transformaties',
                balconies: 'Balkons',
                commercialOffice: 'Commercieel Kantoor',
                industrialWarehouse: 'Industrieel Magazijn',
                stairs: 'Trappen',
                restaurantFloor: 'Restaurant Vloer',
                garageSystem: 'Garage Systeem',
                moreProjects: 'Meer Projecten',
                
                // Testimonials Section
                testimonialsTitle: 'Klantgetuigenissen',
                testimonialsDescription: 'Wat onze tevreden klanten zeggen over ons werk',
                residentialClient: 'Particuliere Klant',
                commercialClient: 'Commerciële Klant',
                industrialClient: 'Industriële Klant',
                
                // Contact Section
                contactTitle: 'Krijg Uw Premium Offerte',
                contactDescription: 'Professioneel advies en gedetailleerde prijsschatting',
                contactInfo: 'Contactinformatie',
                contactInfoDesc: 'Wij zijn er om u te helpen met uw project',
                businessHours: 'Openingstijden',
                businessHoursDesc: 'Maandag - Vrijdag: 7:00 - 19:00<br>Zaterdag: 9:00 - 15:00<br>Zondag: Gesloten',
                phone: 'Telefoon',
                email: 'E-mail',
                onSiteService: 'Service Op Locatie',
                onSiteServiceDesc: 'Wij bieden consultaties en services op locatie in het hele metropolitane gebied',
                serviceArea: 'Servicegebied',
                serviceAreaDesc: 'Noordwijkerhout +50km: Noordwijkerhout, Noordwijk, Katwijk, Hillegom, Lisse, Zandvoort, Den Haag, Rotterdam, Amsterdam, Badhoevedorp, Aalsmeer en meer.',
                
                // Contact Form
                getQuoteForm: 'Vraag een Offerte',
                checkCost: 'Controleer Hoeveel Het Kost - Gratis',
                checkCostDesc: 'Vul het formulier in en ontvang binnen 1 werkdag een eerste offerte.',
                fullName: 'Volledige Naam',
                fullNamePlaceholder: 'Voer uw volledige naam in',
                emailAddress: 'E-mailadres',
                emailPlaceholder: 'Voer uw e-mailadres in',
                phoneNumber: 'Telefoonnummer',
                phonePlaceholder: 'Voer uw telefoonnummer in',
                projectArea: 'Projectoppervlakte (m²)',
                projectAreaPlaceholder: 'Voer projectoppervlakte in',
                selectServices: 'Selecteer diensten',
                selectServiceType: 'Selecteer servicetype',
                waterproofing: 'Waterdichting',
                epoxySystems: 'Epoxy hars vloer',
                garage: 'garage',
                terrace: 'terras',
                balcony: 'balkon',
                foundations: 'funderingen',
                livingRoom: 'woonkamer',
                office: 'kantoor',
                premises: 'bedrijfspand',
                apartment: 'appartement',
                wall: 'muur',
                preferredDate: 'Gewenste Startdatum',
                projectDetails: 'Projectdetails',
                projectDetailsPlaceholder: 'Beschrijf uw projectvereisten...',
                requestQuote: 'Vraag Offerte',
                
                // Testimonials
                testimonial4: "Absoluut prachtig resultaat! De epoxy vloer heeft ons hele huis getransformeerd. Professionele service van begin tot eind.",
                testimonial5: "Onze kantoervloeren zien er ongelooflijk uit na het werk van Hydroxy. Het team was professioneel, efficiënt en de kwaliteit overtrof onze verwachtingen.",
                testimonial6: "Hydroxy M&S heeft onze badkamer getransformeerd met hun waterdichtingsoplossingen. De aandacht voor detail en kwaliteit van het werk was uitzonderlijk.",
                testimonial7: "De industriële epoxy vloer geïnstalleerd door Hydroxy M&S heeft ons magazijn volledig getransformeerd. Duurzaam, gemakkelijk schoon te maken en ziet er fantastisch uit zelfs na zwaar gebruik.",
                testimonial8: "We hebben ons souterrain laten waterdichten door Hydroxy M&S en konden niet gelukkiger zijn met de resultaten. Geen vochtproblemen meer, en het team was ongelooflijk professioneel en netjes.",
                testimonial9: "Onze winkel had een duurzame maar stijlvolle vloeroplossing nodig. Hydroxy M&S leverde een prachtige metallic epoxy vloer waar onze klanten constant complimenten over geven.",
                testimonial10: "De garagevloercoating van Hydroxy M&S is gewoon perfect. Het is twee jaar geleden en het ziet er nog steeds gloednieuw uit ondanks zwaar gebruik en winteromstandigheden.",
                testimonial11: "We hadden een gespecialiseerde chemisch resistente vloer nodig voor onze productiefaciliteit. Hydroxy M&S gaf deskundig advies en een perfecte oplossing die alle uitdagingen heeft doorstaan.",
                testimonial12: "Het waterdichtingssysteem dat Hydroxy M&S in onze douche heeft geïnstalleerd is foutloos. Geen lekken, geen schimmel, en de decoratieve afwerking ziet er nog steeds uit als de dag dat het werd geïnstalleerd.",
                residentialClient: "Particuliere Klant",
                commercialClient: "Commerciële Klant",
                industrialClient: "Industriële Klant",
                
                // Contact form
                getQuote: "Vraag een Offerte",
                checkCost: "Controleer Hoeveel Het Kost - Gratis",
                checkCostDesc: "Vul het formulier in en ontvang binnen 1 werkdag een eerste offerte.",
                formMaintenance: "Contactformulier Tijdelijk in Onderhoud",
                formMaintenanceDesc: "Onze excuses voor het ongemak. Neem telefonisch contact met ons op voor directe hulp.",
                contactInfo: "Contactinformatie",
                contactInfoDesc: "We zijn er om u te helpen met uw project",
                businessHours: "Openingstijden",
                mondayFriday: "Maandag - Vrijdag: 7:00 - 19:00",
                saturday: "Zaterdag: 9:00 - 15:00",
                sunday: "Zondag: Gesloten",
                onSiteService: "Service op Locatie",
                onSiteServiceDesc: "We bieden consultaties en services op locatie in het hele metropolitane gebied",
                
                // Modal
                thankYouMessage: "Bedankt voor Uw Bericht!",
                appreciateInterest: "We waarderen uw interesse in onze waterdichtingsservices.",
                teamResponse: "Ons team neemt binnen 24 uur contact met u op met een gedetailleerd antwoord.",
                closeButton: "Sluiten",
                
                // Footer
                footerDescription: 'Duurzame waterdichtingssystemen en harsvloeren – betrouwbare oplossingen voor jaren vooruit.',
                contactInfoFooter: 'Contactinfo',
                followUs: 'Volg Ons',
                copyright: '© 2025 Hydroxy M&S. Alle rechten voorbehouden.',
                websiteCreated: 'De website is gemaakt door <a href="https://bloompixel.pl" class="studio-link" target="_blank">bloompixel.pl</a> studio.',
                
                // Modals
                thankYou: 'Bedankt voor Uw Bericht!',
                appreciateInterest: 'Wij waarderen uw interesse in onze diensten.',
                getBackSoon: 'Ons team neemt binnen 24 uur contact met u op.',
                close: 'Sluiten'
            }
        };
        this.init();
    }

    init() {
        this.updateLanguage();
        this.bindEvents();
    }

    bindEvents() {
        // Event listener dla suwaka językowego
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('language-switch-input')) {
                const newLanguage = e.target.checked ? 'en' : 'nl';
                this.setLanguage(newLanguage);
            }
        });
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.updateLanguage();
    }

    updateLanguage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[this.currentLanguage][key]) {
                // Use innerHTML for elements that may contain HTML tags like <br>
                element.innerHTML = this.translations[this.currentLanguage][key];
            }
        });

        // Aktualizuj suwak językowy
        const languageSwitch = document.querySelector('.language-switch-input');
        if (languageSwitch) {
            languageSwitch.checked = this.currentLanguage === 'en';
        }
    }

    translate(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Eksportuj instancję managera języków
const languageManager = new LanguageManager();
export { languageManager };