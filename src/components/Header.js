import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {IoMdSpeedometer} from 'react-icons/io';

const Header = function({brand, showNotification}){

    const submitHandler = (e) => {
            e.preventDefault();
            showNotification(true);

            setTimeout(function(){
                showNotification(false);
            },3000)
            
    }

    return (
       <Navbar bg="light" expand="lg" className="sticky-top">
           <Navbar.Brand> <IoMdSpeedometer /> {brand}</Navbar.Brand>
           <Navbar.Toggle />
           <Navbar.Collapse>
               <Nav className="mr-auto">
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="home">Services</Nav.Link>
                   <Nav.Link href="home">Contact</Nav.Link>
               </Nav>
               <Form inline onSubmit={submitHandler}>
                <FormControl type="text" placeholder="Email" className="mr-sm-2" />
                <Button type="submit">Subscribe Here</Button> 
               </Form>
           </Navbar.Collapse>
       </Navbar> 


    );
}

export default Header;