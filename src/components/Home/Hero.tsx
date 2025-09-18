import { useEffect, useRef } from 'react';
import { ArrowRightIcon, CodeIcon, LayoutIcon, PenToolIcon, ChevronDownIcon } from 'lucide-react';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import Particles from '../UI/Particles';
import TerminalAnimation from '../UI/TerminalAnimation';
import TypewriterText from '../UI/TypewriterText';
const Hero = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
  const serviceIconVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  const floatingAnimation = {
    y: ['-5%', '5%'],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };
  return <section id="home" className="relative min-h-screen pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 overflow-hidden flex items-center">
      {/* Particle Background */}
      <Particles />
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      {/* Gradient Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-96 h-96 bg-cyan-700 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-blob animation-delay-4000"></div>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <motion.div className="flex flex-col md:flex-row md:items-center md:justify-between" variants={containerVariants} initial="hidden" animate="visible">
          <div className="md:w-1/2 mb-8 sm:mb-10 md:mb-0">
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4" variants={itemVariants}>
              Tworzymy{' '}
              <span className="gradient-text glow-text">
                <TypewriterText 
                  text="Cyfrowe Doświadczenia" 
                  delay={1000} 
                  speed={80}
                />
              </span>{' '}
              Które Mają Znaczenie
            </motion.h1>
            <motion.p className="text-slate-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg" variants={itemVariants}>
              BloomPixel specjalizuje się w tworzeniu nowoczesnych stron internetowych i
              aplikacji, które transformują Twoją obecność cyfrową dzięki oszałamiającemu
              designowi i bezbłędnej funkcjonalności.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4" variants={itemVariants}>
              <Button 
                size="lg" 
                variant="primary"
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                Zobacz Nasze Prace
                <ArrowRightIcon size={18} className="ml-2" />
              </Button>
              <Button 
                variant="neon" 
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                Porozmawiajmy
              </Button>
            </motion.div>
            <motion.div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6" variants={containerVariants} initial="hidden" animate="visible" transition={{
            delayChildren: 0.6,
            staggerChildren: 0.2
          }}>
              <motion.div className="flex items-center" variants={serviceIconVariants} whileHover={{
              scale: 1.05
            }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-2 sm:mr-3 shadow-md glow">
                  <CodeIcon className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">Tworzenie Stron</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center" variants={serviceIconVariants} whileHover={{
              scale: 1.05
            }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mr-2 sm:mr-3 shadow-md glow-purple">
                  <LayoutIcon className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">Projektowanie UI/UX</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center" variants={serviceIconVariants} whileHover={{
              scale: 1.05
            }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mr-2 sm:mr-3 shadow-md glow">
                  <PenToolIcon className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">Strategia Cyfrowa</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center" variants={serviceIconVariants} whileHover={{
              scale: 1.05
            }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mr-2 sm:mr-3 shadow-md glow-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">Projektowanie Graficzne</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="md:w-1/2 relative" variants={itemVariants} animate={floatingAnimation}>
            <div className="relative z-10 glass-effect overflow-hidden border border-white/10 rounded-lg shadow-2xl">
              <div className="h-8 bg-slate-800/80 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-6">
                <TerminalAnimation />
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-700/50 rounded"></div>
                  <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-8 -right-4 w-64 h-64 bg-blue-700 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -z-10 bottom-8 -left-4 w-64 h-64 bg-purple-700 rounded-full opacity-30 blur-3xl"></div>
          </motion.div>
        </motion.div>
        
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full border-2 border-slate-400 flex items-center justify-center mb-2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDownIcon size={16} className="text-slate-400" />
        </motion.div>
        <span className="text-slate-400 text-sm font-medium">przewiń w dół</span>
      </motion.div>
    </section>;
};
export default Hero;