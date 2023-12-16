import React, { useEffect } from 'react'
import { useState } from 'react';
import reg5 from '../../assets/images/reg5.png';

const Verification = () => {
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
            {/* Your verification form goes here */}
            <form>
                <h2>IVAV TALENTS</h2>
                <p>Verify your email address</p>
                <p>Enter the code sent to your email address</p>
                <div className="input-box">
                    <div>
                        <input type="number" className="input__box" />
                    </div>
                    <div>
                        <input type="number" className="input__box" />
                    </div>
                    <div>
                        <input type="number" className="input__box" />
                    </div>
                    <div>
                        <input type="number" className="input__box" />
                    </div>
                    <div>
                        <input type="number" className="input__box" />
                    </div>
                    <div>
                        <input type="number" className="input__box" />
                    </div>
                </div>
                <p>Resend({seconds}s)</p>
                {seconds === 0 && <p>Time's up!</p>}
            </form>

        </div>

    </div>
  )
}

export default Verification