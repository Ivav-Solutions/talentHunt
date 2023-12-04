import './App.css'
import AboutUs from './Routes/AboutUs'
import Contact from './Routes/Contact'
import Talents from './Routes/Talents'
import Home from './components/frontend/Home'
import Footer from './components/frontend/Footer'






function App() {
  return (
    <>
      <div className="App_container">
        <Home />
        <Talents />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App