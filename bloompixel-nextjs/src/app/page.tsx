'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import FAQSection from '@/components/FAQSection';
import CertificatesSection from '@/components/CertificatesSection';
import Footer from '@/components/Footer';
import Preloader from '@/components/layout/Preloader';
import ParticlesBackground from '@/components/layout/ParticlesBackground';

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      <ParticlesBackground />
      <main>
        <Header />
        <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <BlogSection />
      <WhyChooseSection />
      <CertificatesSection />
      <FAQSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      </main>
    </>
  );
}
