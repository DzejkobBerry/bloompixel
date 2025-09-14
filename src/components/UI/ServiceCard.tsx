import React, { useState } from 'react';
import { ArrowRightIcon, CodeIcon, CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import CodeBlock from './CodeBlock';
interface ServiceProps {
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    features: string[];
    codeSnippet: string;
  };
  index: number;
}
const ServiceCard = ({
  service,
  index
}: ServiceProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const colorClasses = {
    blue: "from-blue-500/10 to-blue-600/10 border-blue-500/30 text-blue-400",
  purple: "from-purple-500/10 to-purple-600/10 border-purple-500/30 text-purple-400",
  cyan: "from-cyan-500/10 to-cyan-600/10 border-cyan-500/30 text-cyan-400",
  indigo: "from-indigo-500/10 to-indigo-600/10 border-indigo-500/30 text-indigo-400",
  pink: "from-pink-500/10 to-pink-600/10 border-pink-500/30 text-pink-400",
  amber: "from-amber-500/10 to-amber-600/10 border-amber-500/30 text-amber-400"
  };
  const iconColors = {
    blue: "from-blue-400 to-blue-600",
  purple: "from-purple-400 to-purple-600",
  cyan: "from-cyan-400 to-cyan-600",
  indigo: "from-indigo-400 to-indigo-600",
  pink: "from-pink-400 to-pink-600",
  amber: "from-amber-400 to-amber-600"
  };
  const glowColors = {
    blue: "glow",
  purple: "glow-purple",
  cyan: "glow",
  indigo: "glow",
  pink: "glow-pink",
  amber: "glow"
  };
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
  return <motion.div className="perspective-1000 h-[400px]" variants={cardVariants} custom={index} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.div className="relative w-full h-full transition-all duration-500 card-3d" animate={{
      rotateY: isFlipped ? 180 : 0
    }} transition={{
      duration: 0.6
    }}>
        {/* Front of card */}
        <motion.div className={`absolute inset-0 p-6 rounded-lg border glass-effect bg-gradient-to-br ${colorClasses[service.color]} backface-hidden`} whileHover={{
        y: -10
      }} transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }} style={{
        backfaceVisibility: "hidden"
      }}>
          <div className="mb-4">
            <motion.div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${iconColors[service.color]} flex items-center justify-center text-white shadow-md ${glowColors[service.color]}`} initial={{
            rotate: 0
          }} animate={isHovered ? {
            rotate: 360,
            scale: 1.1
          } : {
            rotate: 0,
            scale: 1
          }} transition={{
            duration: 0.5
          }}>
              {service.icon}
            </motion.div>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-slate-300 mb-4">{service.description}</p>
          <div className="mt-4 mb-6">
            <h4 className="text-sm font-semibold text-white/80 mb-2">
              KEY FEATURES:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {service.features.map((feature, idx) => <div key={idx} className="flex items-start">
                  <CheckIcon size={14} className={`mt-1 mr-1 ${colorClasses[service.color]}`} />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>)}
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between">
            <motion.button className={`text-sm ${colorClasses[service.color]} flex items-center`} whileHover={{
            x: 5
          }} onClick={() => setIsFlipped(true)}>
              <CodeIcon size={16} className="mr-1" />
              View Code
            </motion.button>
            <motion.a href="#contact" className={`text-sm ${colorClasses[service.color]} flex items-center`} whileHover={{
            x: 5
          }}>
              Learn more
              <motion.span initial={{
              x: 0
            }} animate={isHovered ? {
              x: 5
            } : {
              x: 0
            }} transition={{
              duration: 0.3
            }}>
                <ArrowRightIcon size={16} className="ml-1" />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
        {/* Back of card */}
        <motion.div className={`absolute inset-0 p-6 rounded-lg border glass-effect bg-gradient-to-br ${colorClasses[service.color]} backface-hidden`} style={{
        backfaceVisibility: "hidden",
    transform: "rotateY(180deg)"
      }}>
          <h3 className="text-xl font-bold text-white mb-4">
            {service.title} Code
          </h3>
          <div className="h-[230px] overflow-y-auto custom-scrollbar mb-4">
            <CodeBlock code={service.codeSnippet} language="javascript" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-center">
            <motion.button className={`text-sm ${colorClasses[service.color]} flex items-center`} whileHover={{
            scale: 1.05
          }} onClick={() => setIsFlipped(false)}>
              Back to Service
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>;
};
export default ServiceCard;