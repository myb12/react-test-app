import React from 'react';
import './Navbar.css'

const Navbar = ({ openSidebar, handleSidebar }) => {

    return (
        <div>
            <div className="navbar">
                <i className="fas fa-bars" onClick={handleSidebar}></i>
            </div>
        </div>
    );
};

export default Navbar;