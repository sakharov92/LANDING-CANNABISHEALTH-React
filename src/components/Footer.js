import React from 'react';
import "../css/Footer.css";
import logoWhite from "../img/logoWhite.png"



function Footer() {
    return (
        <footer id="contact">
            <div className='container'>
                <section className='subscribe'>
                    <h2 className='footerTitle'>Subscribe For  a <span>Newsletter</span></h2>
                    <div className="inputBlock">
                        <section className='EmailArea'><input className='emailInput'></input></section>
                        <section className='EmailButtonArea'><i className="far fa-envelope"></i></section>
                    </div>
                </section>
                <section className='info'>
                    <section className="footerLogo">
                        <img src={logoWhite} alt="logo"></img>
                    </section>
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
                </section>
            </div>
        </footer>
    )
}

export default Footer;