import React, { useState, useEffect, Children } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, PlayIcon, PauseIcon } from 'lucide-react';
import TestimonialCard from '../UI/TestimonialCard';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesLight from '../UI/ParticlesLight';
import TypewriterText from '../UI/TypewriterText';
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Anna Kowalska",
    position: "CEO, TechnoVision",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    content: "Współpraca z BloomPixel była wyjątkowa. Zespół przekształcił nasze pomysły w profesjonalną stronę internetową, która idealnie reprezentuje naszą markę. Jakość wykonania i dbałość o szczegóły są na najwyższym poziomie.",
    rating: 5
  }, {
    name: "Michał Nowak",
    position: "Dyrektor Marketingu, GrowthLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    content: "Aplikacja webowa stworzona przez BloomPixel znacznie usprawniła nasze procesy wewnętrzne i zwiększyła efektywność pracy. Zespół był responsywny, profesjonalny i dostarczył dokładnie to, czego potrzebowaliśmy.",
    rating: 5
  }, {
    name: "Katarzyna Wiśniewska",
    position: "Założycielka, StyleHub",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    content: "Potrzebowałam strony, która prezentowałaby moje portfolio i przyciągnęła nowych klientów. Rezultat przewyższył moje oczekiwania. Strona jest nie tylko piękna wizualnie, ale także bardzo funkcjonalna i szybka.",
    rating: 5
  }, {
    name: "Piotr Zieliński",
    position: "CTO, InnovateTech",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    content: "Jako lider techniczny mam wysokie standardy dotyczące pracy programistycznej. BloomPixel nie tylko spełnił te standardy, ale je przewyższył. Jakość kodu, dokumentacja i ogólne podejście były na najwyższym poziomie.",
    rating: 5
  }, {
    name: "Magdalena Lewandowska",
    position: "Właścicielka, Boutique Fashion",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    content: "Sklep internetowy stworzony przez BloomPixel zwiększył nasze sprzedaże o 200% w ciągu pierwszych trzech miesięcy. Profesjonalny design i intuicyjna obsługa sprawiają, że klienci chętnie wracają.",
    rating: 5
  }, {
    name: "Tomasz Kaczmarek",
    position: "Prezes, EcoSolutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    content: "BloomPixel stworzył dla nas kompleksową platformę zarządzania projektami. Dzięki niej nasza firma działa znacznie sprawniej, a komunikacja z klientami jest na zupełnie nowym poziomie. Polecam z całego serca!",
    rating: 5
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };
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
  const sliderVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };
  const handleNext = () => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    nextSlide();
  };
  
  const handlePrev = () => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    prevSlide();
  };
  return <section id="testimonials" className="py-20 bg-gray-200 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 z-0"></div>
      
      {/* Molecular Animation Background */}
      <div className="absolute inset-0 z-10">
        <ParticlesLight />
      </div>

      <motion.div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                <TypewriterText text="Opinie" delay={500} speed={100} />
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                <TypewriterText text="Klientów" delay={1200} speed={120} />
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Zobacz, co mówią o nas nasi zadowoleni klienci
          </motion.p>
        </motion.div>
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Slider - Works on all devices */}
          <div className="relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div 
                key={currentIndex} 
                custom={direction} 
                variants={sliderVariants} 
                initial="initial" 
                animate="animate" 
                exit="exit"
                className="w-full"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} index={currentIndex} />
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 gap-6">
              {/* Previous Button */}
              <motion.button 
                 className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 shadow-lg flex items-center justify-center text-slate-600" 
                 onClick={handlePrev} 
                 whileHover={{
                   scale: 1.1,
                   backgroundColor: "rgb(226 232 240)",
                   color: "rgb(37 99 235)"
                 }} 
                 whileTap={{
                   scale: 0.9
                 }}
                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
               >
                 <ChevronLeftIcon size={24} />
               </motion.button>
               
               {/* Auto-play Toggle */}
               <motion.button 
                 className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 shadow-lg flex items-center justify-center text-slate-600" 
                 onClick={toggleAutoPlay}
                 whileHover={{
                   scale: 1.1,
                   backgroundColor: "rgb(226 232 240)",
                   color: "rgb(37 99 235)"
                 }} 
                 whileTap={{
                   scale: 0.9
                 }}
                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
                 title={isAutoPlaying ? "Zatrzymaj automatyczne przewijanie" : "Włącz automatyczne przewijanie"}
               >
                 {isAutoPlaying ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
               </motion.button>
               
               {/* Next Button */}
               <motion.button 
                 className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 shadow-lg flex items-center justify-center text-slate-600" 
                 onClick={handleNext} 
                 whileHover={{
                   scale: 1.1,
                   backgroundColor: "rgb(226 232 240)",
                   color: "rgb(37 99 235)"
                 }} 
                 whileTap={{
                   scale: 0.9
                 }}
                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
               >
                 <ChevronRightIcon size={24} />
               </motion.button>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`relative overflow-hidden rounded-full ${
                     index === currentIndex 
                       ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500"
        : "w-3 h-3 bg-slate-300"
                   }`}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    goToSlide(index);
                  }}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: index === currentIndex ? undefined : "rgb(148 163 184)"
                  }}
                  whileTap={{
                    scale: 0.9
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
                      key={`progress-${currentIndex}`}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Slide Counter */}
            <div className="text-center mt-4">
               <span className="text-slate-500 text-sm font-medium">
                 {currentIndex + 1} / {testimonials.length}
               </span>
             </div>
          </div>
        </div>
      </motion.div>
    </section>;
};
export default TestimonialsSection;