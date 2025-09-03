import React, { useEffect, useMemo, useState, Children, lazy, memo, Component } from 'react';
import { CodeIcon, LayoutIcon, ServerIcon, SmartphoneIcon, PenToolIcon, WrenchIcon, SearchIcon, MegaphoneIcon } from 'lucide-react';
import ServiceCard from '../UI/ServiceCard';
import { motion } from 'framer-motion';
import TypewriterText from '../UI/TypewriterText';
const ServicesSection = () => {
  const services = [{
    title: 'Tworzenie Stron Internetowych',
    description: 'Niestandardowe, responsywne strony internetowe zbudowane z nowoczesnymi technologiami, które świetnie wyglądają na wszystkich urządzeniach.',
    icon: <CodeIcon size={24} />,
    color: 'blue',
    features: ['Responsywny Design', 'Optymalizacja SEO', 'Optymalizacja Wydajności', 'Wsparcie Przeglądarek'],
    codeSnippet: `
const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};`
  }, {
    title: 'Promowanie usług',
    description: 'Kompleksowe usługi marketingowe i promocyjne - prowadzenie fanpage, rekrutacja, reklama biznesu i budowanie obecności online.',
    icon: <MegaphoneIcon size={24} />,
    color: 'purple',
    features: ['Prowadzenie FanPage', 'Rekrutacja Pracowników', 'Reklama Biznesu', 'Marketing Społecznościowy'],
    codeSnippet: `
// Facebook Pixel tracking
fbq('track', 'PageView');
fbq('track', 'Purchase', {
  value: 0.00,
  currency: 'PLN'
});
// Google Analytics
gtag('event', 'conversion', {
  'send_to': 'AW-CONVERSION_ID'
});`
  }, {
    title: 'Projektowanie UI/UX',
    description: 'Design skupiony na użytkowniku, który zwiększa użyteczność, tworząc jednocześnie piękne, angażujące interfejsy.',
    icon: <LayoutIcon size={24} />,
    color: 'cyan',
    features: ['Badania Użytkowników', 'Wireframing', 'Prototypowanie', 'Testy Użyteczności'],
    codeSnippet: `
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  <Button>Get Started</Button>
</motion.div>`
  }, {
    title: 'Pozycjonowanie SEO',
    description: 'Kompleksowa optymalizacja SEO zwiększająca widoczność w wyszukiwarkach i przyciągająca organiczny ruch.',
    icon: <SearchIcon size={24} />,
    color: 'indigo',
    features: ['Analiza Słów Kluczowych', 'Optymalizacja On-Page', 'Link Building', 'Monitoring Pozycji'],
    codeSnippet: `
<head>
  <title>Tytuł SEO | Firma</title>
  <meta name="description" content="Opis meta..." />
  <meta name="keywords" content="słowa, kluczowe" />
  <link rel="canonical" href="https://example.com" />
</head>`
  }, {
    title: 'Identyfikacja Wizualna',
    description: 'Kompleksowe projektowanie identyfikacji wizualnej marki - od logo po materiały promocyjne i obecność online.',
    icon: <PenToolIcon size={24} />,
    color: 'pink',
    features: ['Projektowanie Wizytówek', 'Projektowanie Stron WWW', 'Banery Reklamowe', 'Wizerunek Marki'],
    codeSnippet: `
/* Wizytówka CSS */
.business-card {
  width: 350px;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  color: white;
  font-family: 'Montserrat', sans-serif;
}`
  }, {
    title: 'Konsultacje Techniczne',
    description: 'Eksperckie doradztwo w zakresie wyboru technologii, architektury i najlepszych praktyk rozwoju.',
    icon: <WrenchIcon size={24} />,
    color: 'amber',
    features: ['Analiza Stosu Technologicznego', 'Audyty Wydajności', 'Przeglądy Bezpieczeństwa', 'Planowanie Skalowalności'],
    codeSnippet: `
// Performance optimization
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
// Code splitting
const LazyComponent = lazy(() => 
  import('./LazyComponent')
);`
  }];
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
  return <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-900/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-900/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
      </div>
      <div className="grid-pattern absolute inset-0 opacity-10"></div>
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
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                <TypewriterText text="Nasze" delay={500} speed={100} />
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                <TypewriterText text="Usługi" delay={1200} speed={120} />
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Oferujemy kompleksowy zakres usług tworzenia stron internetowych i projektowania,
            aby pomóc Ci zbudować silną obecność online.
          </motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {services.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
        </motion.div>
      </motion.div>
    </section>;
};
export default ServicesSection;