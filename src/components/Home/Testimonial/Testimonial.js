import React from 'react';
import './Testimonial.css'

const Testimonial = ({ testimonial }) => {
    return (
        <div className="quote-container m-3">
            <div className="py-4 px-3">
                <p className="text-secondary text-justify my-4">{testimonial.quote}</p>
                <div className="d-flex align-items-center">
                    <img style={{height: '70px'}} src={testimonial.img} alt="" />
                    <div className="mt-2 ml-3">
                        <h6 style={{color: '#1cc7c1'}}>{testimonial.name}</h6>
                        <p style={{color: '#3a4256'}}>{testimonial.from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;