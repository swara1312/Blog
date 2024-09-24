import React from 'react'
import {Link} from "react-router-dom";
import logo from "../assests/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={logo} alt='logo here'></img>
        </div>
        <div className="links">
          <Link className="link" to="/?category=art"><h6>ART</h6></Link>
          <Link className="link" to="/?category=science"><h6>SCIENCE</h6></Link>
          <Link className="link" to="/?category=technology"><h6>TECHNOLOGY</h6></Link>
          <Link className="link" to="/?category=cinema"><h6>CINEMA</h6></Link>
          <Link className="link" to="/?category=design"><h6>DESIGN</h6></Link>
          <Link className="link" to="/?category=food"><h6>FOOD</h6></Link>
          <span>Roy</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar