import React from "react";
// import logo from "../images/reactLogo.png"

export default function Main(props) {

  return (
    <main className={props.lightMode? "light main--section main--section--light" : "main--section"}>
      <h1 className="facts--heading">Fun facts about React</h1>
      <ul className="facts--list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
