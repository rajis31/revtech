import React from 'react';
import '../css/Stepdescription.css';

const Stepdescription = function({title,description}){
    return (
        <div className="step-description">
            <div className="step-description-title">
                <p>{title}</p>
            </div>

            <div className="step-description-summary">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Stepdescription;