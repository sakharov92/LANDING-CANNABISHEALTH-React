import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Promo from './components/Promo.js';
import Products from './components/Products.js';
import Blog from './components/Blog.js';
import Instagram from './components/Instagram.js';
import Footer from './components/Footer.js'
import Advertising from './components/Advertising.js';



function App() {
    return (
        <>
            <Header />
            <Promo />
            <Advertising />
            <Products />
            <Blog />
            <Instagram />
            <Footer />
        </>
    )
}



export default App;