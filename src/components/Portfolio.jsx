// ResponsiveContainer.js
import React from 'react';
import './Portfolio.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';






const Portfolio = () => {
  return (<>
  
  <div className="responsive-container" id="PORTFOLIOS">
  <h1 className="responsive-heading"> Portfolios</h1>
       <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
         <Grid item  xs={12} md={6} >
           <h1 className="responsive-heading">
        {/* Add your heading here */}
        Your Heading
      
       </h1>
       <p className="responsive-paragraph">
         {/* Add your paragraph here */}
         Your Paragraph
  </p>
       </Grid>
        <Grid item xs={12} md={6}>
          
         <h5 className="responsive-heading1">
         {/* Add your heading here */}
         Project Title
       </h5>
       <p className="responsive-paragraph">
        {/* Add your paragraph here */}
        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.”
      </p>
     </Grid>
        </Grid>
        </Box>
    
     </div>
  
  </>

    // <div className="responsive-container">
    //     <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid item  xs={12} md={6} >
    //       <Item>  <h1 className="responsive-heading">
    //     {/* Add your heading here */}
    //     Your Heading
    //   </h1>
    //   <p className="responsive-paragraph">
    //     {/* Add your paragraph here */}
    //     Your Paragraph
    //   </p></Item>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Item>
    //       <h1 className="responsive-heading">
    //     {/* Add your heading here */}
    //     Your Heading
    //   </h1>
    //   <p className="responsive-paragraph">
    //     {/* Add your paragraph here */}
    //     Your Paragraph
    //   </p></Item>
    //     </Grid>
    //     </Grid>
    //     </Box>
    
    // </div>



  );
};

export default Portfolio;
