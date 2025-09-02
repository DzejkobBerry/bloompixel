import React, { Children } from 'react';
import BlogCard from '../UI/BlogCard';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import ParticlesLight from '../UI/ParticlesLight';
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
  return <section id="blog" className="py-20 bg-gray-200 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 z-0"></div>
      
      {/* Molecular Animation Background */}
      <div className="absolute inset-0 z-10">
        <ParticlesLight />
      </div>
      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.1
    }} variants={containerVariants}>
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Blog &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Insights
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Explore our latest articles and insights about web development,
            design, and technology.
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" variants={containerVariants}>
          {blogPosts.map((post, index) => <BlogCard key={index} post={post} index={index} />)}
        </motion.div>
        <motion.div className="text-center" variants={itemVariants}>
          <Button variant="outline">View All Articles</Button>
        </motion.div>
      </motion.div>
    </section>;
};
export default BlogSection;