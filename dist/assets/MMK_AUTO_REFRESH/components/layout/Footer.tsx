import React from 'react';
import { NavigationItem } from '../../types';

interface FooterProps {
  navigationItems: NavigationItem[];
}

const Footer: React.FC<FooterProps> = ({ navigationItems }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://facebook.com/mmkautorefresh", icon: "fab fa-facebook-f", label: "Facebook" },
    { href: "https://instagram.com/mmkautorefresh", icon: "fab fa-instagram", label: "Instagram" },
    { href: "https://youtube.com/@mmkautorefresh", icon: "fab fa-youtube", label: "YouTube" },
    { href: "https://tiktok.com/@mmkautorefresh", icon: "fab fa-tiktok", label: "TikTok" },
    { href: "https://wa.me/48123456789", icon: "fab fa-whatsapp", label: "WhatsApp" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="assets/images/logo.png" alt="MMK AUTO REFRESH" />
              <p>Profesjonalne usługi detailingu samochodowego</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Nawigacja</h3>
            <ul className="footer-nav">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Śledź nas</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} MMK AUTO REFRESH. Wszelkie prawa zastrzeżone.</p>
          <p>Strona wykonana przez <a href="#" target="_blank">Twoje Studio</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;