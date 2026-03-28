import React from 'react';
import './Gallery.css';
import { portfolioImages } from '../data/mockData';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Selected Works</h2>
        <div className="underline cyan-glow"></div>
      </div>
      
      <div className="gallery-masonry">
        {portfolioImages.map((image) => (
          <div key={image.id} className="gallery-item fade-in">
            <img 
              src={image.url} 
              alt={image.title} 
              style={{ aspectRatio: image.aspectRatio }}
            />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <h3>{image.title}</h3>
                <span className="view-btn">View Art</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
