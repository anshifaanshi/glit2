
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Header */}
      <header>
        <div>
          GLINT<span style={{ color: "green" }}>.</span>
        </div>

        <div onClick={toggleMenu}>
          &#9776; {/* Hamburger */}
        </div>
      </header>

      {/* Dropdown menu */}
      {menuOpen && (
        <div>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <br />
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <br />
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <br />
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
