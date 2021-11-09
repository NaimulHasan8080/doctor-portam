import React from 'react';
import AppointmentAvailable from './AppointmentAvailable';
import AppointmentBanner from './AppointmentBanner';

const AppointmentPage = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppointmentAvailable date={date}></AppointmentAvailable>
        </div>
    );
};

export default AppointmentPage;