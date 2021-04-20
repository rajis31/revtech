import React, {useState} from 'react';
import '../css/Alertbox.css';
import {BsFillXCircleFill} from 'react-icons/bs';
import reactLogo from '../images/reactjs-icon.svg';

const Alertbox = function({message}){
    const [show,showFunc] = useState(true);
    return (
        <div className="alertbox" 
             style={show ? {display:"block"} : {display: "none"}}
             onClick={()=>showFunc(false)}
        >
            <div>
                <img src={reactLogo} />
                <p className="message">{message}</p>
                <p className="close-icon"><BsFillXCircleFill/></p>
            </div>
  
        </div>
    );
}

export default Alertbox;

