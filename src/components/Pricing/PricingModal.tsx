import React from 'react';
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

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, plan, isGross }) => {
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="relative p-6 border-b border-gray-100">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${plan.color}`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                  </div>
                </div>
                
                {/* Price */}
                 <div className="mt-4 pt-4 border-t border-gray-100">
                   <div className="flex items-baseline space-x-2">
                     <span className="text-3xl font-bold text-gray-900">
                       {(isGross ? plan.grossPrice : plan.netPrice).toLocaleString('de-DE')} €
                     </span>
                     <span className="text-sm text-gray-500">
                       {isGross ? 'brutto' : 'netto'}
                     </span>
                   </div>
                   <div className="flex items-center justify-between mt-2">
                     <p className="text-sm text-gray-500">Jednorazowa płatność</p>
                     {!isGross && (
                       <p className="text-xs text-gray-400">
                         ({plan.grossPrice.toLocaleString('de-DE')} € brutto)
                       </p>
                     )}
                   </div>
                 </div>
              </div>

              {/* Content */}
               <div className="p-6 overflow-y-auto flex-1">
                
                {/* Features Included */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Zawiera:</h4>
                  <div className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <Check size={12} className="text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Features Not Included */}
                {plan.notIncluded.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Nie zawiera:</h4>
                    <div className="space-y-2">
                      {plan.notIncluded.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (plan.features.length + index) * 0.05 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                            <Minus size={12} className="text-gray-400" />
                          </div>
                          <span className="text-sm text-gray-500">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Premium Badge */}
                {plan.featured && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-blue-900">Najpopularniejszy wybór</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      Najczęściej wybierany przez naszych klientów
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
               <div className="p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    onClose();
                  }}
                >
                  Wybierz pakiet {plan.name}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Skontaktuj się z nami, aby omówić szczegóły
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;