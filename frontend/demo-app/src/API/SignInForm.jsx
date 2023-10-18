import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import axios from 'axios'; // Import Axios

const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:8000/api/auth/login/';
    const user = {
      username: formData.username, // Use formData.username
      password: formData.password, // Use formData.password
    };

    const response = await axios.post(apiUrl, user, {
      withCredentials: true
    });

    console.log(response.data);

    if (response.data.details) {
      alert("User login successfully");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
        </form>
        <Grid container justifyContent="flex-end">
          <Grid item>
            {/* Link to your sign-up page */}
            {/* Example: <Link to="/signup">Don't have an account? Sign Up</Link> */}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SignInForm;
