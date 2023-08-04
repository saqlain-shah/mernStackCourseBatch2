import React from "react";
// import Profile from "./components/Profile";
// import Counter from "./components/Counter";
import './App.css'
// import FinalComponent from "./components/Admission/FinalComponent";
import { Box, Container } from "@mui/material";
import FlightBookingForm from "./components/MultiStepForm/FlightBookingForm";
import Component1 from "./components/ContextAPI/ContexApi"

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ mt: 6, mb: 4 }}>

          <Component1/>

        </Box>
      </Container>

    </React.Fragment>
  );
}

export default App;
