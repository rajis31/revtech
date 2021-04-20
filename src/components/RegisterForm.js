import React, {useState} from'react';
import "../css/RegisterForm.css";
import Error from "./Error";

const RegisterForm = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(!email.includes("@") && name.length === 0){
            setErrorMessage("Name and Email are incorrect");
        } else if (!email.includes("@")){
            setErrorMessage("Email is missing @");
        } else if(name.length === 0 ) {
            setErrorMessage("Name is missing");
        }else {
            setErrorMessage("");
        }
    }


    return (
        <form onSubmit={submitHandler} className="register-form">
            <div className="register-form-title">
                 <p>Quick Registration</p>   
            </div>
            <label htmlFor="name">Your Name (required)</label>
            <input  type="text" 
                    placeholder="Name"
                    onChange={(event)=>nameHandler(event)} 
            />
            <label htmlFor="email">Your Email (required)</label>
            <input  type="text" 
                    placeholder="Email" 
                    onChange={(event)=>emailHandler(event)} 
            />
            <button type="submit">Subscribe to our Newsletter</button>
            {errorMessage.length > 0 ? ( <Error message={errorMessage}  />) :""}
        </form>
    )
}

export default RegisterForm;