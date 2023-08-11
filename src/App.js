
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import  TopAppBar  from './components/TopAppBar';
//import  Home  from './components/Home';
import HomePage from '../src/components/HomePage'
import WhoAreWe from '../src/components/WhoAreWe'
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
   <>
      <Container maxWidth="lg" >
        <Box sx={{ bgcolor: '#F3F3F3' }} />
<TopAppBar/>
<HomePage/>
<WhoAreWe/>
{/* <Portfolio/> */}
<Box sx={{ my: 5 }}><Testimonial/></Box>
<Contact/>
<Footer/>


      </Container>
   
   </>
  );
}

export default App;
