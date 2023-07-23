import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Footer.css';
const facebook = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
const twitter= <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
const linkedin= <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8.75708C17.5913 8.75708 19.1174 9.38922 20.2426 10.5144C21.3679 11.6397 22 13.1658 22 14.7571V21.7571H18V14.7571C18 14.2266 17.7893 13.7179 17.4142 13.3429C17.0391 12.9678 16.5304 12.7571 16 12.7571C15.4696 12.7571 14.9609 12.9678 14.5858 13.3429C14.2107 13.7179 14 14.2266 14 14.7571V21.7571H10V14.7571C10 13.1658 10.6321 11.6397 11.7574 10.5144C12.8826 9.38922 14.4087 8.75708 16 8.75708Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9.75708H2V21.7571H6V9.75708Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6.75708C5.10457 6.75708 6 5.86165 6 4.75708C6 3.65251 5.10457 2.75708 4 2.75708C2.89543 2.75708 2 3.65251 2 4.75708C2 5.86165 2.89543 6.75708 4 6.75708Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
const instagram= <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 2.75708H7C4.23858 2.75708 2 4.99566 2 7.75708V17.7571C2 20.5185 4.23858 22.7571 7 22.7571H17C19.7614 22.7571 22 20.5185 22 17.7571V7.75708C22 4.99566 19.7614 2.75708 17 2.75708Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12.1271C16.1234 12.9594 15.9813 13.8094 15.5938 14.5562C15.2063 15.303 14.5932 15.9085 13.8416 16.2868C13.0901 16.6651 12.2385 16.7967 11.4078 16.6631C10.5771 16.5294 9.80977 16.1372 9.21485 15.5423C8.61993 14.9474 8.22774 14.18 8.09408 13.3494C7.96042 12.5187 8.09208 11.667 8.47034 10.9155C8.8486 10.164 9.4542 9.55088 10.201 9.16338C10.9478 8.77588 11.7978 8.63373 12.63 8.75714C13.4789 8.88302 14.2649 9.2786 14.8717 9.88544C15.4785 10.4923 15.8741 11.2782 16 12.1271Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 7.25708H17.51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#00B4D8',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <div className="footer">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className="footer-columns">
          <Grid item xs={3} className="footer-column">
         
              <div className="footer-item">
              <p class="write"> Who are we?</p>
              <p class="write"> Portfolios </p>
              <p class="write"> Client - Testimonials</p>
         
              </div>
       
          </Grid>
          <Grid item xs={3} className="footer-column">
      
              <div className="footer-item">
              <p class="write"> Blog</p>
              <p class="write">Careers </p>
              <p class="write"> Privacy policy</p>
              <p class="write">Terms & conditions </p>
              </div>
          
          </Grid>
          <Grid item xs={3} className="footer-column">
         
              <div className="footer-item">
              <p class="write"> <b>Follow us</b> </p>
              <p class="write"><span className='icons'>{facebook}</span> Facebook </p>
              <p class="write"><span className='icons'>{twitter}</span> Twitter</p>
              <p class="write"> <span className='icons'>{linkedin}</span> LinkedIn </p>
              <p class="write"><span className='icons'>{instagram}</span>  Instagram </p>
              </div>
            
          </Grid>
          <Grid item xs={3} className="footer-column">
        
              <div className="footer-item">
              <p class="write"> <b>Contact us</b> </p>
              <p class="write"> Call (1234567890)</p>
              <p class="write"> abc@gmail.com </p>
             
              </div>
         
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
