// import React from 'react';
// import { AppBar, Toolbar, Button} from '@mui/material';

// // const useStyle = makeStyles({
// //   HeaderStyles: {
// //     margin: "0px",
// //     padding: "0px",
// //   },
// // });

// const Header = () => {
//   // const classname = useStyle();
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Button color="inherit">Home</Button>
//         <Button color="inherit">About</Button>
//         <Button color="inherit">Contact Us</Button>
//         <Button color="inherit">News and Events</Button>
//         <Button color="inherit">Faculties</Button>
//         <Button color="inherit">Updates</Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

// 


import React, { useState } from 'react';
import { AppBar,
  Toolbar,
  Typography, 
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import logo from "../component/image/logo for college.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f2f2f2'}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <div sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo" style={{ height: '60px', width: '80px', paddingTop: '7px', paddingBottom: '7px', paddingLeft: '25px'}} />
        </Typography>
        </div>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
        <Button color="inherit" sx={{ color: '#333', backgroundColor: 'transparent',
            transition: 'background-color 0.3s','&:hover': { backgroundColor:'#ADD8E6',},}}>
              Home</Button>
        <Button color="inherit" sx={{ color: '#333' ,  backgroundColor: 'transparent',
            transition: 'background-color 0.3s',
            '&:hover': { backgroundColor: '#ADD8E6',},}}>
              About</Button>
        <Button color="inherit" sx={{ color: '#333', backgroundColor: 'transparent',
            transition: 'background-color 0.3s',
            '&:hover': { backgroundColor: '#ADD8E6',},}} 
          onClick={handleMenuOpen}>
          Faculties
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
        </Menu>
        <Button color="inherit" sx={{ color: '#333', backgroundColor: 'transparent',
            transition: 'background-color 0.3s',
            '&:hover': { backgroundColor: '#ADD8E6',},}} onClick={handleMenuOpen}>
          Admissions
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
        </Menu>
        <Button color="inherit" sx={{ color: '#333',  backgroundColor: 'transparent',
            transition: 'background-color 0.3s',
            '&:hover': { backgroundColor: '#ADD8E6',},}} onClick={handleMenuOpen}>
          News & Events
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
        </Menu>
        <Button color="inherit" sx={{ color: '#333',  backgroundColor: 'transparent',
            transition: 'background-color 0.3s',
            '&:hover': { backgroundColor: '#ADD8E6',},}} onClick={handleMenuOpen}>
          Contact Us
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
        </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;