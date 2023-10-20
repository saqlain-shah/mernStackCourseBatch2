import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Container, Card, CardContent, TextField, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();

    const handleLogin = async () => {
        const apiUrl = 'http://localhost:8000/api/auth/login/';
        const user = {
            username: username,
            password: password,
        };
        try {
            await axios.post(apiUrl, user, {
                withCredentials: true
            });
    
            alert("User login successful");
            Navigate('/portal/dashboard');
        } catch (error) {
            console.error(error);
        }
    };   
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
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                                <Typography variant="h4" align="center">
                                    LOGIN
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Username"
                                    id="exampleInputEmail"
                                    sx={{ borderRadius: '25px', mt: 5 }}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="password"
                                    label="Password"
                                    id="exampleInputPassword"
                                    sx={{ borderRadius: '25px' }}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ borderRadius: '25px', ml: 10, mr: 5, mt: 5 }}
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" align="center">
                                    Create an Account!
                                    <Link to="/Register" variant="body2">
                                        {" Register "}
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

export default Login;
