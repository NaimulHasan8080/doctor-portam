import React from 'react';
import Appointment from '../../Components/Appointment/Appointment';
import Benner from '../../Components/Banner/Benner';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;