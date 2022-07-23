import { Button, Col, Container, Row } from "react-bootstrap";

import "./styles.scss";
import React, { useState } from "react";
import bubble1 from '../../assets/bubble1.png';
import bubble2 from '../../assets/bubble2.png';
import bubble3 from '../../assets/bubble3.png';
import bubble4 from '../../assets/bubble4.png';




const Bubbles = () => {

    function animateBubble1() {
       var offset = document.documentElement.style.getPropertyValue('--bubble-offset1');
       console.log("offset-before: ",offset);
       
       var off = parseInt(offset);
       console.log("OFFSET: ", off);
       off = off + 40;

       document.documentElement.style.setProperty('--bubble-offset1', offset);
       console.log("offset-after: ", offset);
    }

    return (
        <div className="parent" onClick={animateBubble1}>
            <div className="child1" >
                <img src={bubble1} className="bubble1Sizing" ></img>
            </div>

            <div className="child2">
                <img src={bubble2} className="bubble2Sizing"></img>
            </div>
            
            <div className="child3">
                <img src={bubble3} className="bubble3Sizing"></img>
            </div>
            
            <div className="child4">
                <img src={bubble4} className="bubble4Sizing"></img>
            </div>
        </div>
    );
};

export default Bubbles;
