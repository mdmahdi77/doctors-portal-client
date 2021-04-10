import React from 'react';
import drAppointment from '../../../images/appointmentDr.png';
import './MakeAppoinment.css'

const MakeAppoinment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={drAppointment} alt="" />
                    </div>
                    <div className="col-md-7 py-5 text-white">
                        <h5 style={{color: '#1cc7c1'}} className="text-uppercase">Appointment</h5>
                        <h1 className="my-4">Make An Appointment<br></br> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consectetur vitae ipsum eligendi incidunt, fuga aut mollitia possimus ipsam neque?</p>
                        <button className="btn btn-primary mt-5">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;