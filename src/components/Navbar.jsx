// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" onClick={closeMobileMenu}>
          <h1 className="logo">Mahesh Parajuli</h1>
        </Link>
        <div className="logo-underline"></div>
      </div>

      {/* Hamburger Button */}
      <button
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/" onClick={closeMobileMenu}>
            <span className="nav-text">Home</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about" onClick={closeMobileMenu}>
            <span className="nav-text">About</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects" onClick={closeMobileMenu}>
            <span className="nav-text">Projects</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === "/papers" ? "active" : ""}>
          <Link to="/papers" onClick={closeMobileMenu}>
            <span className="nav-text">Papers</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact" onClick={closeMobileMenu}>
            <span className="nav-text">Contact</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
      </ul>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;



