import React from 'react';
import "../css/Notification.css";

const Notification = (props) => {
    return (
        <div className="notification">
            <p>{props.message}</p>
        </div>
    );
}

export default Notification;