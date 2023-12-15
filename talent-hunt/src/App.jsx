import React from 'react';
import '/src/assets/css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Home from './Routes/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Other routes */}
        </Routes>
        <div className="App_container">
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
