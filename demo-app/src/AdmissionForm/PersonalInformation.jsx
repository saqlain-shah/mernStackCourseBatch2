import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const PersonalInformation = ({ Props, personalInfo }) => {

  const [personalDetail, setPersonalDetail] = useState({ ...personalInfo });

  const handleSubmit = (e) => {
    e.preventDefault();
    Props(personalDetail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Information</h2>

      <TextField
        label="name_"
        onChange={(e) => setPersonalDetail((prevDetails) => ({
          ...prevDetails,
          name_: e.target.value,
        }))}
        value={personalDetail.name_}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={personalDetail.email}
        onChange={(e) => setPersonalDetail((prevDetails) => ({
          ...prevDetails,
          email: e.target.value,
        }))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        value={personalDetail.phone}
        onChange={(e) => setPersonalDetail((prevDetails) => ({
          ...prevDetails,
          phone: e.target.value,
        }))}
        fullWidth
        margin="normal"
      />
      <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
        <Button variant="contained" color="primary" type="submit">
          Next
        </Button>
      </div>

    </form>
  );
};

export default PersonalInformation;
