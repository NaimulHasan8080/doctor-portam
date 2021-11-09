import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from './BookingModal';

const Booking = ({ booking, date, setSuccessfull }) => {
    const { name, time, space } = booking;

    const [bookingModal, setBookingModal] = React.useState(false);
    const handleOpen = () => setBookingModal(true);
    const handleClose = () => setBookingModal(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ p: 3 }} elevation={3}>
                    <Typography variant="h4" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {space} space available
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                handleClose={handleClose}
                bookingModal={bookingModal}
                booking={booking}
                date={date}
                setSuccessfull={setSuccessfull}
            ></BookingModal>
        </>
    );
};

export default Booking;