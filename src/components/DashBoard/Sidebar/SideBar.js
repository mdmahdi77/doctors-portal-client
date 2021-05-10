import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const SideBar = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const [isDoctor, setIsDoctor] = useState(false)

    useEffect(() => {
        fetch('https://fierce-tor-46871.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userLoggedIn.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4">
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/home" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                { isDoctor && <div>
                    <li>
                        <Link to="/allPatients" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/patient" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Prescription</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDoctor" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                </div> }
            </ul>
            <div className="">
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faFileAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;