import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { WiMoonWaningCrescent3 } from "react-icons/wi";

function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(darkMode ? false : true);
  };

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <h1>Hello, world!</h1>
      

      <button onClick={toggleDarkMode} className="darkMode">
        {darkMode ? <MdLightMode color="gold"/> : <WiMoonWaningCrescent3 /> }
      </button>
    </div>
  );
}

export default Nav;
