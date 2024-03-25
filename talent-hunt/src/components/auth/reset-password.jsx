import React from 'react'
import { RiLock2Line } from 'react-icons/ri'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import reg5 from '../../assets/images/reg5.png'

const ChangePassword = () => {
  return (
    <div className="authContainer">
        <div className="authLeft">
            <img src={reg5} alt="" className="first-img" />
        </div>
        <div className="authRight">
            {/* Your change password goes here */}
            <form className='verify-form'>
                <h2>IVAV TALENTS</h2>
                <p style={{fontSize:'14px'}}>To complete the reset password process, Please enter the code sent to the email address</p>
                <div className="password-container">
                    <RiLock2Line className="icon" />
                    <input type="text" placeholder="Code" name="code"/>
                    <MdOutlineRemoveRedEye className="eye-icon" />
                </div>

                <div className="password-container">
                    <RiLock2Line className="icon" />
                    <input type="password" placeholder="New Password" />
                    <MdOutlineRemoveRedEye className="eye-icon" />
                </div>

                <div className="password-container">
                    <RiLock2Line className="icon" />
                    <input type="password" placeholder="Comfirm New Password" />
                    <MdOutlineRemoveRedEye className="eye-icon" />
                </div>
                <button id='signin'>Reset Password</button>
            </form>

        </div>

    </div>
  )
}

export default ChangePassword