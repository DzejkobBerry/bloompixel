import React, { useEffect, useMemo, useState, Children, lazy, memo, Component } from 'react';
import { CodeIcon, LayoutIcon, ServerIcon, SmartphoneIcon, PenToolIcon, WrenchIcon } from 'lucide-react';
import ServiceCard from '../UI/ServiceCard';
import { motion } from 'framer-motion';
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
    title: 'Tworzenie Aplikacji Internetowych',
    description: 'Potężne, skalowalne aplikacje internetowe z solidną funkcjonalnością i intuicyjnymi interfejsami.',
    icon: <ServerIcon size={24} />,
    color: 'purple',
    features: ['Uwierzytelnianie Użytkowników', 'Integracja Baz Danych', 'Rozwój API', 'Aktualizacje w Czasie Rzeczywistym'],
    codeSnippet: `
const [data, setData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    const response = await api.get('/data');
    setData(response.data);
  };
  fetchData();
}, []);`
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
    title: 'Rozwój Mobile-First',
    description: 'Strony internetowe zoptymalizowane pod urządzenia mobilne, zapewniające świetną wydajność na smartfonach i tabletach.',
    icon: <SmartphoneIcon size={24} />,
    color: 'indigo',
    features: ['Interfejs Przyjazny Dotykowi', 'Szybkie Ładowanie', 'Możliwości Offline', 'Responsywne Obrazy'],
    codeSnippet: `
const isMobile = useMediaQuery({ maxWidth: 767 });
return (
  <div className={isMobile ? 'mobile-view' : 'desktop-view'}>
    {isMobile ? <MobileNav /> : <DesktopNav />}
    <Content />
  </div>
);`
  }, {
    title: 'Identyfikacja Wizualna',
    description: 'Rozwój spójnej identyfikacji wizualnej, w tym logo, palety kolorów i przewodników stylu.',
    icon: <PenToolIcon size={24} />,
    color: 'pink',
    features: ['Projektowanie Logo', 'Schemat Kolorów', 'Typografia', 'Wytyczne Marki'],
    codeSnippet: `
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
  --background: #0f172a;
  --text: #f8fafc;
  --font-heading: 'Montserrat';
  --font-body: 'Inter';
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
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nasze <span className="gradient-text glow-text">Usługi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg">
            Oferujemy kompleksowy zakres usług tworzenia stron internetowych i projektowania,
            aby pomóc Ci zbudować silną obecność online.
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {services.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
        </motion.div>
      </motion.div>
    </section>;
};
export default ServicesSection;