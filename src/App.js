import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/Login';
import './components/Dashboard/dashboard.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
// import DigitalClock from './components/Clock/DigitalClock';
import {
  BrowserRouter,Route,Routes 
} from "react-router-dom";


// THE ROUTER DOM

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}></Route>
     <Route path="/Dashboard" element={<Dashboard/>}></Route>
     <Route path="/Header" element={<Header/>}></Route> 
     {/* <Route path='/' Component={Login}/> */}
   </Routes>
   
   </BrowserRouter>

  );
}

export default App;
