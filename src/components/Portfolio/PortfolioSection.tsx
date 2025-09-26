import { useState, useRef, useEffect } from 'react';
import PortfolioCard from '../UI/PortfolioCard';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterText from '../UI/TypewriterText';
import { projectsData } from '../../data/projects';
const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [portfolioItems, setPortfolioItems] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Ładowanie projektów z pliku JSON
    setPortfolioItems(projectsData.projects);
  }, []);

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
      <motion.div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                <TypewriterText text="Nasze" delay={500} speed={100} />
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                <TypewriterText text="Portfolio" delay={1300} speed={110} />
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Poznaj nasze najnowsze projekty i zobacz, jak pomogliśmy klientom
            osiągnąć ich cyfrowe cele.
          </motion.p>
          

        </motion.div>

        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12" style={{opacity: 1, transform: 'none'}}>
          <div className="flex flex-col sm:inline-flex sm:flex-row flex-wrap justify-center gap-2 p-1 glass-effect rounded-lg w-full max-w-md sm:max-w-2xl lg:max-w-3xl">
            <button className="px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-md text-xs sm:text-sm lg:text-base font-medium transition-all bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm w-full sm:flex-1 sm:flex-none sm:min-w-0" tabIndex={0} style={{transform: 'none'}}>
              <span className="truncate pointer-events-none">Wszystkie Prace</span>
            </button>
            <button className="px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-md text-xs sm:text-sm lg:text-base font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5 w-full sm:flex-1 sm:flex-none sm:min-w-0" tabIndex={0} style={{transform: 'none'}}>
              <span className="truncate pointer-events-none">Strony Internetowe</span>
            </button>
            <button className="px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-md text-xs sm:text-sm lg:text-base font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5 w-full sm:flex-1 sm:flex-none sm:min-w-0" tabIndex={0} style={{transform: 'none'}}>
              <span className="truncate pointer-events-none">Aplikacje Web</span>
            </button>
            <button className="px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-md text-xs sm:text-sm lg:text-base font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5 w-full sm:flex-1 sm:flex-none sm:min-w-0" tabIndex={0} style={{transform: 'none'}}>
              <span className="truncate pointer-events-none">Projektowanie UI/UX</span>
            </button>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
            {filteredItems.slice(0, 6).map((item, index) => <PortfolioCard key={index} item={item} index={index} />)}
          </motion.div>
        </AnimatePresence>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="glass-effect p-8 md:p-12 rounded-2xl border border-white/10">
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
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
                Zobacz Więcej Projektów
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
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