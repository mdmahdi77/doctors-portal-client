import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments)
    return (
        <div>
            <h2 className="text-center text-brand mb-5">Appointments</h2>
            {
                appointments.length ? 
                <AppointmentShortList appointments={appointments}></AppointmentShortList>
                : 
                <div className="">
                    <h4 className="lead text-center">No Appointments For This Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;