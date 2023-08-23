import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, TextField } from "@mui/material";
import { Field } from "formik"; // Import Field from Formik

function AdultPassengerDetailAccordion({ title, subtitle, index }) {
  return (
    <div>
      <Accordion
        style={{
          backgroundColor: "#424242",
          borderRadius: "10px",
          borderColor: "error.main",
          margin: "10px 0px",
        }}
      >
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
              name={`adults.${index}.surName`}
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
              name={`adults.${index}.firstName`}
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
              name={`adults.${index}.email`}
              as={TextField}
              label="Email"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name={`adults.${index}.phoneNumber`}
              as={TextField}
              label="Phone Number"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name={`adults.${index}.date_of_birth_of_adult`}
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

export default AdultPassengerDetailAccordion;
