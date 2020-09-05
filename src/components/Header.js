import React from 'react';
import logo from '../img/Logo.png'
import "../css/Header.css"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.menuSwitch = this.menuSwitch.bind(this);

    }

    isBurgerOn = false;

    menuSwitch() {
        let menu = document.querySelector(".burgerMenuList");
        let menuButton = document.querySelector(".burger-menu");
        if (this.isBurgerOn) {
            menu.classList.remove("showMenu");
            menuButton.classList.remove("active");
        } else {
            menu.classList.add("showMenu");
            menuButton.classList.add("active");
        }
        this.isBurgerOn = !this.isBurgerOn;
    }

    componentDidMount() {
        const anchors = document.querySelectorAll('a[href*="#"]')
        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()
                const blockID = anchor.getAttribute('href').substr(1)
                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }

    render() {
        return (
            <header>
                <div className="container">
                    <section className="rootBurger">
                        <nav className="burger-menu" onClick={this.menuSwitch}>
                            <div className="burger-menu__line line1"></div>
                            <div className="burger-menu__line line2"></div>
                            <div className="burger-menu__line line3"></div>
                        </nav>
                    </section>
                    <ul>
                        <a href="#blog">  <li>Our Blog</li></a>
                        <a href="#about">   <li>About Us</li></a>
                        <a href="#contact">   <li>Contact Us</li></a>
                    </ul>
                    <div className="logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <section className="userBlock">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="far fa-user"></i>
                    </section>
                </div>
                <nav className="container add">
                    <ul className="burgerMenuList">
                        <a href="#blog">     <li>Our Blog</li></a>
                        <a href="#about">     <li>About Us</li></a>
                        <a href="#contact">    <li>Contact Us</li></a>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;
