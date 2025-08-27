'use client';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Czysty kod",
    description: "Tworzę strony w oparciu o najnowsze standardy i najlepsze praktyki programistyczne, co zapewnia szybkość działania i łatwość rozbudowy."
  },
  {
    id: 2,
    icon: "fas fa-mobile-alt",
    title: "Responsywność",
    description: "Wszystkie projekty są w pełni responsywne i dostosowane do urządzeń mobilnych, tabletów i komputerów."
  },
  {
    id: 3,
    icon: "fas fa-search",
    title: "Optymalizacja SEO",
    description: "Dbam o techniczne aspekty SEO, aby Twoja strona była widoczna w wynikach wyszukiwania Google."
  },
  {
    id: 4,
    icon: "fas fa-paint-brush",
    title: "Unikalny design",
    description: "Każdy projekt jest tworzony indywidualnie, z uwzględnieniem specyfiki branży i potrzeb klienta."
  },
  {
    id: 5,
    icon: "fas fa-tachometer-alt",
    title: "Wydajność",
    description: "Optymalizuję strony pod kątem szybkości ładowania, co przekłada się na lepsze doświadczenia użytkowników i wyższe pozycje w Google."
  },
  {
    id: 6,
    icon: "fas fa-headset",
    title: "Wsparcie techniczne",
    description: "Oferuję kompleksowe wsparcie po zakończeniu projektu, aby Twoja strona działała bez zarzutu."
  }
];

export default function WhyChooseSection() {
  return (
    <section className="why-choose fade-in" id="why-choose">
      <div className="container">
        <div className="section-header">
          <h2>Dlaczego <span className="highlight">BloomPixel</span></h2>
          <p className="section-subtitle">Co wyróżnia moje usługi na tle konkurencji</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={feature.id} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-choose {
          padding: 100px 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
          overflow: hidden;
        }

        .why-choose::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
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
          color: #333;
          margin-bottom: 15px;
        }

        .highlight {
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .feature-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          color: white;
          font-size: 2rem;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .feature-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 15px;
          position: relative;
          z-index: 2;
        }

        .feature-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .feature-card:nth-child(odd) {
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
        }

        .feature-card:nth-child(even) {
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
        }

        .feature-card:hover {
          background: white;
        }

        @media (max-width: 768px) {
          .why-choose {
            padding: 60px 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-card {
            padding: 30px 20px;
          }

          .feature-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .feature-card h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}