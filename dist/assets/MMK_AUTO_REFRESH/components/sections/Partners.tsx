import React, { useEffect, useRef } from 'react';
import { PartnerData } from '../../types';

const Partners: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const partners: PartnerData[] = [
    { id: "1", name: "Gyeon", logo: "assets/images/partners/gyeon.png" },
    { id: "2", name: "Koch Chemie", logo: "assets/images/partners/koch.png" },
    { id: "3", name: "Rupes", logo: "assets/images/partners/rupes.png" },
    { id: "4", name: "Meguiars", logo: "assets/images/partners/meguiars.png" },
    { id: "5", name: "Chemical Guys", logo: "assets/images/partners/chemical-guys.png" },
    { id: "6", name: "Sonax", logo: "assets/images/partners/sonax.png" }
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Duplicate items for infinite scroll
    const originalItems = slider.innerHTML;
    slider.innerHTML = originalItems + originalItems;

    let translateX = 0;
    const speed = 1;
    const itemWidth = 200; // Approximate width of each partner item
    const totalWidth = partners.length * itemWidth;

    const animate = () => {
      translateX -= speed;
      
      if (Math.abs(translateX) >= totalWidth) {
        translateX = 0;
      }
      
      slider.style.transform = `translateX(${translateX}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Pause on hover
    let isPaused = false;
    
    slider.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    
    slider.addEventListener('mouseleave', () => {
      isPaused = false;
      if (!isPaused) {
        requestAnimationFrame(animate);
      }
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [partners.length]);

  return (
    <section id="partners" className="partners">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nasi partnerzy</h2>
          <p className="section-subtitle">
            Współpracujemy z najlepszymi markami w branży
          </p>
        </div>
        
        <div className="partners-slider">
          <div className="partners-container" ref={sliderRef}>
            {partners.map((partner) => (
              <div key={partner.id} className="partner-item">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  title={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="partners-text">
          <p>
            Używamy wyłącznie produktów najwyższej jakości od renomowanych producentów. 
            Dzięki temu możemy gwarantować trwałość i skuteczność naszych usług.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;