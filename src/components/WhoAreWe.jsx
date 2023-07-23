// ResponsiveContainer.js
import React from 'react';
import './WhoAreWe.css';

const WhoAreWe = () => {
  return (
    <div className="responsive-container" id="WHOAREWE?">
      <h1 className="responsive-heading">
        {/* Add your heading here */}
       Who are we?
      </h1>
      <p className="responsive-paragraph">
        {/* Add your paragraph here */}
        We are an end-to-end MVP development company that will work on your product from ideation to delivery <br/>
        and support. We design an MVP to be later shaped into a full-fledged product, so the use of Agile practices <br/>
        helps us work fast, producing stable and flexible code.
      </p>
    </div>
  );
};

export default WhoAreWe;
