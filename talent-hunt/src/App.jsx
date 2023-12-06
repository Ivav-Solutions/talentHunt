import './App.css'
import AboutUs from './Routes/AboutUs'
import ContactUs from './Routes/ContactUs'
import Talents from './Routes/Talents'
import Home from './components/frontend/Home'
import Footer from './components/frontend/Footer'







function App() {
  return (
    <>
      <div className="App_container">
        <Home />
        <section id="talents"><Talents /></section>
        <section id="aboutus"><AboutUs /></section>
        <section id="contactus"><ContactUs /></section>
        <Footer />
      </div>
    </>
  )
}

export default App