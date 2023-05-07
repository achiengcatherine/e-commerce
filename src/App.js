import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  //const title = "sneakers";
  // const logo = "public/images/logo.png";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
