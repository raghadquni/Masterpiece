import React from "react";
import info from '../../Info/index';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"


function Portfilio() {

  let prtfilio = info.portfolio;
  function bioList() {
      let results = [];
      for(let i = 0; i < prtfilio.length; i ++) {
          let value = prtfilio[i];
          results.push(
            <>
             <div className="portfilio">
       <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={value[1]} width="50%" />
              <hr className="portHr"/>
              <Card.Body>
                <Card.Title>{value[0]}</Card.Title>
                <Button className="btn" style={{ width: '8rem' }} variant="primary" >Live Site</Button>
                <Button className="btn" style={{ width: '8rem', marginLeft: '1rem' }} variant="primary">Source Code</Button>
              </Card.Body>
              </Card>
</div>
              </>
          )
      }
      return results;
  }
    return (
        <>
       
           {bioList()}
  {/* <Card.Img variant="top" src={port1} width="50%" />
  <hr className="portHr"/>
  <Card.Body>
    <Card.Title>Portofilo</Card.Title>
    <Button className="btn" style={{ width: '8rem' }} variant="primary" >Live Site</Button>
    <Button className="btn" style={{ width: '8rem', marginLeft: '1rem' }} variant="primary">Source Code</Button>
  </Card.Body> */}


        </>
    )
}

export default Portfilio;
