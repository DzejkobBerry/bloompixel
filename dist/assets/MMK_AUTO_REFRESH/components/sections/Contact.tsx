import React from 'react';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = {
    phone: "+48 123 456 789",
    email: "kontakt@mmkautorefresh.pl",
    address: "ul. Przykładowa 123, 00-000 Warszawa",
    workingHours: [
      { day: "Poniedziałek", hours: "8:00 - 18:00" },
      { day: "Wtorek", hours: "8:00 - 18:00" },
      { day: "Środa", hours: "8:00 - 18:00" },
      { day: "Czwartek", hours: "8:00 - 18:00" },
      { day: "Piątek", hours: "8:00 - 18:00" },
      { day: "Sobota", hours: "9:00 - 15:00" },
      { day: "Niedziela", hours: "Zamknięte" }
    ]
  };

  const socialLinks = [
    { href: "https://facebook.com/mmkautorefresh", icon: "fab fa-facebook-f", label: "Facebook" },
    { href: "https://instagram.com/mmkautorefresh", icon: "fab fa-instagram", label: "Instagram" },
    { href: "https://youtube.com/@mmkautorefresh", icon: "fab fa-youtube", label: "YouTube" },
    { href: "https://tiktok.com/@mmkautorefresh", icon: "fab fa-tiktok", label: "TikTok" },
    { href: "https://wa.me/48123456789", icon: "fab fa-whatsapp", label: "WhatsApp" }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Kontakt</h2>
          <p className="section-subtitle">
            Skontaktuj się z nami i umów wizytę
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Telefon</h3>
                <p>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Adres</h3>
                <p>{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-details">
                <h3>Godziny otwarcia</h3>
                <div className="working-hours">
                  {contactInfo.workingHours.map((schedule, index) => (
                    <div key={index} className="schedule-item">
                      <span className="day">{schedule.day}:</span>
                      <span className="hours">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="contact-social">
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
          
          <div className="contact-form-section">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;