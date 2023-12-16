import React from 'react';
import '/src/assets/css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ResetPassword from './components/auth/ResetPassword';
import Home from './Routes/Home';
import Verification from './components/auth/Verification';
import ChangePassword from './components/auth/ChangePassword';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
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
