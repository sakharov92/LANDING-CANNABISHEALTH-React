import React from 'react';
import "../css/Footer.css";
import logoWhite from "../img/logoWhite.png"



function Footer() {
    return (
        <footer id="contact">
            <div className='container'>
                <div className='subscribe'>
                    <div className='footerTitle'>Subscribe For  a <span>Newsletter</span></div>
                    <div className="inputBlock">
                        <div className='EmailArea'><input className='emailInput'></input></div>
                        <div className='EmailButtonArea'><i className="far fa-envelope"></i></div>
                    </div>
                </div>
                <div className='info'>
                    <div className="footerLogo">
                        <img src={logoWhite} alt="logo"></img>
                    </div>
                    <ul className="menu">
                        <li><span>Menu</span></li>
                        <li>Our Blog</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className="menu">
                        <li><span>About Us</span></li>
                        <li>Our Blog</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className="menu">
                        <li><span>Contct Us</span></li>
                        <li><i className="fas fa-phone-alt"></i> +1(234)567-89-00</li>
                        <li><i className="fas fa-envelope"></i> someEmail@.com</li>
                        <li><i className="fas fa-home"></i> 1111 Some address here 1111</li>
                    </ul>
                    <ul className="about"></ul>
                    <ul className="contact"></ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer;