import React, { useState } from 'react';
import './HeroSection.css'; // CSS file for styling
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url('https://i.postimg.cc/DfPSJqSL/freepik-the-style-is-candid-image-photography-with-natural-1538.png')`
      }}
    >
      <div className="hero-overlay">
        <header className="hero-header">
          <div className="welcome-text">WELCOME TO GLINT</div>
          <div className="menu-icon" onClick={toggleMenu}>
            MENU <span className="hamburger">&#9776;</span>
          </div>
        </header>

       <div className="dropdown-menu">
  <button
    className="dropdown-item"
    onClick={() => {
      document.getElementById('home-section').scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }}
  >
    Home
  </button>

  <button
    className="dropdown-item"
    onClick={() => {
      document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }}
  >
    About
  </button>

  <button
    className="dropdown-item"
    onClick={() => {
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }}
  >
    Contact
  </button>

  <button
    className="dropdown-item"
    onClick={() => {
      document.getElementById('portfolio-section').scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }}
  >
    Portfolio
  </button>
</div>

      

        <div className="hero-content">
          <h1>
            We are a creative group of people who design influential brands and digital experiences.
          </h1>
          <div className="hero-buttons">
            <button className="hero-button">START A PROJECT</button>
            <button className="hero-button">MORE ABOUT US</button>
          </div>
        </div>

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
