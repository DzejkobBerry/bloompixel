import React, { useState, Children } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import ParticlesLight from '../UI/ParticlesLight';
const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const pricingPlans = [{
    name: 'Starter',
    description: 'Idealny dla małych firm i startupów',
    monthlyPrice: 2499,
    annualPrice: 2199,
    features: ['Responsywny design strony', 'Do 5 podstron', 'Formularz kontaktowy', 'Optymalizacja mobilna', 'Podstawowe SEO', 'Hosting na 12 miesięcy', '1 miesiąc wsparcia technicznego', 'Certyfikat SSL'],
    notIncluded: ['Funkcjonalność e-commerce', 'Niestandardowe animacje', 'System zarządzania treścią']
  }, {
    name: 'Business',
    description: 'Najlepszy wybór dla rozwijających się firm',
    monthlyPrice: 4999,
    annualPrice: 4499,
    features: ['Responsywny design strony', 'Do 15 podstron', 'Zaawansowane formularze', 'Newsletter i integracje', 'Optymalizacja mobilna', 'Zaawansowane SEO', 'System zarządzania treścią (CMS)', 'Podstawowe animacje', 'Hosting na 12 miesięcy', '3 miesiące wsparcia technicznego', 'Analityka Google'],
    notIncluded: ['Sklep internetowy', 'Aplikacje webowe'],
    featured: true
  }, {
    name: 'Premium',
    description: 'Dla firm z zaawansowanymi wymaganiami',
    monthlyPrice: 9999,
    annualPrice: 8999,
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
            <span className={`mr-3 text-sm font-medium ${!isAnnual ? 'text-blue-600' : 'text-slate-500'}`}>
              Miesięcznie
            </span>
            <div className="relative">
              <motion.div className="w-12 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full shadow-inner cursor-pointer" onClick={() => setIsAnnual(!isAnnual)} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <motion.div className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-sm" animate={{
                x: isAnnual ? 24 : 0
              }} transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
              }} />
              </motion.div>
            </div>
            <span className={`ml-3 text-sm font-medium ${isAnnual ? 'text-blue-600' : 'text-slate-500'}`}>
              Rocznie{' '}
              <span className="text-xs text-green-500 font-bold">
                (Oszczędź 10%)
              </span>
            </span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => <motion.div key={index} className={`rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${plan.featured ? 'transform md:-translate-y-4 scale-105 z-10 ring-2 ring-blue-500 ring-opacity-50' : 'hover:scale-105'}`} variants={itemVariants} whileHover={{
          y: -10
        }}>
              <div className={`p-8 ${plan.featured ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white shadow-inner' : 'bg-gradient-to-br from-white to-gray-50 text-slate-900'}`}>
                {plan.featured && <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-xs font-bold uppercase tracking-wider text-emerald-900 rounded-full inline-block px-3 py-1 mb-4 shadow-lg">
                    Najpopularniejszy
                  </div>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.featured ? 'text-blue-100' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice} zł
                  </span>
                  <span className={`text-sm ${plan.featured ? 'text-blue-100' : 'text-slate-500'}`}>
                    /miesiąc
                  </span>
                </div>
                <Button variant={plan.featured ? 'secondary' : 'primary'} fullWidth>
                  Wybierz Plan
                </Button>
              </div>
              <div className="bg-gradient-to-b from-white to-gray-50 p-8 border border-t-0 border-slate-100 rounded-b-xl shadow-lg">
                <h4 className="font-semibold text-slate-900 mb-4">
                  Co zawiera:
                </h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => <li key={idx} className="flex items-start">
                      <CheckIcon size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>)}
                </ul>
                {plan.notIncluded.length > 0 && <>
                    <h4 className="font-semibold text-slate-900 mb-4">
                      Nie zawiera:
                    </h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, idx) => <li key={idx} className="flex items-start">
                          <XIcon size={18} className="text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-500 text-sm">
                            {feature}
                          </span>
                        </li>)}
                    </ul>
                  </>}
              </div>
            </motion.div>)}
        </div>
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <p className="text-slate-600 mb-6">
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