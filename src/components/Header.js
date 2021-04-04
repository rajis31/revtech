import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropDown from 'react-bootstrap/NavDropdown';
import {IoLogoBuffer} from 'react-icons/io5';

const Header = function({brand}){
    return (
       <Navbar bg="light" expand="lg" className="sticky-top">
           <Navbar.Brand> <IoLogoBuffer /> {brand}</Navbar.Brand>
           <Navbar.Toggle />
           <Navbar.Collapse>
               <Nav className="mr-auto">
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="home">Services</Nav.Link>
                   <Nav.Link href="home">Contact</Nav.Link>
               </Nav>
               <Form inline>
                <FormControl type="text" placeholder="Email" className="mr-sm-2" />
                <Button>Subscribe Here</Button> 
               </Form>
           </Navbar.Collapse>
       </Navbar> 

    );
}

export default Header;