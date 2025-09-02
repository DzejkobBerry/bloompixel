import React, { useEffect, useRef, Children } from 'react';
import { CheckCircleIcon, CodeIcon, GlobeIcon, ServerIcon } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
const AboutSection = () => {
  const skills = [{
    name: 'HTML5 & CSS3',
    level: 95
  }, {
    name: 'JavaScript (ES6+)',
    level: 90
  }, {
    name: 'React.js',
    level: 92
  }, {
    name: 'Node.js',
    level: 85
  }, {
    name: 'TypeScript',
    level: 88
  }, {
    name: 'Responsive Design',
    level: 95
  }, {
    name: 'UI/UX Design',
    level: 90
  }, {
    name: 'RESTful APIs',
    level: 85
  }];
  const timelineItems = [{
    year: '2018',
    title: 'Company Founded',
    description: 'BloomPixel was established with a vision to create exceptional digital experiences.'
  }, {
    year: '2019',
    title: 'First Major Project',
    description: 'Successfully delivered our first enterprise-level web application.'
  }, {
    year: '2020',
    title: 'Team Expansion',
    description: 'Grew our team of talented developers and designers to meet increasing demand.'
  }, {
    year: '2021',
    title: 'International Clients',
    description: 'Started working with clients from across Europe and North America.'
  }, {
    year: '2022',
    title: 'New Technologies',
    description: 'Expanded our expertise to include AI-driven development and advanced animations.'
  }, {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Received multiple awards for our innovative approach to web development.'
  }];
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.2
  });
  const skillsAnimation = useAnimation();
  useEffect(() => {
    if (isInView) {
      skillsAnimation.start('visible');
    }
  }, [isInView, skillsAnimation]);
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
  const skillVariants = {
    hidden: {
      width: 0,
      opacity: 0
    },
    visible: level => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    })
  };
  const timelineVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const timelineItemVariants = {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="circuit-pattern absolute inset-0 opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-900/20 rounded-tr-full"></div>
      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.2
    }} variants={containerVariants} ref={containerRef}>
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text glow-text">BloomPixel</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg">
            We're a passionate team of developers and designers with a focus on
            creating elegant, efficient, and user-friendly digital solutions
            that drive business growth.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <div className="relative">
              <motion.div className="relative z-10 rounded-lg overflow-hidden shadow-xl" whileHover={{
              scale: 1.03
            }} transition={{
              duration: 0.3
            }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80" alt="BloomPixel team at work" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-lg font-bold">Our Team</div>
                    <div className="text-slate-300 text-sm">
                      Collaborative, innovative, passionate
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-lg blur-sm"></div>
            </div>
          </motion.div>
          <div className="md:w-1/2">
            <motion.h3 className="text-2xl font-bold text-white mb-4" variants={itemVariants}>
              Who We Are
            </motion.h3>
            <motion.p className="text-slate-300 mb-6" variants={itemVariants}>
              With over 5 years of experience in web development, we've helped
              businesses and individuals bring their digital visions to life. We
              combine technical expertise with creative problem-solving to
              deliver solutions that not only look great but perform
              exceptionally.
            </motion.p>
            <motion.p className="text-slate-300 mb-8" variants={itemVariants}>
              Our approach is collaborative and client-focused. We believe in
              clear communication, attention to detail, and delivering projects
              that exceed expectations.
            </motion.p>
            <motion.h3 className="text-2xl font-bold text-white mb-6" variants={itemVariants}>
              Our Expertise
            </motion.h3>
            <motion.div className="space-y-4 mb-8" variants={containerVariants} animate={skillsAnimation} initial="hidden">
              {skills.map((skill, index) => <div key={index} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600" variants={skillVariants} custom={skill.level} />
                  </div>
                </div>)}
            </motion.div>
            <motion.div className="flex flex-wrap gap-6" variants={containerVariants}>
              <motion.div className="flex flex-col items-center" variants={itemVariants} whileHover={{
              y: -5
            }}>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-2 shadow-md border border-blue-500/30">
                  <CodeIcon className="text-blue-400" size={24} />
                </div>
                <p className="text-white font-medium">Frontend</p>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={itemVariants} whileHover={{
              y: -5
            }}>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-2 shadow-md border border-purple-500/30">
                  <ServerIcon className="text-purple-400" size={24} />
                </div>
                <p className="text-white font-medium">Backend</p>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={itemVariants} whileHover={{
              y: -5
            }}>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mb-2 shadow-md border border-cyan-500/30">
                  <GlobeIcon className="text-cyan-400" size={24} />
                </div>
                <p className="text-white font-medium">Full Stack</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div className="mt-20" variants={itemVariants}>
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Our <span className="gradient-text glow-text">Journey</span>
          </h3>
          <motion.div className="relative" variants={timelineVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600"></div>
            <div className="relative">
              {timelineItems.map((item, index) => <motion.div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`} variants={timelineItemVariants}>
                  <div className={`w-1/2 px-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-sm text-blue-400 mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-slate-900 z-10"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>)}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>;
};
export default AboutSection;