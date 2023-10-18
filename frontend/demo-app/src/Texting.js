import './App.css'
import React from "react"; 
import {  createTheme, ThemeProvider } from "@mui/material";
import AuthChecker from './API/Auth';
import CreateHotel from './API/CreateHotel';
import SignUpForm from './API/SignUpForm';
import SignInForm from './API/SignInForm'
const theme = createTheme();

const Texting = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AuthChecker/>
           <SignUpForm/>
           <SignInForm/>
          <CreateHotel/>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

export default Texting;
