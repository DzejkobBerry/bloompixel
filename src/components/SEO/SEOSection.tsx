import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Globe, 
  Zap, 
  Award, 
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket
} from 'lucide-react';
import TypewriterText from '../UI/TypewriterText';

const SEOSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const seoServices = [
    {
      icon: Search,
      title: 'Analiza Słów Kluczowych',
      description: 'Kompleksowa analiza i dobór najlepszych słów kluczowych dla Twojej branży',
      features: ['Badanie konkurencji', 'Long-tail keywords', 'Analiza intencji wyszukiwania', 'Monitoring pozycji'],
      color: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      price: 'od 148€'
    },
    {
      icon: TrendingUp,
      title: 'Optymalizacja On-Page',
      description: 'Profesjonalna optymalizacja wszystkich elementów na stronie',
      features: ['Meta tags', 'Struktura URL', 'Optymalizacja treści', 'Schema markup'],
      color: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      price: 'od 214€'
    },
    {
      icon: Globe,
      title: 'Link Building',
      description: 'Budowanie autorytetu domeny poprzez wysokiej jakości linki',
      features: ['Guest posting', 'Katalogi branżowe', 'Partnerstwa', 'Content marketing'],
      color: 'from-green-400 to-teal-400',
      bgGradient: 'from-green-500/10 to-teal-500/10',
      price: 'od 263€'
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Raporty',
      description: 'Szczegółowe raporty i monitoring postępów w pozycjonowaniu',
      features: ['Google Analytics', 'Search Console', 'Raporty miesięczne', 'Analiza ROI'],
      color: 'from-orange-400 to-red-400',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      price: 'od 115€'
    }
  ];

  const seoStats = [
    { icon: TrendingUp, value: '300%', label: 'Średni wzrost ruchu', color: 'text-green-400' },
    { icon: Target, value: '95%', label: 'Skuteczność pozycjonowania', color: 'text-blue-400' },
    { icon: Users, value: '150+', label: 'Zadowolonych klientów', color: 'text-purple-400' },
    { icon: Award, value: '24/7', label: 'Wsparcie techniczne', color: 'text-orange-400' }
  ];

  const seoProcess = [
    {
      step: '01',
      title: 'Audyt SEO',
      description: 'Kompleksowa analiza obecnego stanu strony i identyfikacja obszarów do poprawy',
      icon: Search,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      step: '02',
      title: 'Strategia',
      description: 'Opracowanie dedykowanej strategii SEO dopasowanej do Twojego biznesu',
      icon: Target,
      color: 'from-purple-400 to-pink-400'
    },
    {
      step: '03',
      title: 'Implementacja',
      description: 'Wdrożenie optymalizacji technicznej i treściowej zgodnie ze strategią',
      icon: Zap,
      color: 'from-green-400 to-teal-400'
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Ciągły monitoring wyników i optymalizacja strategii dla lepszych efektów',
      icon: BarChart3,
      color: 'from-orange-400 to-red-400'
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={containerRef}
      id="seo" 
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Pozycjonowanie SEO</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Zwiększ Widoczność
            </span>
            <br />
            <TypewriterText 
              text="Swojej Strony w Google"
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              delay={500}
            />
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Profesjonalne pozycjonowanie SEO, które przynosi <span className="text-blue-400 font-semibold">mierzalne rezultaty</span>. 
            Zwiększamy ruch organiczny o średnio <span className="text-green-400 font-semibold">300%</span> w ciągu 6 miesięcy.
          </motion.p>
        </motion.div>

        {/* SEO Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {seoStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2 sm:mb-3`} />
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1 sm:mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nasze Usługi SEO
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{service.title}</h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    <span className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                      Dowiedz się więcej
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={hoveredCard === index ? { scale: 1.02 } : { scale: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Process */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Jak Pracujemy
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="mb-3 sm:mb-4">
                  <step.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{step.title}</h4>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{step.description}</p>
                
                {/* Connection Line */}
                {index < seoProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-6 sm:p-8 lg:p-12 border border-blue-500/20"
        >
          <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-400 mx-auto mb-4 sm:mb-6" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Gotowy na Zwiększenie Ruchu o 300%?
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś i otrzymaj <span className="text-blue-400 font-semibold">bezpłatny audyt SEO</span> swojej strony internetowej.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto"
            >
              Bezpłatny Audyt SEO
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-bold text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Zobacz Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOSection;