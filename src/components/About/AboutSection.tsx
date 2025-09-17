import React, { useEffect, useRef, useState } from 'react';
import { Star, Heart, Sparkles, TrendingUp, Shield, Globe, Rocket } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import TypewriterText from '../UI/TypewriterText';
const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const companyStats = [
    { icon: Star, label: 'Lat doświadczenia', value: 8, suffix: '+', color: 'from-yellow-400 via-orange-400 to-red-400', bgColor: 'bg-yellow-500/10' },
    { icon: Heart, label: 'Zadowoleni klienci', value: 150, suffix: '+', color: 'from-pink-400 via-rose-400 to-red-400', bgColor: 'bg-pink-500/10' },
    { icon: Sparkles, label: 'Zrealizowane projekty', value: 200, suffix: '+', color: 'from-purple-400 via-violet-400 to-indigo-400', bgColor: 'bg-purple-500/10' },
    { icon: TrendingUp, label: 'Wzrost biznesu klientów', value: 300, suffix: '%', color: 'from-green-400 via-emerald-400 to-teal-400', bgColor: 'bg-green-500/10' }
  ];

  const companyValues = [
    {
      icon: Sparkles,
      title: 'Innowacyjność',
      subtitle: 'Zawsze na czele technologii',
      description: 'W BloomPixel wierzymy, że innowacja to klucz do sukcesu. Stale eksplorujemy nowe technologie i rozwiązania.',
      color: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      features: ['Najnowsze frameworki', 'AI i Machine Learning', 'Progressive Web Apps', 'Blockchain solutions']
    },
    {
      icon: Shield,
      title: 'Jakość',
      subtitle: 'Perfekcja w każdym detalu',
      description: 'Jakość to fundament naszej pracy. Każdy projekt przechodzi przez rygorystyczne testy i kontrolę jakości.',
      color: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      features: ['Code review', 'Automatyczne testy', 'Performance monitoring', 'Security audits']
    },
    {
      icon: Heart,
      title: 'Partnerstwo',
      subtitle: 'Budujemy długotrwałe relacje',
      description: 'Nie jesteśmy tylko dostawcą usług - jesteśmy Twoim partnerem technologicznym wspierającym rozwój biznesu.',
      color: 'from-green-400 to-teal-400',
      bgGradient: 'from-green-500/20 to-teal-500/20',
      features: ['Długoterminowe wsparcie', 'Konsultacje strategiczne', 'Szkolenia zespołu', 'Maintenance i rozwój']
    }
  ];


  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const transformX1 = useTransform(mouseX, [0, 1000], [0, 50]);
  const transformY1 = useTransform(mouseY, [0, 1000], [0, 30]);
  const transformX2 = useTransform(mouseX, [0, 1000], [0, -30]);
  const transformY2 = useTransform(mouseY, [0, 1000], [0, -20]);
  
  const [animatedStats, setAnimatedStats] = useState(companyStats.map(() => 0));
  
  useEffect(() => {
    if (isInView) {
      // Animate stats
      companyStats.forEach((stat, index) => {
        let start = 0;
        const increment = stat.value / 60;
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.value) {
            start = stat.value;
            clearInterval(timer);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(start);
            return newStats;
          });
        }, 30);
      });
    }
  }, [isInView]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };


  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.15),transparent_50%)]" />
        {/* Premium Pattern Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%222%22/%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2220%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2260%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        {/* Elegant Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-opacity%3D%220.02%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22M0%2050h100M50%200v100%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        {/* Premium Sparkle Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0s'}} />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '3s'}} />
          <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
          <div className="absolute top-3/4 right-1/6 w-0.5 h-0.5 bg-violet-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
        </div>
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          style={{
            x: transformX1,
            y: transformY1
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl"
          style={{
            x: transformX2,
            y: transformY2
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-6 py-20 relative z-10" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={containerVariants} 
        ref={containerRef}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                <TypewriterText text="Poznaj" delay={500} speed={100} />
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                <TypewriterText text="BloomPixel" delay={1500} speed={120} />
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            BloomPixel to agencja kreatywna specjalizująca się w tworzeniu nowoczesnych rozwiązań cyfrowych. 
            Od 2016 roku pomagamy firmom rozwijać się w świecie cyfrowym, tworząc strony internetowe, 
            aplikacje mobilne i systemy e-commerce, które nie tylko wyglądają świetnie, ale także przynoszą realne rezultaty biznesowe.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 flex-1">
              <h4 className="text-xl font-bold text-white mb-3">Nasza Misja</h4>
              <p className="text-gray-300">Tworzymy cyfrowe doświadczenia, które łączą piękno designu z funkcjonalnością technologii, pomagając naszym klientom osiągnąć sukces w świecie online.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 flex-1">
              <h4 className="text-xl font-bold text-white mb-3">Nasza Wizja</h4>
              <p className="text-gray-300">Być liderem w dziedzinie innowacyjnych rozwiązań cyfrowych, wyznaczając standardy jakości i kreatywności w branży IT.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {companyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className={`${stat.bgColor} backdrop-blur-xl rounded-3xl p-6 border border-white/10`}>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} p-3 mb-4 mx-auto shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 text-center">
                    {animatedStats[index]}{stat.suffix}
                  </div>
                  <p className="text-gray-400 text-center text-sm font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive Features Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-white mb-4">
              Dlaczego <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">BloomPixel?</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Poznaj nasze wartości i podejście do tworzenia oprogramowania
            </p>
          </div>
          
          {/* Feature Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10 flex flex-row space-x-2">
              {companyValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                      activeFeature === index
                        ? `bg-gradient-to-r ${value.color} text-white shadow-lg`
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold">{value.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Feature Display */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className={`bg-gradient-to-r ${companyValues[activeFeature].bgGradient} backdrop-blur-xl rounded-3xl p-8 border border-white/20`}>
              <div className="text-center mb-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${companyValues[activeFeature].color} p-5 mx-auto mb-6 shadow-2xl`}>
                   {(() => {
                     const IconComponent = companyValues[activeFeature].icon;
                     return <IconComponent className="w-full h-full text-white" />;
                   })()}
                 </div>
                <h4 className="text-3xl font-bold text-white mb-2">{companyValues[activeFeature].title}</h4>
                <p className="text-lg text-blue-200 mb-4">{companyValues[activeFeature].subtitle}</p>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                  {companyValues[activeFeature].description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {companyValues[activeFeature].features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
                  >
                    <span className="text-white font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Zrealizujmy Twój <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projekt</span> Razem
            </motion.h3>
            <motion.p 
              className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Masz pomysł na aplikację, stronę internetową lub system e-commerce? 
              Skontaktuj się z nami i przekonaj się, dlaczego klienci wybierają BloomPixel.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Bezpłatna Konsultacja
                  <Rocket className="w-5 h-5" />
                </span>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
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
                Nasze Realizacje
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default AboutSection;