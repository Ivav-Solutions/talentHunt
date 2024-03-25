import React, { useEffect } from 'react'
import { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import reg5 from '../../assets/images/reg5.png'
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [seconds, setSeconds] = useState(60);
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);
  return (
    <div className="authContainer">
        <div className="authLeft">
            <img src={reg5} alt="" className="first-img" />
        </div>

        <div className="authRight">
            {/* Your reset password goes here */}
            <form className='verify-form'>
                <h2>IVAV TALENTS</h2>
                <p>Forgot Password</p>
                <p>Please type in the email address linked to your Ivav Talents account to reset your password.</p>
                <div className="input-container">
                    <TfiEmail className="icon" />
                    <input type="email" placeholder="Email Address" />
                </div> <br />
                <button id='signin'>Reset</button>
                 <p>
                Remember Password? <Link to="/login">Login here</Link>
            </p>
            </form>
           
        </div>

    </div>
  )
}

export default ResetPassword