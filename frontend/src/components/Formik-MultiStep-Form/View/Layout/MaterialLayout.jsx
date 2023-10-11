import React from "react";
import { Paper, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

import { theme, useStyle } from "../styles/MaterialLayoutStyles";

export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
    </ThemeProvider>
  );
}
