import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Bio from './components/Bio';

function App() {
  return (
    <div className="portfolio-app">
      <Hero />
      <Gallery />
      <Bio />
    </div>
  );
}

export default App;
