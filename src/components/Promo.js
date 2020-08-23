import React from 'react';
import "../css/Promo.css"
import background0 from "../img/background.png";
import background1 from "../img/101.jpg";
import background2 from "../img/107.jpg";



class Promo extends React.Component {
    constructor(props) {
        super(props);
        this.slideRight = this.slideRight.bind(this);
        this.slideLeft = this.slideLeft.bind(this);
    }

    imageNumber = 0;

    slideLeft() {
        let arr = document.querySelectorAll(".sliderImage");
        arr[this.imageNumber].classList.add("hidden");
        if (this.imageNumber === 0) {
            this.imageNumber = arr.length - 1;
        } else {
            this.imageNumber--;
        }
        arr[this.imageNumber].classList.remove("hidden");
    }

    slideRight() {
        let arr = document.querySelectorAll(".sliderImage");
        arr[this.imageNumber].classList.add("hidden");
        if (this.imageNumber === arr.length - 1) {
            this.imageNumber = 0;
        } else {
            this.imageNumber++;
        }
        arr[this.imageNumber].classList.remove("hidden");
    }
    
    render() {
        return (
            <div className="promo">
                <div className="sliderBlock">
                    <div className="sliderPicture">
                        <img src={background0} alt="background0" className="sliderImage"></img>
                        <img src={background1} alt="background1" className="hidden sliderImage"></img>
                        <img src={background2} alt="background2" className="hidden sliderImage"></img>

                    </div>
                    <div className="promoTitle">Pure CBD Pure Results</div>
                    <div className="buttonBlock">
                        <div className="buttonBlockLeft" onClick={this.slideLeft}><i className="fas fa-arrow-left"></i></div>
                        <div className="buttonBlockRight" onClick={this.slideRight}><i className="fas fa-arrow-right"></i></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Promo;