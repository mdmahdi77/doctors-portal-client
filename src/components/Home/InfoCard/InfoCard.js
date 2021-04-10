import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({ info }) => {
    return (
        <section className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center align-items-center info-container info-${info.background}`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </section>
    );
};

export default InfoCard;