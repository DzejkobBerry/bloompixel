import React from 'react';
import { ServiceData } from '../../types';
import ServiceCard from '../ui/ServiceCard';

const Services: React.FC = () => {
  const services: ServiceData[] = [
    {
      id: "epoxy-coatings",
      title: "Powłoki epoksydowe",
      description: "Trwała ochrona lakieru na lata. Powłoki epoksydowe zapewniają wyjątkową odporność na zarysowania i czynniki atmosferyczne.",
      icon: "fas fa-shield-alt",
      price: "od 1500 zł",
      featured: true
    },
    {
      id: "paint-polishing",
      title: "Polerowanie lakieru",
      description: "Profesjonalne polerowanie usuwa zarysowania i przywraca pierwotny blask lakieru. Używamy najlepszych past i maszyn.",
      icon: "fas fa-magic",
      price: "od 400 zł"
    },
    {
      id: "interior-cleaning",
      title: "Czyszczenie wnętrza",
      description: "Kompleksowe czyszczenie i odświeżanie wnętrza pojazdu. Usuwamy plamy, zapachy i przywracamy świeżość.",
      icon: "fas fa-couch",
      price: "od 200 zł"
    },
    {
      id: "pdr-dent-removal",
      title: "Usuwanie wgnieceń PDR",
      description: "Bezinwazyjna metoda usuwania wgnieceń bez konieczności lakierowania. Szybko i skutecznie.",
      icon: "fas fa-hammer",
      price: "od 150 zł"
    },
    {
      id: "graphene-coatings",
      title: "Powłoki grafenowe",
      description: "Najnowsza technologia ochrony lakieru. Powłoki grafenowe oferują niezrównaną trwałość i hydrofobowość.",
      icon: "fas fa-atom",
      price: "od 2000 zł",
      featured: true
    },
    {
      id: "ceramic-coatings",
      title: "Powłoki ceramiczne",
      description: "Długotrwała ochrona lakieru z efektem samoczyszczenia. Idealne dla wymagających klientów.",
      icon: "fas fa-gem",
      price: "od 1200 zł"
    },
    {
      id: "seat-cleaning",
      title: "Czyszczenie tapicerki",
      description: "Profesjonalne czyszczenie siedzeń tekstylnych i skórzanych. Usuwamy plamy i przywracamy świeżość.",
      icon: "fas fa-chair",
      price: "od 100 zł"
    },
    {
      id: "leather-treatment",
      title: "Pielęgnacja skóry",
      description: "Kompleksowa pielęgnacja elementów skórzanych. Czyszczenie, odżywianie i impregnacja.",
      icon: "fas fa-hand-holding-heart",
      price: "od 180 zł"
    },
    {
      id: "engine-bay-cleaning",
      title: "Czyszczenie komory silnika",
      description: "Bezpieczne i skuteczne czyszczenie komory silnika. Przywracamy estetyczny wygląd i ułatwiamy serwis.",
      icon: "fas fa-cog",
      price: "od 120 zł"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nasze usługi</h2>
          <p className="section-subtitle">
            Kompleksowa oferta detailingu samochodowego dostosowana do Twoich potrzeb
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              service={service}
            />
          ))}
        </div>
        
        <div className="services-cta">
          <p>Nie znalazłeś tego czego szukasz?</p>
          <a href="#contact" className="btn btn-primary">
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;