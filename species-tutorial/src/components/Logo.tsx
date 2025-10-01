import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#F3E9DC'
    }}>
      {/* Logo icon */}
      <div style={{
        width: '40px',
        height: '40px',
        background: 'linear-gradient(135deg, #C08552 0%, #895737 100%)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}>
        {/* Scientific/Research icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {/* Microscope base */}
          <circle cx="12" cy="18" r="2" fill="#F3E9DC"/>
          <rect x="10" y="16" width="4" height="2" fill="#F3E9DC"/>
          
          {/* Microscope body */}
          <rect x="11" y="12" width="2" height="4" fill="#F3E9DC"/>
          
          {/* Microscope head */}
          <circle cx="12" cy="10" r="1.5" fill="#5E3023" stroke="#F3E9DC" strokeWidth="1"/>
          
          {/* Magnification lines */}
          <path d="M8 8L10 6M16 8L14 6M8 12L10 14M16 12L14 14" stroke="#F3E9DC" strokeWidth="1" strokeLinecap="round"/>
          
          {/* DNA helix */}
          <path d="M6 4C6 4 8 6 8 8M18 4C18 4 16 6 16 8" stroke="#F3E9DC" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      
      {/* Logo text */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.2'
      }}>
        <span style={{
          fontSize: '1.2rem',
          fontWeight: '700',
          color: '#F3E9DC'
        }}>
          Species
        </span>
        <span style={{
          fontSize: '0.9rem',
          fontWeight: '500',
          color: '#C08552'
        }}>
          Tutorial
        </span>
      </div>
    </div>
  );
};

export default Logo;
