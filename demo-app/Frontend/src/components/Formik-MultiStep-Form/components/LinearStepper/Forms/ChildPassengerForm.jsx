import React from "react";
import { FieldArray, useFormikContext } from "formik";
import ChildPassengerDetailAccordion from "../../UI_FormComponents/Accordions/ChildPassengerAccordion";

function ChildPassengerForm({ number_of_children }) {
  const formik = useFormikContext(); // Access formik context

  return (
    <React.Fragment>
      <FieldArray name="children">
        {() => (
          <>
            {Array.from({ length: number_of_children }).map((_, index) => (
              <ChildPassengerDetailAccordion
                key={index}
                title={`Child ${index + 1}`}
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

export default ChildPassengerForm;
