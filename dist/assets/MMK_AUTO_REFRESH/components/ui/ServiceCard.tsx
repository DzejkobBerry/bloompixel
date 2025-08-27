import React, { useEffect, useRef } from 'react';
import { ServiceData } from '../../types';

interface ServiceCardProps {
  service: ServiceData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const icon = iconRef.current;
    
    if (!card || !icon) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add wave effect to card
            card.classList.add('animate-wave');
            
            // Add floating effect to icon
            icon.classList.add('animate-float');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  const handleCardHover = () => {
    const card = cardRef.current;
    if (card) {
      card.classList.add('hover-effect');
    }
  };

  const handleCardLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.classList.remove('hover-effect');
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`service-card ${service.featured ? 'featured' : ''}`}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
    >
      <div className="service-icon" ref={iconRef}>
        <i className={service.icon}></i>
      </div>
      
      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <div className="service-price">{service.price}</div>
        
        {service.featured && (
          <div className="service-badge">
            <span>Polecane</span>
          </div>
        )}
        
        <button className="service-btn">
          Dowiedz się więcej
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;