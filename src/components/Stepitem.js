import React from 'react';
import '../css/Stepitem.css';

const Stepitem = function(props){
        return (
            <div className="stepitem">
                {props.children}
            </div>
        );
}

export default Stepitem;