// TravellerInfoStep.js
import React from "react";
import { FieldArray, Field } from "formik";
import { TextField } from "@mui/material";

const TravellerInfoStep = ({ formProps }) => {
  return (
    <div>
      <FieldArray name="adult">
        {(arrayHelpers) => (
          <div>
            {formProps.values.adults &&
              formProps.values.adults.map((adult, index) => (
                <div key={index}>
                  <Field
                    as={TextField}
                    name={`Adult.${index}.name`}
                    label="Adult Name"
                    fullWidth
                    // Add other props and error handling using formProps
                  />
                  {/* Add other fields for traveller information */}
                </div>
              ))}
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default TravellerInfoStep;
