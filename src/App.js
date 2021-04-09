import React from 'react';
import Header from './components/Header';
import Alertbox from './components/Alertbox';
import Speed from './components/Speed';
import Steps from './components/Steps';

export default function App(){
    return (
        <div>
           <Header {...{brand:"RevTech"}}></Header>
           <Alertbox {...{message:"This is a prototype built using React"}}></Alertbox>
           <Speed></Speed>
           <Steps></Steps>
        </div>
    );
}