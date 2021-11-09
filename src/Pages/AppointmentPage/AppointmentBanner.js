import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Calender from './Calender';
import chair from '../../images/chair.png'


const AppointmentBanner = ({ date, setDate }) => {
    return (
        <Container sx={{ mt: 9 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={chair} />
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;