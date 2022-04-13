import React from "react";
import ReactLogo from "../images/reactLogo.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="reactLogo" src={ReactLogo} alt="reactLogo" />
        <h1>ReactFacts</h1>
      </div>
      <p>React Course - Project 1</p>
    </div>
  );
}
