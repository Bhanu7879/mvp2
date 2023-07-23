// ResponsiveCard.js
import React from 'react';
import './Testimonial.css';
import Grid from '@mui/material/Grid';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const cardData = [
  {
    id: 1,
    avatar: avatar1, // Replace with the actual path to the avatar image
    quote: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.”`,
  },
  {
    id: 2,
    avatar: avatar2, // Replace with the actual path to the avatar image
    quote: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.”`,
  },
  {
    id: 3,
    avatar: avatar3, // Replace with the actual path to the avatar image
    quote: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.”`,
  },
  // Add more cards if needed
];

const Testimonial = () => {
  return (
    <Grid container spacing={2} justifyContent="center" id="TESTIMONIALS">
          <div className="responsive-container">
      <h1 className="responsive-heading">
        {/* Add your heading here */}
     Client Testimonial
      </h1>
      <p className="responsive-paragraph">
        {/* Add your paragraph here */}
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type  it to make a type specimen book.
      </p>
    </div>
      {cardData.map((card) => (
        <Grid key={card.id} item xs={12} sm={4}> {/* Use xs={12} and sm={4} to make sure they stay in one row */}
          <div className="card-container">
            <img src={card.avatar} alt="Avatar" className="avatar" />
            <p className="quote">{card.quote}</p>
            <h5 className="responsive-heading2">
         {/* Add your heading here */}
         Project Title
       </h5>
          </div>
       
        </Grid>
      ))}
    </Grid>
  );
};

export default Testimonial;
