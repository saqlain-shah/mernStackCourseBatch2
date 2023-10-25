import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, TextField } from "@mui/material";

function AdultPassengerDetailAccordion({ title, subtitle, register, index }) {
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
            <TextField
              {...register(`adults.${index}.surName`)}
              label="Surname"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              {...register(`adults.${index}.firstName`)}
              label="First Name"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`adults.${index}.email`)}
              label="Email"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`adults.${index}.phoneNumber`)}
              label="Phone Number"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`adults.${index}.date_of_birth_of_adult`)}
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
