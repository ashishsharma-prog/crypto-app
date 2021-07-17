import React ,{useState}from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.png';
import Login from './login.js';


import "./style.css";
const Navbar = () => {
    
    
     
  return (
    <AppBar position="static">
      <Toolbar>
          
      <IconButton edge="start" color="inherit" aria-label="menu" className="menu-button">
      <img className="logo-nav" src={logo}alt="crypto logo"/>
    </IconButton>
    <Typography variant="h6" className="title-bar" >Crypto Tracker
    </Typography>
    <Typography variant="h6" className="title-currency" >Crypto Coins
    </Typography>
   
    <Typography variant="h6" className="title-exchange" >
        Exchange

    </Typography>
    <Typography variant="h6" className="title-payment">

        Payments Methods
         </Typography>
        
         <Button size = "medium"variant="contained" color="primary" className="btn-sign"  >
             LOGIN

    
        
         </Button>

         <Button size = "medium"variant="contained" color="secondary" className="btn-sign"  >

    SIGN UP
        
         </Button>
    
   
       

      </Toolbar>
    </AppBar>
  );
};
export default Navbar;