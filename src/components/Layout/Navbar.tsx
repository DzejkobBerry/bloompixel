import React, { useEffect, useState, Children } from 'react';
import { MenuIcon, XIcon, CodeIcon, ChevronDownIcon } from 'lucide-react';
import Button from '../UI/Button';
import { motion, AnimatePresence } from 'framer-motion';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('pl');
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Strona Główna', href: '#home' },
    { name: 'O Nas', href: '#about' },
    { name: 'Usługi', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Cennik', href: '#pricing' }
  ];

  const contactDropdownItems = [
    { name: 'Kontakt', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Opinie', href: '#testimonials' },
    { name: 'Technologie', href: '#tech-stack' },
    { name: 'FAQ', href: '#faq' }
  ];

  const languages = [
    { 
      code: 'pl', 
      name: 'Polski', 
      flag: 'PL',
      flagIcon: (
        <svg className="w-4 h-4" viewBox="0 0 640 480">
          <rect width="640" height="240" fill="#fff"/>
          <rect y="240" width="640" height="240" fill="#dc143c"/>
        </svg>
      )
    },
    { 
      code: 'en', 
      name: 'English', 
      flag: 'EN',
      flagIcon: (
        <svg className="w-4 h-4" viewBox="0 0 640 480">
          <rect width="640" height="480" fill="#012169"/>
          <path d="M0 0l640 480M640 0L0 480" stroke="#fff" strokeWidth="96"/>
          <path d="M0 0l640 480M640 0L0 480" stroke="#c8102e" strokeWidth="64"/>
          <path d="M320 0v480M0 240h640" stroke="#fff" strokeWidth="160"/>
          <path d="M320 0v480M0 240h640" stroke="#c8102e" strokeWidth="96"/>
        </svg>
      )
    },
    { 
      code: 'nl', 
      name: 'Nederlands', 
      flag: 'NL',
      flagIcon: (
        <svg className="w-4 h-4" viewBox="0 0 640 480">
          <rect width="640" height="160" fill="#ae1c28"/>
          <rect y="160" width="640" height="160" fill="#fff"/>
          <rect y="320" width="640" height="160" fill="#21468b"/>
        </svg>
      )
    }
  ];

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    setIsLanguageDropdownOpen(false);
    // TODO: Implement language switching logic
  };
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  // Check if we're in testimonials section or below
  const isDarkSection = activeSection === 'testimonials' || activeSection === 'pricing' || activeSection === 'contact' || activeSection === 'footer';
  
  return <motion.header initial="hidden" animate="visible" variants={navVariants} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isDarkSection ? (isDarkSection ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 py-3' : 'glass-effect py-3') : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold text-white flex items-center group relative" 
          variants={itemVariants} 
          whileHover={{
            scale: 1.05
          }} 
          whileTap={{
            scale: 0.95
          }}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-lg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.span 
            className="text-blue-400 glow-text transition-all duration-300 group-hover:text-blue-300 relative z-10" 
            animate={{ 
              rotate: [0, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            &lt;
          </motion.span>
          
          <motion.span 
            className="gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold tracking-tight relative z-10"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                  '0 0 30px rgba(236, 72, 153, 0.5)',
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                  '0 0 10px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              BloomPixel
            </motion.span>
          </motion.span>
          
          <motion.span 
            className="text-purple-400 glow-text-purple transition-all duration-300 group-hover:text-purple-300 relative z-10"
            animate={{ 
              rotate: [0, 5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 1 
            }}
          >
            /&gt;
          </motion.span>
          
          {/* Sparkle effects */}
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1.5
            }}
          />
        </motion.a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => <motion.a key={link.name} href={link.href} className={`text-sm font-semibold relative group px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === link.href.substring(1) ? (isDarkSection ? 'text-blue-300 glow-text bg-blue-400/20 backdrop-blur-sm' : 'text-blue-400 glow-text bg-blue-400/10 backdrop-blur-sm') : (isDarkSection ? 'text-gray-200 hover:text-white hover:bg-white/10 backdrop-blur-sm' : 'text-slate-300 hover:text-white hover:bg-white/5 backdrop-blur-sm')}`} variants={itemVariants} whileHover={{
          scale: 1.05,
          y: -2
        }} custom={index}>
              <span className="relative z-10">{link.name}</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId={`nav-bg-${index}`}
              />
              <motion.div 
                className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300"
              />
            </motion.a>)}
          
          {/* Contact Dropdown */}
          <motion.div 
            className="relative"
            variants={itemVariants}
            onMouseEnter={() => setIsContactDropdownOpen(true)}
            onMouseLeave={() => setIsContactDropdownOpen(false)}
          >
            <button className={`text-sm font-semibold flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm group ${isDarkSection ? 'text-gray-200 hover:text-white hover:bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}>
                <span className="relative z-10">Więcej</span>
                <ChevronDownIcon size={16} className={`transition-all duration-300 ${isContactDropdownOpen ? 'rotate-180 text-blue-400' : 'group-hover:text-blue-400'}`} />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </button>
            
            <AnimatePresence>
              {isContactDropdownOpen && (
                <motion.div
                   className="absolute top-full right-0 mt-3 w-52 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-3 overflow-hidden"
                   initial={{ opacity: 0, y: -10, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: -10, scale: 0.95 }}
                   transition={{ duration: 0.3, ease: "easeOut" }}
                 >
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10" />
                  {contactDropdownItems.map((item, index) => (
                    <motion.a
                       key={item.name}
                       href={item.href}
                       className="relative block px-5 py-3 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 group overflow-hidden"
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: index * 0.05 }}
                       whileHover={{ x: 5 }}
                     >
                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                       <span className="relative z-10">{item.name}</span>
                       <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <Button className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 font-semibold tracking-wide shadow-lg">Kontakt</Button>
            </motion.div>
          </motion.div>

          {/* Language Switcher */}
          <motion.div 
            className="relative"
            variants={itemVariants}
            onMouseEnter={() => setIsLanguageDropdownOpen(true)}
            onMouseLeave={() => setIsLanguageDropdownOpen(false)}
          >
            <button className={`text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm group ${isDarkSection ? 'text-gray-200 hover:text-white hover:bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}>
               {languages.find(lang => lang.code === currentLanguage)?.flagIcon}
               <span className="relative z-10">{languages.find(lang => lang.code === currentLanguage)?.code.toUpperCase()}</span>
              <ChevronDownIcon size={14} className={`transition-all duration-300 ${isLanguageDropdownOpen ? 'rotate-180 text-blue-400' : 'group-hover:text-blue-400'}`} />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </button>
            
            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-3 w-44 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10" />
                  {languages.map((language, index) => (
                    <motion.button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`relative w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 group overflow-hidden flex items-center space-x-3 ${
                        currentLanguage === language.code 
                          ? 'text-blue-400 bg-blue-400/10' 
                          : 'text-slate-300 hover:text-white'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                        {language.flagIcon}
                        <span className="relative z-10">{language.name}</span>
                      {currentLanguage === language.code && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" />
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </nav>
        {/* Mobile Menu Button */}
        <motion.button variants={itemVariants} className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} whileHover={{
        scale: 1.1
      }} whileTap={{
        scale: 0.9
      }}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </motion.button>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && <motion.div className="md:hidden absolute top-full left-0 right-0 glass-effect" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }}>
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-2">
              {navLinks.map((link, index) => <motion.a key={link.name} href={link.href} className={`relative text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-300 group overflow-hidden ${activeSection === link.href.substring(1) ? (isDarkSection ? 'text-blue-300 glow-text bg-blue-400/20' : 'text-blue-400 glow-text bg-blue-400/10') : (isDarkSection ? 'text-gray-200 hover:text-white hover:bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5')}`} onClick={() => setIsMenuOpen(false)} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: index * 0.1
            }
          }} exit={{
            opacity: 0,
            x: -20
          }} whileHover={{ x: 5 }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>)}
              
              {/* Mobile Contact Dropdown */}
              <motion.div 
                 className="border-t border-white/10 pt-4 mt-4"
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0, transition: { delay: navLinks.length * 0.1 } }}
                 exit={{ opacity: 0, x: -20 }}
               >
                 <div className="text-sm font-semibold text-slate-400 mb-3 px-4 flex items-center">
                   <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Więcej opcji</span>
                   <div className="flex-1 h-px bg-gradient-to-r from-blue-400/30 to-purple-400/30 ml-3" />
                 </div>
                 {contactDropdownItems.map((item, index) => (
                   <motion.a
                     key={item.name}
                     href={item.href}
                     className={`relative block text-sm font-medium py-3 px-6 ml-2 rounded-xl transition-all duration-300 group overflow-hidden ${isDarkSection ? 'text-gray-200 hover:text-white' : 'text-slate-300 hover:text-white'}`}
                     onClick={() => setIsMenuOpen(false)}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0, transition: { delay: (navLinks.length + index + 1) * 0.1 } }}
                     exit={{ opacity: 0, x: -20 }}
                     whileHover={{ x: 8 }}
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                     <span className="relative z-10">{item.name}</span>
                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   </motion.a>
                 ))}
               </motion.div>

               {/* Mobile Language Switcher */}
               <motion.div 
                 className="border-t border-white/10 pt-4 mt-4"
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0, transition: { delay: (navLinks.length + contactDropdownItems.length + 1) * 0.1 } }}
                 exit={{ opacity: 0, x: -20 }}
               >
                 <div className="text-sm font-semibold text-slate-400 mb-3 px-4 flex items-center">
                   <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Język</span>
                   <div className="flex-1 h-px bg-gradient-to-r from-blue-400/30 to-purple-400/30 ml-3" />
                 </div>
                 {languages.map((language, index) => (
                   <motion.button
                     key={language.code}
                     onClick={() => handleLanguageChange(language.code)}
                     className={`relative w-full text-left text-sm font-medium py-3 px-6 ml-2 rounded-xl transition-all duration-300 group overflow-hidden flex items-center space-x-3 ${
                       currentLanguage === language.code 
                         ? (isDarkSection ? 'text-blue-300 bg-blue-400/20' : 'text-blue-400 bg-blue-400/10')
                         : (isDarkSection ? 'text-gray-200 hover:text-white' : 'text-slate-300 hover:text-white')
                     }`}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0, transition: { delay: (navLinks.length + contactDropdownItems.length + index + 2) * 0.1 } }}
                     exit={{ opacity: 0, x: -20 }}
                     whileHover={{ x: 8 }}
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                       {language.flagIcon}
                       <span className="relative z-10">{language.name}</span>
                     {currentLanguage === language.code && (
                       <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" />
                     )}
                   </motion.button>
                 ))}
               </motion.div>
              
              <motion.div 
                 className="pt-4 px-4"
                 initial={{
                   opacity: 0,
                   y: 20
                 }} 
                 animate={{
                   opacity: 1,
                   y: 0
                 }} 
                 transition={{
                   delay: (navLinks.length + contactDropdownItems.length + 1) * 0.1
                 }}
               >
                 <motion.div
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="relative group"
                 >
                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                   <Button fullWidth className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 font-semibold tracking-wide shadow-lg py-4">Kontakt</Button>
                 </motion.div>
               </motion.div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
};
export default Navbar;