import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import '../../App.css';

const BookingDetailStep = ({ formProps }) => {
  return (
    <div>
      <div>
        <Field
          as={TextField}
          name="to"
          label="To"
          fullWidth
        />
        <ErrorMessage name="to">
          {errorMessage => (
            <div className="error-message">
              * {errorMessage}
            </div>
          )}
        </ErrorMessage>
      </div>
      <div>
        <Field
          as={TextField}
          name="from"
          label="From"
          fullWidth
        />
        <ErrorMessage name="from">
          {errorMessage => (
            <div className="error-message">
              * {errorMessage}
            </div>
          )}
        </ErrorMessage>
      </div>
      <div>
        <Field
          as={TextField}
          name="adults"
          label="Adult"
          fullWidth
        />
        <ErrorMessage name="adults">
          {errorMessage => (
            <div className="error-message">
              * {errorMessage}
            </div>
          )}
        </ErrorMessage>
      </div>
      <div>
        <Field
          as={TextField}
          name="child"
          label="Children"
          fullWidth
        />
        <ErrorMessage name="child">
          {errorMessage => (
            <div className="error-message">
              * {errorMessage}
            </div>
          )}
        </ErrorMessage>
      </div>
      <div>
        <Field
          as={TextField}
          name="infant"
          label="Infant"
          fullWidth
        />
        <ErrorMessage name="infant">
          {errorMessage => (
            <div className="error-message">
              * {errorMessage}
            </div>
          )}
        </ErrorMessage>
      </div>
      
      {/* Add other fields for To, journey date, trip type, and traveller number */}
    </div>
  );
};

export default BookingDetailStep;
