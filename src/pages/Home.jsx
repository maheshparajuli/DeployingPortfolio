

import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section className="home">
      <div className="home-container">
        <div className="home-content fade-in">
          <div className="profile-section">
            <div className="profile-photo-wrapper">
              <div className="profile-photo-container">
                <img 
                  src="\assets\mpnaya.jpg" 
                  alt="Mahesh Parajuli" 
                  className="profile-photo"
                />
                <div className="profile-glow"></div>
                <div className="profile-ring"></div>
              </div>
            </div>
            <div className="profile-status">
              <div className="status-dot"></div>
              <span className="status-text">Available for opportunities</span>
            </div>
          </div>
          
          <div className="text-content">
            <div className="greeting">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            <h1 className="name-title">
              <span className="name-part">Mahesh</span>
              <span className="name-part">Parajuli</span>
            </h1>
            <div className="role-container">
              <span className="role-prefix">A passionate</span>
              <div className="role-animated">
                <span className="role-text active">Developer</span>
                <span className="role-text">Researcher</span>
                <span className="role-text">Problem Solver</span>
                <span className="role-text">Innovator</span>
              </div>
            </div>
            <p className="description">
              Crafting digital experiences through code and pushing the boundaries of technology 
              through research. Let's build something amazing together.
            </p>
            
            <div className="home-buttons">
              <Link 
                to="/about" 
                className="btn btn-primary"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="btn-text">About Me</span>
                <div className="btn-glow"></div>
              </Link>
              <Link 
                to="/projects" 
                className="btn btn-secondary"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="btn-text">My Projects</span>
                <div className="btn-glow"></div>
              </Link>
            </div>
            
            <div className="scroll-indicator">
              <div className="scroll-dot"></div>
              {/* <span className="scroll-text">Scroll to explore</span> */}
            </div>
          </div>
        </div>
        
        <div className="home-background">
          <div className="bg-gradient bg-gradient-1"></div>
          <div className="bg-gradient bg-gradient-2"></div>
          <div className="floating-elements">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;