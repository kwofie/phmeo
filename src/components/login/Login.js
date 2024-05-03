import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';




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



function Login() {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(()=>{
    const intervalId = setInterval(()=> {
      setCurrentDate(format(new Date(), 'MMMM do yyyy, h:mm:ss a'));
    }, 1000)
    return () => clearInterval(intervalId);
  },[]);
  

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
   console.log(username)
   
  }
 



    return (
      <div className="content-wrapper">
       <div className="container">
           <div className="row">
           <div className="col-md-12">
                 <h4 className="page-head-line">Please Login To Enter <div className="pull-right"><span id="tick2" className=""></span>&nbsp;
                  {currentDate.toLocaleString()}
               </div></h4>
            </div>
            <form  onSubmit={handleSubmit}>
           <div className="row">
               <div className="col-md-3">
                  
                     <label>Enter Staff Username : </label>
                       <input type="text"  onChange={e => setUserName(e.target.value)} className="form-control" placeholder="Staff Username" autoComplete="off"/>
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