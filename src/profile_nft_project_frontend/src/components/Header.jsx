import React, { useState } from 'react';
import { Menu, FileText } from 'lucide-react';
import './Header.scss';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo-section">
            <div className="logo-icon">
              <FileText size={20} color="white" />
            </div>
            <span className="logo-text">TenderHub</span>
          </div>

          <nav className="nav-desktop">
            <a href="#home" className="nav-link">Home</a>
            <a href="#tenders" className="nav-link">Tenders</a>
            <a href="#funding" className="nav-link">Funding</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="auth-buttons-desktop">
            <button className="btn-login">Login</button>
            <button className="btn-register">Register</button>
          </div>

          <div className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <Menu size={24} />
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>Home</a>
        <a href="#tenders" className="mobile-nav-link" onClick={closeMobileMenu}>Tenders</a>
        <a href="#funding" className="mobile-nav-link" onClick={closeMobileMenu}>Funding</a>
        <a href="#how-it-works" className="mobile-nav-link" onClick={closeMobileMenu}>How It Works</a>
        <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</a>
        <div className="mobile-auth-buttons">
          <button className="btn-login" onClick={closeMobileMenu}>Login</button>
          <button className="btn-register" onClick={closeMobileMenu}>Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
