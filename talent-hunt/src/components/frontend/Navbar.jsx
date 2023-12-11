import React from 'react'
import '../../assets/css/Navbar.css'
import masklogo from '../../assets/images/masklogo.png'
import notifications from '../../assets/images/notifications.png'
import eclipse from '../../assets/images/eclipse.png'
import frame from '../../assets/images/frame.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
  return (
    <div className="navbar">
     <div className="nav-container">
       <div className="nav-right">
          <img src={masklogo} alt="" className="logo" />
          <ul className="nav-links">
            <li>Home</li>
            <li><HashLink to="/#talents">Talents</HashLink></li>
            <li><HashLink to="/#aboutus">About Us</HashLink></li>
            <li><HashLink to="/#contactus">Contact Us</HashLink></li>
          </ul>
        </div>

        <div className="nav-left">
          <img src={notifications} alt="" width="32px" />
          <img src={eclipse} alt="" width="32px" />
          <img src={frame} alt="" width="100px" />
          <li><Link to="/register">Get Started</Link></li>
        </div>
     </div>  
   </div>
  )
}

export default Navbar