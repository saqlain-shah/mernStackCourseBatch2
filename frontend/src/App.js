import React from "react";
// import Profile from "./components/Profile";
// import Counter from "./components/Counter";
import './App.css'
// import FinalComponent from "./components/Admission/FinalComponent";
import { Box, Container } from "@mui/material";
import FlightBookingForm from "./components/formik-form/FlightBookingForm";
import LinearStepper from "./components/Formik-MultiStep-Form/components/LinearStepper/LinearStepper"
// import Component1 from "./components/ContextAPI/ContexApi"
import AppRouter from "./components/React-Router-Dom/AppRouter"
import Form from "./components/MUI-Table/Form";
// import Table from "./components/MUI-Table/Table";
import Table from "./components/React-Router-Dom/Table"
import { Routes, Route } from "react-router-dom";

import Home from "./components/React-Router-Dom/Home";
import About from "./components/React-Router-Dom/About";
import Services from "./components/React-Router-Dom/Services";
import Contact from "./components/React-Router-Dom/Contact";
import SignInForm from "./components/Api/SignIn";
import SignUpForm from "./components/Api/SignUp";
import CreateHotel from "./components/Api/CreateHotel";

import Auth from "./components/Api/Auth"

function App() {
  return (
    <React.Fragment>
      {/* <Container maxWidth="md">
        <Box sx={{ mt: 6, mb: 4 }}>

          <AppRouter />
          

        </Box>
      </Container> */}
      <Routes>
        {/* <Route path="/" Component={Home}/>
        <Route path="/About" Component={About}/>
        <Route path="/Contact" Component={Contact}/> */}
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/create-hotel" element={<CreateHotel/>}/>
        <Route path="/Login" element={<SignInForm/>}/>
        <Route path="/SignUp" element={<SignUpForm/>}/>
        {/* <Route path="/Table" Component={Table}/> */}
      </Routes>
      
    </React.Fragment>
  );
}

export default App;
