import React, { useEffect, useRef } from 'react';
import { TestimonialData } from '../../types';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const testimonials: TestimonialData[] = [
    {
      id: "1",
      author: "Jan Kowalski",
      service: "Powłoka ceramiczna",
      text: "Niesamowita jakość usług! Mój samochód wygląda jak nowy. Powłoka ceramiczna sprawdza się doskonale.",
      rating: 5
    },
    {
      id: "2",
      author: "Anna Nowak",
      service: "Korekta lakieru",
      text: "Profesjonalne podejście i perfekcyjne wykonanie. Zarysowania zniknęły bez śladu.",
      rating: 5
    },
    {
      id: "3",
      author: "Piotr Wiśniewski",
      service: "Czyszczenie wnętrza",
      text: "Wnętrze mojego auta zostało przywrócone do stanu fabrycznego. Polecam każdemu!",
      rating: 5
    },
    {
      id: "4",
      author: "Maria Zielińska",
      service: "Pełny detailing",
      text: "Kompleksowa usługa na najwyższym poziomie. Auto wygląda lepiej niż w salonie.",
      rating: 5
    }
  ];

  useEffect(() => {
    let currentSlide = 0;
    const slider = sliderRef.current;
    const totalSlides = testimonials.length;
    
    if (!slider) return;

    const updateSlider = () => {
      const translateX = -currentSlide * 100;
      slider.style.transform = `translateX(${translateX}%)`;
      
      // Update dots
      const dots = document.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    };

    const prevSlide = () => {
      currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
      updateSlider();
    };

    // Auto-play
    const autoPlay = setInterval(nextSlide, 5000);

    // Navigation buttons
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    prevBtn?.addEventListener('click', prevSlide);
    nextBtn?.addEventListener('click', nextSlide);

    // Dots navigation
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
      });
    });

    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
    slider.addEventListener('mouseleave', () => {
      const newAutoPlay = setInterval(nextSlide, 5000);
      return () => clearInterval(newAutoPlay);
    });

    return () => {
      clearInterval(autoPlay);
      prevBtn?.removeEventListener('click', prevSlide);
      nextBtn?.removeEventListener('click', nextSlide);
    };
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-background">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="testimonials-video"
        >
          <source src="assets/videos/background-opinions.mp4" type="video/mp4" />
        </video>
        <div className="testimonials-overlay"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Opinie klientów</h2>
          <p className="section-subtitle">
            Zobacz co mówią o nas nasi zadowoleni klienci
          </p>
        </div>
        
        <div className="testimonials-slider">
          <div className="testimonials-container" ref={sliderRef}>
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
          
          <div className="testimonials-navigation">
            <button className="testimonial-nav testimonial-prev">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="testimonial-nav testimonial-next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`testimonial-dot ${index === 0 ? 'active' : ''}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;