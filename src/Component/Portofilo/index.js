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
       <Card style={{ height: '22rem', width: '20rem' }}>
              <Card.Img variant="top" src={value[1]} width="50%" />
              <Card.Body>
                <Card.Title>{value[0]}</Card.Title>
                <Card.Text className="colorText"> Used: {value[2]}</Card.Text>
                <ul className="btnUl" >
            <li className="btnLi">   <form action={value[3]}>
    <input  className="btn" type="submit" value="Live Site" />
</form> </li> 
<li className="btnLi">  <form action={value[4]}>
    <input className="btn" type="submit" value="Source Code" />
</form ></li> 
</ul>
              </Card.Body>
              </Card>

        
</div>
              </>
          )
      }
      return results;
  }


  let prtfilioUX = info.portfolioUX;
  function bioUXList() {
      let results = [];
      for(let i = 0; i < prtfilioUX.length; i ++) {
          let value = prtfilioUX[i];
          results.push(
            <>
             <div className="portfilioUX">
       <Card style={{ height: '23.5rem' , width: '20rem'}}>
              <Card.Img variant="top" src={value[1]} width="50%" />
              <Card.Body>
                <Card.Title>{value[0]}</Card.Title>
                <Card.Text className="colorText"> Used: {value[2]}</Card.Text>
<ul className="btnUl" >
            <li className="btnLi">   <form action={value[3]}>
    <input  className="btn" type="submit" value="Behance" />
</form> </li> 
<li className="btnLi">  <form action={value[4]}>
    <input className="btn" type="submit" value="Wireframe and High-fi" />
</form ></li> 
</ul>
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
<h1 className="JS"> JS </h1>
           {bioList()}
<h1 className="UXUI"> UX / UI </h1>
{bioUXList()}

        </>
    )
}

export default Portfilio;
