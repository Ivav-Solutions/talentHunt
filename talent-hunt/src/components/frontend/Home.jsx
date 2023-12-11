import React from 'react'
import Navbar from './Navbar'
import '../../assets/css/Home.css'
import vector from '../../assets/images/vector.png'
import AboutUs from '../../Routes/AboutUs';
import ContactUs from '../../Routes/ContactUs';
import Talents from '../../Routes/Talents';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Navbar />
       <div className="intro-text">
         <h1>IVAV TALENT HUNT</h1>
         <p>Promoting Next Generation Talents</p>
         <div className="intro-link">
          <div className="img-container">
              <img src={vector} alt="" className="img-link"/>
           </div>
          How it Works
         </div>
       </div>
     </div>
     <div>
        <section id="talents"><Talents /></section>
        <section id="aboutus"><AboutUs /></section>
        <section id="contactus"><ContactUs /></section>
      </div>
    </div>
  )
}

export default Home