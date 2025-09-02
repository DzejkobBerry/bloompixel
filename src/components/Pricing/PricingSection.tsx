import React, { useState, Children } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const pricingPlans = [{
    name: 'Basic',
    description: 'Perfect for small businesses and startups',
    monthlyPrice: 999,
    annualPrice: 899,
    features: ['Responsive Website Design', 'Up to 5 Pages', 'Contact Form', 'Mobile Optimization', 'Basic SEO Setup', '1 Month of Support'],
    notIncluded: ['E-commerce Functionality', 'Custom Animations', 'Content Management System']
  }, {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    monthlyPrice: 1999,
    annualPrice: 1799,
    features: ['Responsive Website Design', 'Up to 10 Pages', 'Contact Form & Newsletter', 'Mobile Optimization', 'Advanced SEO Setup', 'Content Management System', '3 Months of Support', 'Basic Animations'],
    notIncluded: ['E-commerce Functionality', 'Custom Web Applications'],
    featured: true
  }, {
    name: 'Enterprise',
    description: 'For established businesses with complex needs',
    monthlyPrice: 3999,
    annualPrice: 3599,
    features: ['Responsive Website Design', 'Unlimited Pages', 'Advanced Forms & Integrations', 'Mobile Optimization', 'Comprehensive SEO Strategy', 'Content Management System', 'E-commerce Functionality', 'Custom Animations', 'Web Application Features', '12 Months of Support'],
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
  return <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
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
                Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Pricing
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
            Transparent pricing plans designed to meet your needs and budget.
          </motion.p>
          <div className="flex items-center justify-center">
            <span className={`mr-3 text-sm font-medium ${!isAnnual ? 'text-blue-600' : 'text-slate-500'}`}>
              Monthly
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
              Annual{' '}
              <span className="text-xs text-green-500 font-bold">
                (Save 10%)
              </span>
            </span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => <motion.div key={index} className={`rounded-lg overflow-hidden ${plan.featured ? 'transform md:-translate-y-4 scale-105 z-10' : ''}`} variants={itemVariants} whileHover={{
          y: -10
        }}>
              <div className={`p-8 ${plan.featured ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white' : 'bg-white text-slate-900'}`}>
                {plan.featured && <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-xs font-bold uppercase tracking-wider text-amber-900 rounded-full inline-block px-3 py-1 mb-4">
                    Most Popular
                  </div>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.featured ? 'text-blue-100' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className={`text-sm ${plan.featured ? 'text-blue-100' : 'text-slate-500'}`}>
                    /month
                  </span>
                </div>
                <Button variant={plan.featured ? 'secondary' : 'primary'} fullWidth>
                  Get Started
                </Button>
              </div>
              <div className="bg-white p-8 border border-t-0 border-slate-100 rounded-b-lg shadow-md">
                <h4 className="font-semibold text-slate-900 mb-4">
                  What's included:
                </h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => <li key={idx} className="flex items-start">
                      <CheckIcon size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>)}
                </ul>
                {plan.notIncluded.length > 0 && <>
                    <h4 className="font-semibold text-slate-900 mb-4">
                      Not included:
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
            Need a custom solution? We can create a tailored package just for
            you.
          </p>
          <Button variant="outline" size="lg">
            Contact Us For Custom Pricing
          </Button>
        </motion.div>
      </motion.div>
    </section>;
};
export default PricingSection;