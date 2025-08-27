import React, { useEffect, useRef, useState } from 'react';
import { CounterData } from '../../types';

interface CounterItemProps {
  value: number;
  label: string;
  suffix?: string;
}

const CounterItem: React.FC<CounterItemProps> = ({ value, label, suffix = '' }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            // Add wave effect
            counter.classList.add('animate-wave');
            
            // Start counter animation
            const duration = 2000;
            const increment = value / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                setCurrentValue(value);
                clearInterval(timer);
              } else {
                setCurrentValue(Math.floor(current));
              }
            }, 16);
            
            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(counter);

    return () => observer.disconnect();
  }, [value, isVisible]);

  return (
    <div ref={counterRef} className="counter-item">
      <div className="counter-value">
        {currentValue}{suffix}
      </div>
      <div className="counter-label">
        {label}
      </div>
    </div>
  );
};

export default CounterItem;