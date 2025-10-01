import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '2rem'
    }}>
      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #F3E9DC 0%, #C08552 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        border: '4px solid #5E3023'
      }}>
        {/* Custom Species Tutorial Logo */}
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 80 80" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#C08552', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#895737', stopOpacity:1}} />
            </linearGradient>
          </defs>
          
          {/* Main DNA helix structure */}
          <g transform="translate(40,40)">
            {/* Left strand */}
            <path 
              d="M-20,-25 Q-20,-15 -20,-5 Q-20,5 -20,15 Q-20,25" 
              stroke="url(#mainGradient)" 
              strokeWidth="4" 
              fill="none"
            />
            
            {/* Right strand */}
            <path 
              d="M20,-25 Q20,-15 20,-5 Q20,5 20,15 Q20,25" 
              stroke="url(#mainGradient)" 
              strokeWidth="4" 
              fill="none"
            />
            
            {/* Connecting bars */}
            <line x1="-20" y1="-20" x2="20" y2="-20" stroke="#5E3023" strokeWidth="3"/>
            <line x1="-20" y1="-10" x2="20" y2="-10" stroke="#5E3023" strokeWidth="3"/>
            <line x1="-20" y1="0" x2="20" y2="0" stroke="#5E3023" strokeWidth="3"/>
            <line x1="-20" y1="10" x2="20" y2="10" stroke="#5E3023" strokeWidth="3"/>
            <line x1="-20" y1="20" x2="20" y2="20" stroke="#5E3023" strokeWidth="3"/>
          </g>
          
          {/* Decorative elements */}
          <circle cx="15" cy="15" r="3" fill="#C08552"/>
          <circle cx="65" cy="15" r="3" fill="#C08552"/>
          <circle cx="15" cy="65" r="3" fill="#895737"/>
          <circle cx="65" cy="65" r="3" fill="#895737"/>
        </svg>
      </div>
    </div>
  );
};

export default Logo;
