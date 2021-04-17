import React from 'react';
import "../css/Register.css";
import RegisterForm from "./RegisterForm";
const Register = () =>{
    return (
        <div className="register">
            <div className="register-undershade">
                <div className="register-overlay">
                    <div className="register-banner">
                        <h2>Come Register for our weekly Tech Newsletter</h2>
                        <h3>Register Now</h3>
                    </div>
                    <div className="register-form-section">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>


    );
}


export default Register;