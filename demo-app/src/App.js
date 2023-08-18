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
import Table from "./components/MUI-Table/Table";
function App() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box sx={{ mt: 6, mb: 4 }}>

          <Form />
          

        </Box>
      </Container>

    </React.Fragment>
  );
}

export default App;
