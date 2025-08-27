'use client';

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

const MainContent = () => {
  return (
    <>
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
    </>
  );
};

export default MainContent;