import React from 'react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="hero" style={{
      background: 'linear-gradient(135deg, #ff8a50 0%, #da1b60 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container" style={{
        textAlign: 'center',
        color: 'white',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          fontWeight: 'bold'
        }}>
          🍂 Species Tutorial
        </h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          opacity: 0.9,
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6'
        }}>
          Leer hoe je een complete drag-and-drop canvas applicatie bouwt met React, TypeScript en moderne web technologieën. 
          Ontdek de DropPack project structuur en implementeer elke stap zelf.
        </p>
        <div className="cta-buttons" style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button 
            className="btn btn-primary"
            onClick={() => setActiveSection('tutorial')}
            style={{
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: 'white',
              color: '#8B4513',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            🚀 Start Tutorial
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => setActiveSection('code')}
            style={{
              padding: '1rem 2rem',
              border: '2px solid white',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            👀 Bekijk Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
