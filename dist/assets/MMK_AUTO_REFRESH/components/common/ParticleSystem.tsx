import React, { useEffect, useRef } from 'react';

interface ParticleSystemProps {
  containerId: string;
  particleCount?: number;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ 
  containerId, 
  particleCount = 50 
}) => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    const particlesContainer = particlesRef.current;
    
    if (!container || !particlesContainer) return;

    // Clear existing particles
    particlesContainer.innerHTML = '';

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random positioning
      const left = Math.random() * 100;
      const animationDuration = 10 + Math.random() * 20;
      const animationDelay = Math.random() * 20;
      const size = 2 + Math.random() * 4;
      
      particle.style.cssText = `
        position: absolute;
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        animation: float ${animationDuration}s linear infinite;
        animation-delay: ${animationDelay}s;
        pointer-events: none;
      `;
      
      particlesContainer.appendChild(particle);
    }

    // Add CSS animation if not exists
    if (!document.getElementById('particle-styles')) {
      const style = document.createElement('style');
      style.id = 'particle-styles';
      style.textContent = `
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, [containerId, particleCount]);

  return (
    <div 
      ref={particlesRef}
      className="particles-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleSystem;