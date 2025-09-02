import React, { useState, useRef } from 'react';
import { ExternalLinkIcon, XIcon, CodeIcon, LayersIcon, CheckIcon } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
interface PortfolioItemProps {
  item: {
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
    demoUrl: string;
    features: string[];
  };
  index: number;
}
const PortfolioCard = ({
  item,
  index
}: PortfolioItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.2
  });
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
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };
  const backdropVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  };
  const tabVariants = {
    inactive: {
      opacity: 0.7
    },
    active: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };
  return <>
      <motion.div className="group relative overflow-hidden rounded-lg glass-effect cursor-pointer transition-all duration-300 hover:shadow-xl border border-white/10" onClick={() => setIsModalOpen(true)} variants={cardVariants} custom={index} whileHover={{
      y: -10,
      boxShadow: '0 0 25px rgba(59, 130, 246, 0.3)'
    }} ref={cardRef} animate={isInView ? 'visible' : 'hidden'} initial="hidden">
        <div className="relative aspect-video overflow-hidden">
          <motion.img src={item.image} alt={item.title} className="w-full h-full object-cover" whileHover={{
          scale: 1.1
        }} transition={{
          duration: 0.5
        }} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6">
              <motion.h3 className="text-xl font-bold text-white mb-2" initial={{
              y: 20,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }} transition={{
              duration: 0.3,
              delay: 0.1
            }}>
                {item.title}
              </motion.h3>
              <motion.p className="text-slate-200 text-sm mb-3" initial={{
              y: 20,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }} transition={{
              duration: 0.3,
              delay: 0.2
            }}>
                {item.description.substring(0, 60)}...
              </motion.p>
              <motion.div className="flex flex-wrap gap-2" initial={{
              y: 20,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }} transition={{
              duration: 0.3,
              delay: 0.3
            }}>
                {item.technologies.slice(0, 2).map((tech, index) => <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                    {tech}
                  </span>)}
                {item.technologies.length > 2 && <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                    +{item.technologies.length - 2}
                  </span>}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <motion.div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }}>
            <ExternalLinkIcon size={14} />
          </motion.div>
        </div>
        <div className="absolute top-3 left-3">
          <motion.div className={`px-2 py-1 rounded-full text-xs backdrop-blur-md ${item.category === 'web-app' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : item.category === 'website' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-pink-500/20 text-pink-300 border border-pink-500/30'}`} initial={{
          x: -20,
          opacity: 0
        }} animate={{
          x: 0,
          opacity: 1
        }} transition={{
          duration: 0.3,
          delay: 0.1
        }}>
            {item.category === 'web-app' ? 'Web App' : item.category === 'website' ? 'Website' : 'UI/UX Design'}
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" initial="hidden" animate="visible" exit="exit" variants={backdropVariants} onClick={() => setIsModalOpen(false)}>
            <motion.div className="relative bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10" variants={modalVariants} onClick={e => e.stopPropagation()}>
              <motion.button className="absolute top-4 right-4 text-slate-400 hover:text-white z-10 w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center" onClick={() => setIsModalOpen(false)} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }}>
                <XIcon size={18} />
              </motion.button>
              <div className="h-64 relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2 gradient-text glow-text">
                    {item.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => <span key={index} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white">
                        {tech}
                      </span>)}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex border-b border-slate-700 mb-6">
                  <motion.button className={`px-4 py-2 text-sm font-medium ${activeTab === 'overview' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`} onClick={() => setActiveTab('overview')} variants={tabVariants} animate={activeTab === 'overview' ? 'active' : 'inactive'} whileHover={{
                opacity: 1
              }}>
                    Overview
                  </motion.button>
                  <motion.button className={`px-4 py-2 text-sm font-medium ${activeTab === 'features' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`} onClick={() => setActiveTab('features')} variants={tabVariants} animate={activeTab === 'features' ? 'active' : 'inactive'} whileHover={{
                opacity: 1
              }}>
                    Features
                  </motion.button>
                  <motion.button className={`px-4 py-2 text-sm font-medium ${activeTab === 'technologies' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`} onClick={() => setActiveTab('technologies')} variants={tabVariants} animate={activeTab === 'technologies' ? 'active' : 'inactive'} whileHover={{
                opacity: 1
              }}>
                    Technologies
                  </motion.button>
                </div>
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && <motion.div key="overview" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                      <p className="text-slate-300 mb-6">{item.description}</p>
                      <div className="flex justify-center">
                        <motion.a href={item.demoUrl} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow-lg shadow-blue-500/20" whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }} onClick={e => e.preventDefault()}>
                          View Live Project
                          <ExternalLinkIcon size={16} className="ml-2" />
                        </motion.a>
                      </div>
                    </motion.div>}
                  {activeTab === 'features' && <motion.div key="features" variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.features.map((feature, index) => <motion.div key={index} className="flex items-start" initial={{
                  opacity: 0,
                  x: -10
                }} animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: index * 0.1
                  }
                }}>
                          <div className="mt-1 mr-2 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                            <CheckIcon size={12} className="text-blue-400" />
                          </div>
                          <span className="text-slate-300">{feature}</span>
                        </motion.div>)}
                    </motion.div>}
                  {activeTab === 'technologies' && <motion.div key="technologies" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {item.technologies.map((tech, index) => <motion.div key={index} className="glass-effect p-4 rounded-lg text-center" initial={{
                    opacity: 0,
                    scale: 0.8
                  }} animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }
                  }} whileHover={{
                    y: -5
                  }}>
                            {tech === 'React' ? <CodeIcon className="mx-auto mb-2 text-blue-400" size={24} /> : tech === 'Node.js' ? <ServerIcon className="mx-auto mb-2 text-green-400" size={24} /> : <LayersIcon className="mx-auto mb-2 text-purple-400" size={24} />}
                            <div className="text-white font-medium">{tech}</div>
                          </motion.div>)}
                      </div>
                      <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <div className="text-sm text-slate-300">
                          <span className="text-blue-400 font-mono"> // </span>
                          This project was built using a modern tech stack to
                          ensure optimal performance and maintainability.
                        </div>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default PortfolioCard;