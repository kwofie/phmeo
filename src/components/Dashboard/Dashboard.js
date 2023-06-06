import React from "react";
import {Container,NavDropdown,Nav,Navbar} from "react-bootstrap"
import Header from "../Header/Header";

function Dashboard () {
  return(
    <div>
      <Header/>
    <Navbar bg="dark"  variant="dark"  expand="lg">
      <Navbar.Brand href="#home">
             <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            PHMEO
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" >Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <span className="fa fa-sitemap" ></span>
          <NavDropdown title="Department" id="basic-nav-dropdown" >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#logout" ><span className="fa fa-sign-out">
       </span>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  
  </Navbar>

  </div>


  );




}



export default Dashboard;