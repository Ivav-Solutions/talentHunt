import React from "react";
import "../../assets/css/index.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="form">
          <input type="name" placeholder="Name" />
          <input type="Email" placeholder="Enter your email" />
          <textarea rows="6" placeholder="Enter your message..." />
          <div className="contactBTN">
            <button className="contact-btn">SEND MESSAGE</button>
          </div>
        </div>

        <div className="contact-info">
          <h1>Contact</h1>
          <h2>Get in Touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed felis sed lorem
            tincidunt eu elit purus urna tincidunt. Consequat volutpat sit
            integer arcu feugiat blandit in sapien et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
