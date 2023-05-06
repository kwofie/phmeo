import React from "react";
import {
    Container,CardGroup, Card
} from 'react-bootstrap'
import './Login.css'
function Login() {
    return (
        <div class="content-wrapper">
       
             <div class="row">
                <div class="col-md-12">
                    <h4 class="page-head-line">Please Login To Enter <div class="pull-right"><span id="tick2" class=""></span>&nbsp;
                  </div>
            
                 </h4>
                </div>
            </div>

            <form name="admin" method="post">
            <div class="row">
                <div class="col-md-3">
                     <label>Enter Staff ID : </label>
                        <input type="text" name="staffid" class="form-control" placeholder="Staff ID" autocomplete="off" required />
                        <label>Enter Password :  </label>
                        <input type="password" name="password" class="form-control" placeholder="Password" autocomplete="off" required />
                        <hr />
                        <button type="submit" name="submit" class="btn btn-primary"><span class="glyphicon glyphicon-user"></span> &nbsp;Log Me In </button>&nbsp;
                </div>
                </div>
                </form>

     </div>




    //   <img
    //     src="https://i.imgur.com/MK3eW3As.jpg"
    //     alt="Katherine Johnson"
    //   />
    );
  }

// const Login = () => {
//     return(
//     <div>
   





//     </div>

//     )
// }



export default Login;