import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const PersonalInformation = ({ Props }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const personalInfo = {
      name,
      email,
      phone,
    };
    Props(personalInfo);
    // handlePersonalInfoSubmit(personalInfo) 

  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4">Personal Information</Typography>

      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Next
      </Button>
    </form>
  );
};

export default PersonalInformation;
