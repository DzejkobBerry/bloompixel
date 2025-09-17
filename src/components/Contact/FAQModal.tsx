import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, HelpCircle, Mail, Phone, Copy, MessageCircle } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Ile kosztuje stworzenie strony internetowej?",
    answer: "Koszt zależy od złożoności projektu. Nasze pakiety: Starter od 300€ (369€ brutto) - responsywna wizytówka, Business od 600€ (738€ brutto) - zaawansowana strona biznesowa z hostingiem i domeną, Premium od 2000€ (2460€ brutto) - kompleksowe rozwiązanie z CMS i e-commerce. Oferujemy również indywidualne wyceny."
  },
  {
    id: 2,
    question: "Jak długo trwa realizacja projektu?",
    answer: "Czas realizacji zależy od wybranego pakietu i złożoności projektu. Orientacyjne terminy: Starter - 7-14 dni, Business - 14-21 dni, Premium - 21-35 dni. Dokładny harmonogram ustalamy na początku współpracy, uwzględniając Twoje potrzeby i dostępność materiałów."
  },
  {
    id: 3,
    question: "Czy mogę samodzielnie edytować treści na stronie?",
    answer: "To zależy od wybranego pakietu. Pakiety Starter i Business nie zawierają systemu CMS - treści można edytować tylko poprzez nas. Pakiet Premium zawiera zaawansowany CMS, który pozwala na samodzielne edytowanie treści, dodawanie zdjęć i zarządzanie produktami. System CMS można również dokupić do pakietów Starter i Business od 250€."
  },
  {
    id: 4,
    question: "Czy strona będzie responsywna i zoptymalizowana pod SEO?",
    answer: "Absolutnie! Wszystkie nasze strony są w pełni responsywne (dostosowane do urządzeń mobilnych) i zoptymalizowane pod kątem SEO. Dbamy o szybkość ładowania, poprawną strukturę HTML i meta tagi, co pomaga w lepszym pozycjonowaniu w Google."
  },
  {
    id: 5,
    question: "Jakie są koszty utrzymania strony?",
    answer: "Koszty utrzymania obejmują domenę i hosting z certyfikatem SSL od 220€ na cały rok oraz opcjonalne wsparcie techniczne. Pakiet Business już zawiera domenę i hosting na 12 miesięcy. Wszystkie szczegóły omawiamy podczas konsultacji, dostosowując rozwiązanie do Twojego budżetu."
  },
  {
    id: 6,
    question: "Czy oferujecie wsparcie po zakończeniu projektu?",
    answer: "Tak! Pakiet Starter zawiera 1 miesiąc wsparcia, Business - 3 miesiące, a Premium - 6 miesięcy wsparcia technicznego. Dodatkowo oferujemy opcjonalne pakiety wsparcia długoterminowego, aktualizacje bezpieczeństwa, kopie zapasowe i pomoc w rozwoju strony zgodnie z potrzebami Twojego biznesu."
  }
];

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);

  const toggleItem = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const answerVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      y: -10
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="faq-modal"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <HelpCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Często Zadawane Pytania</h2>
                    <p className="text-blue-100 text-sm">Znajdź odpowiedzi na najczęstsze pytania</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-gradient-to-r from-white to-slate-50"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                      <motion.div
                        animate={{ rotate: expandedItems.includes(item.id) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown size={20} className="text-slate-600" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedItems.includes(item.id) && (
                        <motion.div
                          key={`answer-${item.id}`}
                          variants={answerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pt-0 border-t border-slate-100">
                            <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <div className="text-center">
                  <h3 className="font-semibold text-slate-900 mb-2">Nie znalazłeś odpowiedzi?</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Skontaktuj się z nami bezpośrednio - odpowiemy w ciągu 24 godzin!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.button
                      onClick={() => setEmailModalOpen(true)}
                      className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700 focus:from-blue-800 focus:via-blue-900 focus:to-indigo-800 text-white rounded-xl shadow-lg hover:shadow-xl focus:shadow-2xl transition-all duration-300 text-sm font-semibold overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 opacity-0 group-focus:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center gap-2">
                        <motion.span 
                          className="text-lg"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          whileHover={{ rotate: [0, 20, -20, 0], transition: { duration: 0.5 } }}
                        >
                          📧
                        </motion.span>
                        <span>Wyślij Email</span>
                        <motion.div
                          className="w-1 h-1 bg-white/60 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          whileHover={{ scale: 2, opacity: 1 }}
                        />
                      </div>
                    </motion.button>
                    <motion.button
                      onClick={() => setPhoneModalOpen(true)}
                      className="group relative px-6 py-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 focus:from-green-800 focus:via-emerald-800 focus:to-teal-800 text-white rounded-xl shadow-lg hover:shadow-xl focus:shadow-2xl transition-all duration-300 text-sm font-semibold overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-300/50"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-teal-400/30 opacity-0 group-focus:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center gap-2">
                        <motion.span 
                          className="text-lg"
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
                          whileHover={{ rotate: [0, 25, -25, 0], transition: { duration: 0.5 } }}
                        >
                          📞
                        </motion.span>
                        <span>Zadzwoń</span>
                        <motion.div
                          className="w-1 h-1 bg-white/60 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
                          whileHover={{ scale: 2, opacity: 1 }}
                        />
                      </div>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Email Modal */}
      <AnimatePresence>
        {emailModalOpen && (
          <div key="email-modal-container">
            <motion.div
              key="email-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEmailModalOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              key="email-modal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Email kontaktowy</h3>
                  </div>
                  <button
                    onClick={() => setEmailModalOpen(false)}
                    className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">Skontaktuj się z nami przez email:</p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-lg font-mono font-semibold text-gray-900 select-all">
                      kontakt@bloompixel.pl
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('kontakt@bloompixel.pl');
                        // Można dodać toast notification tutaj
                      }}
                      className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <Copy size={16} />
                      Kopiuj
                    </button>
                    <a
                      href="mailto:kontakt@bloompixel.pl"
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <Mail size={16} />
                      Otwórz
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Phone Modal */}
      <AnimatePresence>
        {phoneModalOpen && (
          <div key="phone-modal-container">
            <motion.div
              key="phone-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPhoneModalOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              key="phone-modal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Phone size={20} className="text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Numer telefonu</h3>
                  </div>
                  <button
                    onClick={() => setPhoneModalOpen(false)}
                    className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">Zadzwoń do nas bezpośrednio lub napisz na WhatsApp:</p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-lg font-mono font-semibold text-gray-900 select-all">
                      +31 634 225 355
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('+31 634 225 355');
                        // Można dodać toast notification tutaj
                      }}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-1"
                    >
                      <Copy size={16} />
                      Kopiuj
                    </button>
                    <a
                      href="tel:+31634225355"
                      className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-1"
                    >
                      <Phone size={16} />
                      Zadzwoń
                    </a>
                    <a
                      href="https://wa.me/31634225355"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-1"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FAQModal;