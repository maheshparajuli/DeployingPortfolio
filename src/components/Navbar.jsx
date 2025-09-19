// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../Navbar.css';

// const Navbar = () => {
//   const location = useLocation();

//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <h1 className="logo">Mahesh Parajuli</h1>
//         <div className="logo-underline"></div>
//       </div>
//       <ul className="nav-links">
//         <li className={location.pathname === '/' ? 'active' : ''}>
//           <Link to="/">
//             <span className="nav-text">Home</span>
//             <div className="nav-indicator"></div>
//           </Link>
//         </li>
//         <li className={location.pathname === '/about' ? 'active' : ''}>
//           <Link to="/about">
//             <span className="nav-text">About</span>
//             <div className="nav-indicator"></div>
//           </Link>
//         </li>
//         <li className={location.pathname === '/projects' ? 'active' : ''}>
//           <Link to="/projects">
//             <span className="nav-text">Projects</span>
//             <div className="nav-indicator"></div>
//           </Link>
//         </li>
//         <li className={location.pathname === '/papers' ? 'active' : ''}>
//           <Link to="/papers">
//             <span className="nav-text">Papers</span>
//             <div className="nav-indicator"></div>
//           </Link>
//         </li>
//         <li className={location.pathname === '/contact' ? 'active' : ''}>
//           <Link to="/contact">
//             <span className="nav-text">Contact</span>
//             <div className="nav-indicator"></div>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../Navbar.css';

// const Navbar = () => {
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <h1 className="logo">Mahesh Parajuli</h1>
//         <div className="logo-underline"></div>
//       </div>
      
//       {/* Mobile Menu Toggle Button */}
//       <button 
//         className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
//         onClick={toggleMobileMenu}
//         aria-label="Toggle mobile menu"
//       >
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </button>

//       {/* Navigation Links */}
//       <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
//         <li className={location.pathname === '/' ? 'active' : ''}>
//           <Link to="/" onClick={closeMobileMenu}>
//             <span className="nav-text">Home</span>
//             <div className="nav-indicator"></div>
//           </Link>
//         </li>
//         <li className={location.pathname === '/about' ? 'active' : ''}>
//           <Link to="/about" onClick={closeMobileMenu}>
//             <span className="nav-text">About</span>
//             <div className="nav-indicator"></div>
//           </Link>
//         </li>
//         <li className={location.pathname === '/projects' ? 'active' : ''}>
//           <Link to="/projects" onClick={closeMobileMenu}>
//             <span className="nav-text">Projects</span>
//             <div className="nav-indicator"></div>
//           </Link>
//         </li>
//         <li className={location.pathname === '/papers' ? 'active' : ''}>
//           <Link to="/papers" onClick={closeMobileMenu}>
//             <span className="nav-text">Papers</span>
//             <div className="nav-indicator"></div>
//           </Link>
//         </li>
//         <li className={location.pathname === '/contact' ? 'active' : ''}>
//           <Link to="/contact" onClick={closeMobileMenu}>
//             <span className="nav-text">Contact</span>
//             <div className="nav-indicator"></div>
//           </Link>
//         </li>
//       </ul>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">Mahesh Parajuli</h1>
        <div className="logo-underline"></div>
      </div>
      
      {/* Mobile Menu Toggle Button */}
      <button 
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" onClick={closeMobileMenu}>
            <span className="nav-text">Home</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about" onClick={closeMobileMenu}>
            <span className="nav-text">About</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === '/projects' ? 'active' : ''}>
          <Link to="/projects" onClick={closeMobileMenu}>
            <span className="nav-text">Projects</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === '/papers' ? 'active' : ''}>
          <Link to="/papers" onClick={closeMobileMenu}>
            <span className="nav-text">Papers</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact" onClick={closeMobileMenu}>
            <span className="nav-text">Contact</span>
            <div className="nav-indicator"></div>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;