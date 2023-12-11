import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Home from './components/frontend/Home';
import Footer from './components/frontend/Footer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          {/* Other routes */}
        </Routes>
        <div className="App_container">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
