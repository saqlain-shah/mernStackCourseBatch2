import { Grid, TextField, Typography } from "@mui/material";
import { Field, useFormikContext } from "formik";
import React from "react";

const FlightInfo = () => {
  const formik = useFormikContext();
  console.log("Booking Info", formik.values)

  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Flight Info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Field
              name="airline"
              as={TextField}
              label="Airline"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              name="code"
              as={TextField}
              label="Code"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              name="cabin"
              as={TextField}
              label="Class"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              name="adultFare"
              as={TextField}
              label="Adult Fare"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              name="childFare"
              as={TextField}
              label="Children Fare"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              name="infantFare"
              as={TextField}
              label="Infant Fare"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={3}>
            <Field
              name="salesCommission"
              as={TextField}
              label="Sale Commission"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={3}>
            <Field
              name="taxes"
              as={TextField}
              label="%Taxes"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={3}>
            <Field
              name="discount"
              as={TextField}
              label="%Discount"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );
};

export default FlightInfo;
