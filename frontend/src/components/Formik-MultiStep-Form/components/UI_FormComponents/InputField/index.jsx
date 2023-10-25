import React from "react";
import { TextField } from "@mui/material";

const InputFieldWrapper = ({ name, ...otherProps }) => {
  const configTextfield = {
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  return <TextField {...configTextfield} />;
};

export default InputFieldWrapper;
