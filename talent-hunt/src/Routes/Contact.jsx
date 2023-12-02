import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-container">
           <div className="form">
              <input type="name" placeholder="Name"/>
              <input type="Email" placeholder="Enter your email" />
              <textarea rows="6" placeholder="Enter your message..." />
              <button className="contact-btn">SEND MESSAGE</button>
           </div>

            <div className="contact-info">
              <h1>Contact</h1>
              <h2>Get in Touch</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Sed felis sed lorem tincidunt eu elit purus urna tincidunt. Consequat volutpat sit integer arcu feugiat blandit in sapien et.</p>
            </div>


        </div>
        
        
    </div>
  )
}

export default Contact