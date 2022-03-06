import React from "react";
// import info from '../../Info/index';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import port1 from '../Img/port1.png'
import "./style.css"


function Portfilio() {


    return (
        <>
        <div className="portfilio">
       <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={port1} width="50%" />
  <hr className="portHr"/>
  <Card.Body>
    <Card.Title>Portofilo</Card.Title>
    <Button className="btn" style={{ width: '8rem' }} variant="primary" >Live Site</Button>
    <Button className="btn" style={{ width: '8rem', marginLeft: '1rem' }} variant="primary">Source Code</Button>
  </Card.Body>
</Card>
</div>
        </>
    )
}

export default Portfilio;
