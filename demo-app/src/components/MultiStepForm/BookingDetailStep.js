
// BookingDetailStep.js
import React from "react";
import { Field } from "formik";
import { TextField,
    // FormControlLabel, RadioGroup, Radio 
    } from "@mui/material";

const BookingDetailStep = ({ formProps }) => {
  return (
    <div>
      <Field
        as={TextField}
        name="to"
        label="To"
        fullWidth
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="from"
        label="From"
        fullWidth
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="adult"
        label="Adult"
        fullWidth
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="children"
        label="Children"
        fullWidth
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="infant"
        label="Infant"
        fullWidth
        // Add other props and error handling using formProps
      />
    
      {/* Add other fields for To, journey date, trip type, and traveller number */}
    </div>
  );
};

export default BookingDetailStep;
