import React from "react";
// import Profile from "./components/Profile";
// import Counter from "./components/Counter";
import './App.css'
import FinalComponent from "./components/Admission/FinalComponent";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ mt: 6, mb: 4 }}>

          <FinalComponent />

        </Box>
      </Container>

    </React.Fragment>
  );
}

export default App;
