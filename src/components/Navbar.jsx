import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">Mahesh Parajuli</h1>
        <div className="logo-underline"></div>
      </div>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <span className="nav-text">Home</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">
            <span className="nav-text">About</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === '/projects' ? 'active' : ''}>
          <Link to="/projects">
            <span className="nav-text">Projects</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === '/papers' ? 'active' : ''}>
          <Link to="/papers">
            <span className="nav-text">Papers</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact">
            <span className="nav-text">Contact</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;