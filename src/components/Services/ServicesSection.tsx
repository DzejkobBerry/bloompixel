import React, { useEffect, useMemo, useState, Children, lazy, memo, Component } from 'react';
import { CodeIcon, LayoutIcon, ServerIcon, SmartphoneIcon, PenToolIcon, WrenchIcon } from 'lucide-react';
import ServiceCard from '../UI/ServiceCard';
import { motion } from 'framer-motion';
const ServicesSection = () => {
  const services = [{
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies that look great on all devices.',
    icon: <CodeIcon size={24} />,
    color: 'blue',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-Browser Support'],
    codeSnippet: `
const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};`
  }, {
    title: 'Web Application Development',
    description: 'Powerful, scalable web applications with robust functionality and intuitive interfaces.',
    icon: <ServerIcon size={24} />,
    color: 'purple',
    features: ['User Authentication', 'Database Integration', 'API Development', 'Real-time Updates'],
    codeSnippet: `
const [data, setData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    const response = await api.get('/data');
    setData(response.data);
  };
  fetchData();
}, []);`
  }, {
    title: 'UI/UX Design',
    description: 'User-focused design that enhances usability while creating beautiful, engaging interfaces.',
    icon: <LayoutIcon size={24} />,
    color: 'cyan',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    codeSnippet: `
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  <Button>Get Started</Button>
</motion.div>`
  }, {
    title: 'Mobile-First Development',
    description: 'Websites optimized for mobile devices, ensuring great performance on smartphones and tablets.',
    icon: <SmartphoneIcon size={24} />,
    color: 'indigo',
    features: ['Touch-friendly UI', 'Fast Loading Speed', 'Offline Capabilities', 'Responsive Images'],
    codeSnippet: `
const isMobile = useMediaQuery({ maxWidth: 767 });
return (
  <div className={isMobile ? 'mobile-view' : 'desktop-view'}>
    {isMobile ? <MobileNav /> : <DesktopNav />}
    <Content />
  </div>
);`
  }, {
    title: 'Brand Identity',
    description: 'Cohesive visual identity development including logos, color palettes, and style guides.',
    icon: <PenToolIcon size={24} />,
    color: 'pink',
    features: ['Logo Design', 'Color Scheme', 'Typography', 'Brand Guidelines'],
    codeSnippet: `
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
  --background: #0f172a;
  --text: #f8fafc;
  --font-heading: 'Montserrat';
  --font-body: 'Inter';
}`
  }, {
    title: 'Technical Consulting',
    description: 'Expert advice on technology choices, architecture, and development best practices.',
    icon: <WrenchIcon size={24} />,
    color: 'amber',
    features: ['Tech Stack Analysis', 'Performance Audits', 'Security Reviews', 'Scalability Planning'],
    codeSnippet: `
// Performance optimization
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
// Code splitting
const LazyComponent = lazy(() => 
  import('./LazyComponent')
);`
  }];
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
  return <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-900/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-900/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
      </div>
      <div className="grid-pattern absolute inset-0 opacity-10"></div>
      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.1
    }} variants={containerVariants}>
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="gradient-text glow-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg">
            We offer a comprehensive range of web development and design
            services to help you establish a strong online presence.
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {services.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
        </motion.div>
      </motion.div>
    </section>;
};
export default ServicesSection;