// FlightDetailStep.js
import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";

const FlightDetailStep = ({ formProps }) => {
  return (
    <div>
      <Field
        as={TextField}
        name="airlineName"
        label="Airline Name"
        fullWidth
        // Add other props and error handling using formProps
      />
      {/* Add other fields for flight fare, etc. */}
    </div>
  );
};

export default FlightDetailStep;
