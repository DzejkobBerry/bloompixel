import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircleIcon, ClockIcon, GlobeIcon, StarIcon, ArrowRightIcon } from 'lucide-react';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import TypewriterText from '../UI/TypewriterText';
const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  });

  const services = [
    { value: '', label: 'Wybierz usługę...' },
    { value: 'website', label: 'Tworzenie Stron Internetowych' },
    { value: 'promotion', label: 'Promowanie Usług' },
    { value: 'ui-ux', label: 'Projektowanie UI/UX' },
    { value: 'seo', label: 'Pozycjonowanie SEO' },
    { value: 'branding', label: 'Identyfikacja Wizualna' },
    { value: 'consulting', label: 'Konsultacje Techniczne' },
    { value: 'other', label: 'Inne / Niestandardowe' }
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        service: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100 via-purple-50 to-transparent rounded-bl-full opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-100 via-indigo-50 to-transparent rounded-tr-full opacity-60 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-indigo-200 to-pink-200 rounded-full opacity-20 blur-xl -z-10"></div>
      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
      once: true,
      amount: 0.1
    }} variants={containerVariants}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                <TypewriterText text="Skontaktuj się" delay={500} speed={80} />
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                <TypewriterText text="z Nami" delay={1500} speed={100} />
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Masz pomysł na projekt lub chcesz przedyskutować, jak możemy pomóc
            Twojemu biznesowi? Porozmawiajmy!
          </motion.p>
        </motion.div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-2xl p-6 border border-white/50 backdrop-blur-sm h-fit">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 shadow-lg">
                    <StarIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Skontaktuj się z nami
                    </h3>
                    <p className="text-slate-600 text-sm">Jesteśmy tutaj, aby pomóc</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start p-4 rounded-xl bg-white/50 border border-white/80 shadow-sm" 
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4 shadow-lg">
                      <MailIcon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 mb-1 font-medium">Email</p>
                      <p className="text-slate-900 font-semibold text-lg">
                        contact@bloompixel.pl
                      </p>
                      <p className="text-xs text-slate-400 mt-1">Odpowiadamy w ciągu 24h</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start p-4 rounded-xl bg-white/50 border border-white/80 shadow-sm" 
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mr-4 shadow-lg">
                      <PhoneIcon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 mb-1 font-medium">Telefon</p>
                      <p className="text-slate-900 font-semibold text-lg">
                        +48 123 456 789
                      </p>
                      <p className="text-xs text-slate-400 mt-1">Pon-Pt 9:00-18:00</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start p-4 rounded-xl bg-white/50 border border-white/80 shadow-sm" 
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mr-4 shadow-lg">
                      <MapPinIcon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 mb-1 font-medium">Lokalizacja</p>
                      <p className="text-slate-900 font-semibold text-lg">
                        Warszawa, Polska
                      </p>
                      <p className="text-xs text-slate-400 mt-1">Spotkania online i stacjonarne</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start p-4 rounded-xl bg-white/50 border border-white/80 shadow-sm" 
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mr-4 shadow-lg">
                      <ClockIcon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 mb-1 font-medium">Czas odpowiedzi</p>
                      <p className="text-slate-900 font-semibold text-lg">
                        Do 2 godzin
                      </p>
                      <p className="text-xs text-slate-400 mt-1">W godzinach pracy</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Stats Section */}
                <div className="mt-8 pt-8 border-t border-white/50">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                      <div className="text-2xl font-bold text-blue-600">24h</div>
                      <div className="text-xs text-slate-600">Czas odpowiedzi</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                      <div className="text-2xl font-bold text-green-600">100+</div>
                      <div className="text-xs text-slate-600">Zadowolonych klientów</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-slate-900">
                      Śledź Nas
                    </h4>
                    <div className="flex items-center text-xs text-slate-500">
                      <GlobeIcon size={12} className="mr-1" />
                      Bądź na bieżąco
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <motion.a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors shadow-sm" whileHover={{
                    y: -5,
                    backgroundColor: '#2563eb',
                    color: '#ffffff'
                  }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </motion.a>
                    <motion.a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-white transition-colors shadow-sm" whileHover={{
                    y: -5,
                    backgroundColor: '#38bdf8',
                    color: '#ffffff'
                  }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </motion.a>
                    <motion.a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white transition-colors shadow-sm" whileHover={{
                    y: -5,
                    backgroundColor: '#1d4ed8',
                    color: '#ffffff'
                  }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </motion.a>
                    <motion.a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-colors shadow-sm" whileHover={{
                    y: -5,
                    background: 'linear-gradient(to bottom right, #9333ea, #ec4899)',
                    color: '#ffffff'
                  }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-3" variants={itemVariants}>
              <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-2xl p-6 border border-white/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Wyślij Nam Wiadomość
                    </h3>
                    <p className="text-sm text-slate-600">Opowiedz nam o swoim projekcie</p>
                  </div>
                  <div className="hidden md:flex items-center space-x-2 text-xs text-slate-500">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Online</span>
                  </div>
                </div>
                

                 
                 <form onSubmit={handleSubmit} className="space-y-6">
                  {isSubmitted ? <motion.div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-center mb-6 border border-green-200" initial={{
                  opacity: 0,
                  y: -20
                }} animate={{
                  opacity: 1,
                  y: 0
                }}>
                      <CheckCircleIcon className="text-green-500 mr-2" size={20} />
                      <span>
                        Dziękujemy za wiadomość! Skontaktujemy się z Tobą
                        wkrótce.
                      </span>
                    </motion.div> : null}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Imię *
                      </label>
                      <motion.input 
                        type="text" 
                        id="name" 
                        value={formState.name} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md" 
                        placeholder="Jak się nazywasz?" 
                        whileFocus={{ scale: 1.01, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email *
                      </label>
                      <motion.input 
                        type="email" 
                        id="email" 
                        value={formState.email} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md" 
                        placeholder="twoj@email.com" 
                        whileFocus={{ scale: 1.01, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        required 
                      />
                    </div>
                  </div>
                   
                   <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      Temat *
                    </label>
                    <motion.input 
                      type="text" 
                      id="subject" 
                      value={formState.subject} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md" 
                      placeholder="O czym chcesz porozmawiać?" 
                      whileFocus={{ scale: 1.01, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                      Usługa *
                    </label>
                    <div className="relative">
                      <motion.select 
                        id="service" 
                        value={formState.service} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md appearance-none cursor-pointer" 
                        whileFocus={{ scale: 1.01, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        required
                      >
                        {services.map((service) => (
                          <option key={service.value} value={service.value} disabled={service.value === ''}>
                            {service.label}
                          </option>
                        ))}
                      </motion.select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Wiadomość *
                    </label>
                    <motion.textarea 
                      id="message" 
                      value={formState.message} 
                      onChange={handleChange} 
                      rows={6} 
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md resize-none" 
                      placeholder="Opowiedz nam więcej o swoim projekcie, budżecie i terminach..." 
                      whileFocus={{ scale: 1.01, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      required
                    />
                    <p className="text-xs text-slate-500 mt-1">Minimum 20 znaków</p>
                  </div>
                  <div className="space-y-4">
                    <motion.div className="flex flex-col sm:flex-row gap-4 items-center">
                      <motion.div className="flex-1">
                        <Button 
                          size="lg" 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Wysyłanie...
                            </>
                          ) : (
                            <>
                              Wyślij Wiadomość
                              <ArrowRightIcon size={18} className="ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                      <div className="text-center sm:text-right">
                        <p className="text-xs text-slate-500 mb-1">Odpowiadamy w ciągu</p>
                        <p className="text-sm font-semibold text-slate-700">24 godzin</p>
                      </div>
                    </motion.div>
                    
                    {/* Alternative Contact Methods */}
                    <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-200">
                      <span className="text-sm text-slate-500">lub skontaktuj się przez:</span>
                      <div className="flex space-x-3">
                        <motion.a
                          href="mailto:contact@bloompixel.pl"
                          className="w-8 h-8 rounded-lg bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <MailIcon size={16} className="text-blue-600" />
                        </motion.a>
                        <motion.a
                          href="tel:+48123456789"
                          className="w-8 h-8 rounded-lg bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <PhoneIcon size={16} className="text-green-600" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-slate-500">
                    <div className="flex items-center space-x-1">
                      <CheckCircleIcon size={12} className="text-green-500" />
                      <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircleIcon size={12} className="text-green-500" />
                      <span>RODO</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircleIcon size={12} className="text-green-500" />
                      <span>Poufne</span>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
          

        </div>
      </motion.div>
    </section>;
};
export default ContactSection;