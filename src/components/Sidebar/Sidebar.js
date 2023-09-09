import React from "react";
import { NavLink } from "react-router-dom";
import { Nav,Navbar} from "react-bootstrap"
import PHMEO from "../images/PHMEO.png";
import "./Sidebar.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

function Sidebar() {

  return(
    <div>
<Navbar className="navbar navbar-inverse set-radius-zero">
<Nav className="container">
<img  alt="phmeo" className="header-logo" src={PHMEO}/>  
        <Navbar.Brand className="navbar-header">
           
        </Navbar.Brand>
        <div className="left-div">
         <i className="fa fa-user-plus login-icon" ></i>
        </div>
        </Nav>
</Navbar>



   <div className="sidebar-Content" >
    
  <CDBSidebar   className="sidebar">
  <CDBSidebarHeader >
     <p> PHMEO <i className="fa fa-bars"></i></p>
  </CDBSidebarHeader>
  <CDBSidebarContent className="sidebar-content">
  <CDBSidebarMenu>
  <NavLink exact to="/" activeclassname="activeClicked">
    <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
  </NavLink>
  <NavLink exact to="/" activeclassname="activeClicked">
  <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
  </NavLink>
  <NavLink exact to="/profile" activeclassname="activeClicked">
   <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
   </NavLink>
  <NavLink exact to="/analytics" activeclassname="activeClicked">
   <CDBSidebarMenuItem icon="chart-line">
     Analytics
   </CDBSidebarMenuItem>
 </NavLink>
 <NavLink   exact  to="/hero404"    target="_blank"   activeclassname="activeClicked" >
   <CDBSidebarMenuItem icon="exclamation-circle">
     404 page
  </CDBSidebarMenuItem>
</NavLink>
  </CDBSidebarMenu>
  </CDBSidebarContent>

  <CDBSidebarFooter>
    <div className="footer">
     Sidebar Footer
    </div>
  </CDBSidebarFooter>


</CDBSidebar>

  <div className="container"><br></br>
  <div className="col-md-12">
  <h4 className="page-head-line"><span className="fa fa-dashboard"></span>&nbsp;Dashboard</h4>
  </div>
   
   <div className="col-md-12">
     <div className="row">
     <div className="col-md-3"> 
    <p className="bsch" ><span>105</span><br></br><i className="fa fa-school"></i>Basic schools</p>
      </div>
      <div className="col-md-3">
      <p className="shsch" ><span className="shsdata">105</span><br></br><i className="fa fa-store"></i>Senior High Schools</p>
      </div>
      <div className="col-md-3">
      <p className="bschp" ><span>105</span><br></br><i className="fa fa-sitemap"></i>Basic School Enrollment</p>
      </div>
      <div className="col-md-3">
      <p  className="shsp"><span>105</span><br></br>
        <i className="fa fa-table"></i>SHS Enrollment </p>
      </div>
     </div>

   </div>
     <div className="content col-md-12">
       <div className="row">
          <div className="col-md-2">
            <i className="fa fa-child"></i>
            <span >users</span>
          </div>
          <div className="col-md-2">
          <i className="fa fa-users"></i>
            <span >Teachers</span>
          </div>
          <div className="col-md-2">
          <i className="fa fa-user"></i>
            <span >PHM Staff</span>
          </div>
          <div className="col-md-2">
          <i className="fa fa-briefcase"></i>
            <span >Schools</span>
          </div>
          <div className="col-md-2">
          <i className="fa fa-coins"></i>
            <span >Statistics</span>
          </div>
          <div className="col-md-2">
          <i className="fa fa-bars"></i>
            <span >Divisions</span>
          </div>
       </div>
     </div>


  </div>
   



  </div>




  
 

</div>   
  );



};


export default Sidebar;