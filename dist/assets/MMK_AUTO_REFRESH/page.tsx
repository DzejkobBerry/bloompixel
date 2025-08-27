import React, { useEffect } from 'react';
import {
  Preloader,
  Header,
  Hero,
  About,
  Services,
  Gallery,
  Testimonials,
  Partners,
  Contact,
  Footer,
  BackToTop,
  ScrollSpy,
  ParticleSystem
} from './components';
import { NavigationItem } from './types';
import { useScrollAnimations } from './hooks/useScrollAnimations';

const App: React.FC = () => {
  const navigationItems: NavigationItem[] = [
    { href: '#hero', label: 'Start' },
    { href: '#about', label: 'O nas' },
    { href: '#services', label: 'Usługi' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#testimonials', label: 'Opinie' },
    { href: '#contact', label: 'Kontakt' }
  ];

  // Initialize scroll animations
  useScrollAnimations();

  useEffect(() => {
    // Initialize Lightbox
    if (typeof window !== 'undefined' && (window as any).lightbox) {
      (window as any).lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': 'Zdjęcie %1 z %2'
      });
    }
  }, []);

  return (
    <div className="App">
      <Preloader />
      <Header navigationItems={navigationItems} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      
      <Footer navigationItems={navigationItems} />
      <BackToTop />
      <ScrollSpy />
      
      {/* Particle systems for different sections */}
      <ParticleSystem containerId="hero" particleCount={30} />
      <ParticleSystem containerId="services" particleCount={20} />
    </div>
  );
};

export default App;