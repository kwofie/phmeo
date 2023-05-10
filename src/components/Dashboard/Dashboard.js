import React from "react";


function Dashboard () {
  return(
    <div>
    <div className="navbar navbar-inverse set-radius-zero">
    <div className="container">
        <div className="navbar-header">  
             <a className="navbar-brand" href="#">
              PRESTEA HUNI-VALLEY MUNICIPAL
               EDUCATION OFFICE
            </a>
        </div>
        <div className="left-div">
         <i className="fa fa-user-plus login-icon" ></i>
        </div>
    </div>
</div>
  <div className="content">
  <div className="container">
     <div className="row">
      <div className="col-md-3">
       <nav>
        <ul>
            <li>TEACHING STAFF</li>
            <li>NON-TEACHING STAFF</li>
            <li>SCHOOLS</li>
        </ul>
        
        </nav>  
        
        
        </div>  
     <div className="col-md-9">
        <main>
            <ul>
                <li></li>
            </ul>
        </main>
        
        </div>  
            
      </div> 
    </div>
  </div>
</div>

  )




}



export default Dashboard;