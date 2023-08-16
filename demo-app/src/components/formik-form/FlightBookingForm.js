// FlightBookingForm.js
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import BookingDetailStep from "./BookingDetailStep.js";
import FlightDetailStep from "./FlightDetailStep .js";
import TravellerInfoStep from "./TravellerInfoStep .js";
import ConfirmBookingStep from "./ConfirmBookingStep .js";

const steps = [
  "Booking Details",
  "Flight Details",
  "Personnel Information",
  "Confirm Booking",
];

const FormInitialValues = {
  to: "",
  from: "",
  journeyDate: "",
  returnDate: "",
  adults: "",
  child: "",
  infant: "",

  airline: "",
  cabin: "",
  basicFare: "",
  taxes: "",
  sc: "",
  discount: "",
  totalAmount: "",


  gender: "",
  firstName: "",
  surName: "",
  dob: "",
  email: "",
  phone: "",
  pnr: "",
  ticket: "",

};

const FormValidationSchema = Yup.object().shape({
  gender: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  surName: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  email: Yup.string()
    .required("Required")
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Invalid email format"),
  phone: Yup.string()
    .required("Required")
    .matches(/^\+?\d{1,3}-\d{1,3}-\d{4,14}$/, "Invalid phone number format")
    .max(14, "Phone number must not exceed 14 characters"),
  pnr: Yup.string()
    .required("Required")
    .matches(/^\d+$/, "PNR must be a number"),
  ticket: Yup.string().required("Required"),
  to: Yup.string().required("Required"),
  from: Yup.string().required("Required"),
  issueBy: Yup.string().required("Required"),
  ledger: Yup.string().required("Required"),
  journeyDate: Yup.string().required("Required"),
  returnDate: Yup.string().required("Required"),
  adults: Yup.number()
    .required("Required")
    .typeError("Must be a number")
    .integer("Must be an integer"),
  child: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer"),
  infant: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .test(
      'max-infants-per-adult',
      'Only one infant per adult is allowed',
      function (value) {
        const { adults } = this.parent;
        if (adults >= value || value==null) {
          return true;
        }
        else {
          return this.createError({
            path: this.path,
            message: 'Only one infant per adult is allowed',
          });
        }
      }
    ),
  basicFare: Yup.number()
    .required("Required")
    .typeError("Must be a number"),
  taxes: Yup.number()
    .required("Required")
    .typeError("Must be a number"),
  sc: Yup.number()
    .required("Required")
    .typeError("Must be a number"),
  discount: Yup.number()
    .required("Required")
    .typeError("Must be a number"),
  totalAmount: Yup.number()
    .required("Required")
    .typeError("Must be a number"),
});


const handleSubmitForm = () => {
  console.log("Form Is Submitted")
  alert("Form is submitted")
};

const FlightBookingForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex, formProps) => {
    switch (stepIndex) {
      case 0:
        return <BookingDetailStep formProps={formProps} />;
      case 1:
        return <FlightDetailStep formProps={formProps} />;
      case 2:
        return <TravellerInfoStep formProps={formProps} />;
      case 3:
        return <ConfirmBookingStep formProps={formProps} />;
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={FormInitialValues}
      validationSchema={FormValidationSchema}
      onSubmit={handleSubmitForm}
    >
      {(formProps) => (
        <Form>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {getStepContent(activeStep, formProps)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mt: 3, mr: 1 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                sx={{ mt: 3 }}
              >
                {activeStep === steps.length - 1 ? "Confirm" : "Next"}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FlightBookingForm;
