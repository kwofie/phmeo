import React from "react";
import {NavDropdown,Nav,Navbar} from "react-bootstrap"
import Header from "../Header/Header";
import phmeo2 from "../images/phmeo2.png";

function Dashboard () {
  return(
    <div>
      <Header/>
    <Navbar bg="dark"  variant="dark"  expand="lg">
      <Navbar.Brand href="#home">
             <img
              alt=""
              src={phmeo2}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            PHMEO
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" >Home</Nav.Link>
          <Nav.Link  href="#link">Add Staff</Nav.Link>
          <NavDropdown title="Department" id="basic-nav-dropdown" >
            <NavDropdown.Item href="#action/3.1">Human Resource</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Management and Supevision
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Planning and Monitoring</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Finance and Administration
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav className="nav navbar-nav">
        <Nav.Link href="logout" className="nav-item"><i className="fa fa-sign-out"></i>&nbsp;Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
    <div className="content-wrapper">
       <div className="container">
           <div className="row">
             <div className="col-md-12">
                <h4 className="page-head-line"><span className="fa fa-dashboard"></span>&nbsp;Dashboard</h4>
             </div>
           </div>
         

       </div>
        {/* SIDE BAR START HERE  */}
       
          <div className="col-md-3">
          <div className="bg-white">
            <div className="side-bar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase">
              <i className="fa fa-home me-2"></i>Dashboard Menu 
            </div>
             <div>
             <i className="fa fa-users me-2"></i>Schools
             </div> 
             <div>
             <i className="fa fa-user me-2"></i>Staff  
             </div>
             <div>
             <i className="fa fa-sections me-2"></i>Management 
             </div>
          </div>

          </div>




    </div>







  </div>
  );




}



export default Dashboard;