import React from "react";
import ChildPassengerDetailAccordion from "../../UI_FormComponents/Accordions/ChildPassengerAccordion";

function ChildPassengerForm({ register, number_of_children }) {
  return (
    <React.Fragment>
      {Array.from({ length: number_of_children }).map((_, index) => (
        <ChildPassengerDetailAccordion
          key={index}
          title={`Child ${index + 1}`}
          subtitle={`Enter the details of the passenger.`}
          index={index}
          register={register}
        />
      ))}
    </React.Fragment>
  );
}

export default ChildPassengerForm;
