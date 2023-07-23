import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll';
//import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


import logo from '../assets/logo.svg'
import './TopAppBar.css';

const pages = ['WHO ARE WE?', 'PORTFOLIOS', 'TESTIMONIALS','CONTACT US'];
const settings = ['WHO ARE WE?', 'PORTFOLIOS', 'TESTIMONIALS', 'CONTACT US'];

function TopAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const toolbarStyle = {
    backgroundColor: 'white',
    // Add other styles as needed
  };
  const ScrollLink = styled(MenuItem)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f2f2f2',
    },
  }));

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      handleCloseNavMenu();
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="xl" style={toolbarStyle} sx={{ height: '78px', width: '100%' }}>
        <Toolbar disableGutters >
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
         
          <img src={logo} alt="logo" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 , height:'85px', width:'100%'}} className="logo"/>
         
         ?

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } , justifyContent: 'flex-end'}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
{/*               
              {pages.map((page) => (
            <MenuItem key={page} onClick={() => handleScrollToSection(page.replace(/\s/g, '').toUpperCase())}>
            <Typography textAlign="center">{page}</Typography>
                  

                </MenuItem>
              ))} */}
               {pages.map((page) => (
                <ScrollLink key={page} onClick={() => handleScrollToSection(page.replace(/\s/g, '').toUpperCase())}>
                  <Typography textAlign="center">{page}</Typography>
                </ScrollLink>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <img src={logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: 'flex-end'}}>
            {pages.map((page) => (
              <Link
                key={page}
                onClick={handleCloseNavMenu}
                activeClass="active"
                to={page.replace(/\s/g, '').toUpperCase()}

                spy={true}
                smooth={true}
                offset={-70} // Offset value for scrolling (adjust as needed)
                duration={500} // Duration of the scroll animation (adjust as needed)
                className={page === 'CONTACT US' ? 'nav-link-active' : 'nav-link'}

        
             >
                {page}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="=" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopAppBar;