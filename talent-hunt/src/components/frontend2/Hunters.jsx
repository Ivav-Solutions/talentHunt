import React from 'react'
import Navbar from '../frontend/Navbar'
import vector from '../../assets/images/vector.png'
import Talents2 from '../frontend2/Talents2'
import Footer from '../frontend/Footer'

const Hunters = () => {
  return (
    <div>
        <div className="home-container">
            <Navbar />
            <div className="intro-text">
                <h1>IVAV TALENT HUNT</h1>
                <p>Promoting Next Generation Talents</p>
                <div className="intro-link">
                    <div className="img-container">
                        <img src={vector} alt="" className="img-link" />
                    </div>
                    <span className="img-link-content">How It Works</span>
                </div>
            </div>
        </div>
        <div>
            <section id="talents">
                <Talents2 />
            </section>
        </div>
        <Footer />

    </div>
  )
}

export default Hunters