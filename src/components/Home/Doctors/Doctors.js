import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => {
            setDoctors(data)
            console.log(data)
        })
    }, [])
    return (
        <section className="container">
            <h1 className="my-5 text-center" style={{color: '#1cc7c1'}}>OUR DOCTORS</h1>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                }
            </div>
        </section>
    );
};

export default Doctors;