import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import '../../App.css'

const BookingDetailStep = ({ formProps }) => {
  return (
    <div>
      <div>
        <Field
          as={TextField}
          name="to"
          label="To"
          fullWidth
          margin='normal'
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
          margin='normal'
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
          margin='normal'
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
          margin='normal'
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
          margin='normal'
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
