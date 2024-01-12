import React from 'react'
import masklogo from '../../assets/images/masklogo.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-container">
            <div className="nav-left">
                <img src={masklogo} alt="" className="logo" />
                <ul>
                    <li>Talents</li>
                    <li>About Us</li>
                    <li></li>
                </ul>

            </div>

        </div>

    </div>
  )
}

export default Navbar