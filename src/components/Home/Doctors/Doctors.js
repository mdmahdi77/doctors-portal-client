import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section className="container">
            <h1 className="my-5 text-center" style={{color: '#1cc7c1'}}>OUR DOCTORS</h1>
            <div className="row">
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
            </div>
        </section>
    );
};

export default Doctors;