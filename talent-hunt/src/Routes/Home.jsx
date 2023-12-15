import React from 'react'
import Navbar from '../components/frontend/Navbar'
import '../assets/css/index.css'
import vector from '../assets/images/vector.png'
import AboutUs from '../components/frontend/AboutUs';
import ContactUs from '../components/frontend/ContactUs';
import Talents from '../components/frontend/Talents';
import Footer from '../components/frontend/Footer';

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
      <Footer />
    </div>
  )
}

export default Home