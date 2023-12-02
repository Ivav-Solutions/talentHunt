import React from 'react'
import image1 from "../assets/image1.png"
import './AboutCard.css'

const AboutCard = () => {
  return (
        <div className="reward-container">
            <div className="reward-card">
               <img src={image1} alt="" />
               <h1>The Best Platform</h1>
               <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
           </div>

           <div className="reward-card">
               <img src={image1} alt="" />
               <h1>The Best Platform</h1>
               <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
           </div>

           <div className="reward-card">
              <img src={image1} alt="" />
              <h1>The Best Platform</h1>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
           </div>

           <div className="reward-card">
              <img src={image1} alt="" />
              <h1>The Best Platform</h1>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
           </div>
     </div>
  )
}

export default AboutCard