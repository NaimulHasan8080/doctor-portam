import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Components/Hooks/UseAuth';
import login from '../../images/login.png'


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, error, googleLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginDta = { ...loginData };
        newLoginDta[field] = value;
        setLoginData(newLoginDta)

    }

    const handleSubmit = e => {
        // alert('successfully login')
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const googleUserLogin = () => {
        googleLogin(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                    </form>
                    {isLoading && <CircularProgress />}
                    {
                        user.email && <Alert severity="success">Login successfully </Alert>
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }
                    <p>------------------------</p>
                    <Button onClick={googleUserLogin} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;