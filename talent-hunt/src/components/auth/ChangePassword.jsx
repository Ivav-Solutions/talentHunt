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
            <form>
                <h2>IVAV TALENTS</h2>
                <p>Create a new password</p>
                <div className="password-container">
                    <RiLock2Line className="icon" />
                    <input type="password" placeholder="Password" />
                    <MdOutlineRemoveRedEye className="eye-icon" />
                </div>

                <div className="password-container">
                    <RiLock2Line className="icon" />
                    <input type="password" placeholder="Password" />
                    <MdOutlineRemoveRedEye className="eye-icon" />
                </div>
                <button>Create</button>
            </form>

        </div>

    </div>
  )
}

export default ChangePassword