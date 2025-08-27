'use client';

import { useState } from 'react';
import { portfolioItems } from '@/data/portfolio';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
}

const categories = [
  { id: 'all', name: 'Wszystkie' },
  { id: 'websites', name: 'Strony WWW' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'landing', name: 'Landing Pages' }
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(6);

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleItems);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleItems(6);
  };

  const loadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Moje portfolio</h2>
          <p className="section-subtitle">Projekty, które stworzyłem dla moich klientów</p>
        </div>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {displayedItems.map((item, index) => (
            <div 
              key={item.id} 
              className="portfolio-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="portfolio-item-inner">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-tags">
                    {item.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="portfolio-overlay"></div>
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio-links">
                    {item.link ? (
                      <a href={item.link} className="btn btn-outline portfolio-link" target="_blank" rel="noopener noreferrer">
                        Zobacz szczegóły
                      </a>
                    ) : (
                      <button className="btn btn-outline portfolio-link">
                        Zobacz szczegóły
                      </button>
                    )}
                    <button className="portfolio-preview">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-progress-container">
          <div className="portfolio-progress-label">
            Wyświetlane: <span id="portfolio-progress-count">{displayedItems.length}</span> z <span id="portfolio-progress-total">{filteredItems.length}</span>
          </div>
          <div className="portfolio-progress-bar">
            <div 
              className="portfolio-progress-fill"
              style={{ width: `${(displayedItems.length / filteredItems.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {displayedItems.length < filteredItems.length && (
          <div className="portfolio-more">
            <button onClick={loadMore} className="btn btn-primary">
              Zobacz więcej projektów
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .portfolio {
          padding: 120px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
        }
        
        .portfolio::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .section-header h2 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
          line-height: 1.2;
        }
        
        .section-subtitle {
          font-size: 1.25rem;
          color: #b0b0b0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .portfolio-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 12px 24px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: #b0b0b0;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .filter-btn:hover,
        .filter-btn.active {
          color: #ffffff;
          border-color: #7877c6;
          background: linear-gradient(135deg, #7877c6 0%, #ff77c6 100%);
          box-shadow: 0 10px 25px rgba(120, 119, 198, 0.4);
        }
        
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 60px;
        }
        
        .portfolio-item {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .portfolio-item-inner {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }
        
        .portfolio-item-inner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7877c6 0%, #ff77c6 100%);
          border-radius: 20px 20px 0 0;
        }
        
        .portfolio-item-inner:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(120, 119, 198, 0.3);
          border-color: rgba(120, 119, 198, 0.5);
        }
        
        .portfolio-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .portfolio-item-inner:hover .portfolio-image img {
          transform: scale(1.05);
        }
        
        .portfolio-tags {
          position: absolute;
          top: 15px;
          left: 15px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          z-index: 2;
        }
        
        .portfolio-tags span {
          background: rgba(120, 119, 198, 0.9);
          color: #ffffff;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(120, 119, 198, 0.8), rgba(255, 119, 198, 0.8));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        
        .portfolio-item-inner:hover .portfolio-overlay {
          opacity: 1;
        }
        
        .portfolio-info {
          padding: 20px;
        }
        
        .portfolio-info h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 8px;
        }
        
        .portfolio-info p {
          color: #b0b0b0;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 15px;
        }
        
        .portfolio-links {
          display: flex;
          gap: 10px;
        }
        
        .portfolio-links a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }
        
        .portfolio-links a:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(120, 119, 198, 0.3);
        }
        
        .portfolio-links a i {
          font-size: 0.9rem;
        }
        
        .portfolio-preview {
          position: absolute;
          bottom: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          border: none;
          border-radius: 50%;
          color: #ffffff;
          font-size: 1.2rem;
          cursor: pointer;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          z-index: 3;
        }
        
        .portfolio-item-inner:hover .portfolio-preview {
          opacity: 1;
          transform: translateY(0);
        }
        
        .portfolio-preview:hover {
          transform: scale(1.05);
        }
        
        .portfolio-progress-container {
          margin-bottom: 3rem;
        }
        
        .portfolio-progress-label {
          text-align: center;
          color: var(--light-secondary);
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }
        
        .portfolio-progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .portfolio-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--violet-primary), var(--pink-primary));
          transition: width 0.3s ease;
        }
        
        .portfolio-more {
          text-align: center;
        }
        
        .portfolio-progress {
          margin-top: 40px;
          text-align: center;
        }
        
        .portfolio-progress p {
          color: #b0b0b0;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }
        
        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #7877c6, #ff77c6);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        
        .load-more {
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          color: #ffffff;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .load-more:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(120, 119, 198, 0.3);
        }
        
        @media (max-width: 768px) {
          .portfolio {
            padding: 6rem 0;
          }
          
          .section-header h2 {
            font-size: 3.2rem;
          }
          
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .portfolio-filters {
            gap: 8px;
          }
          
          .filter-btn {
            padding: 1rem 1.8rem;
            font-size: 1.2rem;
          }
          
          .portfolio-info {
            padding: 15px;
          }
          
          .portfolio-info h3 {
            font-size: 1.1rem;
          }
          
          .portfolio-info p {
            font-size: 0.85rem;
          }
          
          .portfolio-links {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}