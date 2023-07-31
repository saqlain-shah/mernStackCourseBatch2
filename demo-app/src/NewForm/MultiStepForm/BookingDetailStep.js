// BookingDetailStep.js
import React from "react";
import { Field } from "formik";
import {TextField} from "@mui/material";
const BookingDetailStep = ({ formProps }) => {
  return (
    <div className="container">
        <Field
          as={TextField}
          name="to"
          label="To"
          halfwidth
          style={{ margin: "10px"}}
          
          // Add other props and error handling using formProps
        />
      <Field
        as={TextField}
        name="from"
        label="From"
        halfwidth
        style={{ margin: "10px"}}
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="adult"
        label="Adult"
        halfwidth
        style={{ margin: "10px" }}
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="children"
        label="Children"
        halfwidth
        style={{ margin: "10px" }}
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="infant"
        label="Infant"
        halfwidth
        style={{ margin: "10px" }}
        // Add other props and error handling using formProps
      />

      {/* Add other fields for To, journey date, trip type, and traveller number */}
    </div>
  );
};

export default BookingDetailStep;
