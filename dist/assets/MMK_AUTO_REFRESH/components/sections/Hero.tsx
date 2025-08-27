import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const animatedTexts = [
    "Profesjonalny detailing",
    "Najwyższa jakość",
    "Doświadczenie i pasja",
    "Twój samochód jak nowy"
  ];

  useEffect(() => {
    // Video background optimization
    if (videoRef.current) {
      const video = videoRef.current;
      if (window.innerWidth <= 768) {
        video.style.display = 'none';
      }
    }

    // Text animation
    let currentIndex = 0;
    const textElement = textRef.current;
    
    if (textElement) {
      const animateText = () => {
        textElement.style.opacity = '0';
        textElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          textElement.textContent = animatedTexts[currentIndex];
          textElement.style.opacity = '1';
          textElement.style.transform = 'translateY(0)';
          currentIndex = (currentIndex + 1) % animatedTexts.length;
        }, 500);
      };

      const interval = setInterval(animateText, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
        >
          <source src="assets/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">MMK AUTO REFRESH</span>
            <span 
              ref={textRef}
              className="title-animated"
            >
              {animatedTexts[0]}
            </span>
          </h1>
          
          <p className="hero-description">
            Odkryj nowy wymiar dbałości o Twój samochód. Profesjonalne usługi detailingu, 
            które przywrócą Twojemu pojazdowi pierwotny blask i ochronią go na lata.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Umów wizytę
            </a>
            <a href="#services" className="btn btn-secondary">
              Nasze usługi
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;