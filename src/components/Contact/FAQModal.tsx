import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

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
    answer: "Koszt zależy od złożoności projektu. Nasze pakiety zaczynają się od 2,499 zł za stronę wizytówkową, przez 4,999 zł za stronę biznesową, aż do 9,999 zł za sklep internetowy. Oferujemy również indywidualne wyceny dla bardziej złożonych projektów."
  },
  {
    id: 2,
    question: "Jak długo trwa realizacja projektu?",
    answer: "Czas realizacji zależy od wybranego pakietu: strona wizytówkowa - 7-14 dni, strona biznesowa - 14-21 dni, sklep internetowy - 21-35 dni. Dokładny harmonogram ustalamy na początku współpracy, uwzględniając Twoje potrzeby i dostępność materiałów."
  },
  {
    id: 3,
    question: "Czy mogę samodzielnie edytować treści na stronie?",
    answer: "Tak! Wszystkie nasze strony są wyposażone w intuicyjny panel administracyjny (CMS), który pozwala na łatwe edytowanie treści, dodawanie zdjęć i zarządzanie produktami. Dodatkowo zapewniamy szkolenie z obsługi systemu."
  },
  {
    id: 4,
    question: "Czy strona będzie responsywna i zoptymalizowana pod SEO?",
    answer: "Absolutnie! Wszystkie nasze strony są w pełni responsywne (dostosowane do urządzeń mobilnych) i zoptymalizowane pod kątem SEO. Dbamy o szybkość ładowania, poprawną strukturę HTML i meta tagi, co pomaga w lepszym pozycjonowaniu w Google."
  },
  {
    id: 5,
    question: "Jakie są koszty utrzymania strony?",
    answer: "Koszty utrzymania obejmują hosting (od 20 zł/miesiąc), domenę (około 50 zł/rok) oraz opcjonalne wsparcie techniczne (od 199 zł/miesiąc). Wszystkie szczegóły omawiamy podczas konsultacji, dostosowując rozwiązanie do Twojego budżetu."
  },
  {
    id: 6,
    question: "Czy oferujecie wsparcie po zakończeniu projektu?",
    answer: "Tak! Oferujemy 30-dniową gwarancję na wszystkie nasze projekty oraz opcjonalne pakiety wsparcia technicznego. Zapewniamy również aktualizacje bezpieczeństwa, kopie zapasowe i pomoc w rozwoju strony zgodnie z potrzebami Twojego biznesu."
  }
];

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
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
                    <a
                      href="mailto:contact@bloompixel.pl"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      📧 Wyślij Email
                    </a>
                    <a
                      href="tel:+48123456789"
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      📞 Zadzwoń
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FAQModal;