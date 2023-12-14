import React, { useState } from 'react'
import '../../assets/css/main.css'
// import reg2 from '../../assets/images/reg2.png'
// import reg3 from '../../assets/images/reg3.png'
// import guitar from '../../assets/images/guitar.png'
import reg5 from '../../assets/images/reg5.png'
import { FaUser } from 'react-icons/fa'
import { TfiEmail } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import { RiLock2Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';



const Register = () => {
  const [isChecked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-img">
          <img src={reg5} alt="" className="first-img" />
        </div>

        <div>
          <h1 >IVAV TALENTS</h1>
          <p>Create an Account</p>
          <div className="form">
            <div className="input">
              <FaUser />
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="input">
              <TfiEmail />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="input">
              <SlCalender />
              <input type="date" placeholder="Date Of Birth" />
            </div>

            <div className="input">
              <RiLock2Line />
              <input type="password" placeholder="Password" />
              <MdOutlineRemoveRedEye />
            </div>

            <div>
              <label>
                <input
                 type="checkbox"
                 checked={isChecked}
                 onChange={handleCheckboxChange}
                />
                 By clicking Create account, I agree that I have read and 
                 accepted the Terms of Use and Privacy Policy.
             </label>
           </div>
            <button>Create account</button>
            <p>Already have an account? <Link>Sign in</Link></p>
         </div>
       </div>
     </div>
   </div>
  )
}

export default Register