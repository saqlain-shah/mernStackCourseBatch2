import React from "react";
import { FieldArray, useFormikContext } from "formik";
import AdultPassengerAccordion from "../../UI_FormComponents/Accordions/AdultPassengerAccordion";

function AdultPassengerForm({ number_of_adults }) {
  const formik = useFormikContext(); // Access formik context

  return (
    <React.Fragment>
      <FieldArray name="adults">
        {() => (
          <>
            {Array.from({ length: number_of_adults }).map((_, index) => (
              <AdultPassengerAccordion
                key={index}
                title={`Adult ${index + 1}`}
                subtitle={`Enter the details of the passenger.`}
                index={index}
                formik={formik} // Pass the formik context to the accordion
              />
            ))}
          </>
        )}
      </FieldArray>
    </React.Fragment>
  );
}

export default AdultPassengerForm;
