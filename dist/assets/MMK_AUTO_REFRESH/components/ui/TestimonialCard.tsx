import React from 'react';
import { TestimonialData } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index}
        className={`fas fa-star ${index < rating ? 'active' : ''}`}
      ></i>
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-stars">
          {renderStars(testimonial.rating)}
        </div>
        
        <blockquote className="testimonial-text">
          "{testimonial.text}"
        </blockquote>
        
        <div className="testimonial-author">
          <div className="author-info">
            <h4 className="author-name">{testimonial.author}</h4>
            <p className="author-service">{testimonial.service}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;