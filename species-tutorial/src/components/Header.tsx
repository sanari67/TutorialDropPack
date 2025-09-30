import React from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}>
          Species Tutorial
        </a>
        <ul className="nav-links">
          <li>
            <a 
              href="#" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={activeSection === 'tutorial' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSection('tutorial'); }}
            >
              Tutorial
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={activeSection === 'code' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSection('code'); }}
            >
              Code Explorer
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
