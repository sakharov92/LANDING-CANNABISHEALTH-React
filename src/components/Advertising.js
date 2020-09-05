import React from 'react';
import brownBottle from "../img/browmBottle.png"
import redBottle from "../img/redBottle.png"
import blackBottle from "../img/blackBottle.png"
import "../css/Advertising.css"



function Advertising() {
    return (
        <section className="advertising">
            <div className="container">
                <section className="advBlock">
                    <section className="advItem">
                        <h2 className="advTitle">Oils & Tinctures</h2>
                        <div className='advPicture'>
                            <img src={brownBottle} alt="browmBottle"></img>
                        </div>
                    </section>
                    <section className="advItem">
                        <h2 className="advTitle">Edibles & Drinks</h2>
                        <div className='advPicture'>
                            <img src={redBottle} alt="browmBottle"></img>
                        </div>
                    </section>
                    <section className="advItem">
                        <h2 className="advTitle">Body & Skin Care</h2>
                        <div className='advPicture'>
                            <img src={blackBottle} alt="browmBottle"></img>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}
export default Advertising;