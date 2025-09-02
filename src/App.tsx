import React, { useEffect, useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import ServicesSection from './components/Services/ServicesSection';
import AboutSection from './components/About/AboutSection';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import BlogSection from './components/Blog/BlogSection';
import PricingSection from './components/Pricing/PricingSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Layout/Footer';
import TechStackSection from './components/TechStack/TechStackSection';
import LoadingScreen from './components/UI/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
export function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading assets
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  return <AnimatePresence mode="wait">
      {isLoading ? <LoadingScreen key="loading" /> : <div key="content" className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white font-sans overflow-x-hidden">
          <div className="noise-overlay"></div>
          <Navbar />
          <main>
            <Hero />
            <AboutSection />
            <ServicesSection />
            <TechStackSection />
            <PortfolioSection />
            <TestimonialsSection />
            <PricingSection />
            <BlogSection />
            <ContactSection />
          </main>
          <Footer />
        </div>}
    </AnimatePresence>;
}