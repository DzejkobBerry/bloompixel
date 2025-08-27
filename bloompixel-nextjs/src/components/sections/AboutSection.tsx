'use client'

import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            O <span className="highlight">mnie</span>
          </h2>
          <p className="section-subtitle">
            Poznaj doświadczonego developera z pasją do nowoczesnych technologii
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <div className="image-overlay"></div>
              <img src="/images/about/programmer.jpg" alt="Programista BloomPixel.pl" className="programmer-img" />
              <div className="image-shape"></div>
              <div className="experience-badge">
                <span className="number">5+</span>
                <span className="text">lat doświadczenia</span>
              </div>
              <div className="tech-icons">
                <div className="tech-icon"><i className="fab fa-html5"></i></div>
                <div className="tech-icon"><i className="fab fa-css3-alt"></i></div>
                <div className="tech-icon"><i className="fab fa-js"></i></div>
                <div className="tech-icon"><i className="fab fa-react"></i></div>
                <div className="tech-icon"><i className="fab fa-node-js"></i></div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>Cześć, jestem <span className="highlight name-hover" data-hover="Kuba">Jakub</span></h3>
            <p className="lead">Specjalizuję się w tworzeniu nowoczesnych, wydajnych i estetycznych stron internetowych oraz aplikacji webowych.</p>
            <p>Z pasją do kodowania i designu, tworzę rozwiązania, które nie tylko świetnie wyglądają, ale również doskonale działają. Moje podejście łączy najnowsze trendy w projektowaniu z solidnymi fundamentami programistycznymi.</p>
            <p>Każdy projekt traktuję indywidualnie, dostosowując rozwiązania do konkretnych potrzeb klienta i specyfiki branży.</p>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-icon"><i className="fas fa-smile"></i></div>
                <span className="stat-number" data-count="100">0</span>
                <span className="stat-text">Zadowolonych klientów</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><i className="fas fa-code"></i></div>
                <span className="stat-number" data-count="250">0</span>
                <span className="stat-text">Ukończonych projektów</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><i className="fas fa-trophy"></i></div>
                <span className="stat-number" data-count="15">0</span>
                <span className="stat-text">Nagród branżowych</span>
              </div>
            </div>
            <div className="about-buttons">
              <Link href="#contact" className="btn btn-primary">
                <span className="btn-text">Porozmawiajmy o Twoim projekcie</span>
                <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
              </Link>
              <Link href="#" className="btn btn-outline">
                <span className="btn-text">Pobierz CV</span>
                <span className="btn-icon"><i className="fas fa-download"></i></span>
              </Link>
            </div>
          </div>
        </div>
        <div className="about-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <style jsx>{`
        .about {
          position: relative;
          overflow: hidden;
          padding: 10rem 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 8rem;
        }
        
        .section-title {
          font-size: 4.8rem;
          margin-bottom: 2rem;
          font-weight: 800;
        }
        
        .section-subtitle {
          font-size: 2rem;
          color: var(--light-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        
        .about-text h3 {
          font-size: 3.2rem;
          margin-bottom: 2rem;
          font-weight: 700;
        }
        
        .about-text .lead {
          font-size: 2rem;
          line-height: 1.6;
          color: var(--light-secondary);
          margin-bottom: 2rem;
          font-weight: 500;
        }
        
        .about-text p {
          font-size: 1.6rem;
          line-height: 1.8;
          color: var(--light-secondary);
          margin-bottom: 2rem;
        }
        
        .stats-container {
          display: flex;
          gap: 3rem;
          margin: 4rem 0;
          flex-wrap: wrap;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 120px;
        }
        
        .stat-icon {
          font-size: 2.4rem;
          color: var(--violet-primary);
          margin-bottom: 1rem;
        }
        
        .stat-number {
          font-size: 3.6rem;
          font-weight: 800;
          color: var(--light);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        .stat-text {
          font-size: 1.4rem;
          color: var(--light-secondary);
          text-align: center;
        }
        
        .about-buttons {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .about-image {
          position: relative;
          perspective: 1000px;
          transform: translateY(-20px);
        }
        
        .image-container {
          position: relative;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.6), 0 0 30px rgba(236, 72, 153, 0.3);
          transform-style: preserve-3d;
          transition: transform 1.2s ease, box-shadow 0.5s ease;
        }
        
        .image-container:hover {
          transform: rotateY(1deg) rotateX(1deg);
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.7), 0 0 40px rgba(236, 72, 153, 0.4);
        }
        
        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, var(--violet-primary), transparent);
          opacity: 0.3;
          z-index: 1;
          transition: opacity 0.3s ease;
        }
        
        .image-container:hover::before {
          opacity: 0.3;
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
          z-index: 2;
          mix-blend-mode: overlay;
        }
        
        .programmer-img {
           display: block;
           width: 100%;
           height: auto;
           transform: scale(1);
           transition: transform 1.2s ease;
           filter: contrast(1.05) brightness(1.05);
         }
         
         .image-container:hover .programmer-img {
           transform: scale(1.01);
         }
        
        .experience-badge {
           position: absolute;
           bottom: -20px;
           right: -20px;
           width: 120px;
           height: 120px;
           background: linear-gradient(135deg, var(--violet-primary), var(--pink-primary));
           border-radius: 50%;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           color: var(--light);
           font-weight: 700;
           box-shadow: var(--neon-shadow);
           z-index: 2;
           transition: transform 0.3s ease, box-shadow 0.3s ease;
           animation: badgePulse 5s infinite alternate;
         }
         
         .experience-badge:hover {
           transform: scale(1.05) rotate(2deg);
           box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
         }
         
         .image-shape {
           position: absolute;
           top: -20px;
           left: -20px;
           width: 100px;
           height: 100px;
           border: 3px solid var(--violet-primary);
           border-radius: var(--border-radius);
           z-index: 0;
           opacity: 0.7;
           animation: rotateShape 10s linear infinite;
         }
         
         @keyframes rotateShape {
           0% {
             transform: rotate(0deg);
           }
           100% {
             transform: rotate(360deg);
           }
         }
         
         @keyframes badgePulse {
           0% {
             transform: scale(1);
             opacity: 0.9;
           }
           100% {
             transform: scale(1.02);
             opacity: 1;
           }
         }
         
         .tech-icons {
           position: absolute;
           top: 20px;
           right: 20px;
           display: flex;
           flex-direction: column;
           gap: 1rem;
           z-index: 3;
         }
         
         .tech-icon {
           width: 40px;
           height: 40px;
           background: rgba(139, 92, 246, 0.2);
           border: 1px solid rgba(139, 92, 246, 0.3);
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           color: var(--violet-primary);
           font-size: 1.8rem;
           transition: all 0.3s ease;
           backdrop-filter: blur(10px);
         }
         
         .tech-icon:hover {
           background: rgba(139, 92, 246, 0.3);
           transform: scale(1.1);
           box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
         }
         
         .about-bg-shapes {
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           z-index: 1;
           overflow: hidden;
         }
         
         .shape {
           position: absolute;
           border-radius: 50%;
           background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
           animation: float 6s ease-in-out infinite;
         }
         
         .shape-1 {
           width: 200px;
           height: 200px;
           top: 10%;
           left: 10%;
           animation-delay: 0s;
         }
         
         .shape-2 {
           width: 150px;
           height: 150px;
           top: 60%;
           right: 20%;
           animation-delay: 2s;
         }
         
         .shape-3 {
           width: 100px;
           height: 100px;
           bottom: 20%;
           left: 60%;
           animation-delay: 4s;
         }
         
         @keyframes float {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
           }
           50% {
             transform: translateY(-20px) rotate(180deg);
           }
         }
        
        .experience-badge .number {
           font-size: 3.6rem;
           line-height: 1;
           background: linear-gradient(90deg, #fff, #f0f0f0);
           -webkit-background-clip: text;
           background-clip: text;
           color: transparent;
         }
         
         .experience-badge .text {
           font-size: 1.2rem;
           text-transform: uppercase;
           letter-spacing: 1px;
           text-align: center;
           padding: 0 5px;
         }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          margin-bottom: 6rem;
        }
        
        .stat-item {
          text-align: center;
          padding: 3rem 2rem;
          background: rgba(139, 92, 246, 0.1);
          border-radius: var(--border-radius);
          border: 1px solid rgba(139, 92, 246, 0.2);
          transition: var(--transition);
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--neon-shadow);
        }
        
        .stat-number {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(90deg, var(--violet-primary), var(--pink-primary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }
        
        .stat-label {
          font-size: 1.4rem;
          color: var(--light-secondary);
          font-weight: 500;
        }
        
        .experience-timeline {
          position: relative;
        }
        
        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 2rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--violet-primary), var(--pink-primary));
        }
        
        .timeline-item {
          display: flex;
          align-items: center;
          margin-bottom: 4rem;
          position: relative;
        }
        
        .timeline-year {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, var(--violet-primary), var(--pink-primary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          margin-right: 3rem;
          position: relative;
          z-index: 2;
        }
        
        .timeline-content h5 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: var(--light);
        }
        
        .timeline-content p {
          color: var(--light-secondary);
          font-size: 1.4rem;
        }
        
        @media (max-width: 768px) {
          .about {
            padding: 8rem 0;
          }
          
          .section-title {
            font-size: 3.6rem;
          }
          
          .section-subtitle {
            font-size: 1.8rem;
          }
          
          .about-content {
            grid-template-columns: 1fr;
            gap: 6rem;
          }
          
          .image-container {
            max-width: 400px;
            margin: 0 auto;
          }
          
          .about-intro h3 {
            font-size: 2.8rem;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .about-cta {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 576px) {
          .section-header {
            margin-bottom: 6rem;
          }
          
          .section-title {
            font-size: 3rem;
          }
          
          .about-intro h3 {
            font-size: 2.4rem;
          }
          
          .about-intro p {
            font-size: 1.6rem;
          }
          
          .stat-number {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutSection