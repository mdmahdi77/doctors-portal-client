import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4">
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/appointment" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faSignOutAlt} /> <span>Prescription</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addDoctor" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCog} /> <span>Settings</span> 
                    </Link>
                </li>
            </ul>
            <div className="">
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faFileAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;