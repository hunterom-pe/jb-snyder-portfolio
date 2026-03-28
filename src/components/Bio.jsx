import React from 'react';
import { motion } from 'framer-motion';
import './Bio.css';

const Bio = () => {
  return (
    <footer className="bio-section">
      <motion.div 
        className="bio-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bio-content">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Artist
          </motion.h2>
          <div className="underline magenta-glow"></div>
          
          <motion.p 
            className="bio-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            JB Snyder is an abstract muralist and fine artist based in the American Southwest. 
            His work is characterized by a "controlled chaos" approach, featuring 
            high-energy linework, bold geometric structures, and a signature neon-on-dark palette. 
            Drawing inspiration from urban exploration and post-graffiti aesthetics, 
            JB's pieces transform static environments into living, breathing compositions of 
            light and energy.
          </motion.p>
          
          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="https://www.instagram.com/jb_snyder" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
            >
              Instagram
            </a>
            <a href="mailto:hello@jbsnyder.com" className="social-btn outline">
              Contact JB
            </a>
          </motion.div>
        </div>
        
        <div className="footer">
          <p>&copy; 2026 JB Snyder | All Rights Reserved</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Bio;
