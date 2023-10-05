import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const PersonalInformation = ({ Props, Data }) => {
  const [personaldetails, setpersonaldetails] = useState({
    name:"",
    email:"",
    phone: "",
  });

  useEffect(()=>{
    setpersonaldetails(Data)
  },[Data])

  const handleSubmit = (e) => {
    e.preventDefault();
    Props(personaldetails);
    // handlePersonalInfoSubmit(personalInfo) 

  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4">Personal Information</Typography>

      <TextField
        label="Name"
        value={personaldetails.name}
        onChange={(e) => setpersonaldetails((prev)=>({
            ...prev,
            name:e.target.value
        }))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={personaldetails.email}
        onChange={(e) => setpersonaldetails((prev)=>({
            ...prev,
            email:e.target.value
        }))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        value={personaldetails.phone}
        onChange={(e) => setpersonaldetails((prev)=>({
            ...prev,
            phone:e.target.value
        }))}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit" style={{float: 'right'}}>
        Next
      </Button>

    </form>
  );
};

export default PersonalInformation;