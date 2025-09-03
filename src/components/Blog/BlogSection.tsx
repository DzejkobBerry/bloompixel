import React, { Children } from 'react';
import BlogCard from '../UI/BlogCard';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import ParticlesLight from '../UI/ParticlesLight';
import TypewriterText from '../UI/TypewriterText';
const BlogSection = () => {
  const blogPosts = [{
    title: '10 Essential UI/UX Principles Every Developer Should Know',
    excerpt: 'Learn the fundamental UI/UX principles that can elevate your web development projects and create better user experiences.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    date: 'May 15, 2023',
    category: 'UI/UX Design'
  }, {
    title: 'The Future of Web Development: Trends to Watch in 2023',
    excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development and how to stay ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    date: 'April 28, 2023',
    category: 'Web Development'
  }, {
    title: 'Optimizing Website Performance: A Comprehensive Guide',
    excerpt: 'Discover practical techniques for improving website speed, performance, and overall user experience in this detailed guide.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    date: 'April 10, 2023',
    category: 'Performance'
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
  return <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%221.5%22/%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%2210%22%20r%3D%221.5%22/%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2270%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 z-0"></div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-indigo-400/20 to-transparent rounded-full blur-3xl"></div>
      
      {/* Molecular Animation Background */}
      <div className="absolute inset-0 z-10">
        <ParticlesLight />
      </div>
      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.1
    }} variants={containerVariants}>
        <motion.div className="max-w-4xl mx-auto text-center mb-16" variants={itemVariants}>
          {/* Premium badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl">📚</span>
            <span className="text-blue-600 font-medium text-sm">Wiedza & Inspiracje</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
             <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 text-transparent bg-clip-text">
               <TypewriterText text="Blog & Artykuły" delay={800} speed={90} />
             </span>
           </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-700 text-xl leading-relaxed max-w-2xl mx-auto">
            Odkryj nasze najnowsze artykuły i spostrzeżenia na temat rozwoju stron internetowych, 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text font-semibold"> designu i nowoczesnych technologii</span>.
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" variants={containerVariants}>
          {blogPosts.map((post, index) => <BlogCard key={index} post={post} index={index} />)}
        </motion.div>
        <motion.div className="text-center" variants={itemVariants}>
          <Button 
            variant="primary" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
          >
            <span className="flex items-center gap-2">
              📖 Zobacz Wszystkie Artykuły
              <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </section>;
};
export default BlogSection;