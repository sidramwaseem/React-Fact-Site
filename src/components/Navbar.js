import React from "react";
import ReactLogo from "../images/reactLogo.png";
// import Dark from "../images/light-toggle-dark.png";
export default function Navbar(props) {
  return (
    <div className={props.lightMode ? "light navbar" : "navbar"}>
      <div className="nav-logo">
        <img className="reactLogo" src={ReactLogo} alt="reactLogo" />
        <h1>ReactFacts</h1>
      </div>
     <p> <span className={props.lightMode?"lightText":"dark"}>Light</span>  {<i onClick={props.toggleLightMode} class={props.lightMode ? "fa-solid fa-toggle-off fa-2x" : "fa-solid fa-toggle-on fa-2x"}></i>} <span className={props.lightMode?"lightText":"dark"}>Dark</span> </p>
    </div>
  );
}
 //<i class="fa-solid fa-toggle-off"></i>