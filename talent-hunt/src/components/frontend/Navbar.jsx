// import React from "react";
// import "../../assets/css/index.css";
// import masklogo from "../../assets/images/masklogo.png";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="nav-container">
//         <div className="nav-right">
//           <img src={masklogo} alt="" className="logo" />
//           <ul className="nav-links">
//             <li>
//               <HashLink to="/#talents">Talents</HashLink>
//             </li>
//             <li>
//               <HashLink to="/#aboutus">About Us</HashLink>
//             </li>
//             <li>
//               <HashLink to="/#contactus">Contact Us</HashLink>
//             </li>
//           </ul>
//         </div>

//         <div className="nav-left">
//           <button>
//             <Link to="/register">Get Started</Link>
//           </button>
//           <div className="mobile-menu-icon">&#9776;</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import "../../assets/css/index.css";
import masklogo from "../../assets/images/masklogo.png";
import notifications from "../../assets/images/notifications.png"
import eclipse from "../../assets/images/eclipse.png"


// Navbar component
const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <img src={masklogo} alt="" className="logo" />
          <ul className={`nav-links ${mobileMenuVisible ? 'active' : ''}`}>
            <li><HashLink to="/#talents">Talents</HashLink></li>
            <li><HashLink to="/#aboutus">About Us</HashLink></li>
            <li><HashLink to="/#contactus">Contact Us</HashLink></li>
          </ul>
        </div>

        <div className={`nav-right ${mobileMenuVisible ? 'active' : ''}`}>
          <img src={notifications} alt="" />
          <img src={eclipse} alt="" width="32px" />
          <button>
            <HashLink to="/register">Get Started</HashLink>
          </button>
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            &#9776;
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
