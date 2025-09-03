import React, { useState, Children } from 'react';
import { CheckIcon, XIcon, Zap, Rocket, Crown, Star } from 'lucide-react';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import ParticlesLight from '../UI/ParticlesLight';
const PricingSection = () => {
  const [isGross, setIsGross] = useState(false);
  const pricingPlans = [{
    name: 'Starter',
    description: '🚀 Szybki start w świecie online! Profesjonalna wizytówka, która przyciągnie pierwszych klientów',
    netPrice: 300,
    grossPrice: 369,
    icon: Zap,
    color: 'from-green-500 to-emerald-600',
    features: ['Responsywna strona typu wizytówka', 'Podstawowy design', 'Formularz kontaktowy', 'Podstawowa optymalizacja SEO', 'Integracja z Google Analytics', 'Integracja z social media', '1 miesiąc wsparcia technicznego'],
    notIncluded: ['System CMS', 'Blog', 'Domena i hosting na 12 miesięcy', 'Certyfikat SSL']
  }, {
    name: 'Business',
    description: '💼 Kompletne rozwiązanie dla ambitnych firm! Wszystko czego potrzebujesz w jednym pakiecie',
    netPrice: 600,
    grossPrice: 738,
    icon: Rocket,
    color: 'from-blue-600 via-purple-600 to-indigo-700',
    features: ['Responsywna strona do 5 podstron', 'Zaawansowany design', 'Formularz kontaktowy', 'Zaawansowana optymalizacja SEO', 'Integracja z Google Analytics', 'Integracja z social media', 'Podstawowe animacje', 'Domena PL/NL na 12 miesięcy', 'Hosting na 12 miesięcy', '3 miesiące wsparcia technicznego'],
    notIncluded: ['System CMS', 'Blog'],
    featured: true
  }, {
    name: 'Premium',
    description: '👑 Ekskluzywne rozwiązanie dla liderów rynku! Zaawansowane funkcje i pełne wsparcie',
    netPrice: 2000,
    grossPrice: 2460,
    icon: Crown,
    color: 'from-purple-600 via-pink-600 to-red-600',
    features: ['Responsywny design strony', 'Nieograniczona liczba podstron', 'Zaawansowane formularze i integracje', 'Pełna optymalizacja mobilna', 'Kompleksowa strategia SEO', 'Zaawansowany CMS', 'Sklep internetowy (e-commerce)', 'Niestandardowe animacje', 'Funkcje aplikacji webowych', 'Hosting Premium na 12 miesięcy', '6 miesięcy wsparcia technicznego', 'Dedykowany opiekun projektu'],
    notIncluded: []
  }];
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
  return <section id="pricing" className="py-20 bg-gray-200 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 z-0"></div>
      
      {/* Molecular Animation Background */}
      <div className="absolute inset-0 z-10">
        <ParticlesLight />
      </div>
      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.1
    }} variants={containerVariants}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                Nasze
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Cennik
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Przejrzyste plany cenowe dostosowane do Twoich potrzeb i budżetu.
          </motion.p>
          <div className="flex items-center justify-center">
            <span className={`mr-3 text-sm font-medium ${!isGross ? 'text-blue-600' : 'text-slate-500'}`}>
              Netto
            </span>
            <div className="relative">
              <motion.div className="w-12 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full shadow-inner cursor-pointer" onClick={() => setIsGross(!isGross)} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <motion.div className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-sm" animate={{
                x: isGross ? 24 : 0
              }} transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
              }} />
              </motion.div>
            </div>
            <span className={`ml-3 text-sm font-medium ${isGross ? 'text-blue-600' : 'text-slate-500'}`}>
              Brutto{' '}
              <span className="text-xs text-gray-500 font-medium">
                (z VAT 23%)
              </span>
            </span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return <motion.div key={index} className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${plan.featured ? 'transform md:-translate-y-3 ring-2 ring-blue-400 ring-opacity-40 shadow-blue-100' : 'hover:-translate-y-2 hover:shadow-2xl'} relative border border-gray-200`} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }}>
              
              <div className={`relative p-8 ${plan.featured ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50' : 'bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50'}`}>
                {/* Icon, Name and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${plan.featured ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg' : 'bg-gradient-to-br from-slate-600 to-gray-700 shadow-lg'} transition-all duration-300 hover:scale-105`}>
                      <IconComponent size={28} className="text-white drop-shadow-sm" />
                    </div>
                    <h3 className={`text-2xl font-semibold ${plan.featured ? 'text-blue-700' : 'text-gray-900'}`}>{plan.name}</h3>
                  </div>
                  {plan.featured && <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1 shadow-lg">
                      ⭐ Popularne
                    </div>}
                </div>
                <p className={`text-base mb-8 leading-relaxed font-medium ${plan.featured ? 'text-blue-600' : 'text-gray-700'}`}>
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className={`mb-8 p-6 rounded-2xl ${plan.featured ? 'bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-200' : 'bg-gradient-to-r from-gray-100 to-slate-100 border-2 border-gray-200'} shadow-inner`}>
                  <div className="flex items-baseline mb-2">
                    <span className={`text-5xl font-black ${plan.featured ? 'text-blue-700' : 'text-gray-900'} drop-shadow-sm`}>
                      {(isGross ? plan.grossPrice : plan.netPrice).toLocaleString('pl-PL')}
                    </span>
                    <span className={`text-2xl ml-2 font-bold ${plan.featured ? 'text-blue-600' : 'text-gray-700'}`}>EUR</span>
                  </div>
                  {isGross && <div className="mt-3">
                    <span className={`${plan.featured ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-gray-600 to-slate-700'} text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg`}>
                      💰 Cena zawiera VAT 23%
                    </span>
                  </div>}
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant={plan.featured ? "primary" : "secondary"} fullWidth className={`${plan.featured ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-2 border-blue-200 shadow-md' : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300 shadow-md'} font-semibold py-4 rounded-xl transition-all duration-300`}>
                    Wyświetl szczegóły
                  </Button>
                </motion.div>
              </div>
              <div className="bg-gradient-to-b from-gray-50 to-white p-8 border-t border-gray-200">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-base">
                    <span className="text-green-500 mr-3 text-xl font-bold drop-shadow-sm bg-green-50 rounded-full w-6 h-6 flex items-center justify-center">✓</span>
                    W pakiecie:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => <motion.li key={idx} className="flex items-start group" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                        <div className="p-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                          <CheckIcon size={12} className="text-white" />
                        </div>
                        <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-200">{feature}</span>
                      </motion.li>)}
                  </ul>
                </div>
                {plan.notIncluded.length > 0 && <>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-base">
                        <span className="text-red-500 mr-3 text-xl font-bold drop-shadow-sm bg-red-50 rounded-full w-6 h-6 flex items-center justify-center">✗</span>
                        Poza Pakietem:
                      </h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, idx) => <motion.li key={idx} className="flex items-start group" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                            <div className="p-1 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 mr-3 mt-0.5 flex-shrink-0">
                              <XIcon size={12} className="text-white" />
                            </div>
                            <span className="text-gray-500 text-sm">
                              {feature}
                            </span>
                          </motion.li>)}
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-800 text-xs font-medium">
                        💡 <strong>Informacja:</strong> Wszystkie dodatkowe usługi można dokupić osobno w atrakcyjnych cenach.
                      </p>
                    </div>
                  </>}
              </div>
            </motion.div>
          })}
        </div>

        
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Potrzebujesz czegoś więcej?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Potrzebujesz rozwiązania na miarę? Możemy stworzyć spersonalizowany pakiet
            specjalnie dla Ciebie.
          </p>
          <Button variant="outline" size="lg">
            Skontaktuj się w sprawie indywidualnej wyceny
          </Button>
        </motion.div>
      </motion.div>
    </section>;
};
export default PricingSection;