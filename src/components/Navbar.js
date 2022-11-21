import {NavLink} from "react-router-dom";
import { BiLogOut } from 'react-icons/bi';
import { BsFillEmojiSmileFill} from "react-icons/bs";

const Navbar = () => {
  return (
     
    <div  className="ulNav">
        <ul>
            <li> <NavLink to="/home"   >Home</NavLink> </li>
            <li><NavLink to="login" >login <BsFillEmojiSmileFill/></NavLink> </li>
            <li><NavLink to="register" >Registration </NavLink></li>

            <li ><NavLink to="logout">Logout <BiLogOut/></NavLink></li>
        </ul>
     </div> 
    
    
  )
}

export default Navbar