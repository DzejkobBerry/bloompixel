import React from 'react';
import { TimelineItem, CounterData } from '../../types';
import CounterItem from '../ui/CounterItem';
import TimelineComponent from '../ui/TimelineItem';

const About: React.FC = () => {
  const counters: CounterData[] = [
    { value: 8, label: "Lat doświadczenia", suffix: "+" },
    { value: 500, label: "Zadowolonych klientów", suffix: "+" },
    { value: 15, label: "Certyfikatów", suffix: "" },
    { value: 1200, label: "Zrealizowanych projektów", suffix: "+" }
  ];

  const timelineItems: TimelineItem[] = [
    {
      year: "2016",
      title: "Początek przygody",
      description: "Założenie firmy i pierwsze kroki w branży detailingu"
    },
    {
      year: "2018",
      title: "Rozwój usług",
      description: "Rozszerzenie oferty o powłoki ceramiczne i grafenowe"
    },
    {
      year: "2020",
      title: "Nowa lokalizacja",
      description: "Otwarcie nowoczesnego studia detailingu"
    },
    {
      year: "2022",
      title: "Certyfikacje",
      description: "Uzyskanie certyfikatów od wiodących producentów"
    },
    {
      year: "2024",
      title: "Lider rynku",
      description: "Uznanie jako jeden z najlepszych w regionie"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">O nas</h2>
          <p className="section-subtitle">
            Poznaj historię i doświadczenie MMK AUTO REFRESH
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-info">
            <div className="owner-info">
              <div className="owner-image">
                <img src="assets/images/owner.jpg" alt="Właściciel MMK AUTO REFRESH" />
              </div>
              <div className="owner-details">
                <h3>Michał Kowalski</h3>
                <p className="owner-title">Założyciel i główny detailer</p>
                <p className="owner-description">
                  Z pasją do motoryzacji od najmłodszych lat. Specjalizuję się w profesjonalnym 
                  detailingu samochodowym, łącząc tradycyjne metody z najnowszymi technologiami. 
                  Każdy projekt traktuję indywidualnie, dbając o najdrobniejsze szczegóły.
                </p>
                
                <div className="certifications">
                  <h4>Certyfikaty i szkolenia:</h4>
                  <ul>
                    <li>Certyfikat Gyeon - powłoki ceramiczne</li>
                    <li>Szkolenie Rupes - polerowanie</li>
                    <li>Certyfikat Koch Chemie - chemia detailingowa</li>
                    <li>Szkolenie PDR - usuwanie wgnieceń</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="counters">
              {counters.map((counter, index) => (
                <CounterItem 
                  key={index}
                  value={counter.value}
                  label={counter.label}
                  suffix={counter.suffix}
                />
              ))}
            </div>
          </div>
          
          <div className="about-timeline">
            <h3>Nasza historia</h3>
            <TimelineComponent items={timelineItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;