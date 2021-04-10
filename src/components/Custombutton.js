import React from 'react';
import '../css/CustomButton.css';

const Custombutton = function({link,text}){
    return (
        <div className="custom-button">
            <a href={link}>{text}</a>
        </div>
    );
}

export default Custombutton;