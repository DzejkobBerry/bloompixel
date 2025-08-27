import React, { useState } from 'react';
import { ContactFormData } from '../../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    gdpr: false
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const services = [
    'Powłoki epoksydowe',
    'Polerowanie lakieru',
    'Czyszczenie wnętrza',
    'Usuwanie wgnieceń PDR',
    'Powłoki grafenowe',
    'Powłoki ceramiczne',
    'Czyszczenie tapicerki',
    'Pielęgnacja skóry',
    'Czyszczenie komory silnika',
    'Inne'
  ];

  const validateField = (name: string, value: string | boolean) => {
    switch (name) {
      case 'name':
        return typeof value === 'string' && value.trim().length >= 2;
      case 'email':
        return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'phone':
        return typeof value === 'string' && /^[\d\s\+\-\(\)]{9,}$/.test(value.replace(/\s/g, ''));
      case 'service':
        return typeof value === 'string' && value.trim().length > 0;
      case 'gdpr':
        return value === true;
      default:
        return true;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Real-time validation
    if (errors[name as keyof ContactFormData]) {
      if (validateField(name, newValue)) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name as keyof ContactFormData];
          return newErrors;
        });
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    if (!validateField(name, fieldValue)) {
      setErrors(prev => ({
        ...prev,
        [name]: true
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);

    // Validate all fields
    const newErrors: Partial<ContactFormData> = {};
    
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'message' && !validateField(key, value)) {
        newErrors[key as keyof ContactFormData] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success modal
      setShowModal(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        gdpr: false
      });
      
    } catch (error) {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.name ? 'error' : ''}
            required
          />
          {errors.name && (
            <span className="error-message">Podaj prawidłowe imię i nazwisko</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.email ? 'error' : ''}
            required
          />
          {errors.email && (
            <span className="error-message">Podaj prawidłowy adres email</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefon *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.phone ? 'error' : ''}
            required
          />
          {errors.phone && (
            <span className="error-message">Podaj prawidłowy numer telefonu</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="service">Wybierz usługę *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.service ? 'error' : ''}
            required
          >
            <option value="">Wybierz usługę</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          {errors.service && (
            <span className="error-message">Wybierz usługę</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Wiadomość</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder="Opisz swoje potrzeby..."
          ></textarea>
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="gdpr"
              checked={formData.gdpr}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={errors.gdpr ? 'error' : ''}
              required
            />
            <span className="checkmark"></span>
            Wyrażam zgodę na przetwarzanie danych osobowych *
          </label>
          {errors.gdpr && (
            <span className="error-message">Musisz wyrazić zgodę na przetwarzanie danych</span>
          )}
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
        </button>

        {showSuccess && (
          <div className="form-message success">
            Wiadomość została wysłana pomyślnie!
          </div>
        )}

        {showError && (
          <div className="form-message error">
            Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.
          </div>
        )}
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Dziękujemy za kontakt!</h3>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>Twoja wiadomość została wysłana pomyślnie.</p>
              <div className="submitted-data">
                <p><strong>Imię:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Usługa:</strong> {formData.service}</p>
              </div>
              <p>Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;