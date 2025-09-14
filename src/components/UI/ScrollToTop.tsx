import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pokaż przycisk po zjechaniu z sekcji hero (około 100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 w-14 h-14"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Glow Effect - positioned behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
          
          <motion.button
            onClick={scrollToTop}
            className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border border-white/20 backdrop-blur-sm group overflow-hidden"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            {/* Icon */}
            <ArrowUpIcon 
              size={20} 
              className="text-white relative z-10 group-hover:scale-110 transition-transform duration-200" 
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;