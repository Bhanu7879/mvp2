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
    quote: `“Working with BuildYourMVP was a game-changer for our startup. Their team took our concept and transformed it into a fully functional software solution. Their collaborative approach and expertise in technical development ensured a seamless process from start to finish. We were able to focus on building our business strategy while they handled the tech execution. Highly recommended! Mark Williams, CEO, TechInnovators”`,
  },
  {
    id: 2,
    avatar: avatar2, // Replace with the actual path to the avatar image
    quote: `“BuildYourMVP exceeded our expectations in every way. From the initial discussions to the final product, their team demonstrated professionalism, innovation, and a deep understanding of our industry. They turned our complex ideas into an elegant software solution that perfectly aligned with our vision. Their attention to detail and commitment to quality are truly commendable - Alex Carter, Founder, InnovateNow”`,
  },
  {
    id: 3,
    avatar: avatar3, // Replace with the actual path to the avatar image
    quote: `“As a startup with limited technical resources, partnering with BuildYourMVP was the best decision we made. Their agile development approach and transparent communication made the process smooth and efficient. The team's expertise and dedication were evident in every step of the project. They not only built our MVP but also provided valuable insights that helped us refine our concept. A big thank you to the BuildMyMVP team! - Sarah Johnson, Co-Founder, FineOne”`,
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
Quoting some client expriences for you ...      </p>
    </div>
      {cardData.map((card) => (
        <Grid key={card.id} item xs={12} sm={4}> {/* Use xs={12} and sm={4} to make sure they stay in one row */}
          <div className="card-container">
            <img src={card.avatar} alt="Avatar" className="avatar" />
            <p className="quote">{card.quote}</p>
            <h5 className="responsive-heading2">
         {/* Add your heading here */}
         With BuildYourMvp
       </h5>
          </div>
       
        </Grid>
      ))}
    </Grid>
  );
};

export default Testimonial;
