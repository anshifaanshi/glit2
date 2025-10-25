import React from 'react';
import './HeroSection.css'; // We'll create this CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url('https://i.postimg.cc/DfPSJqSL/freepik-the-style-is-candid-image-photography-with-natural-1538.png')` }}>
      <div className="hero-overlay">
        <header className="hero-header">
          <div className="welcome-text">WELCOME TO GLINT</div>
          <div className="menu-icon">
            MENU <span className="hamburger">&#9776;</span>
          </div>
        </header>
        <div className="hero-content">
          <h1>We are a creative group of people who design influential brands and digital experiences.</h1>
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