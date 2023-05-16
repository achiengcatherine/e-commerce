import { useState , useEffect} from "react";
import React from "react";

import { ReactComponent as shoe1 } from './src/images/shoe1.jpg';
//import cart from './img/to/cart.jpeg'

const Collections = () => {
  const [Counter, setCounter] = useState(0);
  useEffect(() => {
    //alert('You have changed the counter to '+Counter)
  },[Counter]);
  const shoe1 = require(".images/shoe1.jpg")

  return (
    <div className="homepage">
      <div className="collection">
        <img src="{require(shoe1)}" alt=""/>
      </div>
      <div className="details">
        <h2>sneaker company</h2>
        <h1>
          Kate Limited Edition<br/> Sneakers
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

        <div className="counter">
          <button
            className="decr"
            onClick={() => setCounter((prevCount) => prevCount - 1)}
          >
            -
          </button>
          <h3 className="count">{Counter}</h3>
          <button
            className="inc"
            onClick={() => setCounter((prevCount) => prevCount + 1)}
          >
            +
          </button>
          <button className="btn">
            <img src="./img/cart.jpeg}" className="cart" alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
