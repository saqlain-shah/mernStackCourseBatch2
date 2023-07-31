// BookingDetailStep.js
import React from "react";
import { Field } from "formik";
import { TextField,} from "@mui/material";
const PersonnelInformation = ({ formProps }) => {
  return (
    <div>

      <Field
        as={TextField}
        name="gender"
        label="Gender"
        halfwidth
        style={{ margin: "10px"}}
    
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="FirstName"
        label="First Name"
        halfwidth
        style={{ margin: "10px"}}v
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="surName"
        label="Sar Name"
        halfwidth
        style={{ margin: "10px"}}
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="dobName"
        label="Dob"
        style={{ margin: "10px"}}
        halfwidth
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="email"
        label="Email"
        style={{ margin: "10px"}}
        halfwidth
        // Add other props and error handling using formProps
      />
         <Field
        as={TextField}
        name="phone"
        label="Phone"
        halfwidth
        style={{ margin: "10px"}}
        // Add other props and error handling using formProps
      />
          <Field
        as={TextField}
        name="pnr"
        label="Pnr"
        halfwidth
        style={{ margin: "10px"}}
        // Add other props and error handling using formProps
      />
          <Field
        as={TextField}
        name="ticket"
        label="Ticket"
        style={{ margin: "10px"}}
        halfwidth
        // Add other props and error handling using formProps
      />
    
      {/* Add other fields for To, journey date, trip type, and traveller number */}
    </div>
  );
};

export default PersonnelInformation;