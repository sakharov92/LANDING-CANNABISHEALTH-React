import React from 'react';
import logo from '../img/Logo.png'
import "../css/Header.css"



function Header() {

    let isBurgerOn = false;




    function menuSwitch() {
        let menu = document.querySelector(".burgerMenuList");
        let menuButton = document.querySelector(".burger-menu");
        if (isBurgerOn) {
            menu.classList.remove("showMenu");
            menuButton.classList.remove("active");
        } else {
            menu.classList.add("showMenu");
            menuButton.classList.add("active");
        }
        isBurgerOn = !isBurgerOn;
    }



    return (

        <header>
            <div className="container">
                <div className="rootBurger">
                    <div className="burger-menu" onClick={menuSwitch}>
                        <div className="burger-menu__line line1"></div>
                        <div className="burger-menu__line line2"></div>
                        <div className="burger-menu__line line3"></div>
                    </div>
                </div>
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

            </div>
            <div className="container add">
                <ul className="burgerMenuList">
                    <li>Our Blog</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </header >

    )
}
export default Header;
