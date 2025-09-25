import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Palette, TrendingUp, ArrowRight, Star, Users, Zap, Megaphone } from 'lucide-react';
import '../../styles/glow-effects.css';

const Hero = () => {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);

  // Function to handle button clicks and navigate to appropriate sections
  const handleButtonClick = (panelId: string) => {
    let targetSection = '';
    
    switch (panelId) {
      case 'web-dev':
        targetSection = 'pricing';
        break;
      case 'mobile-apps':
        targetSection = 'services';
        break;
      case 'ui-ux':
        targetSection = 'services';
        break;
      case 'digital-marketing':
        targetSection = 'contact';
        break;
      default:
        targetSection = 'services';
    }
    
    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const panels = [
    {
      id: 'web-dev',
      title: 'Tworzenie Stron',
      subtitle: 'Nowoczesne strony internetowe',
      description: 'Tworzymy responsywne, szybkie i SEO-friendly strony internetowe wykorzystując najnowsze technologie jak React, Next.js i TypeScript.',
      icon: Code,
      colorClass: 'bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600',
      glowClass: 'glow-blue',
      accentColor: 'from-blue-300 to-cyan-400',
      particleColor: 'bg-blue-400',
      features: [
        '⚡ Błyskawiczna wydajność',
        '📱 Pełna responsywność',
        '🔍 Optymalizacja SEO',
        '🎨 Nowoczesny design'
      ],
      stats: { projects: '50+', satisfaction: '99%' }
    },
    {
      id: 'mobile-apps',
      title: 'Promowanie usług',
      subtitle: 'Marketing i promocja',
      description: 'Kompleksowe usługi marketingowe i promocyjne - prowadzenie fanpage, rekrutacja, reklama biznesu i budowanie obecności online.',
      icon: Megaphone,
      colorClass: 'bg-gradient-to-br from-purple-400 via-purple-500 to-violet-600',
      glowClass: 'glow-purple',
      accentColor: 'from-purple-300 to-pink-400',
      particleColor: 'bg-purple-400',
      features: [
        '📄 Prowadzenie FanPage',
        '👥 Rekrutacja Pracowników',
        '📢 Reklama Biznesu',
        '📱 Marketing Społecznościowy'
      ],
      stats: { projects: '30+', satisfaction: '98%' }
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      subtitle: 'Projektowanie interfejsów',
      description: 'Tworzymy piękne, funkcjonalne interfejsy użytkownika oparte na badaniach UX i najlepszych praktykach designu.',
      icon: Palette,
      colorClass: 'bg-gradient-to-br from-cyan-400 via-cyan-500 to-teal-600',
      glowClass: 'glow-cyan',
      accentColor: 'from-cyan-300 to-emerald-400',
      particleColor: 'bg-cyan-400',
      features: [
        '🎨 Kreatywny design',
        '👥 Badania użytkowników',
        '🔧 Prototypowanie',
        '✨ Animacje i mikro-interakcje'
      ],
      stats: { projects: '80+', satisfaction: '97%' }
    },
    {
      id: 'digital-marketing',
      title: 'Marketing Cyfrowy',
      subtitle: 'Strategia i wzrost',
      description: 'Pomagamy firmom rozwijać się online poprzez skuteczne strategie marketingowe, SEO, SEM i social media.',
      icon: TrendingUp,
      colorClass: 'bg-gradient-to-br from-pink-400 via-pink-500 to-rose-600',
      glowClass: 'glow-pink',
      accentColor: 'from-pink-300 to-orange-400',
      particleColor: 'bg-pink-400',
      features: [
        '📈 Wzrost sprzedaży',
        '🎯 Targetowane kampanie',
        '📊 Analityka i raporty',
        '🌐 Social media'
      ],
      stats: { projects: '40+', satisfaction: '96%' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Interactive Panels - Full Screen Wall */}
      <motion.div 
        className="flex flex-col lg:flex-row h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
          {panels.map((panel, index) => {
            const Icon = panel.icon;
            const isHovered = hoveredPanel === panel.id;
            const isAnyHovered = hoveredPanel !== null;
            
            return (
              <motion.div
                key={panel.id}
                className={`relative overflow-hidden cursor-pointer ${panel.colorClass} flex-1`}
                variants={panelVariants}
                onMouseEnter={() => setHoveredPanel(panel.id)}
                onMouseLeave={() => setHoveredPanel(null)}
                animate={{
                  scale: isHovered ? 1.02 : 1,
                  flexGrow: isHovered ? 2 : 1,
                  flexShrink: isAnyHovered && !isHovered ? 3 : 0,
                  opacity: isAnyHovered && !isHovered ? 0.7 : 1,
                  rotateY: isHovered ? 2 : 0,
                  z: isHovered ? 10 : 0
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth easing
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.8 },
                  opacity: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Animated Background Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 ${panel.particleColor} rounded-full`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: isHovered ? [0, -30, 0] : [0, -10, 0],
                        x: isHovered ? [0, Math.random() * 20 - 10, 0] : [0, Math.random() * 10 - 5, 0],
                        opacity: isHovered ? [0.2, 1, 0.2] : [0.1, 0.4, 0.1],
                        scale: isHovered ? [1, 2, 1] : [1, 1.2, 1],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: isHovered ? 2 + Math.random() * 1 : 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    scale: { duration: 2, repeat: isHovered ? Infinity : 0 },
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${panel.accentColor} opacity-30 blur-sm`}
                    animate={{
                      background: isHovered ? [
                        `linear-gradient(0deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)`,
                        `linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)`,
                        `linear-gradient(180deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)`,
                        `linear-gradient(270deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)`,
                        `linear-gradient(0deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)`
                      ] : `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`
                    }}
                    transition={{
                      duration: 3,
                      repeat: isHovered ? Infinity : 0,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Sweeping light effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: isHovered ? ['-100%', '100%'] : '100%',
                      opacity: isHovered ? [0, 1, 0] : 0
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isHovered ? Infinity : 0,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Dynamic Mesh Gradient Overlay */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: isHovered ? 0.3 : 0.1,
                    scale: isHovered ? [1, 1.02, 1] : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    scale: { duration: 4, repeat: isHovered ? Infinity : 0 },
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: isHovered ? [
                        `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                        `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                        `radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                        `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                        `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)`
                      ] : `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)`
                    }}
                    transition={{
                      duration: 6,
                      repeat: isHovered ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Additional floating orbs */}
                  {isHovered && [...Array(3)].map((_, i) => (
                    <motion.div
                      key={`orb-${i}`}
                      className="absolute w-4 h-4 bg-white/10 rounded-full blur-sm"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -40, 30, 0],
                        opacity: [0, 0.6, 0.3, 0],
                        scale: [0.5, 1.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Enhanced Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${panel.accentColor} opacity-0 blur-xl`}
                  animate={{
                    opacity: isHovered ? [0, 0.4, 0] : 0,
                    scale: isHovered ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
                {/* Content */}
                <div className="relative z-10 p-8 pt-20 h-full flex flex-col overflow-hidden">
                  {/* Default State - Centered Content */}
                  <AnimatePresence mode="wait">
                    {!isHovered ? (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 flex flex-col items-center justify-center text-center"
                      >
                        {/* Centered Icon */}
                        <motion.div 
                          className="relative mb-8"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className={`w-20 h-20 rounded-3xl ${panel.colorClass} flex items-center justify-center relative overflow-hidden shadow-2xl`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* Background Glow */}
                            <motion.div
                              className="absolute inset-0 bg-white/20 rounded-3xl"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.4, 0.2],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                              }}
                            />
                            <Icon className="text-white relative z-10" size={32} />
                            
                            {/* Sparkle Effect */}
                            <motion.div
                              className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 1,
                              }}
                            />
                          </motion.div>
                        </motion.div>

                        {/* Centered Title */}
                        <motion.h3 
                          className="text-3xl font-bold text-white mb-4 tracking-tight"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          {panel.title}
                        </motion.h3>

                        {/* Centered Subtitle */}
                        <motion.p 
                          className="text-white/80 text-lg font-medium mb-6 tracking-wide"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {panel.subtitle}
                        </motion.p>

                        {/* Centered Description */}
                        <motion.p 
                          className="text-white/70 text-base leading-relaxed font-light max-w-sm"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          {panel.description}
                        </motion.p>


                      </motion.div>
                    ) : (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ 
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          staggerChildren: 0.1
                        }}
                        className="flex-1 flex flex-col"
                      >
                        {/* Header with Icon - Compact Version */}
                        <div className="flex items-center space-x-4 mb-6">
                          <motion.div 
                            className="relative flex-shrink-0"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className={`w-12 h-12 rounded-2xl ${panel.colorClass} flex items-center justify-center relative overflow-hidden`}>
                              <Icon className="text-white relative z-10" size={20} />
                            </div>
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                              {panel.title}
                            </h3>
                            <p className="text-white/70 text-sm font-medium uppercase tracking-wider">
                              {panel.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Expanded Content - Completely Redesigned */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 30, rotateX: -15 }}
                              animate={{ opacity: 1, y: 0, rotateX: 0 }}
                              exit={{ opacity: 0, y: -30, rotateX: 15 }}
                              transition={{ 
                                duration: 0.6, 
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.1
                              }}
                              className="flex-1 overflow-y-auto overflow-x-hidden max-h-full"
                              style={{ transformStyle: "preserve-3d" }}
                            >
                              {/* Visual Separator */}
                              <motion.div 
                                className={`h-px bg-gradient-to-r ${panel.accentColor} opacity-40 mb-6`}
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 0.6 }}
                                transition={{ 
                                  duration: 0.8, 
                                  ease: "easeOut",
                                  delay: 0.2
                                }}
                                style={{ transformOrigin: "left" }}
                              />

                              {/* Hero Description Card */}
                              <motion.div 
                                className="relative p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-4 overflow-hidden"
                                initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                                transition={{ 
                                  delay: 0.3, 
                                  duration: 0.6,
                                  ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                whileHover={{ 
                                  scale: 1.02,
                                  y: -2,
                                  transition: { duration: 0.2 }
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                              >
                                {/* Animated background gradient */}
                                <motion.div
                                  className={`absolute inset-0 bg-gradient-to-br ${panel.accentColor} opacity-20`}
                                  animate={{
                                    background: [
                                      `linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)`,
                                      `linear-gradient(225deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)`,
                                      `linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)`
                                    ]
                                  }}
                                  transition={{ duration: 4, repeat: Infinity }}
                                />
                                 
                                <div className="relative z-10">
                                  <motion.p 
                                    className="text-white/90 text-sm leading-relaxed font-medium"
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ 
                                      delay: 0.5,
                                      duration: 0.4,
                                      ease: "easeOut"
                                    }}
                                  >
                                    {panel.description}
                                  </motion.p>
                                </div>
                              </motion.div>

                              {/* Features Grid */}
                              <motion.div 
                                className="mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                  delay: 0.6, 
                                  duration: 0.5,
                                  ease: "easeOut"
                                }}
                              >
                                <motion.h4 
                                  className="text-white font-bold mb-3 flex items-center text-base"
                                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                                  animate={{ opacity: 1, x: 0, scale: 1 }}
                                  transition={{ 
                                    delay: 0.7,
                                    duration: 0.5,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                  }}
                                >
                                  <motion.div 
                                    className={`w-8 h-8 rounded-xl bg-gradient-to-r ${panel.accentColor} flex items-center justify-center mr-3 shadow-lg`}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ 
                                      delay: 0.8,
                                      duration: 0.6,
                                      ease: "easeOut"
                                    }}
                                    whileHover={{ 
                                      scale: 1.15, 
                                      rotate: 10,
                                      transition: { duration: 0.2 }
                                    }}
                                  >
                                    <Star className="text-white" size={16} />
                                  </motion.div>
                                  Kluczowe funkcje
                                </motion.h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                  {panel.features.map((feature, idx) => (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, y: 30, scale: 0.8, rotateY: -15 }}
                                      animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                                      transition={{ 
                                        delay: 0.9 + idx * 0.1, 
                                        duration: 0.6,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                      }}
                                      className="group"
                                      style={{ transformStyle: "preserve-3d" }}
                                    >
                                      <motion.div 
                                        className="relative p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
                                        whileHover={{ 
                                          scale: 1.05, 
                                          y: -4,
                                          rotateX: 5,
                                          transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ 
                                          scale: 0.95,
                                          transition: { duration: 0.1 }
                                        }}
                                        style={{ transformStyle: "preserve-3d" }}
                                      >
                                        {/* Hover effect background */}
                                        <motion.div
                                          className={`absolute inset-0 bg-gradient-to-r ${panel.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                                        />
                                        
                                        <div className="relative z-10 flex items-center">
                                          <motion.div 
                                            className="w-2 h-2 rounded-full bg-white/60 mr-2 flex-shrink-0"
                                            whileHover={{ scale: 1.3, backgroundColor: "rgba(255,255,255,0.9)" }}
                                          />
                                          <span className="text-white/90 text-xs font-medium group-hover:text-white transition-colors">
                                            {feature}
                                          </span>
                                        </div>
                                      </motion.div>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>

                              {/* Stats Section */}
                              <motion.div 
                                className="mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                  delay: 1.2, 
                                  duration: 0.6,
                                  ease: "easeOut"
                                }}
                              >
                                 <motion.h4 
                                   className="text-white font-bold mb-3 flex items-center text-base"
                                   initial={{ opacity: 0, x: -30, scale: 0.9 }}
                                   animate={{ opacity: 1, x: 0, scale: 1 }}
                                   transition={{ 
                                     delay: 1.3,
                                     duration: 0.5,
                                     ease: [0.25, 0.46, 0.45, 0.94]
                                   }}
                                 >
                                   <motion.div 
                                     className={`w-8 h-8 rounded-xl bg-gradient-to-r ${panel.accentColor} flex items-center justify-center mr-3 shadow-lg`}
                                     initial={{ scale: 0, rotate: 180 }}
                                     animate={{ scale: 1, rotate: 0 }}
                                     transition={{ 
                                       delay: 1.4,
                                       duration: 0.6,
                                       ease: "easeOut"
                                     }}
                                     whileHover={{ 
                                       scale: 1.15, 
                                       rotate: -10,
                                       transition: { duration: 0.2 }
                                     }}
                                   >
                                     <Users className="text-white" size={16} />
                                   </motion.div>
                                   Nasze osiągnięcia
                                 </motion.h4>
                                 
                                 <div className="grid grid-cols-2 gap-3">
                                   <motion.div 
                                     className="relative text-center p-3 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 overflow-hidden group cursor-pointer"
                                     initial={{ opacity: 0, scale: 0.7, rotateY: -25, y: 40 }}
                                     animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                                     transition={{ 
                                       delay: 1.5, 
                                       duration: 0.7,
                                       ease: [0.25, 0.46, 0.45, 0.94]
                                     }}
                                     whileHover={{ 
                                       scale: 1.08, 
                                       y: -5,
                                       rotateX: 5,
                                       transition: { duration: 0.3 }
                                     }}
                                     style={{ transformStyle: "preserve-3d" }}
                                   >
                                     {/* Animated background */}
                                     <motion.div
                                       className={`absolute inset-0 bg-gradient-to-br ${panel.accentColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                                     />
                              
                              {/* Floating particles */}
                              <motion.div
                                className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.6, 1, 0.6],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              
                              <div className="relative z-10">
                                <motion.div 
                                  className="text-4xl font-bold text-white mb-2"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {panel.stats.projects}
                                </motion.div>
                                <div className="text-white/70 text-xs uppercase tracking-wider font-semibold">
                                  Projektów
                                </div>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              className="relative text-center p-5 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 overflow-hidden group cursor-pointer"
                              initial={{ opacity: 0, scale: 0.7, rotateY: 25, y: 40 }}
                              animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                              transition={{ 
                                delay: 1.6, 
                                duration: 0.7,
                                ease: [0.25, 0.46, 0.45, 0.94]
                              }}
                              whileHover={{ 
                                scale: 1.08, 
                                y: -5,
                                rotateX: -5,
                                transition: { duration: 0.3 }
                              }}
                              style={{ transformStyle: "preserve-3d" }}
                            >
                              {/* Animated background */}
                              <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${panel.accentColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                              />
                              
                              {/* Floating particles */}
                              <motion.div
                                className="absolute top-2 left-2 w-2 h-2 bg-white/60 rounded-full"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.6, 1, 0.6],
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                              />
                              
                              <div className="relative z-10">
                                <motion.div 
                                  className="text-4xl font-bold text-white mb-2"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {panel.stats.satisfaction}
                                </motion.div>
                                <div className="text-white/70 text-xs uppercase tracking-wider font-semibold">
                                  Zadowolenie
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Enhanced CTA Button */}
                        <motion.button
                          onClick={() => handleButtonClick(panel.id)}
                          className={`relative w-full bg-gradient-to-r ${panel.accentColor} backdrop-blur-sm border border-white/30 rounded-2xl py-5 px-6 text-white font-bold hover:shadow-2xl transition-all duration-500 flex items-center justify-center group overflow-hidden`}
                          initial={{ opacity: 0, y: 40, scale: 0.8, rotateX: -15 }}
                          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                          transition={{ 
                            delay: 1.8, 
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -3,
                            rotateX: 2,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ 
                            scale: 0.98,
                            transition: { duration: 0.1 }
                          }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {/* Multiple animated backgrounds */}
                          <motion.div
                            className="absolute inset-0 bg-white/10 rounded-2xl"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                          />
                          
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                          
                          {/* Pulsing glow effect */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${panel.accentColor} rounded-2xl blur-xl opacity-50`}
                            animate={{
                              scale: [1, 1.05, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                          
                          <span className="relative z-10 mr-3 text-lg">Dowiedz się więcej</span>
                          <motion.div
                            whileHover={{ x: 5, rotate: -15 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight 
                              className="relative z-10" 
                              size={20} 
                            />
                          </motion.div>
                        </motion.button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Icon for non-hovered state */}
                  {!isHovered && (
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center text-white/80">
                        <Zap size={16} className="mr-2" />
                        <span className="text-sm">Najedź aby zobaczyć więcej</span>
                      </div>
                      <ArrowRight className="text-white/60" size={20} />
                    </div>
                  )}
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 ${panel.glowClass} opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </motion.div>
            );
          })}
        </motion.div>
    </section>
  );
};

export default Hero;