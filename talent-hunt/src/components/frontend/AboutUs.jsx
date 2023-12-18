import React from "react";
import "../../assets/css/index.css";
import image1 from "../../assets/images/image1.png";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-container">
        <div className="reward-container">
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

          <div className="reward-card">
            <img src={image1} alt="" />
            <h1>The Best Platform</h1>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="about-info">
          <h1>WHO WE ARE</h1>
          <h2>The Best Global Communication Platform</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            labore iure, dolore similique enim magnam at qui odit quaerat
            corporis? Vero, autem vitae molestias corporis doloribus aliquid
            cumque itaque debitis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
