import React from 'react';
import { StarIcon, QuoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';
interface TestimonialProps {
  testimonial: {
    name: string;
    position: string;
    image: string;
    content: string;
    rating: number;
  };
  index: number;
}
const TestimonialCard = ({
  testimonial,
  index
}: TestimonialProps) => {
  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  return <motion.div 
    className="relative bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-300/80 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300/80 shadow-lg" 
    variants={cardVariants} 
    custom={index} 
    whileHover={{
      y: -8,
      scale: 1.02
    }}
  >
    {/* Decorative corner accent */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-3xl rounded-tr-2xl" />
    
    <div className="flex items-start mb-6">
      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-5 flex-shrink-0 ring-2 ring-blue-200 ring-offset-2 ring-offset-white">
        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h4>
        <p className="text-sm text-blue-600 font-medium">{testimonial.position}</p>
      </div>
    </div>
    
    <div className="flex mb-6 gap-1">
      {Array.from({ length: 5 }).map((_, index) => 
        <StarIcon 
          key={index}
          size={18} 
          className={index < testimonial.rating 
            ? "text-amber-400 fill-amber-400 drop-shadow-sm"
      : "text-gray-300"
          } 
        />
      )}
    </div>
    
    <div className="relative">
      <QuoteIcon size={32} className="absolute -top-2 -left-2 text-blue-300/80" />
      <p className="text-gray-800 text-base leading-relaxed pl-8 font-medium">
        {testimonial.content}
      </p>
    </div>
    
    {/* Bottom gradient line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-2xl opacity-80" />
  </motion.div>;
};
export default TestimonialCard;