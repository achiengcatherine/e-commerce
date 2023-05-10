import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//import cart from "./src/images/cart.jpeg";
//import logo from "./src/images/logo.png";
import Home from "./pages/Home";

export default function App() {

  const cart = require("./images/cart.jpeg");
  const logo = require("./images/logo.jpg");
  return (
    <div className="App">
      <div className="img">
        <img src={cart} className="cart" alt="" />
        <img src={logo} className="logo" alt="" />
      </div>
      <Navbar />

      <div className="content">
        <Home />
      </div>
    </div>
  );
}
