import React from "react";
import resume from '../Img/resume.png'
import Footer from '../Footer';
import "./style.css"

function Resume() {

    return (
        <>
        <div className="resumeDiv">
        <img src={resume} className="resume"/>
        </div>
        </>

    )
}

export default Resume;
