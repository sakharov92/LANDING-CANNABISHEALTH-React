import React from 'react';
import logo from '../img/Logo.png'
import "../css/Header.css"



function Header() {

    return (
        <header>
            <ul>
                <li>Our Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="userBlock">
                <i className="fas fa-search"></i>
                <i className="fas fa-shopping-cart"></i>
                <i className="far fa-user"></i>
            </div>
        </header>

    )
}
export default Header;
