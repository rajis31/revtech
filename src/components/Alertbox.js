import React, {useState} from 'react';
import '../css/Alertbox.css';
import {BsFillXCircleFill} from 'react-icons/bs';


const Alertbox = function({message}){
    const [show,showFunc] = useState(true);
    return (
        <div className="alertbox" 
             style={show ? {display:"block"} : {display: "none"}}
             onClick={()=>showFunc(false)}
        >
            <p className="close-icon"><BsFillXCircleFill/></p>
            <p>{message}</p>
        </div>
    );
}

export default Alertbox;

