import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import SideBar from '../Sidebar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const DashBoard = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date)
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: userLoggedIn.email })
        })
        .then(res=> res.json())
        .then(data => setAppointments(data))
    },[selectedDate])

    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%"
    }
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2" style={{backgroundImage: 'linear-gradient(40deg, #19d3ae,#0fcfec)', height: '100vh'}}>
                    <SideBar></SideBar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;