import { faBook, faFaceLaughWink, faHotel, faTachographDigital, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from "./component/logo.png"
function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <img 
            src={LOGO}
            />
            {/* <!-- Sidebar - Brand --> */}
            {/* <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faFaceLaughWink} size={"2x"} />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a> */}

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    <FontAwesomeIcon icon={faTachographDigital} style={{ marginRight: "0.5rem" }} />
                    <span>Dashboard</span>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Users</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faHotel} style={{ marginRight: "0.5rem" }} />
                    <span>Hotel</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faBook} style={{ marginRight: "0.5rem" }} />
                    <span>Booking</span>
                </Link>
            </li>

        </ul>
    )
}

export default Sidebar