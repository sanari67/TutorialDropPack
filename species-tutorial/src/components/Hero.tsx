import React from 'react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Species Tutorial
        </h1>
        <p>
          Leer hoe je een complete drag-and-drop canvas applicatie bouwt met React, TypeScript en moderne web technologieën. 
          Ontdek de project structuur en implementeer elke stap zelf.
        </p>
        <div className="cta-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => setActiveSection('tutorial')}
          >
            Start Tutorial
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => setActiveSection('code')}
          >
            Bekijk Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
