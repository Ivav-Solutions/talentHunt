import React from 'react'
import { HashLink } from 'react-router-hash-link'



const ProfileNavbar = () => {
  return (
    <div className="profile-navbar">
      <div className="profile-link">
        <ul className="profile-hashlink">
          <li className="profile-btn"><HashLink to="/#highlights">Highlights</HashLink></li>
          <li className="profile__btn"><HashLink to="/#description">Description</HashLink></li>
          <li className="profile__btn"><HashLink to="/reviews">Reviews</HashLink></li>
          <li className="profile__btn"><HashLink to="/availability">Availability</HashLink></li>
          <li className="profile__btn"><HashLink to="/exhibition">Exhibition</HashLink></li>
        </ul>
        <hr/>
      </div>

      
    </div>
  )
}

export default ProfileNavbar