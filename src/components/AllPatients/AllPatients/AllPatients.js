import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../DashBoard/AppointmentDataTable/AppointmentDataTable';
import SideBar from '../../DashBoard/Sidebar/SideBar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div className="row container-fluid">
            <div className="col-md-2" style={{ backgroundImage: 'linear-gradient(40deg, #19d3ae,#0fcfec)', height: '100vh' }}>
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">AllPatients</h5>
                <AppointmentDataTable appointments={appointments}></AppointmentDataTable>
            </div>
        </div>
    );
};

export default AllPatients;