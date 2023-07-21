import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const PersonalInformation = ({ props, onPrev, personalInfo }) => {
  const [formData, setFormData] = useState({ 
    ...personalInfo
  });


  const handleChange1 = (e) => {
    setFormData({...formData,name: e.target.value});
  };

  const handleChange2 = (e) => {
    setFormData({...formData,email: e.target.value});
  };
  const handleChange3 = (e) => {
    setFormData({...formData,phone: e.target.value});
    console.log(setFormData)
  };
  const handleSubmit = (e) => {
    e.preventDefault(setFormData);
    props(formData);
  };


  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4">Personal Information</Typography>

      <TextField
        label="Name"
        value={formData.name}
        onChange={handleChange1}
        fullWidth
        margin="normal"
        name='name'
      />
      <TextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange2}
        fullWidth
        margin="normal"
        name='email'
      />
      <TextField
        label="Phone"
        value={formData.phone}
        onChange={handleChange3}
        fullWidth
        margin="normal"
        name='phone'
      />
      <Button variant="contained" color="primary" type='submit'>
        Next
      </Button>
      <button type="button" className="btn btn-primary" onClick={onPrev}
      >Previous</button>
    </form>
  );
};

export default PersonalInformation;
