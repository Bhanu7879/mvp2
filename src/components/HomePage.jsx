// ImageOverlay.js
import React from 'react';
import './HomePage.css';
import homeImage from '../assets/heroImage99.jpg';


const HomePage = () => {
  return (
    <div className="image-overlay-container">
            <img src={homeImage}  maxWidth="xl"/>
      <div className="image-overlay-background" />
  

      <div className="centered-text">
        {/* Add your centered text here */}
        A passionate team of young tech enthusiasts is dedicated to bringing your ideas to life.      </div>
    </div>
  );
};

export default HomePage;
