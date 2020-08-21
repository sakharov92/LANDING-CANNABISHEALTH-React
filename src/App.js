import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Promo from './components/Promo.js';
import Products from './components/Products.js';
import Blog from './components/Blog.js';
import Instagram from './components/Instagram.js';



function App() {
    return (
        <>
            <Header />
            <Promo />
            <Products />
            <Blog />
            <Instagram />
        </>
    )
}



export default App;