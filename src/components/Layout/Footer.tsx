import React, { Children } from 'react';
import { motion } from 'framer-motion';
const Footer = () => {
  const currentYear = new Date().getFullYear();
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
  return <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
      </div>
      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.1
    }} variants={containerVariants}>
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          <motion.div className="md:w-1/3" variants={itemVariants}>
            <motion.a 
              href="#home" 
              className="text-2xl font-bold flex items-center mb-4 relative group" 
              whileHover={{
                scale: 1.05
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
                className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text font-extrabold tracking-tight relative z-10"
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
            <p className="text-slate-400 mb-6">
              Tworzymy wyjątkowe doświadczenia cyfrowe poprzez innowacyjne
              tworzenie stron internetowych i projektowanie. Pomagamy firmom
              rozwijać się dzięki technologii.
            </p>
            <div className="flex space-x-4">
              <motion.a href="#" className="text-slate-400 hover:text-white transition-colors" whileHover={{
              y: -5,
              color: '#ffffff'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </motion.a>
              <motion.a href="#" className="text-slate-400 hover:text-white transition-colors" whileHover={{
              y: -5,
              color: '#ffffff'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </motion.a>
              <motion.a href="#" className="text-slate-400 hover:text-white transition-colors" whileHover={{
              y: -5,
              color: '#ffffff'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
              <motion.a href="#" className="text-slate-400 hover:text-white transition-colors" whileHover={{
              y: -5,
              color: '#ffffff'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </motion.a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-blue-300">
              Szybkie Linki
            </h4>
            <ul className="space-y-2">
              <li>
                <motion.a href="#home" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  Strona Główna
                </motion.a>
              </li>
              <li>
                <motion.a href="#about" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  O Nas
                </motion.a>
              </li>
              <li>
                <motion.a href="#services" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  Usługi
                </motion.a>
              </li>
              <li>
                <motion.a href="#portfolio" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  Portfolio
                </motion.a>
              </li>
              <li>
                <motion.a href="#pricing" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  Cennik
                </motion.a>
              </li>
              <li>
                <motion.a href="#contact" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  Kontakt
                </motion.a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-blue-300">Usługi</h4>
            <ul className="space-y-2">
              <li>
                <motion.a href="#services" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  Tworzenie Stron
                </motion.a>
              </li>
              <li>
                <motion.a href="#services" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  Projektowanie UI/UX
                </motion.a>
              </li>
              <li>
                <motion.a href="#services" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  Aplikacje Internetowe
                </motion.a>
              </li>
              <li>
                <motion.a href="#services" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  Konsultacje Techniczne
                </motion.a>
              </li>
              <li>
                <motion.a href="#services" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  Identyfikacja Marki
                </motion.a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-blue-300">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-slate-400">Warszawa, Polska</li>
              <li>
                <motion.a href="mailto:contact@bloompixel.pl" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  contact@bloompixel.pl
                </motion.a>
              </li>
              <li>
                <motion.a href="tel:+48123456789" className="text-slate-400 hover:text-white transition-colors" whileHover={{
                x: 5,
                color: '#ffffff'
              }}>
                  +48 123 456 789
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div className="pt-8 border-t border-slate-800 text-center" variants={itemVariants}>
          <p className="text-slate-500">
            &copy; {currentYear} BloomPixel.pl. Wszelkie prawa zastrzeżone.
          </p>
        </motion.div>
      </motion.div>
    </footer>;
};
export default Footer;