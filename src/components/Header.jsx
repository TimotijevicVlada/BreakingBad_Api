import React from 'react';
import logo from "../logo.png";

const Header = () => {
    return (
        <div className="header_container">
            <div><img className="logo" src={logo} alt="logo"/></div>
        </div>
    )
}

export default Header;
