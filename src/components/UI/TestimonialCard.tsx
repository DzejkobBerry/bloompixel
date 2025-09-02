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
  return <motion.div className="bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-blue-100" variants={cardVariants} custom={index} whileHover={{
    y: -5
  }}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-200">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">{testimonial.position}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({
        length: 5
      }).map((_, index) => <StarIcon key={index} size={16} className={index < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'} />)}
      </div>
      <div className="relative">
        <QuoteIcon size={40} className="absolute -top-2 -left-2 text-blue-100 opacity-50" />
        <p className="text-slate-600 italic relative z-10 pl-3">
          {testimonial.content}
        </p>
      </div>
    </motion.div>;
};
export default TestimonialCard;