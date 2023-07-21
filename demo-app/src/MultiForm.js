import React from "react";
import FinalComponent from "./AdmissionForm/FinalComponent";
import { Box, Container } from "@mui/material";

const MultiForm = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 6, mb: 4 }}>
        <FinalComponent />
      </Box>
    </Container>
  );
};

export default MultiForm;
