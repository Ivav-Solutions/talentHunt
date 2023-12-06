import React from 'react'
import Navbar from './Navbar'
import '../../assets/css/Home.css'
import vector from '../../assets/images/vector.png'
import { Link } from 'react-router-dom'


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
            <Link to="/how it works">How it Works</Link>
         </div>
       </div>
     </div>
    </div>

  )
}

export default Home