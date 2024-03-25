import React, { useState } from "react";
import reg5 from "../../assets/images/reg5.png";
import { FaUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import { RiLock2Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  const [isChecked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="authContainer">
      <div className="authLeft">
        <Link to="/">
          <img src={reg5} alt="" className="first-img" />
        </Link>
      </div>
      <div className="authRight">
        {/* Your signup form goes here */}
        <form>
          <Link to="/">
             <h2>IVAV TALENTS</h2>
          </Link>
          <p>Create an Account</p>
          <div className="input-container">
            <FaUser className="icon" />
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="input-container">
            <TfiEmail className="icon" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-container">
            <SlCalender className="icon" />
            <input type="date" placeholder="Date Of Birth" />
          </div>

          <div className="password-container">
            <RiLock2Line className="icon" />
            <input type="password" placeholder="Password" />
            <MdOutlineRemoveRedEye className="eye-icon" />
          </div>

          <section className="checkbox-container">
                  <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            <label>
                By clicking Create account, I agree that I have read and accepted
                the <span> Terms of Use</span> and <span>Privacy Policy</span>.
            </label>
          </section>
          <button> <strong>Create Account</strong></button>
          <div className="para-account">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
