import React, { useState, useRef, Children } from 'react';
import PortfolioCard from '../UI/PortfolioCard';
import { motion, AnimatePresence } from 'framer-motion';
const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const containerRef = useRef(null);
  const portfolioItems = [{
    title: 'Platforma E-commerce',
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
    description: 'W pełni responsywna platforma e-commerce z zarządzaniem produktami, funkcjonalnością koszyka i integracją płatności.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    features: ['Uwierzytelnianie użytkowników i profile', 'Katalog produktów z wyszukiwaniem i filtrami', 'Koszyk zakupowy i proces płatności', 'Integracja przetwarzania płatności', 'Śledzenie zamówień i historia', 'Panel administracyjny']
  }, {
    title: 'Strona Korporacyjna',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
    description: 'Nowoczesna strona korporacyjna z niestandardowymi animacjami, funkcjonalnością bloga i systemem zarządzania treścią.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
    demoUrl: '#',
    features: ['Responsywny design', 'Niestandardowe animacje', 'Blog z kategoriami', 'Formularz kontaktowy z walidacją', 'Optymalizacja SEO', 'System zarządzania treścią']
  }, {
    title: 'Aplikacja Bankowości Mobilnej',
    category: 'ui-design',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'Projekt UI/UX dla aplikacji bankowości mobilnej skupiający się na doświadczeniu użytkownika i dostępności.',
    technologies: ['Figma', 'Adobe XD', 'Sketch'],
    demoUrl: '#',
    features: ['Badania użytkowników i persony', 'Wireframing i prototypowanie', 'Interaktywne makiety', 'Testy użyteczności', 'Zgodność z dostępnością', 'Tworzenie systemu projektowego']
  }, {
    title: 'Blog Podróżniczy',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'Niestandardowy blog podróżniczy z dynamicznym ładowaniem treści, galeriami zdjęć i interaktywnymi mapami.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    demoUrl: '#',
    features: ['Dynamiczne ładowanie treści', 'Galerie zdjęć i lightbox', 'Integracja interaktywnych map', 'Funkcjonalność udostępniania społecznościowego', 'System komentarzy', 'Subskrypcja newslettera']
  }, {
    title: 'Aplikacja Zarządzania Zadaniami',
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
    description: 'Aplikacja do współpracy w zarządzaniu zadaniami z aktualizacjami w czasie rzeczywistym i funkcjami współpracy zespołowej.',
    technologies: ['Vue.js', 'Firebase', 'Vuetify'],
    demoUrl: '#',
    features: ['Aktualizacje w czasie rzeczywistym', 'Współpraca zespołowa', 'Przypisywanie i śledzenie zadań', 'Harmonogramy projektów', 'Załączniki plików', 'Powiadomienia i przypomnienia']
  }, {
    title: 'Branding Restauracji',
    category: 'ui-design',
    image: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80',
    description: 'Kompletny projekt identyfikacji marki dla ekskluzywnej restauracji, w tym logo, menu i strona internetowa.',
    technologies: ['Illustrator', 'Photoshop', 'InDesign'],
    demoUrl: '#',
    features: ['Projekt logo', 'Paleta kolorów', 'Wybór typografii', 'Projekt menu', 'Oznakowanie i materiały promocyjne', 'Projekt strony internetowej']
  }];
  const filters = [{
    id: 'all',
    label: 'Wszystkie Prace'
  }, {
    id: 'website',
    label: 'Strony Internetowe'
  }, {
    id: 'web-app',
    label: 'Aplikacje Web'
  }, {
    id: 'ui-design',
    label: 'Projektowanie UI/UX'
  }];
  const filteredItems = activeFilter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="circuit-pattern absolute inset-0 opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-bl-full opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-tr-full opacity-70 -z-10"></div>
      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.1
    }} variants={containerVariants} ref={containerRef}>
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nasze <span className="gradient-text glow-text">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg">
            Poznaj nasze najnowsze projekty i zobacz, jak pomogliśmy klientom
            osiągnąć ich cyfrowe cele.
          </p>
        </motion.div>
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 glass-effect rounded-lg">
            {filters.map(filter => <motion.button key={filter.id} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeFilter === filter.id ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-white/5'}`} onClick={() => setActiveFilter(filter.id)} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {filter.label}
              </motion.button>)}
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
            {filteredItems.map((item, index) => <PortfolioCard key={index} item={item} index={index} />)}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>;
};
export default PortfolioSection;