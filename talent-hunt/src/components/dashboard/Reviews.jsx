import React from 'react'
import eclipsewoman from '../../assets/images/eclipsewoman.png'
import elipseman from '../../assets/images/elipseman.png'
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="Reviews-container">
        <div className="highlight-intro">
           <h1>Reviews (11)</h1>
            <div>
                {data.map((item) => (
                <FaStar key={item} className="star-icon" />
                ))}
          </div>
          <div className="reviews-container">
              <div className="reviews-icon" >
                 <div>
                     <img src={eclipsewoman} alt="" />
                 </div>
                 <div>
                     <h1>Fish Stone</h1>
                     <p>May 20, 2022</p>
                 </div>
                 <div className="star">
                     {data.map((item) => (
                     <FaStar key={item} className="star-icon" />
                      ))}
                 </div>
             </div>
         </div>
          <p>
             Lorem ipsum dolor sit amet consectetur.
             Feugiat augue dolor maecenas bibendum etiam accumsan ut. 
             Adipiscing sapien morbi et elementum. 
             Commodo donec rutrum tortor suspendisse mattis et.
             Tincidunt neque in auctor in facilisi.
             At augue sed diam potenti facilisis amet consectetur quis libero.
             Pharetra cursus ut.
          </p>
          <hr />
          <div className="reviews-container">
             <div className="reviews-icon">
                 <div>
                     <img src={elipseman} alt="" />
                 </div>
                 <div>
                     <h1>James Brown</h1>
                     <p>May 20, 2022</p>
                 </div>
                 <div className="star">
                     {data.map((item) => (
                     <FaStar key={item} className="star-icon" />
                     ))}
                 </div>
              </div>
          </div>
          <p>
              Lorem ipsum dolor sit amet consectetur.
              Feugiat augue dolor maecenas bibendum etiam accumsan ut. 
              Adipiscing sapien morbi et elementum. 
              Commodo donec rutrum tortor suspendisse mattis et.
              Tincidunt neque in auctor in facilisi.
              At augue sed diam potenti facilisis amet consectetur quis libero.
             Pharetra cursus ut.
          </p>
          <hr />
          <button className="review-button">View more 9 reviews</button>
     </div>
  </div>
  )
}

export default Reviews