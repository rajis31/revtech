import React, {useState} from 'react';
import Header from './components/Header';
import Alertbox from './components/Alertbox';
import Speed from './components/Speed';
import Steps from './components/Steps';
import Services from './components/Services';
import Register from "./components/Register";
import Team from "./components/Team";
import Affiliation from "./components/Affiliation";
import Footer from "./components/Footer";
import Notification from "./components/Notification";

export default function App(){
    const [showNotification, setShowNotification] = useState(false);

    return (
        <div>
           <Header {...{brand:"RevTech",showNotification: setShowNotification }}></Header>
           {showNotification ? <Notification message="Thank you for signing up"/> : "" }
           <Alertbox {...{message:"This is a prototype built using React"}}></Alertbox>
           <Speed />
           <Steps />
           <Services />
           <Register />
           <Team />
           <Affiliation />
           <Footer />
        </div>
    );
}