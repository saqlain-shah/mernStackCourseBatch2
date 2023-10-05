import React, { useState } from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import BookingInfo from "./steps/BookingInfo";
import FlightInfo from "./steps/FlightInfo";
import PassengerInfo from "./steps/PassengerInfo";
import ReviewBooking from "./steps/ReviewBooking";
import useStyles from "../View/styles/FormWizardStyles";
import { formDefaultValues } from "../utils/constants";
import ConfirmBooking from "./steps/ConfirmBooking";
import Checkout from "./steps/Checkout";

function getSteps() {
  return [
    "Booking Information",
    "Flight Information",
    "Passenger Information",
    "Review Your Booking",
    "Confirm Booking",
    "Checkout",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BookingInfo />;
    case 1:
      return <FlightInfo />;
    case 2:
      return <PassengerInfo />;
    case 3:
      return <ReviewBooking />;
    case 4:
      return <ConfirmBooking />;
    case 5:
      return <Checkout />;
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: formDefaultValues,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    // return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);

    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Typography component="h1" variant="h4" align="center">
        Flight Reservation Form (Using React-hook-form)
      </Typography>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        className={classes.stepper}
      >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <React.Fragment>
        {activeStep === steps.length ? (
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
        ) : (
          <>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {getStepContent(activeStep)}

                {isStepOptional(activeStep) && (
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                  >
                    Skip
                  </Button>
                )}
                <div className={classes.wrapper}>
                  <Button
                    className={classes.button}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    // onClick={handleNext}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </>
        )}
      </React.Fragment>
    </div>
  );
};

export default LinearStepper;
