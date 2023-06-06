import './App.css';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import  './components/Login/Login.css';
import Dashboard from './components/Dashboard/Dashboard';
import './components/Dashboard/dashboard.css'
// import DigitalClock from './components/Clock/DigitalClock';
import {
  BrowserRouter, Route,
  Routes,
} from "react-router-dom";


// THE ROUTER DOM

function App() {
  return (
<BrowserRouter>

  <Routes>
      <Route path="/Login" element={<Login/>}></Route>   
      <Route path="/Header" element={<Header/>}></Route> 
      <Route path="/Dashboard" element={<Dashboard/>}></Route> 
    </Routes>
    </BrowserRouter>

  );
}

export default App;
