import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container} from '@mui/material';
import { Link } from 'react-router-dom';
import SignInForm from './SignIn';
import axios from 'axios'
const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        const apiUrl = 'http://localhost:8000/api/auth/register/?{id}'
        const user = {
            username: username,
            email: email,
            password: password,
          };
    
        axios.post(apiUrl, user)
          .then((response) => {
            console.log('Registration successful!', response);
          })
          .catch((error) => {
            console.error('Error registering user:', error);
          });
    


    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const passwordsMatch = password === confirmPassword;
    const passwordErrorMessage = passwordsMatch ? '' : 'Passwords do not match';




    return (
        <Container sx={{mt:10}} component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <Typography color={passwordsMatch ? 'inherit' : 'error'} variant="caption">
                        {passwordErrorMessage}
                    </Typography>
                    {/* Other form fields */}
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>
                </form>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link to="/Login" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Container >
    );
};

export default SignUpForm;
