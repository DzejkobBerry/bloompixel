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
              <div className="flex bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <service.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Active Service Card */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].bgGradient} opacity-50`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${services[activeService].color} mb-6`}>
                  {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{services[activeService].title}</h3>
                <p className="text-blue-300 mb-4">{services[activeService].subtitle}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{services[activeService].description}</p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <div>
                      <div className={`text-xl font-bold bg-gradient-to-r ${services[activeService].color} bg-clip-text text-transparent`}>
                        {services[activeService].stats.projects}
                      </div>
                      <div className="text-xs text-gray-400">Projektów</div>
                    </div>
                    <div>
                      <div className={`text-xl font-bold bg-gradient-to-r ${services[activeService].color} bg-clip-text text-transparent`}>
                        {services[activeService].stats.rating}
                      </div>
                      <div className="text-xs text-gray-400">Ocena</div>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleServiceClick('services')}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full"></div>
            </motion.div>

            {/* Service Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeService === index 
                      ? 'bg-blue-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
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