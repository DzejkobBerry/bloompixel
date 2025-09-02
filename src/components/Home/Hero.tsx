import React, { useEffect, useRef, Children } from 'react';
import { ArrowRightIcon, CodeIcon, LayoutIcon, PenToolIcon } from 'lucide-react';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import Particles from '../UI/Particles';
import TerminalAnimation from '../UI/TerminalAnimation';
const Hero = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
  const serviceIconVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  const floatingAnimation = {
    y: ['-5%', '5%'],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };
  return <section id="home" className="relative min-h-screen pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden flex items-center">
      {/* Particle Background */}
      <Particles />
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      {/* Gradient Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-96 h-96 bg-cyan-700 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-blob animation-delay-4000"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div className="flex flex-col md:flex-row md:items-center md:justify-between" variants={containerVariants} initial="hidden" animate="visible">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4" variants={itemVariants}>
              We Create{' '}
              <span className="gradient-text glow-text">
                Digital Experiences
              </span>{' '}
              That Matter
            </motion.h1>
            <motion.p className="text-slate-300 text-lg md:text-xl mb-8 max-w-lg" variants={itemVariants}>
              BloomPixel specializes in crafting cutting-edge websites and
              applications that transform your digital presence with stunning
              design and flawless functionality.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button size="lg" variant="primary">
                View Our Work
                <ArrowRightIcon size={18} className="ml-2" />
              </Button>
              <Button variant="neon" size="lg">
                Let's Talk
              </Button>
            </motion.div>
            <motion.div className="mt-12 flex flex-wrap gap-6" variants={containerVariants} initial="hidden" animate="visible" transition={{
            delayChildren: 0.6,
            staggerChildren: 0.2
          }}>
              <motion.div className="flex items-center" variants={serviceIconVariants} whileHover={{
              scale: 1.05
            }}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3 shadow-md glow">
                  <CodeIcon className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Web Development</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center" variants={serviceIconVariants} whileHover={{
              scale: 1.05
            }}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mr-3 shadow-md glow-purple">
                  <LayoutIcon className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">UI/UX Design</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center" variants={serviceIconVariants} whileHover={{
              scale: 1.05
            }}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mr-3 shadow-md glow">
                  <PenToolIcon className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Digital Strategy</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="md:w-1/2 relative" variants={itemVariants} animate={floatingAnimation}>
            <div className="relative z-10 glass-effect overflow-hidden border border-white/10 rounded-lg shadow-2xl">
              <div className="h-8 bg-slate-800/80 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-6">
                <TerminalAnimation />
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-700/50 rounded"></div>
                  <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-8 -right-4 w-64 h-64 bg-blue-700 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -z-10 bottom-8 -left-4 w-64 h-64 bg-purple-700 rounded-full opacity-30 blur-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;