import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import './Testimonials.css'
import Testimonial from '../Testimonial/Testimonial';

const testimonialsData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5">
            <div className="container">
                <div className="section-header">
                    <h5 style={{color: '#1cc7c1'}}>TESTIMONIAL</h5>
                    <h1 style={{color: '#3a4256'}}>What Our Parents <br></br>Says</h1>
                </div>
                <div className="my-5 d-flex justify-content-between">
                    {
                       testimonialsData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>) 
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;