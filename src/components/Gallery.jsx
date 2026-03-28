import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Gallery.css';
import { portfolioImages } from '../data/mockData';

// Extracted Gallery Item Component to handle individual mouse tracking
const GalleryItem = ({ image, index }) => {
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    itemRef.current.style.setProperty('--mouse-x', `${x}px`);
    itemRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.a
      ref={itemRef}
      href="https://www.instagram.com/jb_snyder"
      target="_blank"
      rel="noopener noreferrer"
      className="gallery-item"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1],
        delay: (index % 3) * 0.1 // Stagger effect based on column position vaguely
      }}
    >
      <div className="glow-border" />
      <img
        src={image.url}
        alt={image.title}
        style={{ aspectRatio: image.aspectRatio }}
      />
      <div className="gallery-overlay">
        <div className="overlay-content">
          <h3>{image.title}</h3>
          <span className="view-btn">View on Instagram</span>
        </div>
      </div>
    </motion.a>
  );
};

const Gallery = () => {
  return (
    <section className="gallery-section">
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Selected Works</h2>
        <div className="underline cyan-glow"></div>
      </motion.div>

      <div className="gallery-masonry">
        {portfolioImages.map((image, i) => (
          <GalleryItem key={image.id} image={image} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
