import React from "react"; 
//import shoe1 from "./images/shoe1.jpg";


const Collections = () => {
 const shoe1 = require(".images/shoe1.jpg")
 
  return (
    <div className="homepage">
      <div className="collection">
        <img src="{shoe1}" alt="" />
      </div>
      <div className="details">
        <h2 className="sneaker">sneaker company</h2>
        <h1>
          Kate Limited Edition<br></br> Sneakers
        </h1>
        <p>
          These low profile sneakers are your perfect casual wear companion.
          <br></br>
          featuring a durable rubber outer sole, they will withstand everything{" "}
          <br></br>the weather can offer.
        </p>
        <br></br>
        <br></br>
        <div className="price">
          <h1 className="afterdisc">$125.00</h1>
          <h3 className="disc">50%</h3>
        </div>
        <h2 className="initialprice">$250.00</h2>

        <div className="count">
          <button className="decr">-</button>
          <h3 className="qty">3</h3>
          <button className="inc">+</button>
          <button className="btn">
            <img src=".images/cart.jpeg" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
