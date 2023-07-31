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
        halfwidth
        style={{ margin: "10px"}}
          
        // Add other props and error handling using formProps
      />
        <Field
        as={TextField}
        name="cabinName"
        label="Cabin Name"
        halfwidth
        style={{ margin: "10px"}}
          
        // Add other props and error handling using formProps
      />
        <Field
        as={TextField}
        name="basicfare"
        label="Basic Fare"
        halfwidth
        style={{ margin: "10px"}}
          
        // Add other props and error handling using formProps
      />
        <Field
        as={TextField}
        name="taxes"
        label="Taxes "
        halfwidth
         style={{ margin: "10px"}}
          
        // Add other props and error handling using formProps
      />
        <Field
        as={TextField}
        name="sc"
        label="SC "
        halfwidth
        style={{ margin: "10px"}}
          
        />
        <Field
        as={TextField}
        name="discount"
        label="Discount "
        halfwidth
        style={{ margin: "10px"}}
      />
          <Field
        as={TextField}
        name="totalAmount"
        label="Total Amount"
        halfwidth
        style={{ margin: "10px"}}
          
      />
    
      {/* Add other fields for flight fare, etc. */}
    </div>
  );
};

export default FlightDetailStep;