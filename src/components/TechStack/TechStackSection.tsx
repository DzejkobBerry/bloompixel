import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const categories = [{
    id: 'frontend',
    label: 'Frontend'
  }, {
    id: 'backend',
    label: 'Backend'
  }, {
    id: 'tools',
    label: 'Tools & DevOps'
  }, {
    id: 'design',
    label: 'Design'
  }];
  const technologies = {
    frontend: [{
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      level: 95
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      level: 90
    }, {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      level: 85
    }, {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      level: 95
    }, {
      name: 'Redux',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      level: 85
    }, {
      name: 'GraphQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
      level: 80
    }],
    backend: [{
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      level: 90
    }, {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      level: 85
    }, {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      level: 80
    }, {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      level: 75
    }, {
      name: 'Firebase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      level: 85
    }, {
      name: 'AWS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      level: 70
    }],
    tools: [{
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      level: 90
    }, {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      level: 75
    }, {
      name: 'Jest',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      level: 80
    }, {
      name: 'Webpack',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
      level: 75
    }, {
      name: 'NPM',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      level: 90
    }, {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      level: 95
    }],
    design: [{
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      level: 90
    }, {
      name: 'Adobe XD',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
      level: 85
    }, {
      name: 'Photoshop',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      level: 80
    }, {
      name: 'Illustrator',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
      level: 75
    }, {
      name: 'Sketch',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
      level: 70
    }, {
      name: 'After Effects',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg',
      level: 65
    }]
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
  const techItemVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 200,
        damping: 10
      }
    })
  };
  return <section id="tech-stack" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="circuit-pattern absolute inset-0 opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-900/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-900/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
      </div>
      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.1
    }} variants={containerVariants}>
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="gradient-text glow-text">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg">
            We leverage cutting-edge technologies to build powerful, scalable,
            and beautiful digital solutions.
          </p>
        </motion.div>
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 glass-effect rounded-lg">
            {categories.map(category => <motion.button key={category.id} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeCategory === category.id ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-white/5'}`} onClick={() => setActiveCategory(category.id)} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {category.label}
              </motion.button>)}
          </div>
        </motion.div>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" key={activeCategory} initial="hidden" animate="visible" variants={containerVariants}>
          {technologies[activeCategory].map((tech, index) => <motion.div key={tech.name} className="glass-effect rounded-lg p-6 flex flex-col items-center justify-center text-center group" variants={techItemVariants} custom={index} whileHover={{
          y: -10,
          boxShadow: `0 0 20px rgba(${activeCategory === 'frontend' ? '59, 130, 246' : activeCategory === 'backend' ? '139, 92, 246' : activeCategory === 'tools' ? '6, 182, 212' : '236, 72, 153'}, 0.3)`
        }}>
              <motion.div className="w-16 h-16 mb-4 relative" whileHover={{
            rotate: 360
          }} transition={{
            duration: 1,
            type: 'spring'
          }}>
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" style={{
              filter: 'brightness(0) invert(1)'
            }} />
                <svg className="absolute -top-1 -right-1 -bottom-1 -left-1" width="100%" height="100%" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeDasharray={`${tech.level * 3}, 300`} transform="rotate(-90 50 50)" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              <h3 className="text-white font-medium">{tech.name}</h3>
              <div className="mt-2 w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600" initial={{
              width: 0
            }} animate={{
              width: `${tech.level}%`
            }} transition={{
              duration: 1,
              delay: 0.2
            }} />
              </div>
              <span className="text-xs text-blue-400 mt-1">{tech.level}%</span>
            </motion.div>)}
        </motion.div>
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <p className="text-slate-300 mb-2">
            We're constantly learning and adopting new technologies to stay at
            the cutting edge.
          </p>
          <p className="text-blue-400 text-sm font-mono">
            // Always improving, always evolving
          </p>
        </motion.div>
      </motion.div>
    </section>;
};
export default TechStackSection;