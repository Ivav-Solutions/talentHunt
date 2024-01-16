import React, {useState} from 'react'
import Navbar from '../settingPage/Navbar'
import eclipse from '../../assets/images/eclipse.png'
import Footer from '../frontend/Footer'

const Account = () => {
  const [activeButton, setActiveButton] = useState('AccountInfo');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <Navbar />
      <hr />
      <div className="account-container">
        <div className="account-btn">
          <button className={`buttonLink ${activeButton === 'AccountInfo' && 'active'}`} onClick={() => handleButtonClick('AccountInfo')}>Account Info</button>
          <button className={`btn-link ${activeButton === 'Bookings' && 'active'}`} onClick={() => handleButtonClick('Bookings')}>Bookings</button>
          <button className={`btn-link ${activeButton === 'Messages' && 'active'}`}onClick={() => handleButtonClick('Messages')}>Messages</button>
          <button className={`btn-link ${activeButton === 'ChangePassword' && 'active'}`}onClick={() => handleButtonClick('ChangePassword')}>Change Password</button>
       </div>
        <hr />
        <div className="account-info">
          <h1>{activeButton === 'AccountInfo' ? 'Account Information' : activeButton}</h1>
          <div className="account-form">
            <div className="account-img">
              <img src={eclipse} alt='' width="120px" className="acc-img" />
           </div>
            <div className="account__form">
              <form>
                <label>Name</label>
                <input type="text" placeholder="Brown Nose" />
                <label>Gender</label>
                <input type="gender" placeholder="gender" />
                <label>Email</label>
                <input type="email" placeholder="Example@gmail.com" />
                <label>Address</label>
                <input type="address" placeholder="New York, USA" />
                <label>Phone Number</label>
                <input type="number" placeholder="09039450999" />
                <label>About you</label>
                <textarea row="6" placeholder="Write Something..." />
                <button className="buttonLink">UPDATE INFO</button>
             </form>
           </div>
         </div>
       </div>
     </div>
     <Footer />
   </div>
  )
}

export default Account