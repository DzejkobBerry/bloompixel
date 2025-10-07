import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Search, 
  ArrowRight, 
  Star, 
  Users, 
  Zap, 
  Award,
  CheckCircle,
  Globe,
  Rocket,
  Sparkles,
  Target
} from 'lucide-react';
import TypewriterText from '../UI/TypewriterText';
import '../../styles/glow-effects.css';

const Hero = () => {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 'web-development',
      title: 'Tworzenie Stron Internetowych',
      subtitle: 'React • Next.js • TypeScript',
      description: 'Nowoczesne, responsywne strony internetowe z najwyższą wydajnością i optymalizacją SEO',
      icon: Code,
      color: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      features: ['Responsywny Design', 'Optymalizacja SEO', 'Wysoka Wydajność', 'Nowoczesne Technologie'],
      stats: { projects: '150+', rating: '4.9/5' }
    },
    {
      id: 'ui-ux-design',
      title: 'Projektowanie UI/UX',
      subtitle: 'Figma • Adobe • Prototyping',
      description: 'Intuicyjne interfejsy użytkownika oparte na badaniach UX i najlepszych praktykach designu',
      icon: Palette,
      color: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      features: ['Badania Użytkowników', 'Prototypowanie', 'Design System', 'Testy Użyteczności'],
      stats: { projects: '200+', rating: '4.8/5' }
    },
    {
      id: 'seo-marketing',
      title: 'Pozycjonowanie SEO',
      subtitle: 'Google Analytics • Search Console',
      description: 'Kompleksowa optymalizacja SEO zwiększająca widoczność w wyszukiwarkach o średnio 300%',
      icon: Search,
      color: 'from-green-400 to-teal-400',
      bgGradient: 'from-green-500/20 to-teal-500/20',
      features: ['Analiza Słów Kluczowych', 'Optymalizacja On-Page', 'Link Building', 'Monitoring Pozycji'],
      stats: { projects: '100+', rating: '4.9/5' }
    },
    {
      id: 'digital-growth',
      title: 'Marketing Cyfrowy',
      subtitle: 'Social Media • PPC • Analytics',
      description: 'Strategiczne podejście do marketingu cyfrowego zwiększające konwersje i ROI',
      icon: TrendingUp,
      color: 'from-orange-400 to-red-400',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      features: ['Kampanie PPC', 'Social Media', 'Email Marketing', 'Analityka i Raporty'],
      stats: { projects: '80+', rating: '4.7/5' }
    }
  ];

  const companyStats = [
    { icon: Star, value: '4.9', suffix: '/5', label: 'Ocena klientów', color: 'text-yellow-400' },
    { icon: Users, value: '500', suffix: '+', label: 'Zadowolonych klientów', color: 'text-blue-400' },
    { icon: Award, value: '8', suffix: '+', label: 'Lat doświadczenia', color: 'text-purple-400' },
    { icon: Rocket, value: '300', suffix: '%', label: 'Średni wzrost ruchu', color: 'text-green-400' }
  ];

  const handleServiceClick = (targetSection: string) => {
    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden flex items-center"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>
        
        {/* Interactive mouse follower */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-radial from-blue-400/10 to-transparent rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-60"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-32 left-16 w-6 h-6 bg-purple-400 rounded-full opacity-40"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-50"
        style={{ animationDelay: '4s' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Column - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Agencja Kreatywna #1 w Polsce</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Tworzymy
                </span>
                <br />
                <TypewriterText 
                  text="Cyfrowe Doświadczenia"
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  delay={1000}
                />
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Specjalizujemy się w <span className="text-blue-400 font-semibold">tworzeniu stron internetowych</span>, 
                <span className="text-purple-400 font-semibold"> projektowaniu UI/UX</span> i 
                <span className="text-green-400 font-semibold"> pozycjonowaniu SEO</span> dla firm, które chcą wyróżnić się w cyfrowym świecie.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleServiceClick('contact')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Rozpocznij Projekt
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleServiceClick('portfolio')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Zobacz Portfolio
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Bezpłatna konsultacja</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Gwarancja jakości</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Service Navigation */}
            <motion.div variants={itemVariants} className="flex justify-center mb-8">
              <div className="flex bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10 shadow-lg">
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-3 rounded-xl transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <motion.div
                      animate={activeService === index ? { rotate: [0, 5, -5, 0] } : {}}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <service.icon className="w-5 h-5" />
                    </motion.div>
                    
                    {/* Active indicator glow */}
                    {activeService === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-blue-600/20 rounded-xl blur-md -z-10"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Active Service Card */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/40 hover:bg-white/8 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl"
            >
              {/* Enhanced Background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${services[activeService].bgGradient} opacity-20`}
                animate={{ opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Subtle animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, transparent, ${services[activeService].color.split(' ')[1]}/10, transparent)`,
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Enhanced Icon */}
                <motion.div 
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${services[activeService].color} mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {React.createElement(services[activeService].icon, { className: "w-7 h-7 text-white" })}
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {services[activeService].title}
                </motion.h3>
                
                <motion.p 
                  className="text-blue-300 mb-4 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {services[activeService].subtitle}
                </motion.p>
                
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {services[activeService].description}
                </motion.p>
                
                {/* Enhanced Features */}
                <motion.div 
                  className="grid grid-cols-2 gap-3 mb-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.4
                      }
                    }
                  }}
                >
                  {services[activeService].features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      </motion.div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Enhanced Stats */}
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex gap-6">
                    <motion.div 
                      className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <motion.div 
                        className={`text-xl font-bold bg-gradient-to-r ${services[activeService].color} bg-clip-text text-transparent`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {services[activeService].stats.projects}
                      </motion.div>
                      <div className="text-xs text-gray-400">Projektów</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <motion.div 
                        className={`text-xl font-bold bg-gradient-to-r ${services[activeService].color} bg-clip-text text-transparent`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        {services[activeService].stats.rating}
                      </motion.div>
                      <div className="text-xs text-gray-400">Ocena</div>
                    </motion.div>
                  </div>
                  
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleServiceClick('services')}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Dowiedz się więcej
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>

              {/* Enhanced Decorative Elements */}
              <motion.div 
                className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-sm"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-transparent rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-br-2xl"></div>
            </motion.div>

            {/* Enhanced Service Indicators */}
            <motion.div 
              className="flex justify-center mt-6 gap-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveService(index)}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                    activeService === index 
                      ? 'bg-blue-500 w-6 shadow-lg shadow-blue-500/50' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                >
                  {activeService === index && (
                    <motion.div
                      className="absolute inset-0 bg-blue-500 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm">Przewiń w dół</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;