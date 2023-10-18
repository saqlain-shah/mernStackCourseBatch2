import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, TextField, Button, Grid, Typography } from '@mui/material';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Navigate = useNavigate();

    const handleRegister = () => {
        const apiUrl = 'http://localhost:8000/api/auth/register/?{id}'
        const user = {
            username: username,
            email: email,
            password: password,
        };

        axios.post(apiUrl, user)
            .then((response) => {
                console.log('Registration successful!', response);
                Navigate('/login');
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
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <Card sx={{ minWidth: 275 }}>
                <CardContent >
                    <Container maxWidth='sm'>
                        <Grid container spacing={4} >
                            <Grid item xs={12}>
                                <Typography variant="h4" align="center">
                                    Register
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Enter Username"
                                    id="username"
                                    sx={{ borderRadius: '25px' }}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Enter Email Address..."
                                    id="email"
                                    sx={{ borderRadius: '25px' }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="password"
                                    label="Password"
                                    id="password"
                                    sx={{ borderRadius: '25px' }}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="password"
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    sx={{ borderRadius: '25px' }}
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                                <Typography color={passwordsMatch ? 'inherit' : 'error'} variant="caption">
                                    {passwordErrorMessage}
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ borderRadius: '25px', ml: 10, mr: 5 }}
                                    onClick={handleRegister}

                                >
                                    Register
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" align="center">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" align="center">
                                    I have an Account!
                                    <Link to="/login" variant="body2">
                                        {" Login "}
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Register;
