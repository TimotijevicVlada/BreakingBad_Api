import React from 'react';
import logo from "../logo.png";
import heisenberg from "../heisenberg.webp";

const Header = () => {
    return (
        <div className="header_container">
            <div>
                <img className="logo" src={logo} alt="logo"/>
                <img className="heisenberg" src={heisenberg} alt="heisenberg"/>
            </div>
        </div>
    )
}

export default Header;
