import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';



const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>

                    <Link style={{ margin: '5px', fontSize: '20px' }} to="/home" > Home</Link>

                    <Link style={{ margin: '5px', fontSize: '20px' }} to="/appointmentPage" > Appointment</Link>

                    {
                        user?.email ?
                            <>
                                <NavLink style={{ margin: '5px', fontSize: '20px' }} to="/dashboard">Dashboard</NavLink>
                                <NavLink to="/login"><Button onClick={logOut} variant="contained" color="inherit">Logout</Button></NavLink>
                            </>
                            : <NavLink to="/login"><Button variant="contained" color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;