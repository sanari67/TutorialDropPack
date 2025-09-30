import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>DropPack Canvas</h1>
      <div className="profile-section">
        <div className="profile-icon">AM</div>
        <span>Account Manager</span>
      </div>
    </nav>
  );
};

export default Navbar;

