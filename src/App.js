import React from "react";
// import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";

export default function App() {
  const [lightMode, setLightMode] = React.useState(true);
  function toggleLightMode(){
    setLightMode(prevMode => !prevMode)
  }
  return (
    <div className="container">
      <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <Main lightMode={lightMode} />
    </div>
  );
}
