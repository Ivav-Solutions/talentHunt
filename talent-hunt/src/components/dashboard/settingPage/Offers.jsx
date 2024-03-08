import React from 'react'
import Navbar from './Navbar'
// import music from '../../../assets/images/music.png'
import smallmusic from '../../../assets/images/smallmusic.png'
import Footer from '../../frontend/Footer'

const Offers = () => {
  return (
    <div>
        <Navbar /> 
        <hr />
        <div>
           <div className="account-btn">
               <button className="btns-link">Account Info</button>
               <button className="buttonsLink">Bookings</button>
               <button className="btns-link">Messages</button>
               <button className="btns-link">Change Password</button>
          </div>
        </div>
        <hr />
        <div className="bookings-info">
            <h1>Bookings</h1>
            <div className="bookings-btn">
               <button className="books-btn">History</button>
               <button className="book-btn">Offers</button>
            </div>

            <div className="offers-cards">
                <div className="offer-card">
                    <div className="offer-bio">
                        <img src={smallmusic} alt="" />
                        <div>
                            <h1>James Cold</h1>
                            <p>Singer</p>
                        </div>
                    </div>
                   <h1>Change Of Price</h1>
                   <p>Thank you for the booking, but due to the location, i would love to request  for an addition of $28
                       for me to able to come and perform at your event.
                       Thank you.
                   </p>
                   <div className="offers-btn">
                      <button className="acc-btn">Accept</button>
                      <button className="rej-btn">Reject</button>
                   </div>
                </div>

                <div className="offer-card">
                    <div className="offer-bio">
                        <img src={smallmusic} alt="" />
                        <div>
                            <h1>Adams Smith</h1>
                            <p>Musician</p>
                        </div>
                    </div>
                   <h1>Change of date &t ime</h1>
                   <p>
                       Thank you for the booking, but due to the location,
                       i would love to request  for date and time change to 23-08-2023 at 6:30pm for me to able to come and perform at your event.
                       Thank you.
                   </p>
                   <div className="offers-btn">
                      <button className="acc-btn">Accept</button>
                      <button className="rej-btn">Reject</button>
                   </div>
                </div>

                <div className="offer-card">
                    <div className="offer-bio">
                        <img src={smallmusic} alt="" />
                        <div>
                            <h1>Smart Gold</h1>
                            <p>Chef</p>
                        </div>
                    </div>
                   <h1>Change Of Price</h1>
                   <p>Thank you for the booking, but due to the location, i would love to request  for an addition of $28
                       for me to able to come and perform at your event.
                       Thank you.
                   </p>
                   <div className="offers-btn">
                      <button className="acc-btn">Accept</button>
                      <button className="rej-btn">Reject</button>
                   </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Offers
