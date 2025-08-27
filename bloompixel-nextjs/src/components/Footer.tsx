'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your newsletter service
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Logo and About */}
            <div className="footer-section">
              <div className="footer-logo">
                <h3>BloomPixel</h3>
              </div>
              <p className="footer-about">
                Tworzę nowoczesne strony internetowe i aplikacje webowe, 
                które pomagają firmom rozwijać się w cyfrowym świecie. 
                Każdy projekt traktuję indywidualnie, dbając o najwyższą jakość.
              </p>
              <div className="social-links">
                <a href="https://facebook.com/bloompixel" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/bloompixel" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/bloompixel" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com/bloompixel" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/bloompixel" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Szybkie linki</h4>
              <ul className="footer-links">
                <li><a href="#home">Strona główna</a></li>
                <li><a href="#about">O mnie</a></li>
                <li><a href="#services">Usługi</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Opinie</a></li>
                <li><a href="#contact">Kontakt</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Usługi</h4>
              <ul className="footer-links">
                <li><a href="#services">Tworzenie stron WWW</a></li>
                <li><a href="#services">Sklepy internetowe</a></li>
                <li><a href="#services">Aplikacje webowe</a></li>
                <li><a href="#services">Pozycjonowanie SEO</a></li>
                <li><a href="#services">Konsultacje techniczne</a></li>
                <li><a href="#services">Wsparcie techniczne</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Kontakt</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Warszawa, Polska</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+48 123 456 789</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>kontakt@bloompixel.pl</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <span>Pn-Pt: 9:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-section">
              <h4>Newsletter</h4>
              <p className="newsletter-text">
                Zapisz się do newslettera i bądź na bieżąco z najnowszymi trendami w web developmencie.
              </p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Twój adres email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" disabled={isSubscribed}>
                    {isSubscribed ? 'Zapisano!' : 'Zapisz się'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2024 BloomPixel. Wszystkie prawa zastrzeżone.</p>
              <div className="footer-bottom-links">
                <a href="/privacy">Polityka prywatności</a>
                <a href="/terms">Regulamin</a>
                <a href="/cookies">Polityka cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 60px 0 0;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h3,
        .footer-section h4 {
          margin-bottom: 20px;
          color: white;
        }

        .footer-logo h3 {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-about {
          color: #bdc3c7;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-links a:hover {
          background: linear-gradient(45deg, #667eea, #764ba2);
          transform: translateY(-3px);
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #bdc3c7;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #667eea;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #bdc3c7;
        }

        .contact-item i {
          width: 20px;
          color: #667eea;
        }

        .newsletter-text {
          color: #bdc3c7;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .newsletter-form .input-group {
          display: flex;
          gap: 10px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 12px 15px;
          border: none;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 0.9rem;
        }

        .newsletter-form input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .newsletter-form input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.15);
        }

        .newsletter-form button {
          padding: 12px 20px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .newsletter-form button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .newsletter-form button:disabled {
          background: #27ae60;
          cursor: not-allowed;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 25px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #bdc3c7;
        }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }

        .footer-bottom-links a {
          color: #bdc3c7;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: #667eea;
        }

        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .back-to-top:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 0;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
          }

          .newsletter-form .input-group {
            flex-direction: column;
          }

          .newsletter-form button {
            align-self: center;
            min-width: 120px;
          }

          .back-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            padding: 0 20px;
          }

          .social-links {
            justify-content: center;
          }

          .contact-info {
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}