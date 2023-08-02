
// BookingDetailStep.js
import React, {useState} from "react";
import { Formik, Form, Field, FieldArray, useFormikContext,  } from "formik";
import { TextField, FormControlLabel, RadioGroup, Radio } from "@mui/material";

const BookingDetailStep = ({ formProps }) => {
  const { formik } = useFormikContext();
  const [oneWayTrip, setOneWayTrip] = useState(true);

  function handleFlightType(value) {
    if (value === "oneWay") {
      setOneWayTrip(true);
    }
    if (value === "roundWay") {
      setOneWayTrip(false);
    }
  }
  return (
    <div>
      {/* <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => handleFlightType(e.target.value)}
            defaultValue="oneWay"
          >
            <FormControlLabel
              value="oneWay"
              control={<Radio />}
              label="One Way Trip"
            />
            <FormControlLabel
              value="roundWay"
              control={<Radio />}
              label="Round Way Trip"
            />
          </RadioGroup>
        </FormControl> */}
      <Field
        as={TextField}
        formik={formik}
        name="to"
        label="To"
        fullWidth
        margin="normal"
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="from"
        label="From"
        fullWidth
        margin="normal"        
        
        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="Journey Date"
        label="Journey Date"
        InputLabelProps={{shrink: true,}}
        type="date"
        fullWidth
        margin="normal"
        />
      <Field
        as={TextField}
        name="Return Date"
        label="Return Date"
        InputLabelProps={{shrink: true,}}
        type="date"
        disabled={oneWayTrip === true ? true : false}
        fullWidth={true}
        margin="normal"

      />
      <Field
        as={TextField}
        name="adult"
        label="Adult"
        fullWidth
        margin="normal"

        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="children"
        label="Children"
        fullWidth
        margin="normal"

        // Add other props and error handling using formProps
      />
      <Field
        as={TextField}
        name="infant"
        label="Infant"
        fullWidth
        margin="normal"
        
        // Add other props and error handling using formProps
      />
    
      {/* Add other fields for To, journey date, trip type, and traveller number */}
    </div>
  );
};

export default BookingDetailStep;
