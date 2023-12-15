import React, { useState } from "react";
import reg5 from "../../assets/images/reg5.png";
import { FaUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import { RiLock2Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  const [isChecked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="authContainer">
      <div className="authLeft">
        <img src={reg5} alt="" className="first-img" />
      </div>
      <div className="authRight">
        {/* Your signup form goes here */}
        <form>
          <h2>IVAV TALENTS</h2>
          <p>Create an Account</p>
          <div className="input-container">
            <TfiEmail className="icon" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="password-container">
            <RiLock2Line className="icon" />
            <input type="password" placeholder="Password" />
            <MdOutlineRemoveRedEye className="eye-icon" />
          </div>

          <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Remember me
            </label>
            <p><Link>Forgot Password?</Link></p>
          </div>
          <button>Login</button>
          <p>
            Do you have an account? <Link to='/register'>Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
