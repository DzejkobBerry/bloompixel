'use client'

import React from 'react'

const ServicesSection = () => {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Strony internetowe',
      description: 'Nowoczesne, responsywne strony z unikalnym designem, zoptymalizowane pod kątem SEO i szybkości działania.',
      features: [
        'Responsywny design',
        'Optymalizacja SEO',
        'Szybkie ładowanie',
        'Intuicyjny CMS'
      ]
    },
    {
      icon: 'fas fa-server',
      title: 'Migracje Hosting Domeny',
      description: 'Profesjonalne usługi migracji stron, konfiguracji hostingu i zarządzania domenami dla firm chcących się przenieść.',
      features: [
        'Migracja stron i danych',
        'Konfiguracja hostingu',
        'Zarządzanie domenami',
        'Wsparcie techniczne'
      ]
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Redesign stron',
      description: 'Odświeżenie istniejących stron internetowych z zachowaniem ich funkcjonalności i poprawą UX/UI.',
      features: [
        'Modernizacja wyglądu',
        'Poprawa użyteczności',
        'Optymalizacja wydajności',
        'Zachowanie SEO'
      ]
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Landing pages',
      description: 'Skuteczne strony docelowe zaprojektowane z myślą o konwersji i przyciąganiu potencjalnych klientów.',
      features: [
        'Zorientowane na konwersję',
        'A/B testing',
        'Integracja z narzędziami marketingowymi',
        'Analiza skuteczności'
      ]
    },
    {
      icon: 'fas fa-comments',
      title: 'Konsultacje techniczne',
      description: 'Profesjonalne doradztwo w zakresie technologii webowych, architektury aplikacji i optymalizacji.',
      features: [
        'Audyt techniczny',
        'Doradztwo technologiczne',
        'Optymalizacja wydajności',
        'Planowanie rozwoju'
      ]
    },
    {
      icon: 'fas fa-hashtag',
      title: 'Social Media Marketing',
      description: 'Kompleksowe usługi marketingowe w mediach społecznościowych, które zwiększają rozpoznawalność marki i angażują odbiorców.',
      features: [
        'Kampanie reklamowe',
        'Influencer marketing',
        'Analityka i raportowanie',
        'Strategie contentowe'
      ]
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nasze usługi</h2>
          <p>Oferujemy kompleksowe rozwiązania webowe dostosowane do Twoich potrzeb</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              
              <button className="btn btn-primary">
                Zamów usługę
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .services {
          padding: 120px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
        }
        
        .services::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .section-header h2 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
          line-height: 1.2;
        }
        
        .section-header p {
          font-size: 1.25rem;
          color: #b0b0b0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7877c6 0%, #ff77c6 100%);
          border-radius: 20px 20px 0 0;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(120, 119, 198, 0.3);
          border-color: rgba(120, 119, 198, 0.5);
        }
        
        .service-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #7877c6 0%, #ff77c6 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          color: white;
        }
        
        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        
        .service-description {
          color: #b0b0b0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .service-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          text-align: left;
        }
        
        .service-features li {
          color: #b0b0b0;
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #7877c6;
          font-weight: bold;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 0.95rem;
          text-align: center;
          width: 100%;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #7877c6 0%, #ff77c6 100%);
          color: white;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(120, 119, 198, 0.4);
        }
        
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .services {
            padding: 80px 0;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .service-card {
            padding: 2rem;
          }
          
          .section-header h2 {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .service-card {
            padding: 1.5rem;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default ServicesSection