import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"


function Nav() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  


  return (
    <>
      <ul className="Nav" >
        <li className={splitLocation[1] === "" ? "active" : ""}> <Link to="/">Home</Link></li>
        <li className={splitLocation[1] === "About" ? "active" : ""}> <Link to="/About">About me</Link> </li>
        <li className={splitLocation[1] === "Portofilo" ? "active" : ""}>  <Link to="/Portofilo">Portofilo</Link> </li>
        <li className={splitLocation[1] === "Resume" ? "active" : ""}> <Link to="/Resume"> Resume </Link> </li>
  
      </ul>
      <hr />
      </>
  );
}



export default Nav;

