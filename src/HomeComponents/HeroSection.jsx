import React, { useState } from 'react';
import './HeroSection.css'; // CSS file for styling
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close dropdown after clicking
  };

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url('https://i.postimg.cc/DfPSJqSL/freepik-the-style-is-candid-image-photography-with-natural-1538.png')`
      }}
    >
      <div className="hero-overlay">
        {/* Header/Menu */}
        <div className="hero-header">
          <div className="welcome-text">WELCOME TO GLINT</div>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? 'CLOSE MENU ✖' : 'MENU ☰'}
          </div>
        </div>

        {/* Dropdown Menu (Toggle) */}
       
 {menuOpen && (
        <div className="dropdown-menu">
          <Link to="/" className="dropdown-item" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="dropdown-item" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="dropdown-item" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/portfolio" className="dropdown-item" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>
        </div>
      )}
        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            We are a creative group of people who design influential brands and digital experiences.
          </h1>
          <div className="hero-buttons">
            <button className="hero-button" onClick={() => scrollToSection('portfolio-section')}>START A PROJECT</button>
            <button className="hero-button" onClick={() => scrollToSection('about-section')}>MORE ABOUT US</button>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="#" className="social-icon">f</a>
          <a href="#" className="social-icon">t</a>
          <a href="#" className="social-icon">i</a>
          <a href="#" className="social-icon">Be</a>
          <a href="#" className="social-icon">D</a>
        </div>

        <div className="scroll-down">SCROLL DOWN</div>
      </div>
    </div>
  );
};

export default HeroSection;
