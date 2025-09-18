import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Minus } from 'lucide-react';
import Button from '../UI/Button';

interface PricingPlan {
  name: string;
  description: string;
  netPrice: number;
  grossPrice: number;
  icon: React.ComponentType<any>;
  color: string;
  features: string[];
  notIncluded: string[];
  featured?: boolean;
}

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PricingPlan | null;
  isGross: boolean;
}

const PricingModal: React.FC<PricingModalProps> = memo(({ isOpen, onClose, plan, isGross }) => {
  if (!plan) return null;

  const IconComponent = plan.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-sm sm:max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="relative p-4 sm:p-6 border-b border-gray-100">
                <button
                  onClick={onClose}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </button>
                
                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 pr-8">
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${plan.color} flex-shrink-0`}>
                    <IconComponent size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">{plan.description}</p>
                  </div>
                </div>
                
                {/* Price */}
                 <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                   <div className="flex items-baseline space-x-2">
                     <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                       {(isGross ? plan.grossPrice : plan.netPrice).toLocaleString('de-DE')} €
                     </span>
                     <span className="text-xs sm:text-sm text-gray-500">
                       {isGross ? 'brutto' : 'netto'}
                     </span>
                   </div>
                   <div className="flex items-center justify-between mt-2">
                     <p className="text-xs sm:text-sm text-gray-500">Jednorazowa płatność</p>
                     {!isGross && (
                       <p className="text-xs text-gray-400">
                         ({plan.grossPrice.toLocaleString('de-DE')} € brutto)
                       </p>
                     )}
                   </div>
                 </div>
              </div>

              {/* Content */}
               <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                 
                 {/* Features Included */}
                 <div className="mb-4 sm:mb-6">
                   <div className="flex items-center mb-3 sm:mb-4">
                     <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                       <Check size={12} className="text-green-600 sm:w-3.5 sm:h-3.5" />
                     </div>
                     <h4 className="text-base sm:text-lg font-semibold text-gray-900">Co zawiera pakiet</h4>
                   </div>
                   <div className="space-y-2 sm:space-y-3">
                     {plan.features.map((feature, index) => (
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, x: -10 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: index * 0.05 }}
                         className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors"
                       >
                         <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                           <Check size={10} className="text-white sm:w-3 sm:h-3" />
                         </div>
                         <span className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">{feature}</span>
                       </motion.div>
                     ))}
                   </div>
                 </div>

                 {/* Features Not Included */}
                 {plan.notIncluded.length > 0 && (
                   <div className="mb-4 sm:mb-6">
                     <div className="flex items-center mb-3 sm:mb-4">
                       <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                         <Minus size={12} className="text-orange-600 sm:w-3.5 sm:h-3.5" />
                       </div>
                       <h4 className="text-base sm:text-lg font-semibold text-gray-900">Dostępne jako dodatki</h4>
                     </div>
                     <div className="space-y-2 sm:space-y-3">
                        {plan.notIncluded.map((feature, index) => {
                          // Extract price from feature text
                          const priceMatch = feature.match(/\(([^)]+)\)/);
                          const price = priceMatch ? priceMatch[1] : null;
                          const featureName = feature.replace(/\s*\([^)]*\)/, '');
                          
                          // Special handling for SSL certificate
                          const isSSLCertificate = featureName.toLowerCase().includes('certyfikat ssl');
                          
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (plan.features.length + index) * 0.05 }}
                              className="flex items-start justify-between p-2 sm:p-3 bg-orange-50 rounded-lg border border-orange-100 hover:bg-orange-100 transition-colors group"
                            >
                              <div className="flex items-start space-x-2 sm:space-x-3 min-w-0 flex-1">
                                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                                  <Minus size={10} className="text-white sm:w-3 sm:h-3" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium block">
                                    {featureName}
                                  </span>
                                  {isSSLCertificate && (
                                    <span className="text-xs text-green-600 font-medium mt-1 block">
                                      ✓ Gratis przy domenie i hostingu
                                    </span>
                                  )}
                                </div>
                              </div>
                              {price && (
                                <div className="flex-shrink-0 ml-2 sm:ml-3">
                                  <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-semibold shadow-sm group-hover:shadow-md transition-shadow bg-gradient-to-r from-orange-500 to-red-500 text-white">
                                    {isSSLCertificate ? 'osobno 70€' : price}
                                  </span>
                                </div>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                     <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-blue-50 rounded-lg border border-blue-200">
                       <p className="text-xs text-blue-700 font-medium">
                         💡 Potrzebujesz któregoś z dodatków? Skontaktuj się z nami!
                       </p>
                     </div>
                   </div>
                 )}

                {/* Premium Badge */}
                {plan.featured && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium text-blue-900">Najpopularniejszy wybór</span>
                    </div>
                    <p className="text-xs sm:text-sm text-blue-700 mt-1">
                      Najczęściej wybierany przez naszych klientów
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
               <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full text-sm sm:text-base"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    onClose();
                  }}
                >
                  Wybierz pakiet {plan.name}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2 sm:mt-3">
                  Skontaktuj się z nami, aby omówić szczegóły
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default PricingModal;