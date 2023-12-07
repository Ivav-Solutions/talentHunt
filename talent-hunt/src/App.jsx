import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from './components/auth/register'
import AboutUs from './Routes/AboutUs'
import ContactUs from './Routes/ContactUs'
import Talents from './Routes/Talents'
import Home from './components/frontend/Home'
import Footer from './components/frontend/Footer'


function App() {
  return (
    <>
      {/* <Router>
          <Route path="/register" exact component={<Register />} />
      </Router> */}
    
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