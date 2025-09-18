import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const categories = [{
    id: "frontend",
    label: "Frontend"
  }, {
    id: "backend",
    label: "Backend"
  }, {
    id: "tools",
    label: 'Tools & DevOps'
  }, {
    id: 'design',
    label: 'Design'
  }];
  const technologies = {
    frontend: [{
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      level: 95
    }, {
      name: 'TypeScript',
      icon: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.svg',
      level: 90
    }, {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg',
      level: 85
    }, {
      name: 'Tailwind CSS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      level: 95
    }, {
      name: 'Redux',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
      level: 85
    }, {
      name: 'GraphQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
      level: 80
    }],
    backend: [{
      name: 'Node.js',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      level: 90
    }, {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      level: 85
    }, {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      level: 80
    }, {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      level: 75
    }, {
      name: 'Firebase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
      level: 85
    }, {
      name: 'AWS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      level: 70
    }],
    tools: [{
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      level: 90
    }, {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      level: 75
    }, {
      name: 'Jest',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
      level: 80
    }, {
      name: 'Webpack',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg',
      level: 75
    }, {
      name: 'NPM',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
      level: 90
    }, {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
      level: 95
    }],
    design: [{
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      level: 90
    }, {
      name: 'Adobe XD',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg',
      level: 85
    }, {
      name: 'Photoshop',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg',
      level: 80
    }, {
      name: 'Illustrator',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg',
      level: 75
    }, {
      name: 'Sketch',
      icon: 'https://cdn.worldvectorlogo.com/logos/sketch-2.svg',
      level: 70
    }, {
      name: 'After Effects',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-plain.svg',
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
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Nasz
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stos Technologiczny
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We leverage cutting-edge technologies to build powerful, scalable,
            and beautiful digital solutions.
          </motion.p>
        </motion.div>
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 glass-effect rounded-lg w-full max-w-md sm:max-w-none">
            {categories.map(category => <motion.button key={category.id} className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all flex-1 sm:flex-none min-w-0 ${activeCategory === category.id ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-white/5'}`} onClick={() => setActiveCategory(category.id)} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                <span className="truncate pointer-events-none">{category.label}</span>
              </motion.button>)}
          </div>
        </motion.div>
        <motion.div 
          key={activeCategory} 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technologies[activeCategory].map((tech, index) => <motion.div key={`${activeCategory}-${tech.name}`} className="glass-effect rounded-lg p-6 flex flex-col items-center justify-center text-center group" variants={techItemVariants} custom={index} whileHover={{
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
            Stale się uczymy i adoptujemy nowe technologie, aby pozostać na
            czele innowacji.
          </p>
          <p className="text-blue-400 text-sm font-mono">
            // Zawsze się doskonalimy, zawsze ewoluujemy
          </p>
        </motion.div>
      </motion.div>
    </section>;
};
export default TechStackSection;