import React from "react";
import "../Register/Register.css";
import {Nav,Navbar,NavDropdown} from "react-bootstrap"
import PHMEO from "../images/PHMEO.png";
import phmeo2 from "../images/phmeo2.png";



function Register(){
    return(
        <div>
      <Navbar className="navbar navbar-inverse set-radius-zero">
         <Nav className="container">
       <img  alt="phmeo" className="header-logo" src={PHMEO}/>  
        <Navbar.Brand className="navbar-header">
           PRESTEA HUNI VALLEY MUNICIPAL EDUCATION DIRECTORATE
        </Navbar.Brand>
        <div className="left-div">
         <i className="fa fa-user-plus login-icon" ></i>
        </div>
        </Nav>
      </Navbar>

      <Navbar bg="dark"  variant="dark"  expand="lg">
      <Navbar.Brand href="#home">
             <img
              alt=""
              src={phmeo2}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            PHMED
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" ><i className="fa fa-home"></i>&nbsp;HOME</Nav.Link>
          <Nav.Link  href="#link"><i className="fa fa-pencil"></i>&nbsp;STAFF UPDATE</Nav.Link> 
          <NavDropdown  title="DEPARTMENT" id="basic-nav-dropdown" > 
            <NavDropdown.Item href="#action1">Human Resource</NavDropdown.Item>
            <NavDropdown.Item href="#action2">
              Management and Supevision
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">Planning and Monitoring</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">
              Finance and Administration
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#schools"><i className="fa fa-desktop"></i>&nbsp;SCHOOLS</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav className="nav navbar-nav">
        <Nav.Link href="logout" className="nav-item"><i className="fa fa-sign-out"></i>&nbsp;Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
         
        </div>
    );
}


export default Register;
