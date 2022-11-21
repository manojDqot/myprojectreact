import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  withRouter
  } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
function App() {


// const NavhideComp =(props) =>{
//   const {location} = props
//   console.log(location);
//   return (location.pathname.match(/^\/(login | register)$/))?<div></div> : <Navbar/>
// }

// const Navhide =  withRouter(NavhideComp)
  return (
    <BrowserRouter>
<Navbar/>
<Routes>
  
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home/>} />
<Route path="/register" element={<Registration/>} />
<Route path="/login" element={<Login />} />
{/* <Route path="/useeffect" element={<UseEeffect />} />
<Route path="/users" element={<Users />} /> */}
</Routes>
</BrowserRouter>
  )
}

export default App;
