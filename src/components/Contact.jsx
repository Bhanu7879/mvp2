// Contact.js
import React from 'react';
import './Contact.css';
import homeImage from '../assets/heroImage9.jpg';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Form from './Form'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const Contact = () => {
  return (<>
   <Box sx={{ flexGrow: 1 }} id="CONTACTUS">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          
            <div className="image-overlay-container1">
           
    
      <img src={homeImage} alt="Home" className="image-overlay-background1" />


      <div className="centered-text">
     Centered text
      
      </div>
    </div>
    
        </Grid>
        <Grid item xs={6} className='form-container'>
        <Form/>
        </Grid>

        </Grid>
        </Box>
   
    </>
  );
};

export default Contact;
