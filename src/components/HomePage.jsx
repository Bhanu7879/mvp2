// ImageOverlay.js
import React from 'react';
import './HomePage.css';
import homeImage from '../assets/home.jpeg';


const HomePage = () => {
  return (
    <div className="image-overlay-container">
            <img src={homeImage}  maxWidth="xl"/>
      <div className="image-overlay-background" />
  

      <div className="centered-text">
        {/* Add your centered text here */}
        Your Centered Text
      </div>
    </div>
  );
};

export default HomePage;
