import { Typography } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
import AdultPassengerForm from "../Forms/AdultPassengerForm";
import ChildPassengerForm from "../Forms/ChildPassengerForm";
import InfantPassengerForm from "../Forms/InfantPassengerForm";

const PassengerInfo = () => {
  const formik = useFormikContext();

  const { number_of_adults, number_of_children, number_of_infants } =
    formik.values;
  console.log("Passenger Info", number_of_adults)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Passenger Information
      </Typography>

      <AdultPassengerForm
        formik={formik}
        number_of_adults={number_of_adults}
      />
      <ChildPassengerForm
        formik={formik}
        number_of_children={number_of_children}
      />
      <InfantPassengerForm
        formik={formik}
        number_of_infants={number_of_infants}
      />
    </React.Fragment>
  );
};

export default PassengerInfo;
