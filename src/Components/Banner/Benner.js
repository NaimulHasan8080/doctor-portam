import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import bg from '../../images/bg.png'
import chair from '../../images/chair.png'

const Benner = () => {
    return (
        <Container sx={{ mt: 9 }}>
            <Box style={{ background: `url(${bg})`, textAlign: 'left' }} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h2" gutterBottom component="div">
                            Your New style Starts Here
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <img style={{ width: '100%' }} src={chair} />
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Benner;