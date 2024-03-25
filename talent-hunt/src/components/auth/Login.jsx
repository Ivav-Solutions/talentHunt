import React, { useState } from "react";
import reg5 from "../../assets/images/reg5.png";
import { TfiEmail } from "react-icons/tfi";
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
        <form className="verify-form">
          <Link to="/">
            <h2>IVAV TALENTS</h2>
          </Link>
          <p>Login into Your Account</p>
          <div className="input-container Signin-cont">
            <TfiEmail className="icon" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="password-container Signin-cont">
            <RiLock2Line className="icon" />
            <input type="password" placeholder="Password" />
            <MdOutlineRemoveRedEye className="eye-icon" />
          </div>

          <div className="checkbox-container-Login">
            <div className="check-me">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span>Remember me</span>
            </div>
            <div className="forgot-Psw">
                 <p>
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
            </div>
          </div>
          <button id="signin">Login</button>
          <p id="account-check">
            Do you have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
