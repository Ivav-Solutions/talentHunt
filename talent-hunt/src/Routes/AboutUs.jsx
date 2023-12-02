import React from 'react'
import AboutCard from '../components/AboutCard'
import './AboutUs.css'


const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-container">
        <div>
          <AboutCard />
        </div>
        
        <div className="about-info">
          <h1>WHO WE ARE</h1>
          <h2>The Best Global Communication Platform</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore iure, dolore similique enim magnam at qui odit quaerat corporis? Vero, autem vitae molestias corporis doloribus aliquid cumque itaque debitis!</p>
        </div>
     </div>
    </div>
  )
}

export default AboutUs