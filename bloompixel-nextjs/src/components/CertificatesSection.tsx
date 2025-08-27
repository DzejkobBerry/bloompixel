'use client';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  credentialId?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "/images/certificates/freecodecamp-js.jpg",
    description: "Certyfikat potwierdzający znajomość algorytmów i struktur danych w JavaScript",
    credentialId: "fcc-js-2023"
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "/images/certificates/freecodecamp-rwd.jpg",
    description: "Certyfikat z zakresu responsywnego projektowania stron internetowych",
    credentialId: "fcc-rwd-2023"
  },
  {
    id: 3,
    title: "React Developer",
    issuer: "Meta",
    date: "2023",
    image: "/images/certificates/meta-react.jpg",
    description: "Profesjonalny certyfikat Meta z zakresu rozwoju aplikacji React",
    credentialId: "meta-react-2023"
  },
  {
    id: 4,
    title: "Advanced CSS and Sass",
    issuer: "Udemy",
    date: "2022",
    image: "/images/certificates/udemy-css.jpg",
    description: "Zaawansowany kurs CSS i Sass - nowoczesne techniki stylowania",
    credentialId: "udemy-css-2022"
  },
  {
    id: 5,
    title: "Node.js Developer",
    issuer: "The Complete Node.js Course",
    date: "2022",
    image: "/images/certificates/nodejs-cert.jpg",
    description: "Kompleksowy kurs Node.js - budowanie aplikacji back-end",
    credentialId: "nodejs-2022"
  },
  {
    id: 6,
    title: "Google Analytics Certified",
    issuer: "Google",
    date: "2023",
    image: "/images/certificates/google-analytics.jpg",
    description: "Certyfikat Google Analytics - analiza ruchu i optymalizacja stron",
    credentialId: "ga-cert-2023"
  }
];

export default function CertificatesSection() {
  return (
    <section className="certificates fade-in" id="certificates">
      <div className="container">
        <div className="section-header">
          <h2>Moje <span className="highlight">certyfikaty</span></h2>
          <p className="section-subtitle">Potwierdzenie umiejętności i ciągłego rozwoju</p>
        </div>
        
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={cert.id} className="certificate-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>{cert.title}</h3>
                    <p className="issuer">{cert.issuer}</p>
                    <p className="date">{cert.date}</p>
                  </div>
                </div>
              </div>
              <div className="certificate-content">
                <h4>{cert.title}</h4>
                <p className="certificate-issuer">{cert.issuer} • {cert.date}</p>
                <p className="certificate-description">{cert.description}</p>
                {cert.credentialId && (
                  <div className="credential-id">
                    <small>ID: {cert.credentialId}</small>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .certificates {
          padding: 100px 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .certificate-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.6s ease forwards;
        }

        .certificate-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .certificate-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .certificate-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .certificate-card:hover .certificate-image img {
          transform: scale(1.1);
        }

        .certificate-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .certificate-card:hover .certificate-overlay {
          opacity: 1;
        }

        .certificate-info {
          text-align: center;
          color: white;
          padding: 20px;
        }

        .certificate-info h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .certificate-info .issuer {
          font-size: 1rem;
          margin-bottom: 5px;
          opacity: 0.9;
        }

        .certificate-info .date {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .certificate-content {
          padding: 25px;
        }

        .certificate-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .certificate-issuer {
          color: #667eea;
          font-weight: 500;
          margin-bottom: 12px;
          font-size: 0.9rem;
        }

        .certificate-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
          font-size: 0.9rem;
        }

        .credential-id {
          padding-top: 15px;
          border-top: 1px solid #eee;
        }

        .credential-id small {
          color: #999;
          font-size: 0.8rem;
          font-family: monospace;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .certificates {
            padding: 60px 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .certificates-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 20px;
          }

          .certificate-card {
            margin: 0;
          }

          .certificate-image {
            height: 150px;
          }

          .certificate-content {
            padding: 20px;
          }

          .certificate-content h4 {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .certificates-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .certificate-content {
            padding: 15px;
          }
        }
      `}</style>
    </section>
  );
}