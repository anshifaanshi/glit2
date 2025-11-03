// Header.jsx
// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="hero-header">
      <div className="welcome-text">WELCOME TO GLINT</div>
      <div className="menu-icon" onClick={toggleMenu}>
        MENU <span className="hamburger">&#9776;</span>
      </div>

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
    </header>
  );
};

export default Header;
