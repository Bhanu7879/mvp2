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
        Small and highly skilled team of tech experts<br/>
Singular aim: Provide best solutions for your idea, transforming it into a fully functioning product<br/>
Take full responsibility for shaping your idea<br/>
Shouldering software complexities, allowing focus on crucial startup aspects<br/>
Vision: Liberate clients from software implementation complexities<br/>
Provide seamless solutions, empowering focus on business strategy <br/>     </p>

      <h1 className="responsive-heading">
        {/* Add your heading here */}
       Our Process
      </h1>
      <p className="responsive-paragraph">
      <b>Requirements Gathering:</b> Through a series of collaborative meetings, we gather in-depth requirements for your project. We take the time to understand your idea and discuss its potential implementation, ensuring that we capture all critical aspects.

<br/><b>Alpha Version Finalization: </b>Based on the requirements gathered, we work closely with you to finalize the alpha version of your product. This stage ensures that we have a clear roadmap for development, taking into account your vision and goals.

<br/><b>Release Planning:</b> Once the alpha version is defined, we set up the first release date and identify the key items to be included in the release. We collaborate with you to prioritize features, ensuring an efficient and effective product launch.

<br/><b>Comprehensive Software Implementation: </b>To ensure the success of your project, we address key aspects of software implementation. Our services encompass proper design and user experience, development for web, iOS, or Android platforms, logo creation, integration of necessary API calls, and implementation of analytics for data-driven insights.
      </p>
    </div>
  );
};

export default WhoAreWe;
