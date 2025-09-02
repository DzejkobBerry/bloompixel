import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const fullText = 'Initializing BloomPixel Interface...';
  const textIndex = useRef(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    const typingTimer = setInterval(() => {
      if (textIndex.current < fullText.length) {
        setText(fullText.substring(0, textIndex.current + 1));
        textIndex.current += 1;
      } else {
        clearInterval(typingTimer);
      }
    }, 50);
    return () => {
      clearInterval(timer);
      clearInterval(typingTimer);
    };
  }, []);
  return <motion.div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50" exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="circuit-pattern absolute inset-0 opacity-20"></div>
      <motion.div className="relative" initial={{
      scale: 0.8,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
        <div className="text-5xl font-bold mb-8 text-center">
          <span className="text-blue-400">&lt;</span>
          <span className="gradient-text">BloomPixel</span>
          <span className="text-purple-400">/&gt;</span>
        </div>
        <div className="terminal w-80 md:w-96 mx-auto mb-8">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command">{text}</span>
            <span className="animate-pulse">_</span>
          </div>
          {progress >= 30 && <div className="terminal-line">
              <span className="terminal-output">Loading assets...</span>
            </div>}
          {progress >= 50 && <div className="terminal-line">
              <span className="terminal-output">
                Establishing connection...
              </span>
            </div>}
          {progress >= 70 && <div className="terminal-line">
              <span className="terminal-output">Preparing interface...</span>
            </div>}
          {progress >= 90 && <div className="terminal-line">
              <span className="terminal-output">Almost ready...</span>
            </div>}
        </div>
        <div className="w-64 md:w-80 h-2 bg-slate-800 rounded-full overflow-hidden mx-auto">
          <motion.div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" initial={{
          width: 0
        }} animate={{
          width: `${progress}%`
        }} transition={{
          duration: 0.1
        }} />
        </div>
        <div className="text-center text-slate-400 mt-3 text-sm">
          {progress}% Complete
        </div>
      </motion.div>
      <div className="absolute bottom-8 text-center text-slate-500 text-xs">
        <p>Crafting Digital Excellence</p>
      </div>
    </motion.div>;
};
export default LoadingScreen;