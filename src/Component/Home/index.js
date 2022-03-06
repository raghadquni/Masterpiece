import React from "react";
import info from '../../Info/index';
import "./style.css"
import "../Nav/style.css"
import personalImg from '../Img/self01.png'
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";


function Home() {


    let bio = info.miniBio;
    function bioList() {
        let results = [];
        for(let i = 0; i < bio.length; i ++) {
            let value = bio[i];
            results.push(
                <li><span id="list" aria-label="emoji" role="img">{value[0]} </span> {value[1]}</li>
            )
        }
        return results;
    }


    return (
        <>
        <div className="home">
        <div className="profileImg" >
           <img src={personalImg} className="profileImg0" alt= "profileImg"/>
        </div>
        <div className="personalInfo">
        <h1 className="name">Hi, I'm <span className="fname">{info.firstName}</span> 👋🏻</h1>
        <h2 className="position">I'm a {info.position}.</h2>
        <ul className="bio">
            {bioList()}
        </ul>
        <div className="socialList">
        <ul> 
        <li className="Social"> <a href="https://www.linkedin.com/in/raghad-alquni/">
          <FaLinkedinIn className="socialIcon"/> </a> </li>
          <li className="Social"> <a href="https://github.com/raghadquni">
          <BsGithub className="socialIcon"/> </a> </li>
        </ul>
        </div>
        </div>
        </div>
        </>
    )
}

export default Home;
