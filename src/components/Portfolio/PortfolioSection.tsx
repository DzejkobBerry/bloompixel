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
  }, {
    title: 'Aplikacja Fitness',
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'Kompleksowa aplikacja fitness z treningami, dietą i monitorowaniem postępów dla klubu sportowego.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    demoUrl: '#',
    features: ['Personalne plany treningowe', 'Kalkulator kalorii', 'Śledzenie postępów', 'Społeczność użytkowników', 'Integracja z urządzeniami fitness', 'Powiadomienia motywacyjne']
  }, {
    title: 'Portal Edukacyjny',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
    description: 'Nowoczesny portal edukacyjny z kursami online, systemem oceniania i komunikacją nauczyciel-uczeń.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
    demoUrl: '#',
    features: ['Kursy online z wideo', 'System oceniania', 'Kalendarz zajęć', 'Komunikator wideo', 'Biblioteka materiałów', 'Raporty postępów']
  }, {
    title: 'Sklep Internetowy Fashion',
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'Elegancki sklep internetowy z modą damską, zaawansowanymi filtrami i AR do przymierzania.',
    technologies: ['Next.js', 'Shopify', 'Three.js', 'Stripe'],
    demoUrl: '#',
    features: ['Wirtualne przymierzanie AR', 'Zaawansowane filtry produktów', 'Wishlist i porównywarka', 'Program lojalnościowy', 'Integracja z social media', 'Responsywny design']
  }, {
    title: 'Dashboard Analityczny',
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'Zaawansowany dashboard do analizy danych biznesowych z interaktywnymi wykresami i raportami.',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    demoUrl: '#',
    features: ['Interaktywne wykresy', 'Raporty w czasie rzeczywistym', 'Eksport danych', 'Niestandardowe metryki', 'Alerty i powiadomienia', 'Multi-tenant architecture']
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Nasze
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Poznaj nasze najnowsze projekty i zobacz, jak pomogliśmy klientom
            osiągnąć ich cyfrowe cele.
          </motion.p>
          

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
        
        {/* Process Section */}
        <motion.div 
          className="mb-16 max-w-6xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Nasz Proces Realizacji
              </span>
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Każdy projekt realizujemy według sprawdzonej metodologii, która gwarantuje najwyższą jakość
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="glass-effect p-6 rounded-lg text-center group hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                1
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Discovery</h4>
              <p className="text-slate-300 text-sm">
                Analizujemy Twoje potrzeby, cele biznesowe i grupę docelową
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-6 rounded-lg text-center group hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                2
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Design</h4>
              <p className="text-slate-300 text-sm">
                Tworzymy wireframy, prototypy i finalne projekty UI/UX
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-6 rounded-lg text-center group hover:border-pink-500/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                3
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Development</h4>
              <p className="text-slate-300 text-sm">
                Kodujemy rozwiązanie używając najnowszych technologii
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-6 rounded-lg text-center group hover:border-green-500/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                4
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Launch</h4>
              <p className="text-slate-300 text-sm">
                Wdrażamy projekt i zapewniamy pełne wsparcie techniczne
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
            {filteredItems.slice(0, 9).map((item, index) => <PortfolioCard key={index} item={item} index={index} />)}
          </motion.div>
        </AnimatePresence>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="glass-effect p-8 md:p-12 rounded-2xl border border-white/10">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Masz pomysł na projekt?
              </span>
            </motion.h3>
            
            <motion.p 
              className="text-xl text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Przekształćmy Twoją wizję w rzeczywistość. Skontaktuj się z nami już dziś
              i rozpocznijmy współpracę nad Twoim następnym wielkim projektem.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Rozpocznij Projekt
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              
              <motion.a 
                href="#contact"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Bezpłatna Konsultacja
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-6 flex items-center justify-center text-slate-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Odpowiedź w ciągu 24 godzin
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>;
};
export default PortfolioSection;