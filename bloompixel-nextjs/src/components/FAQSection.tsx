'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Jakie technologie wykorzystujesz w swoich projektach?",
    answer: "W moich projektach wykorzystuję szeroki zakres technologii front-endowych i back-endowych. Dla front-endu są to głównie HTML5, CSS3, JavaScript (wraz z frameworkami jak React, Vue.js), a dla back-endu PHP, Node.js oraz bazy danych MySQL i MongoDB. Każdy projekt traktuję indywidualnie i dobieram technologie, które najlepiej spełnią jego wymagania."
  },
  {
    id: 2,
    question: "Jak wygląda proces tworzenia strony internetowej?",
    answer: "Proces tworzenia strony internetowej składa się z kilku kluczowych etapów: analizy wymagań, projektowania interfejsu użytkownika, kodowania, testowania i wdrożenia. Rozpoczynam od dokładnego zrozumienia potrzeb klienta, następnie tworzę projekt graficzny, który po akceptacji przekształcam w funkcjonalną stronę. Po testach i poprawkach, strona jest gotowa do publikacji."
  },
  {
    id: 3,
    question: "Ile kosztuje stworzenie strony internetowej?",
    answer: "Koszt stworzenia strony internetowej zależy od wielu czynników, takich jak złożoność projektu, liczba podstron, wymagane funkcjonalności czy termin realizacji. Proste strony wizytówkowe są tańsze niż rozbudowane platformy e-commerce czy aplikacje webowe. Każdy projekt wyceniam indywidualnie po dokładnym poznaniu wymagań klienta."
  },
  {
    id: 4,
    question: "Czy zajmujesz się również pozycjonowaniem stron (SEO)?",
    answer: "Tak, oferuję usługi związane z optymalizacją stron pod kątem wyszukiwarek (SEO). Wszystkie tworzone przeze mnie strony są budowane zgodnie z najlepszymi praktykami SEO, co obejmuje odpowiednią strukturę HTML, optymalizację prędkości ładowania, responsywność oraz przyjazne dla wyszukiwarek adresy URL. Dodatkowo, mogę przeprowadzić audyt SEO istniejącej strony i zaproponować zmiany zwiększające jej widoczność w wynikach wyszukiwania."
  },
  {
    id: 5,
    question: "Jaki jest czas realizacji projektu?",
    answer: "Czas realizacji projektu zależy od jego złożoności i zakresu prac. Prosta strona wizytówkowa może być gotowa w ciągu 1-2 tygodni, podczas gdy bardziej rozbudowane projekty, takie jak sklepy internetowe czy aplikacje webowe, mogą wymagać od 4 do 12 tygodni. Zawsze staram się dokładnie określić harmonogram prac na początku współpracy i trzymać się ustalonych terminów."
  }
];

export default function FAQSection() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="faq fade-in" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>Często zadawane <span className="highlight">pytania</span></h2>
          <p className="section-subtitle">Odpowiedzi na najczęściej zadawane pytania</p>
        </div>
        
        <div className="faq-container">
          {faqItems.map((item) => (
            <div key={item.id} className={`faq-item ${activeItem === item.id ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleItem(item.id)}>
                <h3>{item.question}</h3>
                <div className="faq-toggle">
                  {activeItem === item.id ? '−' : '+'}
                </div>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq {
          padding: 100px 0;
          background: #fff;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
        }

        .highlight {
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: #f8f9fa;
          border-radius: 15px;
          margin-bottom: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .faq-item:hover {
          border-color: #667eea;
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.1);
        }

        .faq-item.active {
          border-color: #667eea;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
        }

        .faq-question {
          padding: 25px 30px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .faq-question:hover {
          background: rgba(102, 126, 234, 0.05);
        }

        .faq-item.active .faq-question {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
        }

        .faq-question h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          flex: 1;
          padding-right: 20px;
          line-height: 1.4;
        }

        .faq-toggle {
          width: 35px;
          height: 35px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 600;
          color: #667eea;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .faq-item.active .faq-toggle {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          background: white;
        }

        .faq-item.active .faq-answer {
          max-height: 300px;
          padding: 0 30px 30px;
        }

        .faq-answer p {
          color: #666;
          line-height: 1.7;
          margin: 0;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }

        .faq-item:nth-child(odd) {
          animation: slideInLeft 0.6s ease forwards;
        }

        .faq-item:nth-child(even) {
          animation: slideInRight 0.6s ease forwards;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .faq {
            padding: 60px 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .faq-question {
            padding: 20px;
          }

          .faq-question h3 {
            font-size: 1rem;
            padding-right: 15px;
          }

          .faq-toggle {
            width: 30px;
            height: 30px;
            font-size: 1rem;
          }

          .faq-item.active .faq-answer {
            padding: 0 20px 20px;
          }

          .faq-answer p {
            padding-top: 15px;
          }
        }
      `}</style>
    </section>
  );
}