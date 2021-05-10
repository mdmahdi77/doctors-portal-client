import React from 'react';
import doctor from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
            {
                doctor.image ? <img style={{height: '200px'}} src={`data:image/jpeg;base64,${doctor.image.img}`} />
                :
                <img style={{height: '200px'}} className="img-fluid" src={`https://fierce-tor-46871.herokuapp.com/${doctor.img}`} alt="" />
            }
            <h5 className="mt-3" style={{ color: '#3a4256' }}>{doctor.name}</h5>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;