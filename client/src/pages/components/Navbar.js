import React from 'react'
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
   return (
      <div className="Navbar">
         <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Navbar Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
               <Nav.Link href="/add-event">+ Add Event</Nav.Link>
               <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   );
}

export default NavBar
