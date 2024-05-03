import './App.css';
import React from 'react';
import Login from './components/Login/Login';
// import Dashboard from './components/Dashboard/Dashboard';
// import Sidebar from './components/Sidebar/Sidebar';

import {
  BrowserRouter,Route,Routes 
} from "react-router-dom";


// THE ROUTER DOM

function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
   <BrowserRouter>
   <Login/>
   <Routes>
    {/* <Route path="/" element={<Dashboard/>}></Route> */}
     {/* <Route path="/Dashboard" element={}></Route> */}
     {/* <Route path="/Sidebar" element={<Sidebar/>}></Route>  */}
   </Routes>
   
   </BrowserRouter>

  );
}

export default App;
