import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container fade-in">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="stroke-text">JB</span> SNYDER
        </h1>
        <p className="hero-subtitle">Muralist & Abstract Artist</p>
        <div className="hero-accents">
          <span className="accent-bar magenta"></span>
          <span className="accent-bar cyan"></span>
          <span className="accent-bar yellow"></span>
        </div>
      </div>
      <div className="scroll-indicator">
        <p>Explore</p>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
};

export default Hero;
