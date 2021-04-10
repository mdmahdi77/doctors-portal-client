import React from 'react';
import feature from '../../../images/feature.png'

const FeatureService = () => {
    return (
        <section className="my-5 py-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="row container">
                    <div className="col-md-5">
                        <img className="img-fluid" src={feature} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1 style={{color: '#3a4256'}}>Exceptional Dental Care, On Your Terms</h1>
                        <p className="my-5 text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dignissimos dolore delectus ut, neque laborum asperiores cumque magnam at provident totam, eveniet earum doloribus labore corporis fugit sunt rem aperiam praesentium non similique ipsam sequi tenetur. Perferendis atque iure ipsa sit quidem fugiat facilis, voluptatem libero nam eos omnis minima.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;