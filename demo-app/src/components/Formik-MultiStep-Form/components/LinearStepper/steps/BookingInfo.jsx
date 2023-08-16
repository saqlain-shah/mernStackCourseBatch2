import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { useFormikContext, FastField, ErrorMessage } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const BookingInfo = () => {
  const formik = useFormikContext();
  const [oneWayTrip, setOneWayTrip] = useState(true);

  function handleFlightType(value) {
    if (value === "oneWay") {
      setOneWayTrip(true);
    }
    if (value === "roundWay") {
      setOneWayTrip(false);
    }
  }


  console.log("Booking Info", formik.values)
  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Booking Details
        </Typography>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => {
              formik.handleChange(e);
              handleFlightType(e.target.value);
            }}
            value={formik.values["row-radio-buttons-group"]} // Use quotes and correct the value
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
        </FormControl>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <FastField 
              name="origin"
              as={TextField} // Use the "as" prop to specify the input component
              label="From"
              variant="outlined"
              fullWidth={true}
            />
            <ErrorMessage name="to" component="div" className="error-message" />
          </Grid>
          <Grid item xs={3}>
            <FastField 
              name="destination"
              as={TextField} // Use the "as" prop to specify the input component
              label="Destination"
              variant="outlined"
              fullWidth={true}
            />
            <ErrorMessage name="to" component="div" className="error-message" />
          </Grid>
          <Grid item xs={3}>
            <FastField 
              name="journeyDate"
              as={TextField} // Use the "as" prop to specify the input component
              label="Journey Date"
              type="date"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <ErrorMessage name="to" component="div" className="error-message" />
          </Grid>
          <Grid item xs={3}>
            <FastField 
              name="returnDate"
              as={TextField} // Use the "as" prop to specify the input component
              label="Return Date"
              type="date"
              disabled={oneWayTrip===true ? true:false}
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <ErrorMessage name="to" component="div" className="error-message" />
          </Grid>
          <Grid item xs={4}>
            <FastField 
              name="number_of_adults"
              as={TextField} // Use the "as" prop to specify the input component
              label="Number of Adults"
              variant="outlined"
              fullWidth={true}
            />
            <ErrorMessage name="to" component="div" className="error-message" />
          </Grid>
          <Grid item xs={4}>
            <FastField 
              name="number_of_children"
              as={TextField} // Use the "as" prop to specify the input component
              label="Number of Children"
              variant="outlined"
              fullWidth={true}
            />
            <ErrorMessage name="to" component="div" className="error-message" />
          </Grid>
          <Grid item xs={4}>
            <FastField 
              name="number_of_infants"
              as={TextField} // Use the "as" prop to specify the input component
              label="Number of Infants"
              variant="outlined"
              fullWidth={true}
            />
            <ErrorMessage name="to" component="div" className="error-message" />
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );
};

export default BookingInfo;
