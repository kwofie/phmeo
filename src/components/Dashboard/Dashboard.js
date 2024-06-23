import React from "react";
import {Nav,Navbar,NavDropdown} from "react-bootstrap"
import PHMEO from "../images/PHMEO.png";
import phmeo2 from "../images/phmeo2.png";
import "../Dashboard/Dashboard.css";
//import Sidebar from "../Sidebar/Sidebar";


function Dashboard () {
 
  return(
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-inverse set-radius-zero">
         <div className="container">
       <img  alt="phmeo" className="header-logo" src={PHMEO}/>  
        <div className="navbar-header">
           PRESTEA HUNI VALLEY MUNICIPAL EDUCATION DIRECTORATE
        </div>
        <div className="left-div">
         <i className="fa fa-user-plus login-icon" ></i>
        </div>
        </div>
      </nav>

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
          <Nav.Link href="#home" ><i className="fa fa-home"></i>&nbsp;Home</Nav.Link>
          <Nav.Link  href="#link"><i className="fa fa-user-plus"></i>&nbsp;Add Staff</Nav.Link> 
          <NavDropdown  title="Department" id="basic-nav-dropdown" > 
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
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav className="nav navbar-nav">
        <Nav.Link href="#logout" className="nav-item"><i className="fa fa-sign-out"></i>&nbsp;Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>

  </Navbar>
   <div className="content-wrapper ">
     <nav id="sidebar">
          <div className="sidebar-header">
             <h5>DASHBOARD</h5>
             <strong>PHMED</strong>
          </div>

          <ul className="list-unstyled components">
             <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                   <i className="fa fa-home"></i>&nbsp;
                   Home
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#staff">Staff</a>
                  </li>
                  <li>
                    <a href="#nonteaching">Non-Teaching Staff</a>
                  </li>
                </ul>
             </li>
             <li>
               
              <a href="#staff" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" >
                <i className="fa fa-briefcase"></i>&nbsp;
                Staff
              </a>
              <ul className="collapse list-unstyled" id="staff">
                <li>Teaching</li>
                <li>Non-Teaching</li>
              </ul>
             </li>
             <li>
              <a href="#schools" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-database"></i>&nbsp; Schools</a>
              <ul className="collapse list-unstyled" id="schools">
                <a href="#public"><i className="fa-dasboard"></i>Public schools
                <ul className="public">
                  <li></li>
                </ul>
                </a>
                <a href="#private"><i className="fa-dasboard"></i>Private schools</a>
              </ul>
             </li>
          </ul>
     </nav>
     {/* The Main Page */}
     <div className="mainpage">
      <p>This is the Main Page</p>
     </div>



       
    
    </div>


    <footer>
  <ul>
      <li><a href="mailto:info@stackfindover.com"><i className="fa fa-envelope-open"></i> info@stackfindover.com</a></li>
      <li><a href="#twiter"><i className="fa fa-twitter"></i>@stackfindover</a></li>
      <li><a href="#linkedin"><i className="fa fa-linkedin"></i>Linkedin</a></li>
  </ul>
</footer>
  </div>
  );
}
export default Dashboard;