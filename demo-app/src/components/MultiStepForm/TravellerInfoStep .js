// TravellerInfoStep.js
import {  Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Formik, Form, Field, FieldArray, useFormikContext } from "formik";
import React from "react";
import AdultPassengerForm from "./Forms/AdultPassengerForm";
import ChildPassengerForm from "./Forms/ChildPassengerForm";
import InfantPassengerForm from "./Forms/InfantPassengerForm";

const TravellerInfoStep = ({ formProps }) => {
  const formik = useFormikContext();
  const { number_of_adults, number_of_children, number_of_infants } = formik.values;

  console.log("Formik Values", formik.values)
  console.log("formProps", formProps)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Passenger Information
      </Typography>

      <AdultPassengerForm
        register={formik}
        number_of_adults={number_of_adults}
      />
      <ChildPassengerForm
        register={formik}
        number_of_children={number_of_children}
      />
      <InfantPassengerForm
        register={formik}
        number_of_infants={number_of_infants}
      />

    </React.Fragment>
  );
};

export default TravellerInfoStep