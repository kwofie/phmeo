
import React, { useState, useEffect } from 'react';

function Login() {
    return (
      <div className="content-wrapper">
       <div className="container">
           <div className="row">

           <div className="col-md-12">
                 <h4 className="page-head-line">Please Login To Enter <div className="pull-right"><span id="tick2" className=""></span>&nbsp;
             {/* $date = new DateTime();
             echo $date->format('l, F jS, Y');  */}
               </div></h4>
            </div>

            <form name="admin" method="post">
           <div className="row">
               <div className="col-md-3">
                  
                     <label>Enter Staff ID : </label>
                       <input type="text" name="staffid" className="form-control" placeholder="Staff ID" autoComplete="off" required />
                       <label>Enter Password :  </label>
                       <input type="password" name="password" className="form-control" placeholder="Password" autoComplete="off" required />
                       <hr />
                      <button type="submit" name="submit" className="btn btn-primary"><span className="glyphicon glyphicon-user"></span> &nbsp;Log Me In </button>&nbsp; 
               </div>
               <div className="col-md-9">
              <div className="alert alert-info">
              This is the official App of Prestea Huni-Valley Muncipal Education Office.
              <br/>
                         Login to enter into the mainpage.
                       <br />
                        <strong> Some of its features are given below :</strong>
                       <ul>
                         <li>
                         FINANCE AND ADMINISTRATION
                         </li>
                           <li>
                             HUMAN RESOURCE DEPARTMENT
                           </li>
                           <li>
                             MANAGEMENT AND SUPERVISION
                           </li>
                           <li>
                           PLANNING,DATA ENTRY AND MONITERING 
                           </li>
                           <li>
                              PRINCIPAL ACCOUNTANT
                           </li>
                       </ul>
              </div>
              </div>
               </div>
              </form>
             </div> 

          </div>
          
      </div>

    );
  }


export default Login;