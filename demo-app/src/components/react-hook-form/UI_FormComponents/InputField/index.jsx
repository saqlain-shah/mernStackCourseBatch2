import React from "react";
import { TextField } from "@material-ui/core";

const InputFieldWrapper = ({ name, ...otherProps }) => {
  const configTextfield = {
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  return <TextField {...configTextfield} />;
};

export default InputFieldWrapper;
