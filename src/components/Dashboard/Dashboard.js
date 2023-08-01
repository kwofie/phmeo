import React,{useState} from "react";
import {NavDropdown,Nav,Navbar} from "react-bootstrap"
import Header from "../Header/Header";
import phmeo2 from "../images/phmeo2.png";
import "../Dashboard/Dashboard.css";


function Dashboard () {
  const [isExpended, setExpendState] = useState(false);
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
         
    <div className="content-wrapper ">
       <div className="container ">
       <div className="row">
             <div className="col-md-12">
                <h4 className="page-head-line"><span className="fa fa-dashboard"></span>&nbsp;Dashboard</h4>
             </div>
           </div>
       </div>
        {/* SIDE BAR START HERE  */}
       
          {/* <div className="col-md-3 side-nav-container">
          <div className="bg-white ">
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

          </div> */}

     <div className={isExpended? "side-nav-container" :"side-nav-container side-nav-container-NX"}>
       <div className="nav-upper">
         <div className="nav-heading">
         {isExpended && (<div className="nav-brand">
              <img src="icon" alt=""/>
              <h3 className="heading">DASHBOARD MENU</h3>
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

  </div>
  );
}
export default Dashboard;