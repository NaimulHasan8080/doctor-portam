import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../../Components/Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]

const AppointmentAvailable = ({ date }) => {
    const [successfull, setSuccessfull] = useState(false);
    return (
        <Container>
            <h3>Available Appointment {date.toDateString()}</h3>
            {successfull && <Alert severity="success">Appointment Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setSuccessfull={setSuccessfull}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AppointmentAvailable;