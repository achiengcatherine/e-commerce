import React from "react";
import "./App.css";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Collections from "./pages/Collections";

export default function App() {
  const cart = require("./images/cart.jpeg");
  const logo = require("./images/logo.jpg");
  const searchicon = require('./images/searchicon.png');

  return (
    <div className="App">
      <div className="img">
        <img src={cart} className="cart" alt="" />
        <img src={logo} className="logo" alt="" />
      </div>
      <Navbar />
      <div className="search">
        <input
          type="search"
          className="input"
          placeholder="Search..."
          onChange={() => {}}
        />
        <img
          src={searchicon}
          className="icon"
          alt="searchicon"
          onClick={() => {}}
        />
      </div>
      <div className="content">
        <Collections />
      </div>
    </div>
  );
}
