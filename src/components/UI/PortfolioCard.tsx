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
      <motion.div 
        className="group relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/50 border border-slate-700/50 cursor-pointer transform-gpu"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Enhanced animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-xl"
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0],
              scale: [1, 1.1, 0.9, 1],
              rotate: [0, 90, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-emerald-500/20 via-cyan-500/15 to-blue-500/20 rounded-full blur-xl"
            animate={{
              x: [0, -15, 25, 0],
              y: [0, 20, -5, 0],
              scale: [1, 0.8, 1.2, 1],
              rotate: [360, 270, 180, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-violet-500/15 via-fuchsia-500/10 to-rose-500/15 rounded-full blur-lg"
            animate={{
              x: [-8, 8, -8],
              y: [-8, 8, -8],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Enhanced glowing border effect */}
        <motion.div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3), rgba(16, 185, 129, 0.3))',
            backgroundSize: '400% 400%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Enhanced image section with improved gradient overlay */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Multi-layered gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          {/* Enhanced animated gradient elements */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
          
          {/* Enhanced top-right icon with improved styling */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-md rounded-xl flex items-center justify-center border border-slate-600/50 shadow-lg shadow-slate-900/50"
            whileHover={{ 
              scale: 1.15, 
              rotate: 15,
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              borderColor: "rgba(59, 130, 246, 0.5)",
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)"
            }}
            initial={{ opacity: 1 }}
          >
            <ExternalLinkIcon size={18} className="text-slate-300 group-hover:text-blue-300 transition-colors duration-300" />
          </motion.div>

          {/* Enhanced category badge */}
          <motion.div 
            className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-md rounded-full text-xs font-semibold text-slate-200 border border-slate-600/50 shadow-lg shadow-slate-900/50"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              borderColor: "rgba(16, 185, 129, 0.5)",
              color: "rgba(167, 243, 208, 1)"
            }}
          >
            {item.category}
          </motion.div>
        </div>

        {/* Enhanced content section with improved gradients */}
        <div className="p-6 relative">
          <motion.h3
            className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            variants={{
              hover: { y: -5, scale: 1.02 }
            }}
          >
            {item.title}
          </motion.h3>
          
          <motion.p
            className="text-slate-300 text-sm mb-4 leading-relaxed"
            variants={{
              hover: { y: -3 }
            }}
          >
            {item.description}
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-2"
            variants={{
              hover: { y: -2 }
            }}
          >
            {item.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="px-3 py-1.5 bg-gradient-to-r from-slate-700/80 via-slate-600/80 to-slate-700/80 backdrop-blur-sm text-slate-200 text-xs rounded-full border border-slate-500/50 font-medium shadow-sm"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  color: "rgba(191, 219, 254, 1)",
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        {/* Enhanced bottom section with improved gradients */}
        <div className="p-6 bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-md border-t border-slate-600/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div 
                className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 shadow-lg shadow-emerald-400/60"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                  boxShadow: [
                    "0 0 10px rgba(52, 211, 153, 0.6)",
                    "0 0 20px rgba(52, 211, 153, 0.8)",
                    "0 0 10px rgba(52, 211, 153, 0.6)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-slate-200 text-sm font-medium">Dostępne do podglądu</span>
            </div>
            <motion.div 
              className="text-slate-300 text-xs px-4 py-2 bg-gradient-to-r from-slate-700/80 via-slate-600/80 to-slate-700/80 rounded-full border border-slate-500/50 backdrop-blur-sm font-medium shadow-sm"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 0.5)",
                color: "rgba(191, 219, 254, 1)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)"
              }}
            >
              Kliknij aby zobaczyć więcej
            </motion.div>
          </div>
        </div>

        {/* Enhanced animated border with improved gradient */}
        <motion.div 
          className="absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.4), rgba(16, 185, 129, 0.4)) border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'exclude'
          }}
          animate={{
            background: [
              'linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.4), rgba(16, 185, 129, 0.4)) border-box',
              'linear-gradient(90deg, rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.4), rgba(16, 185, 129, 0.4), rgba(59, 130, 246, 0.4)) border-box',
              'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(16, 185, 129, 0.4), rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4)) border-box',
              'linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.4), rgba(16, 185, 129, 0.4)) border-box'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
                        <motion.a 
                          href={item.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow-lg shadow-blue-500/20" 
                          whileHover={{
                            scale: 1.05
                          }} 
                          whileTap={{
                            scale: 0.95
                          }}
                        >
                          Zobacz Projekt Live
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