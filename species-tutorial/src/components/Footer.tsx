import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{
      background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
      color: '#FFD700',
      textAlign: 'center',
      padding: '2rem',
      marginTop: 'auto'
    }}>
      <p style={{ margin: 0, fontSize: '0.9rem' }}>
        © 2024 Species Tutorial. Alle rechten voorbehouden. | Ontwikkeld voor educatieve doeleinden
      </p>
    </footer>
  );
};

export default Footer;
