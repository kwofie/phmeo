import React from "react";
import {Nav,Navbar,NavDropdown} from "react-bootstrap"
// import phmeo2 from "../images/phmeo2.png";
import PHMEO from "../images/PHMEO.png";
import phmeo2 from "../images/phmeo2.png";
import "../Dashboard/Dashboard.css";
// import Sidebar from "../Sidebar/Sidebar";


function Dashboard () {
 
  return(
    <div>
      {/* NAVBAR */}
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
        <Nav.Link href="logout" className="nav-item"><i className="fa fa-sign-out"></i>&nbsp;Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>

  </Navbar>
         
   
       {/* <div className="container ">
       <div className="row">
       <div className="col-md-4">
       <div className={isExpended? "side-nav-container" :"side-nav-container side-nav-container-NX"}>
       <div className="nav-upper">
         <div className="nav-heading">
         {isExpended && (<div className="nav-brand">
              <img src="icon" alt=""/>
              <h3 className="heading">DASHBOARD</h3>
           </div>)}
            <button type="" className={isExpended? "hamburger hamburger-in" :"hamburger hamburger-out"}
            onClick={()=> setExpendState(!isExpended)} 
            >
               <span></span>
               <span></span>
               <span></span>
            </button>
         </div>
         <div className="nav-menu">
             <div className="menu-item">
             <i className="fa fa-calendar me-2"></i>Schools
             </div> 
             <div className="menu-item">
             <i className="fa fa-user me-2"></i>Staff  
             </div>
             <div className="menu-item">
             <i className="fa fa-bell me-2"></i>Management 
             </div>
             <div className="menu-item">
             <i className="fa fa-gears me-2"></i>Settings  
             </div>
             <div className="menu-item">
             <i className="fa fa-outdent me-2"></i>Analytics 
             </div>
             <div className="menu-item">
             <i className="fa fa-folder me-2"></i>Management 
             </div>
         </div>
       </div>
    </div>          
       </div>
             <div className="col-md-8">
                <h4 className="page-head-line"><span className="fa fa-dashboard"></span>&nbsp;Dashboard</h4>
             </div>

             

           </div>

       </div> */}

   <div className="content-wrapper ">
     <div id="sidebar">
          <div className="sidebar-header">
             <h5>PHMED DASHBOARD</h5>
             <strong>PHMED</strong>
          </div>

          <ul className="list-unstyled components">
             <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                   <i className="fa fa-home"></i>
                   Home
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#home2">Staff</a>
                  </li>
                  <li>
                    <a href="#home3">Non-Teaching Staff</a>
                  </li>
                </ul>
             </li>
             <li>
               
              <a href="#staff" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" >
                <i className="fa fa-briefcase"></i>
                Staff
              </a>
              <ul className="collapse list-unstyled" id="staff">
                <li>Teaching</li>
                <li>Non-Teaching</li>
              </ul>
             </li>
             <li>
              <a href="#schools" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-database"></i>Schools</a>
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
     </div>
     {/* The Main Page */}
     <div className="mainpage">
      <p>This is the Main Page</p>
     </div>



       
    
    </div>




  </div>
  );
}
export default Dashboard;