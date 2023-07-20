// import React from 'react';

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        <b>Login</b>
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
      <Grid item xs={12}>
      <TextField
        fullWidth
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        margin="normal"
      />
      </Grid>
      <Grid item xs={12}>
      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        margin="normal"
      />
      </Grid>
      <Grid item xs={12}>
        <center><Button type="submit" variant="contained" fullWidth  margin="normal">
         Login
       </Button></center>Sign Up
      </Grid>
    </Grid>
</form>
</Container>
  );
};

export default LoginPage;
