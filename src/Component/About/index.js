import React from "react";
import "./style.css"
import "../Nav/style.css"
import info from '../../Info/index';
import { BsFillCircleFill } from "react-icons/bs";

function About() {

    let skills = info.skills;

    function skillsList() {
        let results = [];
        for(let i = 0; i < skills.length; i++) {
            let value = skills[i];
            results.push(
                <li> {value} </li>
            )
        }
        return results;
    }
   

    let hobbies = info.hobbies;
    function hobbiesList() {
        let results = [];
        for(let i = 0; i < hobbies.length; i ++) {
            let value = hobbies[i];
            results.push(
                <li className="hobbies"><span id="list" aria-label="emoji" role="img">{value[0]} </span> {value[1]}</li>
            )
        }
        return results;
    }



    return (
        <>
        <div className="about">
        <div className="terminal">
        <div className="topRow">
            <ul className="topTer">
                    <li className="red"> <BsFillCircleFill /> </li>
                    <li className="gold"><BsFillCircleFill />  </li>
                    <li className="green"> <BsFillCircleFill /> </li>
            </ul>
                </div>
                <div className="window">
                    <p className="terName"><span className="terminalName"> {info.firstName.toLowerCase()}{info.lastName.toLowerCase()} $ </span> cat about{info.firstName.toLowerCase()}</p>
                    <p> <span className="terName terminalName"> {info.firstName.toLowerCase()}{info.lastName.toLowerCase()} about{info.firstName.toLowerCase()} <span className="green">(master)</span> $ </span> {info.bio}</p>
                   
                    </div>
                </div>

                <div className="terminal2">
        <div className="topRow">
            <ul className="topTer">
                    <li className="red"> <BsFillCircleFill /> </li>
                    <li className="gold"><BsFillCircleFill />  </li>
                    <li className="green"> <BsFillCircleFill /> </li>
            </ul>
                </div>
                <div className="window">
                    <p className="terName"><span className="terminalName"> {info.firstName.toLowerCase()}{info.lastName.toLowerCase()} $ </span> cd skills</p>
                    <p> <span className="terName terminalName">{info.firstName.toLowerCase()}{info.lastName.toLowerCase()} skills <span className="green">(master)</span> $ </span> ls </p>

                    <ul className="skills"> {skillsList()} </ul>
                    </div>
                </div>


                <div className="terminal2">
        <div className="topRow">
            <ul className="topTer">
                    <li className="red"> <BsFillCircleFill /> </li>
                    <li className="gold"><BsFillCircleFill />  </li>
                    <li className="green"> <BsFillCircleFill /> </li>
            </ul>
                </div>
                <div className="window">
                    <p className="terName"><span className="terminalName"> {info.firstName.toLowerCase()}{info.lastName.toLowerCase()} $ </span> cd hobbies/interests</p>
                    <p> <span className="terName terminalName">{info.firstName.toLowerCase()}{info.lastName.toLowerCase()} hobbies/interests <span className="green">(master)</span> $ </span> ls </p>

                    <ul className="skills"> {hobbiesList()} </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;
