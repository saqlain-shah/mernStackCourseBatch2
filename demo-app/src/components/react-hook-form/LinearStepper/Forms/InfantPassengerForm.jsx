import React from "react";
import InfantPassengerDetailAccordion from "../../UI_FormComponents/Accordions/InfantPassengerAccordion";

function InfantPassengerForm({ register, number_of_infants }) {
  return (
    <React.Fragment>
      {Array.from({ length: number_of_infants }).map((_, index) => (
        <InfantPassengerDetailAccordion
          key={index}
          title={`Infant ${index + 1}`}
          subtitle={`Enter the details of the passenger.`}
          index={index}
          register={register}
        />
      ))}
    </React.Fragment>
  );
}

export default InfantPassengerForm;
