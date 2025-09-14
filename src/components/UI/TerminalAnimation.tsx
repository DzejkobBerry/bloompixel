import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalAnimation = () => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const lines = [
    { text: "Creating new project...", duration: 800, color: "text-blue-400" },
    { text: "Installing dependencies...", duration: 1200, color: "text-yellow-400" },
    { text: "Setting up React components...", duration: 900, color: "text-cyan-400" },
    { text: "Configuring Tailwind CSS...", duration: 700, color: "text-purple-400" },
    { text: "Optimizing for performance...", duration: 1000, color: "text-orange-400" },
    { text: "Running tests...", duration: 600, color: "text-pink-400" },
    { text: "Building production bundle...", duration: 1100, color: "text-indigo-400" },
    { text: "Project successfully launched!", duration: 800, color: "text-green-400" }
  ];

  const stats = [
    { label: "Build time", value: "2.3s", color: "text-green-400" },
    { label: "Bundle size", value: "245KB", color: "text-blue-400" },
    { label: "Components", value: "24", color: "text-purple-400" }
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setText("");
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i < lines[currentLine].text.length) {
            setText(prev => prev + lines[currentLine].text.charAt(i));
            i++;
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              if (currentLine === lines.length - 1) {
                setIsComplete(true);
                setTimeout(() => {
                  setShowStats(true);
                  setTimeout(() => setShowModal(true), 1500);
                }, 500);
              }
              setCurrentLine(prev => prev + 1);
            }, 300);
          }
        }, Math.random() * 30 + 20); // Variable typing speed for realism
        return () => clearInterval(typingInterval);
      }, currentLine === 0 ? 500 : Math.random() * 500 + 300);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <motion.div 
      className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-2xl border border-slate-700/50"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal header */}
      <motion.div 
        className="h-10 bg-gradient-to-r from-slate-800 to-slate-700 flex items-center px-4 border-b border-slate-600/50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex space-x-2">
          <motion.div 
            className="w-3 h-3 rounded-full bg-red-500 shadow-lg"
            whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg"
            whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(234, 179, 8, 0.5)' }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-green-500 shadow-lg"
            whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
        </div>
        <div className="flex-1 text-center">
          <span className="text-slate-400 text-sm font-mono">Terminal - BloomPixel Build</span>
        </div>
        <div className="flex items-center space-x-2">
          <motion.div 
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs text-slate-500">Live</span>
        </div>
      </motion.div>

      {/* Terminal content */}
      <div className="p-6 font-mono text-sm leading-relaxed h-full overflow-hidden flex flex-col">
        {/* Command prompt */}
        <motion.div 
          className="mb-4 flex items-center flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-green-400 font-semibold whitespace-nowrap">user@bloompixel</span>
          <span className="text-slate-400 mx-1">:</span>
          <span className="text-blue-400 font-semibold whitespace-nowrap">~/projects</span>
          <span className="text-slate-400 mx-1">$</span>
          <motion.span 
            className="text-white ml-2 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            npm run build
          </motion.span>
        </motion.div>

        {/* Output lines */}
        <div className="space-y-2 flex-1 min-h-0">
          {lines.slice(0, currentLine).map((line, index) => (
            <motion.div 
              key={index} 
              className="flex items-start py-1 min-h-[1.5rem]"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.span 
                className="text-slate-500 mr-2 flex-shrink-0 mt-0.5"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                ▶
              </motion.span>
              <span className={`${line.color} break-words flex-1`}>{line.text}</span>
              {index === lines.length - 1 && isComplete && (
                <motion.span 
                  className="text-green-400 ml-2 font-bold"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                >
                  ✓
                </motion.span>
              )}
            </motion.div>
          ))}

          {/* Current typing line */}
          {currentLine < lines.length && (
            <motion.div 
              className="flex items-start py-1 min-h-[1.5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span 
                className="text-slate-500 mr-2 flex-shrink-0 mt-0.5"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ▶
              </motion.span>
              <span className={`${lines[currentLine]?.color || "text-gray-400"} break-words flex-1`}>{text}</span>
              <motion.span 
                className="inline-block w-2 h-5 bg-green-400 ml-1 rounded-sm"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              />
            </motion.div>
          )}
        </div>

        {/* Completion stats */}
        <AnimatePresence>
          {showStats && (
            <motion.div 
              className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-600/30"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="flex items-center mb-3">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-400 mr-2"
                  animate={{ 
                    boxShadow: [
                      "0 0 5px rgba(34, 197, 94, 0.5)",
        "0 0 15px rgba(34, 197, 94, 0.8)",
        "0 0 5px rgba(34, 197, 94, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 font-semibold">Build Complete</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-xs">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="text-slate-400">{stat.label}</div>
                    <div className={`font-bold ${stat.color}`}>{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ambient glow effects */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"
        animate={{ 
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Scan line effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent h-1 pointer-events-none"
        animate={{ 
          y: [0, 320, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 rounded-lg border border-slate-600/50 shadow-2xl w-full h-full relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 w-8 h-8 bg-slate-700/80 hover:bg-slate-600/80 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowModal(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Background Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/10 rounded-2xl"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              {/* Animated Border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(147, 51, 234, 0.3), transparent)',
                  backgroundSize: '400% 400%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Content Container */}
              <div className="relative z-10">
              {/* Success Icon */}
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
              >
                <motion.svg 
                  className="w-6 h-6 text-white"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </motion.svg>
              </motion.div>

              {/* Modal Content */}
              <div className="text-center">
                <motion.h3 
                  className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  🚀 Deployment Complete!
                </motion.h3>
                <motion.div 
                  className="text-xs text-blue-400 font-mono mb-3 bg-blue-400/10 px-2 py-1 rounded-full inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  ✓ Build: SUCCESS | Tests: PASSED | Deploy: LIVE
                </motion.div>
                <motion.p 
                  className="text-slate-300 mb-1 leading-relaxed font-medium text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Twój projekt został pomyślnie wdrożony i jest gotowy do użycia!
                </motion.p>
                <motion.p 
                  className="text-slate-400 text-xs mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  Wszystkie systemy działają poprawnie. Czas na kolejny krok - skontaktuj się z nami, aby omówić szczegóły współpracy.
                </motion.p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    className="flex-1 px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-slate-500/70 backdrop-blur-sm text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -1,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowModal(false)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Później
                    </span>
                  </motion.button>
                  <motion.button
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 font-semibold shadow-lg relative overflow-hidden text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowModal(false);
                      scrollToContact();
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ delay: 0.8, duration: 0.6, ease: 'easeInOut' }}
                    />
                    <span className="flex items-center justify-center gap-2 relative z-10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Rozpocznij Projekt
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.9, 0.5]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div 
                className="absolute top-4 -left-1 w-2 h-2 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full"
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
              />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TerminalAnimation;