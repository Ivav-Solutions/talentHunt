import React from 'react'
import Navbar from '../frontend/Navbar'
import location from '../../assets/images/location.png'
import lyrics from '../../assets/images/lyrics.png'
import girll from '../../assets/images/girll.png'
import singer from '../../assets/images/singer.png'
import choir from '../../assets/images/choir.png'
import car from '../../assets/images/car.png'
import { MdOutlineDateRange } from 'react-icons/md'
import { GoClockFill } from 'react-icons/go'
import { MdCalendarViewDay } from 'react-icons/md'
import ProfileNavbar from '../dashboard/ProfileNavbar'
import Highlights from '../dashboard/Highlights'
import Description from '../dashboard/Description'
import Reviews from '../dashboard/Reviews'
import Available from '../dashboard/Available'
import Footer from '../frontend/Footer'

const Profile = () => {
  return (
    <div>
        <div className="profile-container">
          <Navbar />
          <div className="profile-text">
              <h1>James Cold</h1>
              <p>song writer</p>
              <div className="intro-link">
                  <div>
                    <img src={location} alt="" />
                  </div>
                  <span className="img-link-content">Lagos Nigeria</span>
               </div>
           </div>
        </div>
        <div className="profile-bio">
            <div className="profile-intro">
                <div>
                   <img src={lyrics} alt="" width="660" />
                   <div className="profile-cards">
                      <div>
                         <img src={girll} alt="" width="150px" />
                      </div>
                      <div>
                         <img src={singer} alt="" width="150px" />
                     </div>
                      <div>
                         <img src={choir} alt="" width="150px" />
                       </div>
                      <div>
                         <img src={car} alt="" width="150px" />
                      </div>
                  </div>
                  <ProfileNavbar />
                  <div>
                     <section id="highlights">
                        <Highlights />
                     </section>
                     <section id="description">
                        <Description />
                     </section>
                     <section id="reviews">
                        <Reviews />
                     </section>
                     <section id="available">
                        <Available />
                     </section>
                  </div>

              </div>

               <div>
                  <div className="profile-info">
                     <h1>James Cold</h1>
                     <h2>Song Writer</h2>
                     <hr />
                     <p>
                       Lorem ipsum dolor sit amet consectetur.
                       Quam bibendum ut volutpat mattis orci. 
                       Lorem ipsum dolor sit amet consectetur. 
                       Quam bibendum ut volutpat mattis orci.
                       Lorem ipsum dolor sit amet consectetur.
                    </p>
                     <button className="contact-btn">SEND INQUIRY</button>
                 </div>
                 
                 <div className="profile-pricing">
                   <h2>$112/Day</h2>
                   <div className="grid-container">
                       <div className="grid-item">
                          <MdOutlineDateRange className="icon" />
                          <p>05 JAN 2022</p>
                       </div>

                       <div className="grid-item">
                          <GoClockFill />
                          <p>05:25PM</p>
                       </div>

                       <div className="grid-item3">
                          <MdCalendarViewDay className="icon" />
                          <p>3 DAYS</p>
                       </div>
                   </div>
                   <div className="profile-services">
                      <h4>$112 x 3days</h4>
                      <h4>$336</h4>
                   </div>
                   <div className="profile-services">
                      <h4>Services Charge</h4>
                      <h4>$26</h4>
                   </div>
                   <hr />
                   <div className="profile-services">
                      <h5>Total</h5>
                      <h5>$362</h5>
                   </div>
                   <button className="contact-btn">BOOK</button>
                 </div>

               </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Profile