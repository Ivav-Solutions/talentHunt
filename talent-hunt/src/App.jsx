import React from 'react';
import '/src/assets/css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ForgotPassword from './components/auth/forgot-password';
import Home from './Routes/Home';
import Verification from './components/auth/verification';
import ResetPassword from './components/auth/reset-password';
import Profile from './components/dashboard/Profile';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
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
