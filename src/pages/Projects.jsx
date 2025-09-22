import React from 'react';
import './Pages.css';
import { useEffect } from 'react';

const Projects = () => {
  // Add this to each page component
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (

    <section className="page fade-in">
      <h2>Projects</h2>
      <h3>updating...</h3>

    </section>
  );
};

export default Projects;
