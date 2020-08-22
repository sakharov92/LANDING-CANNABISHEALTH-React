import React from "react";
import PRODUCTS from '../data/products.js'
import "../css/Products.css"

function Products() {
    const listItems = [];
    for (let i in PRODUCTS) {
        let discount = "";
        let price = <span className="price">
            {PRODUCTS[i].price + "$"}
        </span>
        if (PRODUCTS[i].discount !== 0) {
            discount = <span className="discount">{PRODUCTS[i].discount + "$"}</span>;
            price = <s><span className="price">{PRODUCTS[i].price + "$"} </span></s>
        }
        listItems.push(
            <div key={i} className="productItem" >
                <div className="pictureBlock">
                    <img src={PRODUCTS[i].url} alt={PRODUCTS[i].name}></img>
                </div>
                <span className="productName">
                    {PRODUCTS[i].name}
                </span>
                <div className="priceBlock">
                    {price}
                    {discount}
                </div>
            </div>
        )
    }
    return (
        <div className="products">
            <div className="container">
                <div className="productsTitle">Featured Products</div>
                <div className="productsList">
                    {listItems}
                </div>
            </div>
        </div>
    )
}
export default Products;