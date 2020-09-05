import React from "react";
import "../css/Instagram.css";
import inst1 from "../img/inst1.png"
import inst2 from "../img/inst2.png"
import inst3 from "../img/inst3.png"
import inst4 from "../img/inst4.png"
import inst5 from "../img/inst5.png"
import inst6 from "../img/inst6.png"

function Instagram() {
    let arr = [inst1, inst2, inst3, inst4, inst5, inst6];
    const newArr = arr.map((e) =>
        <div className='instagramPicture' key={e}><img src={e} alt={e.slice(e)}></img></div>
    )
    return (
        <section id="about" className="instaContainer">
            <div className="container">
                <h2 className='instaTitle'>#INSTAGRAM FEED</h2>
                <section className='instagram'>{newArr}</section>
            </div>
        </section>
    )
}
export default Instagram;