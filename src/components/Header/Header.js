import React from "react";
import { Nav,Navbar} from "react-bootstrap"
import PHMEO from "../images/PHMEO.png";

function Header() {

  return(
   
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


 
   
  )



}


export default Header;