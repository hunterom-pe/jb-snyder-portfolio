import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Parallax calculations
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);
  
  // Neon accents slight parallax
  const xAccent = useTransform(x, [-300, 300], [-20, 20]);
  const yAccent = useTransform(y, [-300, 300], [-20, 20]);

  const handleMouseMove = (event) => {
    // Map mouse position to center of screen
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <section className="hero-container fade-in" onMouseMove={handleMouseMove}>
      <motion.div 
        className="hero-content"
        style={{ perspective: 1000 }}
      >
        <motion.h1 
          className="hero-title"
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="stroke-text">JB</span> SNYDER
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Muralist & Abstract Artist
        </motion.p>
        
        <motion.div 
          className="hero-accents"
          style={{ x: xAccent, y: yAccent }}
        >
          <span className="accent-bar magenta"></span>
          <span className="accent-bar cyan"></span>
          <span className="accent-bar yellow"></span>
        </motion.div>
      </motion.div>

      <div className="scroll-indicator">
        <p>Explore</p>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
};

export default Hero;
