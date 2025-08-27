'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact fade-in" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Skontaktuj <span className="highlight">się ze mną</span></h2>
          <p className="section-subtitle">Porozmawiajmy o Twoim projekcie</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Adres</h3>
                <p>Spijkenisse</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p><a href="mailto:kontakt@bloompixel.pl">kontakt@bloompixel.pl</a></p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-content">
                <h3>Telefon</h3>
                <p><a href="tel:+48574944754">+48 574 944 754</a></p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-content">
                <h3>Godziny pracy</h3>
                <p>Poniedziałek - Piątek: 9:00 - 17:00</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61575759564111&locale=pl_PL" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <i className="fas fa-user input-icon"></i>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Imię i nazwisko"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <i className="fas fa-envelope input-icon"></i>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <i className="fas fa-phone input-icon"></i>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefon"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <i className="fas fa-tag input-icon"></i>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Wybierz temat</option>
                    <option value="website">Strona Internetowa</option>
                    <option value="migration">Migracja Strony</option>
                    <option value="hosting">Hosting i Domena</option>
                    <option value="redesign">Redesing Stron</option>
                    <option value="landing">Landing Pages</option>
                    <option value="social">Social Media i Marketing</option>
                    <option value="consultation">Konsultacje Techniczne</option>
                    <option value="support">Pomoc Techniczna</option>
                    <option value="cooperation">Współpraca</option>
                    <option value="other">Inne</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <i className="fas fa-comment input-icon textarea-icon"></i>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Twoja wiadomość"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="privacy">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <a href="#">polityką prywatności</a>.
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                <i className="fas fa-paper-plane"></i>
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="submit-message success">
                  <i className="fas fa-check-circle"></i>
                  Wiadomość została wysłana pomyślnie!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="submit-message error">
                  <i className="fas fa-exclamation-circle"></i>
                  Wystąpił błąd podczas wysyłania wiadomości.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 100px 0;
          background: #fff;
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

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          background: #f8f9fa;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .info-item:hover {
          background: #667eea;
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .info-item:hover .info-icon {
          background: white;
          color: #667eea;
        }

        .info-content h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 5px;
          color: inherit;
        }

        .info-content p {
          margin: 0;
          color: inherit;
          opacity: 0.8;
        }

        .info-content a {
          color: inherit;
          text-decoration: none;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .contact-form {
          background: #f8f9fa;
          padding: 40px;
          border-radius: 20px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .input-icon-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
          z-index: 2;
        }

        .textarea-icon {
          top: 15px;
          transform: none;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 15px 15px 15px 45px;
          border: 2px solid #e9ecef;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .checkbox-container {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .checkbox-container input[type="checkbox"] {
          width: auto;
          padding: 0;
          margin: 0;
        }

        .checkbox-container label {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }

        .checkbox-container a {
          color: #667eea;
          text-decoration: none;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          width: 100%;
          justify-content: center;
        }

        .btn-primary {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }

        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-message {
          margin-top: 20px;
          padding: 15px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }

        .submit-message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .submit-message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        @media (max-width: 768px) {
          .contact {
            padding: 60px 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-form {
            padding: 30px 20px;
          }

          .info-item {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}