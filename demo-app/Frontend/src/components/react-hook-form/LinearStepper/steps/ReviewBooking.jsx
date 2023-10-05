import { Grid, TextField, Typography } from "@mui/material";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import React, { useEffect, useState } from "react";

const ReviewBooking = () => {
  const { control } = useFormContext();
  const adultFields = useFieldArray({
    control,
    name: "adults",
  }).fields;
  const childrenFields = useFieldArray({
    control,
    name: "children",
  }).fields;
  const infantFields = useFieldArray({
    control,
    name: "infants",
  }).fields;

  const {
    origin,
    destination,
    journeyDate,
    returnDate,
    number_of_adults,
    number_of_children,
    number_of_infants,
    airline,
    cabin,
    // basicFare,
    taxes,
    salesCommission,
    discount,
    // gender,
    // firstName,
    // surName,
    // date_of_birth,
    // email,
    // phone,
    // pnr,
    // ticket,
    // issueBy,
    // ledger,
    adultFare,
    childFare,
    infantFare,
    // grandTotal,
    code,
  } = control._formValues;

  const [totalAdultFare, setTotalAdultFare] = useState(
    number_of_adults * adultFare
  );
  const [totalChildrenFare, setTotalChildrenFare] = useState(
    number_of_children * childFare
  );
  const [totalInfantFare, setTotalInfantFare] = useState(
    number_of_infants * infantFare
  );
  const [totalAmount, setTotalAmount] = useState(
    totalAdultFare + totalInfantFare + totalChildrenFare
  );

  useEffect(() => {
    setTotalAdultFare(number_of_adults * adultFare);
    setTotalChildrenFare(number_of_children * childFare);
    setTotalInfantFare(number_of_infants * infantFare);
    setTotalAmount(totalAdultFare + totalInfantFare + totalChildrenFare);
  }, [
    adultFare,
    childFare,
    control,
    infantFare,
    number_of_adults,
    number_of_children,
    number_of_infants,
    totalAdultFare,
    totalChildrenFare,
    totalInfantFare,
  ]);

  return (
    <>
      <React.Fragment>
        <Typography variant="h6" align="center" gutterBottom>
          1 Booking Information Details
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>{origin}</p>
          <p>{destination}</p>
          <p>{journeyDate}</p>
          <p>{returnDate}</p>
          <p>{number_of_adults}</p>
          <p>{number_of_children}</p>
          <p>{number_of_infants}</p>
        </div>

        <Typography variant="h6" align="center" gutterBottom>
          2 Flight Information Details
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>{airline}</p>
          <p>{code}</p>
          <p>{cabin}</p>
          <p>{totalAdultFare}</p>
          <p>{totalChildrenFare}</p>
          <p>{totalInfantFare}</p>
          <p>{salesCommission}</p>
          <p>{taxes}</p>
          <p>{discount}</p>
        </div>
        <Typography variant="h6" align="center" gutterBottom>
          3 Passenger Details
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {adultFields.map((field, index) => (
            <div className="" key={index}>
              <p>{field.date_of_birth}</p>
              <p>{field.firstName}</p>
              <p>{field.email}</p>
              <p>{field.phoneNumber}</p>
              <p>{field.surName}</p>
            </div>
          ))}
          {childrenFields.map((field, index) => (
            <div className="" key={index}>
              <p>{field.date_of_birth}</p>
              <p>{field.firstName}</p>
              <p>{field.email}</p>
              <p>{field.phoneNumber}</p>
              <p>{field.surName}</p>
            </div>
          ))}
          {infantFields.map((field, index) => (
            <div className="" key={index}>
              <p>{field.date_of_birth}</p>
              <p>{field.firstName}</p>
              <p>{field.email}</p>
              <p>{field.phoneNumber}</p>
              <p>{field.surName}</p>
            </div>
          ))}
        </div>
        <Typography variant="h6" align="center" gutterBottom>
          4 Fares Details
        </Typography>

        <p>Total Adult Fare: {isNaN(totalAdultFare) ? "" : totalAdultFare}</p>
        <p>
          Total Children Fare:{" "}
          {isNaN(totalChildrenFare) ? "" : totalChildrenFare}
        </p>
        <p>
          Total Infant Fare: {isNaN(totalInfantFare) ? "" : totalInfantFare}
        </p>
        <p>Grand Total:{isNaN(totalAmount) ? "" : totalAmount}</p>

        <Grid>
          <Controller
            control={control}
            name="grandTotal"
            render={({ field }) => (
              <TextField
                label="Grand Total"
                variant="outlined"
                fullWidth={true}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid>
          <Controller
            control={control}
            name="pnrNumber"
            render={({ field }) => (
              <TextField
                label="PNR Number"
                variant="outlined"
                fullWidth={true}
                {...field}
              />
            )}
          />
        </Grid>
      </React.Fragment>
    </>
  );
};

export default ReviewBooking;
