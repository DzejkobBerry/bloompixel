'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('PL')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="#" onClick={() => window.location.reload()}>
            <div className="logo-icon">
              <div className="logo-pixel-grid">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
            </div>
            <span className="logo-text">
              Bloom<span className="pixel">Pixel</span><span className="dot">.pl</span>
            </span>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link href="#about">O mnie</Link></li>
            <li><Link href="#services">Usługi</Link></li>
            <li><Link href="#portfolio">Portfolio</Link></li>
            <li><Link href="#technologies">Technologie</Link></li>
            <li><Link href="#pricing">Cennik</Link></li>
            <li className="expand-more">
              <div className="expand-more-trigger">
                Więcej <i className="fas fa-chevron-down"></i>
              </div>
              <ul className="expand-dropdown">
                <li><Link href="#process"><i className="fas fa-tasks"></i> Proces Współpracy</Link></li>
                <li><Link href="#testimonials"><i className="fas fa-star"></i> Opinie Klientów</Link></li>
                <li><Link href="#blog"><i className="fas fa-blog"></i> Blog i Artykuły</Link></li>
                <li><Link href="#booking"><i className="fas fa-calendar-check"></i> Umów Konsultacje</Link></li>
                <li><Link href="#why-choose"><i className="fas fa-medal"></i> Dlaczego My?</Link></li>
                <li><Link href="#certificates"><i className="fas fa-certificate"></i> Certyfikaty</Link></li>
                <li><Link href="#faq"><i className="fas fa-question-circle"></i> FAQ</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        
        <div className="header-right">
          <div className="cta-button">
            <Link href="#contact" className="btn btn-primary">Skontaktuj się</Link>
          </div>
          <div className="language-switcher">
            <div className="current-lang">
              {currentLang} <i className="fas fa-chevron-down"></i>
            </div>
            <ul className="lang-dropdown">
              <li 
                className={`lang-option ${currentLang === 'PL' ? 'active' : ''}`} 
                onClick={() => handleLanguageChange('PL')}
              >
                PL - Polski
              </li>
              <li 
                className={`lang-option ${currentLang === 'ENG' ? 'active' : ''}`} 
                onClick={() => handleLanguageChange('ENG')}
              >
                ENG - Angielski
              </li>
              <li 
                className={`lang-option ${currentLang === 'NL' ? 'active' : ''}`} 
                onClick={() => handleLanguageChange('NL')}
              >
                NL - Holenderski
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 2rem 0;
          transition: all 0.3s ease;
          background-color: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
        }

        .header.scrolled {
          padding: 1.5rem 0;
          background-color: rgba(15, 23, 42, 0.95);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .header .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .logo {
          font-family: var(--font-secondary);
          font-size: 2.4rem;
          font-weight: 700;
        }
        
        .logo a {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          text-decoration: none;
        }
        
        .logo-icon {
          position: relative;
          width: 4.2rem;
          height: 4.2rem;
          background-color: rgba(15, 23, 42, 0.8);
          border-radius: 8px;
          border: 1px solid rgba(139, 92, 246, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
        }
        
        .logo-icon::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, var(--violet-primary), var(--pink-primary), var(--cyan-primary), var(--violet-primary));
          background-size: 400% 400%;
          z-index: -1;
          filter: blur(8px);
          opacity: 0;
          border-radius: 10px;
          animation: gradientShift 8s ease infinite, glowFadeIn 3s forwards 2.5s;
        }
        
        @keyframes glowFadeIn {
          to { opacity: 0.6; }
        }
        
        .logo-pixel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 2px;
          width: 100%;
          height: 100%;
          padding: 6px;
        }
        
        .logo-pixel-grid span {
          background: linear-gradient(45deg, #8B5CF6, #EC4899);
          border-radius: 2px;
          animation: pixelPulse 2s infinite alternate;
        }
        
        .logo-pixel-grid span:nth-child(1) { animation-delay: 0s; }
        .logo-pixel-grid span:nth-child(2) { animation-delay: 0.2s; }
        .logo-pixel-grid span:nth-child(3) { animation-delay: 0.4s; }
        .logo-pixel-grid span:nth-child(4) { animation-delay: 0.6s; }
        .logo-pixel-grid span:nth-child(5) { animation-delay: 0.8s; }
        .logo-pixel-grid span:nth-child(6) { animation-delay: 1s; }
        .logo-pixel-grid span:nth-child(7) { animation-delay: 1.2s; }
        .logo-pixel-grid span:nth-child(8) { animation-delay: 1.4s; }
        .logo-pixel-grid span:nth-child(9) { animation-delay: 1.6s; }
        
        @keyframes pixelPulse {
          0% { opacity: 0.6; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes neon-pulse {
          0% {
            box-shadow: inset 0 0 15px rgba(139, 92, 246, 0.15), 0 0 0 rgba(139, 92, 246, 0);
          }
          50% {
            box-shadow: inset 0 0 15px rgba(139, 92, 246, 0.2), 0 0 8px rgba(139, 92, 246, 0.3);
          }
          100% {
            box-shadow: inset 0 0 15px rgba(139, 92, 246, 0.15), 0 0 0 rgba(139, 92, 246, 0);
          }
        }

        .logo-text {
          position: relative;
          font-family: var(--font-secondary);
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1;
          display: flex;
          align-items: center;
          background: linear-gradient(90deg, #fff, var(--violet-secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 5px rgba(139, 92, 246, 0.3);
          animation: textGlow 3s ease-in-out infinite;
        }
        
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 5px rgba(139, 92, 246, 0.3); }
          50% { text-shadow: 0 0 10px rgba(139, 92, 246, 0.6); }
        }
        
        .logo-text .pixel {
          color: var(--pink-primary);
          text-shadow: 0 0 8px rgba(236, 72, 153, 0.5);
          animation: textPulse 3s infinite alternate;
        }
        
        .logo-text .dot {
          color: var(--cyan-primary);
          text-shadow: 0 0 8px rgba(6, 182, 212, 0.5);
          animation: textPulse 2s infinite alternate-reverse;
        }
        
        @keyframes textPulse {
          0% { text-shadow: 0 0 8px rgba(236, 72, 153, 0.3); }
          100% { text-shadow: 0 0 12px rgba(236, 72, 153, 0.8); }
        }
        
        .nav {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
        }
        
        .nav-list {
          display: flex;
          align-items: center;
          gap: 3rem;
          justify-content: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-list a {
          position: relative;
          font-weight: 500;
          font-size: 1.6rem;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .nav-list a:hover {
          color: var(--violet-primary);
        }
        
        .nav-list a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          transition: all 0.3s ease;
        }
        
        .nav-list a:hover::after {
          width: 100%;
        }
        
        .expand-more {
          position: relative;
        }
        
        .expand-more-trigger {
          cursor: pointer;
          color: var(--light);
          font-weight: 500;
          transition: var(--transition);
        }
        
        .expand-more-trigger:hover {
          color: var(--violet-primary);
        }
        
        .expand-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--dark-secondary);
          border-radius: var(--border-radius);
          padding: 1rem 0;
          min-width: 250px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          box-shadow: var(--box-shadow);
        }
        
        .expand-more:hover .expand-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .expand-dropdown li {
          padding: 0;
        }
        
        .expand-dropdown a {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          color: var(--light-secondary);
          transition: var(--transition);
        }
        
        .expand-dropdown a:hover {
          background: var(--violet-primary);
          color: white;
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-left: auto;
          margin-right: 0;
        }
        
        .cta-button .btn {
          padding: 1rem 2.2rem;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.3rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .cta-button .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
        }
        
        .language-switcher {
          position: relative;
          margin-left: 2rem;
          font-family: var(--font-secondary);
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          z-index: 1001;
        }
        
        .current-lang {
          display: flex;
          align-items: center;
          padding: 0.6rem 1.2rem;
          border-radius: 5rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(139, 92, 246, 0.7);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5),
                     0 0 20px rgba(139, 92, 246, 0.3),
                     0 0 30px rgba(236, 72, 153, 0.2);
          position: relative;
          overflow: hidden;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 0 5px rgba(139, 92, 246, 0.5);
        }
        
        .current-lang::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899, #8b5cf6);
          border-radius: 5.5rem;
          z-index: -1;
          opacity: 0.5;
          filter: blur(4px);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
          transition: opacity 0.3s ease;
        }
        
        .current-lang i {
          margin-left: 0.8rem;
          font-size: 1rem;
          transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
          opacity: 0.7;
        }
        
        .language-switcher:hover .current-lang {
          background: rgba(30, 41, 59, 0.6);
          border-color: rgba(139, 92, 246, 0.8);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.5),
                      0 0 25px rgba(139, 92, 246, 0.3),
                      0 0 35px rgba(236, 72, 153, 0.2);
          transform: translateY(-2px);
        }
        
        .language-switcher:hover .current-lang::before {
          opacity: 0.6;
          filter: blur(4px);
        }
        
        .language-switcher:hover .current-lang i {
          transform: rotate(180deg);
          opacity: 1;
        }
        
        .lang-dropdown {
          position: absolute;
          top: calc(100% + 0.8rem);
          right: 0;
          width: 160px;
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 1.2rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2),
                      0 0 0 1px rgba(139, 92, 246, 0.1),
                      0 0 15px rgba(139, 92, 246, 0.2);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px) scale(0.95);
          transform-origin: top right;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          overflow: hidden;
          border: 1px solid rgba(139, 92, 246, 0.3);
          z-index: 1002;
        }
        
        .language-switcher:hover .lang-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2),
                      0 0 0 1px rgba(139, 92, 246, 0.2),
                      0 0 20px rgba(139, 92, 246, 0.3);
        }
        
        .lang-option {
          padding: 1.2rem 1.6rem;
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          color: var(--light-secondary);
        }
        
        .lang-option:last-child {
          border-bottom: none;
        }
        
        .lang-option:hover {
          background: rgba(139, 92, 246, 0.15);
          border-left-color: #8b5cf6;
          padding-left: 2rem;
          box-shadow: inset 0 0 10px rgba(139, 92, 246, 0.1);
          color: white;
        }
        
        .lang-option.active {
          background: linear-gradient(90deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1));
          font-weight: 700;
          color: #fff;
          border-left-color: #ec4899;
          box-shadow: inset 0 0 15px rgba(139, 92, 246, 0.15);
          animation: neon-pulse 2s infinite;
        }
        
        .lang-option::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
        }
        
        .lang-option:hover::after {
          opacity: 0.05;
        }
        
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 20px;
          cursor: pointer;
        }
        
        .mobile-menu-toggle span {
          width: 100%;
          height: 2px;
          background-color: #fff;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .header .container {
            padding: 0 2rem;
          }

          .logo {
            font-size: 2rem;
          }

          .nav {
            display: none;
            position: static;
            transform: none;
          }
          
          .mobile-menu-toggle {
            display: flex;
          }
          
          .nav.active {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            padding: 2rem;
            border-radius: 0 0 1rem 1rem;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
          }
          
          .nav-list {
            flex-direction: column;
            gap: 2rem;
            justify-content: flex-start;
          }

          .header-right {
            gap: 1rem;
          }

          .cta-button .btn {
            padding: 0.8rem 1.6rem;
            font-size: 1.2rem;
          }

          .language-switcher {
            margin-left: 1rem;
          }

          .expand-dropdown {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            background: transparent;
            box-shadow: none;
            padding: 1rem 0 0 2rem;
            width: auto;
            border: none;
          }

          .expand-dropdown.active {
            display: block;
          }

          .nav.active .expand-more-trigger {
            color: #fff;
          }

          .nav.active .expand-more-trigger i.mobile-expand-icon {
            transform: rotate(180deg);
          }

          .nav.active .expand-dropdown {
            display: block;
          }

          .nav.active .expand-dropdown li {
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </header>
  )
}

export default Header