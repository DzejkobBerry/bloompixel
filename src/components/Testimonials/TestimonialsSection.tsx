import React, { useState, Children } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
import TestimonialCard from '../UI/TestimonialCard';
import { motion, AnimatePresence } from 'framer-motion';
const TestimonialsSection = () => {
  const testimonials = [{
    name: 'Sarah Johnson',
    position: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    content: 'Working with BloomPixel was an absolute pleasure. They took our vague concept and transformed it into a stunning website that perfectly represents our brand. The attention to detail and technical expertise were impressive.',
    rating: 5
  }, {
    name: 'Michael Chen',
    position: 'Marketing Director, GrowthLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    content: 'The web application developed for our company has streamlined our internal processes and significantly improved our efficiency. BloomPixel was responsive, professional, and delivered exactly what we needed.',
    rating: 5
  }, {
    name: 'Emily Rodriguez',
    position: 'Founder, StyleHub',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    content: 'I needed a website that would showcase my portfolio and attract new clients. The result exceeded my expectations. Not only is the design beautiful, but the site is also user-friendly and performs exceptionally well.',
    rating: 5
  }, {
    name: 'David Thompson',
    position: 'CTO, InnovateTech',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    content: 'As a technical leader, I have high standards for development work. BloomPixel not only met those standards but exceeded them. The code quality, documentation, and overall approach were top-notch.',
    rating: 4
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  const prevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
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
  const [direction, setDirection] = useState(0);
  const handleNext = () => {
    setDirection(1);
    nextSlide();
  };
  const handlePrev = () => {
    setDirection(-1);
    prevSlide();
  };
  return <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
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
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Client
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Zobacz, co mówią o nas nasi zadowoleni klienci
          </motion.p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <motion.div className="hidden md:grid grid-cols-2 gap-8" variants={containerVariants}>
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial} index={index} />)}
          </motion.div>
          {/* Mobile Testimonial Carousel */}
          <div className="md:hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div key={currentIndex} custom={direction} variants={sliderVariants} initial="initial" animate="animate" exit="exit">
                <TestimonialCard testimonial={testimonials[currentIndex]} index={0} />
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-8 gap-4">
              <motion.button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors" onClick={handlePrev} whileHover={{
              scale: 1.1,
              backgroundColor: '#f0f9ff'
            }} whileTap={{
              scale: 0.9
            }}>
                <ChevronLeftIcon size={20} />
              </motion.button>
              <motion.button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors" onClick={handleNext} whileHover={{
              scale: 1.1,
              backgroundColor: '#f0f9ff'
            }} whileTap={{
              scale: 0.9
            }}>
                <ChevronRightIcon size={20} />
              </motion.button>
            </div>
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => <motion.div key={index} className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-600' : 'bg-slate-300'}`} whileHover={{
              scale: 1.5
            }} onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }} />)}
            </div>
          </div>
        </div>
      </motion.div>
    </section>;
};
export default TestimonialsSection;