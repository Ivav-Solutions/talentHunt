import React from 'react'
import Navbar from './Navbar'
// import music from '../../assets/images/music.png'
import musiclet from '../../../assets/images/musiclet.png'
import { FaArrowCircleRight } from "react-icons/fa";
import faith from '../../../assets/images/faith.png'
import stone from '../../../assets/images/stone.png'
import Footer from '../../frontend/Footer';

const Bookings = () => {
  return (
    <div>
        <Navbar />
        <hr />
        <div>
            <div className="account-btn">
                <button className="btn-link">Account Info</button>
                <button className="buttonLink">Bookings</button>
                <button className="btn-link">Messages</button>
                <button className="btn-link">Change Password</button>
            </div>
            <hr />
            <div className="bookings-info">
                <h1>Bookings</h1>
                <div className="bookings-btn">
                    <button className="books-btn">History</button>
                    <button className="book-btn">Offers</button>
                </div>
                <div className="bookings-history">
                    <div>
                        <img src={musiclet} alt="" />
                    </div>
                    <div className="history-info">
                        <h2>James Cold</h2>
                        <p>Song Writer</p>
                    </div>
                    <div className="history-Info">
                        <h3>Booking Code</h3>
                        <p>#900-343-2334</p>
                    </div>
                    <div className="history-Info">
                        <h3>Date</h3>
                        <p>Jan 20 - 22</p>
                    </div>
                    <div className="history-Info">
                        <h3>Time</h3>
                        <p>05:40 PM</p>
                    </div>
                    <div className="history-Info">
                        <h3>Status</h3>
                        <button className="status-btn">PAID</button>
                    </div>
                    <div className="history-Info">
                        <h3>Request</h3>
                        <button className="req-btn">PENDING</button>
                    </div>
                    <div>
                     <FaArrowCircleRight className="booking-logo" />
                    </div>
                </div>

                <div className="bookings-history">
                   <div>
                      <img src={faith} alt="" />
                   </div>
                   <div className="history-info">
                       <h2>Faith Morgan</h2>
                       <p>Musician</p>
                   </div>
                   <div className="history-Info">
                       <h3>Booking Code</h3>
                       <p>#100-543-1994</p>
                   </div>
                   <div className="history-Info">
                      <h3>Date</h3>
                      <p>June 06 - 08</p>
                   </div>
                   <div className="history-Info">
                      <h3>Time</h3>
                      <p>10:40 AM</p>
                   </div>
                   <div className="history-Info">
                      <h3>Status</h3>
                      <button className="status-btn">PAID</button>
                   </div>
                   <div className="history-Info">
                       <h3>Request</h3>
                       <button className="blue-btn">CONFIRM</button>
                   </div>
                   <div>
                       <FaArrowCircleRight className="booking-logo" />
                   </div>
                </div>
                <div className="bookings-history">
                    <div>
                        <img src={stone} alt="" />
                    </div>
                    <div className="history-info">
                        <h2>Paul Stone</h2>
                        <p>Public Speaker</p>
                    </div>
                    <div className="history-Info">
                        <h3>Booking Code</h3>
                        <p>#900-343-2334</p>
                    </div>
                    <div className="history-Info">
                        <h3>Date</h3>
                        <p>June 06 - 08</p>
                    </div>
                    <div className="history-Info">
                        <h3>Time</h3>
                        <p>12:00 PM</p>
                    </div>
                    <div className="history-Info">
                        <h3>Status</h3>
                        <button className="status-btn">PAID</button>
                    </div>
                    <div className="history-Info">
                        <h3>Status</h3>
                        <button className="red-btn">REJECTED</button>
                    </div>
                    <div>
                        <FaArrowCircleRight className="booking-logo" />
                    </div>
                </div>
                
            </div>
        </div>
        <Footer />

    </div>
  )
}

export default Bookings