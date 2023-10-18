import React from "react";
import { Field, Form, Formik } from "formik";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, TextField } from "@mui/material";

function InfantPassengerDetailAccordion({ title, subtitle, index }) {


  return (
    <div>
 
            <Accordion style={{ backgroundColor: "#424242", margin: "10px 0px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography color="White">{title}</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ color: "white" }}>
                <Typography color="darkgrey">{subtitle}</Typography>
                <Container style={{ marginTop: "20px", paddingLeft: "0px" }}>
                  <Field
                    name={`infants.${index}.surName`}
                    as={TextField}
                    label="Surname"
                    variant="outlined"
                    margin="dense"
                    fullWidth={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <Field
                    name={`infants.${index}.firstName`}
                    as={TextField}
                    label="First Name"
                    variant="outlined"
                    margin="dense"
                    fullWidth={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <Field
                    name={`infants.${index}.date_of_birth_of_infant`}
                    as={TextField}
                    label="Date of Birth"
                    variant="outlined"
                    margin="dense"
                    fullWidth={true}
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Container>
              </AccordionDetails>
            </Accordion>
         

    </div>
  );
}

export default InfantPassengerDetailAccordion;
