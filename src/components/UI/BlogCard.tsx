import React from 'react';
import { CalendarIcon, TagIcon, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
interface BlogPostProps {
  post: {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
  };
  index: number;
}
const BlogCard = ({
  post,
  index
}: BlogPostProps) => {
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
  return <motion.div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-slate-100" variants={cardVariants} custom={index} whileHover={{
    y: -10
  }}>
      <div className="aspect-video overflow-hidden">
        <motion.img src={post.image} alt={post.title} className="w-full h-full object-cover" whileHover={{
        scale: 1.1
      }} transition={{
        duration: 0.5
      }} />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-slate-500 mb-3">
          <div className="flex items-center mr-4">
            <CalendarIcon size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <TagIcon size={14} className="mr-1" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text font-medium">
              {post.category}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
          <a href="#">{post.title}</a>
        </h3>
        <p className="text-slate-600 mb-4">{post.excerpt}</p>
        <motion.a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group" whileHover={{
        x: 5
      }}>
          Read More
          <motion.span initial={{
          x: 0
        }} whileHover={{
          x: 5
        }} transition={{
          duration: 0.2
        }} className="ml-1 group-hover:ml-2 transition-all">
            <ArrowRightIcon size={16} />
          </motion.span>
        </motion.a>
      </div>
    </motion.div>;
};
export default BlogCard;