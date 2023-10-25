import {  Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import React from "react";
import AdultPassengerForm from "../Forms/AdultPassengerForm";
import ChildPassengerForm from "../Forms/ChildPassengerForm";
import InfantPassengerForm from "../Forms/InfantPassengerForm";

const PassengerInfo = () => {
  const { control, register } = useFormContext();
  const { number_of_adults, number_of_children, number_of_infants } =
    control._formValues;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Passenger Information
      </Typography>

      <AdultPassengerForm
        register={register}
        number_of_adults={number_of_adults}
      />
      <ChildPassengerForm
        register={register}
        number_of_children={number_of_children}
      />
      <InfantPassengerForm
        register={register}
        number_of_infants={number_of_infants}
      />

    </React.Fragment>
  );
};

export default PassengerInfo;
