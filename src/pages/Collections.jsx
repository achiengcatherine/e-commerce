import { useState , useEffect} from "react";
import React from "react";

const Collections = () => {
  const [Counter, setCounter] = useState(0);
  useEffect(() => {
    //alert('You have changed the counter to '+Counter)
  }, [Counter]);
  
  //const shoe1 = require(".images/shoe1.jpg")

  return (
    <div className="homepage">
      <div className="collection">
        <img src="./img/shoe1.jpg" className="shoe1" alt="" />
        <div className="stock" >
          <img src="./img/shoe2.jpg" alt="" />
          <img src="./img/shoe3.jpg" alt="" />
          <img src="./img/shoe4.jpeg" alt="" />
          <img src="./img/shoe5.jpeg" alt="" />
          <img src="./img/shoe6.jpg" alt="" />
        </div>
      </div>
      <div className="details">
        <h2 className="title">sneaker company</h2>
        <h1>
          Kate Limited Edition
          <br /> Sneakers
        </h1>
        <p>
          These low profile sneakers are your perfect casual wear companion.
          featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
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
            <img src="./img/carticon.jpg" className="cart" alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
