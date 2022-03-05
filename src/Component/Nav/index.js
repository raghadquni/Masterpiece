import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import "./style.css"


function Nav() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [darkMode, setDarkMode] = useState(false);
  

  const toggleDarkMode = () => {
    setDarkMode(darkMode ? false : true);
  };

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <ul className="Nav" >
        <li className={splitLocation[1] === "" ? "active" : ""}> <Link to="/">Home</Link></li>
        <li className={splitLocation[1] === "" ? "active" : ""}> <Link to="/About">About me</Link> </li>
        <li className={splitLocation[1] === "" ? "active" : ""}>  <Link to="/Portofilo">Portfilio</Link> </li>
        <li className={splitLocation[1] === "" ? "active" : ""}> <Link to="/Resume"> Resume </Link> </li>
        <li className="darkIcon">
      <button onClick={toggleDarkMode} className="darkMode">
        {darkMode ? <MdLightMode color="gold" /> : <WiMoonWaningCrescent3 /> }
      </button>
      </li>
      </ul>
      <hr />
    </div>
  );
}

export default Nav;
