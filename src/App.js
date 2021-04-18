import React from 'react';
import Header from './components/Header';
import Alertbox from './components/Alertbox';
import Speed from './components/Speed';
import Steps from './components/Steps';
import Services from './components/Services';
import Register from "./components/Register";
import Team from "./components/Team";

export default function App(){
    return (
        <div>
           <Header {...{brand:"RevTech"}}></Header>
           <Alertbox {...{message:"This is a prototype built using React"}}></Alertbox>
           <Speed />
           <Steps />
           <Services />
           <Register />
           <Team />
        </div>
    );
}