import React, { useState } from 'react';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }



function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }




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

            <form  onSubmit={handleSubmit}>
           <div className="row">
               <div className="col-md-3">
                  
                     <label>Enter Staff ID : </label>
                       <input type="text"  onChange={e => setUserName(e.target.value)} className="form-control" placeholder="Staff ID" autoComplete="off"/>
                       <label>Enter Password :  </label>
                       <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" autoComplete="off"/>
                       <hr />
                      <button type="submit"  className="btn btn-primary"><span className="fa fa-user"></span> &nbsp;Log Me In </button>&nbsp;&nbsp;
                      <button type="submit"  className="btn btn-secondary"><span className="fa fa-users"></span> &nbsp;Sign Up</button>
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

Login.propTypes = {setToken: PropTypes.func.isRequired}