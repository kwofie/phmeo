import React from "react";
import { Nav,Navbar} from "react-bootstrap"


function Header() {

  return(
   
<Navbar className="navbar navbar-inverse set-radius-zero">
<Nav className="container">
        <div className="navbar-header">  
             <a className="navbar-brand" href="">
              PRESTEA HUNI-VALLEY MUNICIPAL
               EDUCATION OFFICE
            </a>
        </div>
        <div className="left-div">
         <i className="fa fa-user-plus login-icon" ></i>
        </div>
        </Nav>
</Navbar>


 
   
  )



}


export default Header;