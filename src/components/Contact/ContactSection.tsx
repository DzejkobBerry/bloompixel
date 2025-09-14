import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircleIcon, ClockIcon, GlobeIcon, StarIcon, ArrowRightIcon, UserIcon, MessageSquareIcon, BriefcaseIcon } from 'lucide-react';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import TypewriterText from '../UI/TypewriterText';
import ParticlesLight from '../UI/ParticlesLight';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50 relative overflow-hidden">
      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        <ParticlesLight className="opacity-60" />
        
        {/* Additional Background Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-slate-100/20 to-transparent"></div>
      </div>

      <motion.div className="container mx-auto px-4 md:px-6 relative z-10" initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.3
      }} variants={containerVariants}>
        
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            variants={itemVariants}
          >
            Gotowi na realizację Twojego projektu? Skontaktuj się z nami już dziś!
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="bg-gradient-to-br from-white/95 via-blue-50/50 to-purple-50/40 rounded-2xl shadow-2xl p-8 border border-slate-200/80 backdrop-blur-md h-fit relative overflow-hidden">
                {/* Card Background Effects */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-2xl"></div>
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
                    className="flex items-start p-4 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm"
                    whileHover={{ scale: 1.02, y: -2 }}
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
                    className="flex items-start p-4 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm"
                    whileHover={{ scale: 1.02, y: -2 }}
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
                    className="flex items-start p-4 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mr-4 shadow-lg">
                      <MapPinIcon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 mb-1 font-medium">Lokalizacja</p>
                      <p className="text-slate-900 font-semibold text-lg">
                        Kraków, Polska
                      </p>
                      <p className="text-xs text-slate-400 mt-1">Spotkania online i stacjonarne</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start p-4 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm"
                    whileHover={{ scale: 1.02, y: -2 }}
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

                {/* Social Media */}
                <div className="mt-6 pt-6 border-t border-white/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-slate-900">
                      Śledź nas
                    </h4>
                    <div className="flex items-center text-xs text-slate-500">
                      <GlobeIcon size={12} className="mr-1" />
                      Online
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <motion.a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors shadow-sm" whileHover={{
                      scale: 1.1,
                      backgroundColor: "#2563eb",
                      color: "#ffffff"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </motion.a>
                    <motion.a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-white transition-colors shadow-sm" whileHover={{
                      scale: 1.1,
                      backgroundColor: "#38bdf8",
                      color: "#ffffff"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </motion.a>
                    <motion.a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white transition-colors shadow-sm" whileHover={{
                      scale: 1.1,
                      backgroundColor: "#1d4ed8",
                      color: "#ffffff"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </motion.a>
                    <motion.a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-colors shadow-sm" whileHover={{
                      scale: 1.1,
                      background: "linear-gradient(to bottom right, #9333ea, #ec4899)",
                      color: "#ffffff"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="lg:col-span-3" variants={itemVariants}>
              <div className="bg-gradient-to-br from-white/98 via-blue-50/60 to-purple-50/50 rounded-2xl shadow-2xl p-8 border border-slate-200/70 backdrop-blur-md relative overflow-hidden">
                {/* Form Background Effects */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400/8 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-400/8 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-2 h-20 bg-gradient-to-b from-blue-400/20 to-purple-400/20 rounded-l-full"></div>
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div>
                    <motion.h3
                      className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Wyślij nam wiadomość
                    </motion.h3>
                    <motion.p
                      className="text-sm text-slate-600 flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="mr-2">✨</span>
                      Otrzymasz odpowiedź w ciągu 24 godzin
                    </motion.p>
                  </div>
                  <motion.div
                    className="hidden md:flex items-center space-x-3 bg-green-50 px-3 py-2 rounded-full border border-green-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-700">Online</span>
                    <div className="w-1 h-1 bg-green-300 rounded-full animate-ping"></div>
                  </motion.div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {isSubmitted ? (
                    <motion.div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-center mb-6 border border-green-200" initial={{
                      opacity: 0,
                      scale: 0.8
                    }} animate={{
                      opacity: 1,
                      scale: 1
                    }} transition={{
                      duration: 0.5
                    }}>
                      <CheckCircleIcon className="text-green-500 mr-2" size={20} />
                      Dziękujemy za wiadomość! Odpowiemy w ciągu 24 godzin.
                    </motion.div>
                  ) : null}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Imię</span>
                        <span className="text-red-500 ml-1">*</span>
                        <div className="ml-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                          <UserIcon size={18} className="text-slate-400" />
                        </div>
                        <motion.input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-blue-300 text-slate-900 group-hover:bg-white"
                          placeholder="Jak się nazywasz?"
                          whileFocus={{ scale: 1.02, y: -3, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                          required
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-2 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Email</span>
                        <span className="text-red-500 ml-1">*</span>
                        <div className="ml-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                          <MailIcon size={18} className="text-slate-400" />
                        </div>
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-blue-300 text-slate-900"
                          placeholder="twoj@email.com"
                          whileFocus={{ scale: 1.02, y: -3, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                          required
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Numer telefonu</span>
                        <span className="text-red-500 ml-1">*</span>
                        <div className="ml-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                          <PhoneIcon size={18} className="text-slate-400" />
                        </div>
                        <motion.input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-blue-300 text-slate-900"
                          placeholder="+48 123 456 789"
                          whileFocus={{ scale: 1.02, y: -3, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                          required
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-2 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Usługa</span>
                        <span className="text-red-500 ml-1">*</span>
                        <div className="ml-2 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                          <BriefcaseIcon size={18} className="text-slate-400" />
                        </div>
                        <motion.select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full pl-12 pr-12 py-4 border-2 border-slate-200 rounded-xl bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-blue-300 appearance-none cursor-pointer text-slate-900"
                          whileFocus={{ scale: 1.02, y: -3, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                          required
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          {services.map((service) => (
                            <option key={service.value} value={service.value} disabled={service.value === ""}>
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
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Wiadomość</span>
                      <span className="text-red-500 ml-1">*</span>
                      <div className="ml-2 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-4 pointer-events-none z-10">
                        <MessageSquareIcon size={18} className="text-slate-400" />
                      </div>
                      <motion.textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-blue-300 resize-none text-slate-900"
                        placeholder="Opowiedz nam więcej o swoim projekcie, budżecie i terminach..."
                        whileFocus={{ scale: 1.02, y: -3, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        required
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Minimum 20 znaków</p>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.div className="flex flex-col sm:flex-row gap-4 items-center">
                      <motion.div className="flex-1">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group border-2 border-white/20"
                          whileHover={{
                            scale: 1.05,
                            y: -2
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          
                          {/* Glow Effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/50 to-purple-400/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                          
                          {/* Button Content */}
                          <div className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="mr-3"
                                >
                                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                </motion.div>
                                <span className="text-lg">Wysyłanie...</span>
                              </>
                            ) : (
                              <>
                                <span className="text-lg mr-3">Wyślij Wiadomość</span>
                                <motion.div
                                  whileHover={{ x: 5 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <ArrowRightIcon size={20} />
                                </motion.div>
                              </>
                            )}
                          </div>
                        </motion.button>
                      </motion.div>
                      
                      <div className="text-center sm:text-right">
                        <p className="text-xs text-slate-500 mb-1">Odpowiadamy w ciągu</p>
                        <p className="text-sm font-semibold text-slate-700">24 godzin</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Alternative Contact Methods */}
                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-500">lub skontaktuj się przez:</span>
                    <div className="flex space-x-3">
                      <motion.a
                        href="mailto:contact@bloompixel.pl"
                        className="w-8 h-8 rounded-lg bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MailIcon size={16} className="text-blue-600" />
                      </motion.a>
                      <motion.a
                        href="tel:+48123456789"
                        className="w-8 h-8 rounded-lg bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <PhoneIcon size={16} className="text-green-600" />
                      </motion.a>
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
    </section>
  );
};

export default ContactSection;