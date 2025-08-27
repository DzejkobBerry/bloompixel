'use client'

import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="hero visible" id="home">
      <div className="robot-bg"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="bloom-pixel">BloomPixel</span> <span className="highlight">futurystyczne</span> strony internetowe
          </h1>
          <p className="hero-subtitle">
            Profesjonalne usługi web development z wykorzystaniem najnowszych technologii
          </p>
          <div className="hero-buttons">
            <Link href="#services" className="btn btn-primary">
              Poznaj moje usługi<span className="btn-icon">→</span>
            </Link>
            <Link href="#portfolio" className="btn btn-secondary">
              Zobacz portfolio<span className="btn-icon">→</span>
            </Link>
            <Link href="#contact" className="btn btn-outline">
              Darmowa konsultacja<span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="robot-animation">
            <div className="robot-glow"></div>
            <div className="robot">
              <div className="robot-head"></div>
              <div className="robot-body"></div>
              <div className="robot-arm robot-arm-left"></div>
              <div className="robot-arm robot-arm-right"></div>
              <div className="robot-leg robot-leg-left"></div>
              <div className="robot-leg robot-leg-right"></div>
              <div className="robot-eye robot-eye-left"></div>
              <div className="robot-eye robot-eye-right"></div>
              <div className="robot-antenna"></div>
            </div>
            <div className="robot-shadow"></div>
          </div>
        </div>
        
        <div className="scroll-down">
          <a href="#about">
            <span className="mouse">
              <span className="wheel"></span>
            </span>
            <span className="arrow"></span>
          </a>
        </div>
      </div>
      <div className="hero-particles"></div>
      
      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 8rem;
          position: relative;
          background: radial-gradient(circle at center, #1e293b, #0f172a);
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 5;
        }

        .hero-content {
          max-width: 600px;
          flex: 1;
          text-align: left;
          padding-right: 2rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.2;
          color: #f8fafc;
        }

        .bloom-pixel {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight {
          color: #06b6d4;
        }

        .hero-subtitle {
          font-size: 2rem;
          color: #cbd5e1;
          margin-bottom: 4rem;
        }

        .hero-buttons {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        .btn {
          padding: 1.2rem 2.4rem;
          border-radius: 0.8rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          border: 2px solid transparent;
        }

        .btn-primary {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
        }

        .btn-secondary {
          background: linear-gradient(135deg, #06b6d4, #0891b2);
          color: white;
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.3);
        }

        .btn-outline {
          background: transparent;
          color: #f8fafc;
          border-color: #8b5cf6;
        }

        .btn-outline:hover {
          background: #8b5cf6;
          transform: translateY(-2px);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn:hover .btn-icon {
          transform: translateX(4px);
        }

        .hero-image {
          position: relative;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .robot-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/images/robot/hero.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
          overflow: hidden;
          transition: transform 0.3s ease-out;
        }

        .robot-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.4),
            rgba(236, 72, 153, 0.3),
            rgba(45, 212, 191, 0.3)
          );
          mix-blend-mode: overlay;
          z-index: 1;
        }

        .robot-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            rgba(139, 92, 246, 0.3) 0%,
            rgba(15, 23, 42, 0.9) 70%
          );
          z-index: 2;
        }

        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 3;
        }

        .hero-particles::before,
        .hero-particles::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 0.5%),
            radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 0.5%),
            radial-gradient(circle at 50% 40%, rgba(45, 212, 191, 0.3) 0%, transparent 0.5%),
            radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 0.5%),
            radial-gradient(circle at 90% 10%, rgba(236, 72, 153, 0.3) 0%, transparent 0.5%);
          background-size: 150% 150%;
          background-repeat: no-repeat;
          opacity: 0.3;
        }

        .hero-particles::before {
          animation: particlesMove 15s infinite linear;
        }

        .hero-particles::after {
          animation: particlesMove 20s infinite linear reverse;
        }

        @keyframes particlesMove {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 25% 25%;
          }
          50% {
            background-position: 50% 50%;
          }
          75% {
            background-position: 75% 75%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        .robot-animation {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 50px;
        }

        .robot-img {
          max-width: 100%;
          height: auto;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3));
          animation: float 6s ease-in-out infinite, glow 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes glow {
          0% {
            filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
          }
          100% {
            filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3));
          }
        }

        .scroll-down {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          z-index: 10;
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid rgba(139, 92, 246, 0.8);
          border-radius: 12px;
          position: relative;
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(10px);
        }

        .wheel {
          width: 4px;
          height: 8px;
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 2s infinite;
        }

        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(-8px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(8px);
          }
        }

        .scroll-arrow {
          color: rgba(139, 92, 246, 0.8);
          font-size: 1.2rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 6rem;
            text-align: center;
          }

          .container {
            flex-direction: column;
            gap: 3rem;
          }

          .hero-content {
            padding-right: 0;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 3rem;
          }

          .hero-buttons {
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }

          .robot-animation {
            margin-left: 0;
          }
        }
        
        .robot-head {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--violet-primary), var(--pink-primary));
          border-radius: 20px;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }
        
        .robot-body {
          width: 100px;
          height: 120px;
          background: linear-gradient(135deg, var(--cyan-primary), var(--blue-primary));
          border-radius: 15px;
          position: absolute;
          top: 70px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
        }
        
        .robot-arm {
          width: 15px;
          height: 80px;
          background: var(--violet-primary);
          border-radius: 10px;
          position: absolute;
          top: 80px;
        }
        
        .robot-arm-left {
          left: 25px;
          animation: armWave 2s ease-in-out infinite;
        }
        
        .robot-arm-right {
          right: 25px;
          animation: armWave 2s ease-in-out infinite reverse;
        }
        
        @keyframes armWave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
        
        .robot-leg {
          width: 20px;
          height: 60px;
          background: var(--cyan-primary);
          border-radius: 10px;
          position: absolute;
          bottom: 0;
        }
        
        .robot-leg-left {
          left: 35px;
        }
        
        .robot-leg-right {
          right: 35px;
        }
        
        .robot-eye {
          width: 12px;
          height: 12px;
          background: var(--cyan-primary);
          border-radius: 50%;
          position: absolute;
          top: 25px;
          animation: eyeBlink 3s ease-in-out infinite;
        }
        
        .robot-eye-left {
          left: 20px;
        }
        
        .robot-eye-right {
          right: 20px;
        }
        
        @keyframes eyeBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        
        .robot-antenna {
          width: 3px;
          height: 30px;
          background: var(--pink-primary);
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .robot-antenna::after {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background: var(--pink-primary);
          border-radius: 50%;
          animation: antennaBlink 1.5s ease-in-out infinite;
        }
        
        @keyframes antennaBlink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0.3; }
        }
        
        .robot-shadow {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 30px;
          background: radial-gradient(ellipse, rgba(0, 0, 0, 0.3) 0%, transparent 70%);
          animation: shadowPulse 3s ease-in-out infinite;
        }
        
        @keyframes shadowPulse {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(0.8); }
        }
        
        .robot-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
          animation: glowPulse 4s ease-in-out infinite;
        }
        
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        .scroll-down {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        
        .scroll-down a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--light-secondary);
          transition: var(--transition);
        }
        
        .scroll-down a:hover {
          color: var(--violet-primary);
        }
        
        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid currentColor;
          border-radius: 12px;
          position: relative;
          display: block;
        }
        
        .wheel {
          width: 4px;
          height: 8px;
          background: currentColor;
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: mouseWheel 2s ease-in-out infinite;
        }
        
        @keyframes mouseWheel {
          0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.5; transform: translateX(-50%) translateY(8px); }
        }
        
        .arrow {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid currentColor;
          animation: arrowBounce 2s ease-in-out infinite;
        }
        
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        
        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }
        
        @media (max-width: 768px) {
          .hero .container {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          
          .hero-content h1 {
            font-size: 4rem;
          }
          
          .subtitle {
            font-size: 1.8rem;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .robot-animation {
            width: 300px;
            height: 300px;
          }
          
          .robot {
            width: 150px;
            height: 225px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-content h1 {
            font-size: 3.2rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection