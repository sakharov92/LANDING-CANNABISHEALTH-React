import React from 'react';
import "../css/Promo.css"
import background from "../img/background.png"


function Promo() {

    function slideLeft() {
        console.log("left")
    }



    function slideRight() {
        console.log("right")
    }


    return (
        <div className="promo">
            <div className="sliderBlock">
                <div className="sliderPicture">
                    <img src={background} alt="background"></img>
                </div>
                <div className="promoTitle">Pure CBD Pure Results</div>
                <div className="buttonBlock">
                    <div className="buttonBlockLeft" onClick={slideLeft}><i className="fas fa-arrow-left"></i></div>
                    <div className="buttonBlockRight" onClick={slideRight}><i className="fas fa-arrow-right"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Promo;