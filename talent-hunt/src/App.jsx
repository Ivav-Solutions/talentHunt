import './App.css'
import AboutUs from './Routes/AboutUs'
import Contact from './Routes/Contact'
import Talents from './Routes/Talents'
import Home from './components/Home'
import Footer from './components/Footer'






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