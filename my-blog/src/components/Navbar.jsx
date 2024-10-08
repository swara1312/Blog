import React, { useContext } from 'react'
import {Link, useNavigate} from "react-router-dom";
import logo from "../assests/logo.png"
import { AuthContext } from '../context/authContext';

const Navbar = () => {

const {currentUser,logout} = useContext(AuthContext);
const navigate = useNavigate();

const handleLogout = () => {
  logout(); 
  navigate("/"); 
};

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/"><img src={logo} alt='logo here'></img></Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
          <Link className="link" to="/?cat=science"><h6>SCIENCE</h6></Link>
          <Link className="link" to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
          <Link className="link" to="/?cat=cinema"><h6>CINEMA</h6></Link>
          <Link className="link" to="/?cat=design"><h6>DESIGN</h6></Link>
          <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={handleLogout}>Logout</span>: <Link className='link' to='login'>Login</Link>}
          {currentUser ?  <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>:<span></span>}
        </div>
      </div>
    </div>
  )
}

export default Navbar