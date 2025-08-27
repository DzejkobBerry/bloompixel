import React from 'react';
import { GalleryItem } from '../../types';

const Gallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      src: "assets/images/gallery/project1.jpg",
      alt: "Detailing BMW",
      title: "BMW M3",
      subtitle: "Powłoka ceramiczna"
    },
    {
      id: "2",
      src: "assets/images/gallery/project2.jpg",
      alt: "Detailing Audi",
      title: "Audi RS6",
      subtitle: "Korekta lakieru"
    },
    {
      id: "3",
      src: "assets/images/gallery/project3.jpg",
      alt: "Detailing Mercedes",
      title: "Mercedes AMG",
      subtitle: "Powłoka grafenowa"
    },
    {
      id: "4",
      src: "assets/images/gallery/project4.jpg",
      alt: "Detailing Porsche",
      title: "Porsche 911",
      subtitle: "Pełny detailing"
    }
  ];

  const handleGalleryClick = () => {
    // Initialize lightbox for first image
    const firstImage = document.querySelector('.gallery-item img') as HTMLImageElement;
    if (firstImage) {
      firstImage.click();
    }
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Galeria</h2>
          <p className="section-subtitle">
            Zobacz efekty naszej pracy
          </p>
        </div>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  data-lightbox="gallery"
                  data-title={`${item.title} - ${item.subtitle}`}
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className="gallery-icon">
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-cta">
          <button 
            className="btn btn-primary"
            onClick={handleGalleryClick}
          >
            Zobacz więcej projektów
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;