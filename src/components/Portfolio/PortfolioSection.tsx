import React, { useState, useRef, Children } from 'react';
import PortfolioCard from '../UI/PortfolioCard';
import { motion, AnimatePresence } from 'framer-motion';
const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const containerRef = useRef(null);
  const portfolioItems = [{
    title: 'E-commerce Platform',
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
    description: 'A fully responsive e-commerce platform with product management, cart functionality, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    features: ['User authentication & profiles', 'Product catalog with search & filters', 'Shopping cart & checkout flow', 'Payment processing integration', 'Order tracking & history', 'Admin dashboard']
  }, {
    title: 'Corporate Website',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
    description: 'Modern corporate website with custom animations, blog functionality, and content management system.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
    demoUrl: '#',
    features: ['Responsive design', 'Custom animations', 'Blog with categories', 'Contact form with validation', 'SEO optimization', 'Content management system']
  }, {
    title: 'Mobile Banking App',
    category: 'ui-design',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'UI/UX design for a mobile banking application focusing on user experience and accessibility.',
    technologies: ['Figma', 'Adobe XD', 'Sketch'],
    demoUrl: '#',
    features: ['User research & personas', 'Wireframing & prototyping', 'Interactive mockups', 'Usability testing', 'Accessibility compliance', 'Design system creation']
  }, {
    title: 'Travel Blog',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'Custom travel blog with dynamic content loading, image galleries, and interactive maps.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    demoUrl: '#',
    features: ['Dynamic content loading', 'Image galleries & lightbox', 'Interactive maps integration', 'Social sharing functionality', 'Comment system', 'Newsletter subscription']
  }, {
    title: 'Task Management App',
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['Vue.js', 'Firebase', 'Vuetify'],
    demoUrl: '#',
    features: ['Real-time updates', 'Team collaboration', 'Task assignment & tracking', 'Project timelines', 'File attachments', 'Notifications & reminders']
  }, {
    title: 'Restaurant Branding',
    category: 'ui-design',
    image: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80',
    description: 'Complete brand identity design for an upscale restaurant, including logo, menus, and website.',
    technologies: ['Illustrator', 'Photoshop', 'InDesign'],
    demoUrl: '#',
    features: ['Logo design', 'Color palette', 'Typography selection', 'Menu design', 'Signage & promotional materials', 'Website design']
  }];
  const filters = [{
    id: 'all',
    label: 'All Work'
  }, {
    id: 'website',
    label: 'Websites'
  }, {
    id: 'web-app',
    label: 'Web Apps'
  }, {
    id: 'ui-design',
    label: 'UI/UX Design'
  }];
  const filteredItems = activeFilter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
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
  return <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="circuit-pattern absolute inset-0 opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-bl-full opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-tr-full opacity-70 -z-10"></div>
      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.1
    }} variants={containerVariants} ref={containerRef}>
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="gradient-text glow-text">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg">
            Explore our recent projects and see how we've helped clients achieve
            their digital goals.
          </p>
        </motion.div>
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 glass-effect rounded-lg">
            {filters.map(filter => <motion.button key={filter.id} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeFilter === filter.id ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-white/5'}`} onClick={() => setActiveFilter(filter.id)} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {filter.label}
              </motion.button>)}
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
            {filteredItems.map((item, index) => <PortfolioCard key={index} item={item} index={index} />)}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>;
};
export default PortfolioSection;