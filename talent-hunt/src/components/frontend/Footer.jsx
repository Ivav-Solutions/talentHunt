import React from "react";
import masklogo from "../../assets/images/masklogo.png";
import instagram from "../../assets/images/instagram.png";
import whatsapp from "../../assets/images/whatsapp.png";
import discord from "../../assets/images/discord.png";
import "../../assets/css/index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <div className="footer-img">
            <img src={masklogo} alt="" />
          </div>
          <div className="footer-link">
            <h1>Home</h1>
            <p>Portugal Lisbon</p>
            <p>Ruchapt@gmail.com</p>
          </div>
          <div className="footer-link">
            <h1>Links</h1>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className="footer-socials">
          <h1>Socials</h1>
          <div className="footer-social">
            <img src={instagram} alt="" />
            <img src={whatsapp} alt="" />
            <img src={discord} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
