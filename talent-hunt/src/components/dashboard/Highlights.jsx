import React from 'react'
import verifyman from '../../assets/images/verifyman.png'
import green from '../../assets/images/green.png'
import star from '../../assets/images/star.png'
import location5 from '../../assets/images/location5.png'
import response from '../../assets/images/response.png'
import time from '../../assets/images/time.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Highlights = () => {
  return (
    <div className="highlight-container">
      <div className="highlight-intro">
         <h1>Highlights</h1>
         <h2>Artist Profile</h2>
         <div className="artist-img">
             <div className="image-contain">
                 <img className="background-img" src={verifyman} alt="" />
                 <img className="overlay-img" src={green} alt="" />
             </div>
             <div className="star-intro">
                 <h1>James Cold</h1>
                 <p>Song Writer</p>
                 <div className="star-img"> 
                     <div>
                         <img src={star} alt="" width="14" /> 
                     </div>
                     <p>4.5 (12)</p>
                  </div>
             </div>
         </div>
         <p>
             Lorem ipsum dolor sit amet consectetur.
             Orci quis neque aliquet dui proin facilisis lectus.
             Non ac natoque scelerisque mattis integer dictum mollis ipsum imperdiet.
             Sollicitudin cursus etiam ac magnis gravida ultrices enim sit id.
             In amet fames fusce feugiat ultrices vitae.
             Lorem ipsum dolor sit amet consectetur.
             Orci quis neque aliquet dui proin facilisis lectus.
             Non ac natoque scelerisque mattis integer dictum mollis ipsum imperdiet. Sollicitudin.
         </p>
         <div>
             <div className="profile-icons">
                 <div>
                     <img src={location5} alt="" />
                 </div>
                 <p>Location-Lagos</p>
             </div>
             <div className="profile-icons">
                 <div>
                     <img src={response} alt="" />
                 </div>
                 <p>Response Rate-100%</p>
              </div>
             <div className="profile-icons">
                 <div>
                     <img src={time} alt="" />
                 </div>
                 <p>Fast Response ASAP</p>
             </div>
         </div>
         <div>
             <p>Other Social Link</p>
             <div className="profile-link">
                 <div>
                     <FaFacebookF className="link-icon"  /> 
                  </div>
                 <div>
                     <FaTwitter className="link-icon" />
                 </div>
                 <div>
                     <FaInstagram className="link-icon" />
                 </div>
                 <div>
                     <FaLinkedin className="link-icon" />
                 </div>
                 <div>
                     <FaYoutube className="link-icon" />
                 </div>
              </div>
         </div>
     </div>
  </div>
  )
}

export default Highlights