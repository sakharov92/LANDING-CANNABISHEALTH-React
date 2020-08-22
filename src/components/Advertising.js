import React from 'react';
import brownBottle from "../img/browmBottle.png"
import redBottle from "../img/redBottle.png"
import blackBottle from "../img/blackBottle.png"
import "../css/Advertising.css"



function Advertising() {
    return (
        <div className="advertising">
            <div className="container">
                <div className="advBlock">
                    <div className="advItem">
                        <div className="advTitle">Oils & Tinctures</div>
                        <div className='advPicture'>
                            <img src={brownBottle} alt="browmBottle"></img>
                        </div>
                    </div>
                    <div className="advItem">
                        <div className="advTitle">Edibles & Drinks</div>
                        <div className='advPicture'>
                            <img src={redBottle} alt="browmBottle"></img>
                        </div>
                    </div>
                    <div className="advItem">
                        <div className="advTitle">Body & Skin Care</div>
                        <div className='advPicture'>
                            <img src={blackBottle} alt="browmBottle"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Advertising;