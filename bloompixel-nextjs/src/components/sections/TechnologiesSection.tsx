'use client';

interface Technology {
  name: string;
  icon: string;
  category: string;
}

const technologies: Technology[] = [
  // Frontend
  { name: 'HTML5', icon: '/assets/images/tech/html5.svg', category: 'Frontend' },
  { name: 'CSS3', icon: '/assets/images/tech/css3.svg', category: 'Frontend' },
  { name: 'JavaScript', icon: '/assets/images/tech/javascript.svg', category: 'Frontend' },
  { name: 'React', icon: '/assets/images/tech/react.svg', category: 'Frontend' },
  // Backend
  { name: 'Node.js', icon: '/assets/images/tech/nodejs.svg', category: 'Backend' },
  { name: 'PHP', icon: '/assets/images/tech/php.svg', category: 'Backend' },
  { name: 'MySQL', icon: '/assets/images/tech/mysql.svg', category: 'Backend' },
  { name: 'MongoDB', icon: '/assets/images/tech/mongodb.svg', category: 'Backend' },
  // Narzędzia
  { name: 'Git', icon: '/assets/images/tech/git.svg', category: 'Narzędzia' },
  { name: 'Figma', icon: '/assets/images/tech/figma.svg', category: 'Narzędzia' },
  { name: 'Webpack', icon: '/assets/images/tech/webpack.svg', category: 'Narzędzia' },
  { name: 'Docker', icon: '/assets/images/tech/docker.svg', category: 'Narzędzia' },
];

const categories = ['Frontend', 'Backend', 'Narzędzia'];

export default function TechnologiesSection() {
  const getTechnologiesByCategory = (category: string) => {
    return technologies.filter(tech => tech.category === category);
  };

  return (
    <section className="technologies" id="technologies">
      <div className="container">
        <div className="section-header">
          <h2>Używane <span className="highlight">technologie</span></h2>
          <p className="section-subtitle">Narzędzia i języki, których używam do tworzenia projektów</p>
        </div>

        <div className="tech-container">
          {categories.map(category => (
            <div key={category} className="tech-category">
              <h3>{category}</h3>
              <div className="tech-icons">
                {getTechnologiesByCategory(category).map((tech, index) => (
                  <div key={index} className="tech-icon">
                    <img src={tech.icon} alt={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .technologies {
          padding: 80px 0;
          background: #1a1a2e;
          position: relative;
          overflow: hidden;
        }
        
        .technologies::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #ffffff;
        }
        
        .highlight {
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: #b0b0b0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .tech-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          position: relative;
          z-index: 1;
        }
        
        .tech-category {
          text-align: center;
        }
        
        .tech-category h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 30px;
        }
        
        .tech-icons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          justify-items: center;
        }
        
        .tech-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .tech-icon:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }
        
        .tech-icon img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }
        
        .tech-icon span {
          font-size: 0.9rem;
          color: #ffffff;
          font-weight: 500;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .technologies {
            padding: 60px 0;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
          
          .tech-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .tech-category h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
          }
          
          .tech-icons {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 15px;
          }
          
          .tech-icon {
            padding: 15px;
          }
          
          .tech-icon img {
            width: 35px;
            height: 35px;
          }
          
          .tech-icon span {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}