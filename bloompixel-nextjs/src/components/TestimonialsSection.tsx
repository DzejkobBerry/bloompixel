'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bartosz Zieliński",
    position: "CEO",
    company: "Firma XYZ",
    text: "Współpraca z BloomPixel.pl to czysta przyjemność. Profesjonalne podejście, terminowość i kreatywne rozwiązania. Nasza nowa strona internetowa przekroczyła nasze oczekiwania i znacząco zwiększyła konwersję.",
    rating: 5,
    image: "/images/testimonials/client.jpg"
  },
  {
    id: 2,
    name: "Natalia Dąbrowska",
    position: "Właścicielka",
    company: "Butik Online",
    text: "Nasz sklep online zyskał nowe życie dzięki BloomPixel.pl. Nowoczesny design, intuicyjna nawigacja i szybkie działanie sprawiły, że nasi klienci chętniej robią zakupy, a sprzedaż wzrosła o 40%.",
    rating: 5,
    image: "/images/testimonials/client.jpg"
  },
  {
    id: 3,
    name: "Krzysztof Jankowski",
    position: "Project Manager",
    company: "Agencja ABC",
    text: "Aplikacja webowa stworzona przez BloomPixel.pl zrewolucjonizowała nasz system zarządzania projektami. Intuicyjna, szybka i niezawodna. Polecam każdemu, kto szuka profesjonalnych rozwiązań webowych.",
    rating: 4.5,
    image: "/images/testimonials/client.jpg"
  },
  {
    id: 4,
    name: "Grzegorz Szymański",
    position: "Dyrektor Marketingu",
    company: "Firma ABC",
    text: "Strona internetowa wykonana przez BloomPixel.pl przyciąga uwagę od pierwszego wejrzenia. Nowoczesny design, szybkość działania i intuicyjna nawigacja sprawiają, że klienci zostają z nami na dłużej.",
    rating: 5,
    image: "/images/testimonials/client.jpg"
  },
  {
    id: 5,
    name: "Monika Lewandowska",
    position: "Właścicielka",
    company: "Studio Projektowe",
    text: "Współpraca z BloomPixel.pl to profesjonalizm na najwyższym poziomie. Nasza strona firmowa zyskała nowoczesny wygląd, a liczba zapytań od klientów wzrosła trzykrotnie w ciągu miesiąca.",
    rating: 5,
    image: "/images/testimonials/client.jpg"
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  return (
    <section className="testimonials fade-in visible" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Opinie <span className="highlight">klientów</span></h2>
          <p className="section-subtitle">Co mówią o współpracy ze mną</p>
        </div>
        <div className="testimonials-slider">
          <div className="testimonials-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item">
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <p>"{testimonial.text}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}, {testimonial.company}</p>
                      <div className="rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonials-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          <div className="testimonials-nav">
            <button className="prev-btn" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-btn" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          padding: 100px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .testimonials::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
        }

        .highlight {
          background: linear-gradient(45deg, #ff6b6b, #feca57);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
        }

        .testimonials-slider {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 20px;
        }

        .testimonials-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .testimonial-item {
          min-width: 100%;
          padding: 0 20px;
        }

        .testimonial-content {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .testimonial-text {
          margin-bottom: 30px;
        }

        .testimonial-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
          font-style: italic;
          margin: 0;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .author-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #667eea;
        }

        .author-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .author-info {
          text-align: left;
        }

        .author-info h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin: 0 0 5px 0;
        }

        .author-info p {
          font-size: 0.9rem;
          color: #666;
          margin: 0 0 10px 0;
        }

        .rating {
          display: flex;
          gap: 2px;
        }

        .rating i {
          color: #ffd700;
          font-size: 0.9rem;
        }

        .testimonials-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: white;
          transform: scale(1.2);
        }

        .testimonials-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          pointer-events: none;
        }

        .prev-btn,
        .next-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.9);
          color: #667eea;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          pointer-events: all;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .prev-btn:hover,
        .next-btn:hover {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .testimonials {
            padding: 60px 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .testimonial-content {
            padding: 30px 20px;
          }

          .testimonial-author {
            flex-direction: column;
            text-align: center;
          }

          .author-info {
            text-align: center;
          }

          .testimonials-nav {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}