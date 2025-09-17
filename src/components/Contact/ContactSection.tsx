import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircleIcon, ClockIcon, GlobeIcon, StarIcon, ArrowRightIcon, UserIcon, MessageSquareIcon, BriefcaseIcon, HelpCircle, MessageCircle, X, Copy } from 'lucide-react';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import TypewriterText from '../UI/TypewriterText';
import ParticlesLight from '../UI/ParticlesLight';
import FAQModal from './FAQModal';

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
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);

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
              <div className="bg-gradient-to-br from-white/95 via-blue-50/50 to-purple-50/40 rounded-2xl shadow-2xl p-8 border border-slate-200/80 backdrop-blur-md h-fit relative">
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
                        kontakt@bloompixel.pl
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
                        +31 634 225 355
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
                        Spijkenisse, Holandia
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
                          placeholder="+31 634 225 355"
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
                          className="w-full pl-12 pr-12 py-4 border-2 border-slate-200 rounded-xl bg-gradient-to-br from-white/95 via-blue-50/30 to-purple-50/20 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50/50 hover:via-purple-50/30 hover:to-white/95 appearance-none cursor-pointer text-slate-900 font-medium"
                          style={{
                            backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(239,246,255,0.3) 50%, rgba(250,245,255,0.2) 100%)`,
                          }}
                          whileFocus={{ 
                            scale: 1.02, 
                            y: -3, 
                            boxShadow: "0 25px 35px -5px rgba(59, 130, 246, 0.15), 0 15px 15px -5px rgba(147, 51, 234, 0.1)" 
                          }}
                          whileHover={{
                            scale: 1.01,
                            boxShadow: "0 20px 30px -5px rgba(59, 130, 246, 0.1), 0 10px 15px -5px rgba(147, 51, 234, 0.05)"
                          }}
                          required
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          {services.map((service, index) => (
                            <option 
                              key={service.value} 
                              value={service.value} 
                              disabled={service.value === ""}
                              style={{
                                background: service.value === "" 
                                  ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' 
                                  : index % 2 === 0 
                                    ? 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #e0f2fe 100%)'
                                    : 'linear-gradient(135deg, #fefefe 0%, #f8fafc 50%, #f0f4ff 100%)',
                                color: service.value === "" ? '#94a3b8' : '#1e293b',
                                padding: '12px 16px',
                                fontWeight: service.value === "" ? 'normal' : '500',
                                borderBottom: index < services.length - 1 ? '1px solid rgba(226, 232, 240, 0.5)' : 'none'
                              }}
                            >
                              {service.label}
                            </option>
                          ))}
                        </motion.select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <motion.svg 
                            className="w-5 h-5 text-slate-400 transition-colors duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ 
                              rotate: formData.service ? 180 : 0,
                              color: formData.service ? '#3b82f6' : '#94a3b8'
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
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
                      <motion.button
                        onClick={() => setEmailModalOpen(true)}
                        className="w-8 h-8 rounded-lg bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MailIcon size={16} className="text-blue-600" />
                      </motion.button>
                      <motion.button
                        onClick={() => setPhoneModalOpen(true)}
                        className="w-8 h-8 rounded-lg bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <PhoneIcon size={16} className="text-green-600" />
                      </motion.button>
                      <motion.a
                        href="https://wa.me/31634225355"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageCircle size={16} className="text-emerald-600" />
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

        {/* FAQ Button Section */}
        <motion.div 
          id="faq"
          className="max-w-6xl mx-auto mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white/95 via-blue-50/50 to-purple-50/40 rounded-2xl shadow-xl p-8 border border-slate-200/80 backdrop-blur-md relative overflow-hidden">
            {/* Card Background Effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-2xl"></div>
            
            <div className="text-center relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <HelpCircle size={16} className="text-blue-600" />
                <span className="text-blue-700 font-medium text-sm">Centrum Pomocy</span>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Masz pytania?
              </h3>
              <p className="text-slate-600 mb-6">
                Znajdź odpowiedzi na najczęściej zadawane pytania
              </p>
              
              <motion.button
                onClick={() => setIsFAQOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <HelpCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Wyświetl FAQ</span>
                <motion.div
                  className="w-2 h-2 bg-white/30 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* FAQ Modal */}
      <FAQModal isOpen={isFAQOpen} onClose={() => setIsFAQOpen(false)} />

      {/* Email Modal */}
      {emailModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEmailModalOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MailIcon size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Email kontaktowy</h3>
                </div>
                <button
                  onClick={() => setEmailModalOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">Skontaktuj się z nami przez email:</p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-lg font-mono font-semibold text-gray-900 select-all">
                    kontakt@bloompixel.pl
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('kontakt@bloompixel.pl');
                    }}
                    className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <Copy size={16} />
                    Kopiuj
                  </button>
                  <a
                    href="mailto:kontakt@bloompixel.pl"
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <MailIcon size={16} />
                    Otwórz
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Phone Modal */}
      {phoneModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPhoneModalOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <PhoneIcon size={20} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Numer telefonu</h3>
                </div>
                <button
                  onClick={() => setPhoneModalOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">Zadzwoń do nas bezpośrednio lub napisz na WhatsApp:</p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-lg font-mono font-semibold text-gray-900 select-all">
                    +31 634 225 355
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('+31 634 225 355');
                    }}
                    className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <Copy size={16} />
                    Kopiuj
                  </button>
                  <a
                    href="tel:+31634225355"
                    className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <PhoneIcon size={16} />
                    Zadzwoń
                  </a>
                  <a
                    href="https://wa.me/31634225355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default ContactSection;