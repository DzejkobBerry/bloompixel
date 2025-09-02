import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const TerminalAnimation = () => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const lines = ['Creating new project...', 'Installing dependencies...', 'Setting up React components...', 'Configuring Tailwind CSS...', 'Optimizing for performance...', 'Deploying to production...', 'Project successfully launched!'];
  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setText('');
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i < lines[currentLine].length) {
            setText(prev => prev + lines[currentLine].charAt(i));
            i++;
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              setCurrentLine(prev => prev + 1);
            }, 500);
          }
        }, 40);
        return () => clearInterval(typingInterval);
      }, currentLine === 0 ? 500 : 1000);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);
  return <div className="w-full h-64 bg-slate-900 rounded-md flex items-center justify-center shadow-inner">
      <div className="text-left w-full px-6">
        <div className="terminal-line mb-2">
          <span className="text-green-500">user@bloompixel</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$ </span>
          <span className="text-white">npm run build</span>
        </div>
        {lines.slice(0, currentLine).map((line, index) => <div key={index} className="terminal-line">
            <span className="text-gray-400">{line}</span>
            {index === lines.length - 1 && <span className="text-green-500 ml-2">✓</span>}
          </div>)}
        {currentLine < lines.length && <div className="terminal-line">
            <span className="text-gray-400">{text}</span>
            <motion.span className="inline-block w-2 h-4 bg-gray-400 ml-1" animate={{
          opacity: [1, 0]
        }} transition={{
          repeat: Infinity,
          duration: 0.8
        }} />
          </div>}
        {currentLine >= lines.length && <div className="mt-4">
            <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          type: 'spring',
          stiffness: 200,
          damping: 10
        }} className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">✓</div>
              <div className="text-white text-sm">Ready for development!</div>
            </motion.div>
          </div>}
      </div>
    </div>;
};
export default TerminalAnimation;