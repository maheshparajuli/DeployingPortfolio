import React from 'react';
import './Pages.css';
import { useEffect } from 'react';



const Contact = () => {
  // Add this to each page component
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    
    <section className="page fade-in">
      <h2>Contact Me</h2>
      <p>Email: maheshparajuli717@gmail.com</p>
      {/* <p>LinkedIn: linkedin.com/in/myprofile</p> */}
    </section>
  );
};

export default Contact;
