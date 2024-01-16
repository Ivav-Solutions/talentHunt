import React from 'react'
import blueivav from '../../assets/images/blueivav.png'
import { HashLink } from 'react-router-hash-link'
import blackbell from '../../assets/images/blackbell.png'
import eclipse from '../../assets/images/eclipse.png'
import "../../assets/css/index.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navContainer">
        <div className="navLeft">
          <img src={blueivav} alt="" className="Logo" />
          <ul className="navLinks">
            <li><HashLink to="/#talents">Talents</HashLink></li>
            <li><HashLink to="/#aboutus">About Us</HashLink></li>
            <li><HashLink to="/#contactus">Contact Us</HashLink></li>
          </ul>
       </div>

        <div className="navRight">
          <img src={blackbell} alt="" />
          <img src={eclipse} alt="" />
       </div>
       <hr />
     </div>
   </div>
  )
}

export default Navbar