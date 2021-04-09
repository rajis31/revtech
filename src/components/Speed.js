import React from 'react';
import Speed1920 from '../images/speed-1920.jpg';
import {IoMdSpeedometer} from 'react-icons/io';
import "../css/Speed.css";

const Speed = function(){
    return (
        <div style={{position: "relative"}} className="speed">
             <img src={Speed1920} />
            <div style={{position: "absolute"}} className="speed-text">
                <IoMdSpeedometer size={120} color="red"/>
                <p className="quote">
                Welcome to <span style={{color: "red"}} >R</span>evTech <br/>
                <span style={{color: "blue"}} >D</span>evops at the speed of light</p>
            </div>
    
       
        </div>
    );
}

export default Speed;