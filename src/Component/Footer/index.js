import React from "react";
import info from '../../Info/index';
import "./style.css"

function Footer() {

    return (
        <>
        <div className="footer">
        <p> Made with ♥️ by {info.firstName} {info.lastName} </p>
        </div>
        </>
    )
}

export default Footer;
