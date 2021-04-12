import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="secondary">Sr No</th>
                    <th className="secondary">Name</th>
                    <th className="secondary">Phone</th>
                    <th className="secondary">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment, index) => 
                        <tr>
                            <td>{index + 1}</td>
                            <td>{appointment.name}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;