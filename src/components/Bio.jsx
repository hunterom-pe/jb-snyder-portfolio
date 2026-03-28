import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <section className="bio-section fade-in">
      <div className="bio-container">
        <div className="bio-content">
          <h2>About The Artist</h2>
          <div className="underline magenta-glow"></div>
          <p className="bio-text">
            JB Snyder is an abstract expressionist and muralist based in Phoenix, Arizona. 
            His work is characterized by energetic linework, bold geometric structures, and vibrant explosions of color that often resemble topological webs or modern stained-glass mosaics. 
            Blending the raw intensity of street art with complex structural networks, JB's art creates infinite connections and undeniable movement on the canvas.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/jb_snyder" target="_blank" rel="noopener noreferrer" className="social-btn">
              Follow on Instagram
            </a>
            <a href="mailto:JBSnyderart@gmail.com" className="social-btn outline">
              Contact
            </a>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} JB Snyder Art. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Bio;
