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
      <Nav className="navbar navbar-inverse set-radius-zero">
         <div className="container">
       <img  alt="phmeo" className="header-logo" src={PHMEO}/>  
        <div className="navbar-header">
           PRESTEA HUNI VALLEY MUNICIPAL EDUCATION DIRECTORATE
        </div>
        <div className="left-div">
         <i className="fa fa-user-plus login-icon" ></i>
        </div>
        </div>
      </Nav>

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
             <h5><i className="fa fa-dashboard"></i>DASHBOARD</h5>
             {/* <strong>PHMED</strong> */}
          </div>

          <ul className="list-unstyled components">
          <li className="active">
                <a href="#homeSubmenu" className="sub-btn">
                   <i className="fa fa-home"></i> Home<i className="fa fa-angle-right dropdown"></i> 
                </a>
                <ul className="list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="#organogram" className="submenu-item">Organogram</a>
                  </li>
                  <li>
                    <a href="#Infrastructure" className="submenu-item">Infrastructure</a>
                  </li>
                  <li>
                    <a href="#statistics" className="submenu-item">Statistics</a>
                  </li>
                </ul>
             </li>


             <li>
              <a href="#staff" >
                <i className="fa fa-briefcase"></i>Staff<i className="fa fa-angle-right dropdown"></i>
              </a>
              <ul className="collapse list-unstyled" id="staff">
                <li>Teaching Staff</li>
                <li>Non-Teaching</li>
                <li>Students Population</li>
              </ul>
             </li>
             <li>
              <a href="#schools" ><i className="fa fa-database"></i> Schools<i className="fa fa-angle-right dropdown"></i> </a>
              <ul className="collapse list-unstyled" id="schools">
                <a href="#public"><i className="fa-dasboard"></i>Public schools
                <ul className="public">
                  <li></li>
                </ul>
                </a>
                <a href="#private"><i className="fa-dasboard"></i>Private schools</a>
              </ul>
             </li>
             <li>
              <a href="#department"><i className="fa fa-th-large"></i>Department<i className="fa fa-angle-right dropdown"></i></a>
              <ul className="collapse list-unstyled" id="departments">
                
              </ul>
             </li>
             <li>
             <a href="#settings"  className="settings"><i className="fa fa-gear"></i>settings</a>
             </li>
             
            
             


          </ul>
     </nav>
     {/*=========== The Main Page ==========*/}
     <div id="mainpage">
       {/* <div className="container-fluid">
        <button type="button" id="sidebarCollapse" className="btn btn-info">
            <i className="fa fa-arrow-right"></i>
       </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-arrow-left"></i>
                    </button>

       </div>
 */}


  </div>



       
    
    </div>

 
    {/* <footer>
  <ul>
      <li><a href="mailto:info@stackfindover.com"><i className="fa fa-envelope-open"></i> info@stackfindover.com</a></li>
      <li><a href="#twiter"><i className="fa fa-twitter"></i>@stackfindover</a></li>
      <li><a href="#linkedin"><i className="fa fa-linkedin"></i>Linkedin</a></li>
  </ul>
</footer> */}
  </div>
  );
}


export default Dashboard;