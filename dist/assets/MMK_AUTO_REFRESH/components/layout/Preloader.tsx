import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="logo-animation">
          <img src="assets/images/logo.png" alt="MMK AUTO REFRESH" />
        </div>
        <div className="loading-bar">
          <div 
            className="loading-progress" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="loading-text">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;