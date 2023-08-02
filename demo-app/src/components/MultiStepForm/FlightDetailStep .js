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
        margin="normal"
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="cabin"
        label="Class"
        fullWidth
        margin="normal"
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="adultFare"
        label="Adult Fare"
        fullWidth
        margin="normal"
        // Add other props and error handling using formProps
      />
        <Field
          as={TextField}
          name="childFare"
          label="Children Fare"
          fullWidth
          margin="normal"
          // Add other props and error handling using formProps
        />
      <Field
        as={TextField}
        name="infantFare"
        label="Infant Fare"
        fullWidth
        margin="normal"
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="taxes"
        label="taxes"
        fullWidth
        margin="normal"
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="salesCommission"
        label="Sale Commission"
        fullWidth
        margin="normal"
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="discount"
        label="%Discount"
        fullWidth
        margin="normal"
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="totalAmount"
        label="totalAmount"
        fullWidth
        margin="normal"
        // Add other props and error handling using formProps
      />
      {/* Add other fields for flight fare, etc. */}
    </div>
  );
};

export default FlightDetailStep;
