import React, { useState, useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = memo(({ 
  text, 
  delay = 0, 
  speed = 100, 
  className = "" 
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Intersection Observer to detect when element is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setIsVisible(true);
          setHasStarted(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed, isVisible]);

  // Cursor blinking effect
  useEffect(() => {
    if (currentIndex < text.length || showCursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);

      return () => clearInterval(cursorTimer);
    }
  }, [currentIndex, text.length, showCursor]);

  return (
    <span ref={elementRef} className={className}>
      {displayText}
      <motion.span
        className="inline-block"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0 }}
      >
        |
      </motion.span>
    </span>
  );
});

export default TypewriterText;