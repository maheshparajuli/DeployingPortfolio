import React from 'react';
import './Pages.css';
import { useEffect } from 'react';

const Papers = () => {
  // Add this to each page component
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <section className="page fade-in">
      <h2>Research Papers</h2>
      <h3>Updating...</h3>
      {/* <ul> */}
        {/* <li>Mathematical Framework for Pneumonia Detection in X-Rays</li> */}
        {/* <li>Traffic Optimization using LSTM Networks</li> */}
      {/* </ul> */}
    </section>
  );
};

export default Papers;
