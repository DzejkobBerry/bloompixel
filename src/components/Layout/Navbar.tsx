import React, { useEffect, useState, Children } from 'react';
import { MenuIcon, XIcon, CodeIcon } from 'lucide-react';
import Button from '../UI/Button';
import { motion, AnimatePresence } from 'framer-motion';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Tech Stack',
    href: '#tech-stack'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Testimonials',
    href: '#testimonials'
  }, {
    name: 'Pricing',
    href: '#pricing'
  }, {
    name: 'Blog',
    href: '#blog'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
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
  return <motion.header initial="hidden" animate="visible" variants={navVariants} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.a href="#home" className="text-2xl font-bold text-white flex items-center" variants={itemVariants} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
          <span className="text-blue-400 glow-text">&lt;</span>
          <span className="gradient-text">BloomPixel</span>
          <span className="text-purple-400 glow-text-purple">/&gt;</span>
        </motion.a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => <motion.a key={link.name} href={link.href} className={`text-sm font-medium relative animated-underline ${activeSection === link.href.substring(1) ? 'text-blue-400 glow-text' : 'text-slate-300 hover:text-white'}`} variants={itemVariants} whileHover={{
          scale: 1.05
        }} custom={index}>
              {link.name}
            </motion.a>)}
          <motion.div variants={itemVariants}>
            <Button>Get in Touch</Button>
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
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => <motion.a key={link.name} href={link.href} className={`text-sm font-medium py-2 ${activeSection === link.href.substring(1) ? 'text-blue-400 glow-text' : 'text-slate-300 hover:text-white'}`} onClick={() => setIsMenuOpen(false)} initial={{
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
          }}>
                  {link.name}
                </motion.a>)}
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: navLinks.length * 0.1
          }}>
                <Button fullWidth>Get in Touch</Button>
              </motion.div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
};
export default Navbar;