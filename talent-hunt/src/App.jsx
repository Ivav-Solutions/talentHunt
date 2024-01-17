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
import Hunters from './components/frontend2/Hunters';
import Account from './components/settingPage/Account';
import Bookings from './components/settingPage/Bookings';


function App() {
  const routePrefix = '/dashboard'; // Change 'app' to your desired prefix
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
          <Route path={`${routePrefix}/profile`} element={<Profile />} />
          <Route path={`${routePrefix}/hunters`} element={<Hunters />} />
          <Route path={`${routePrefix}/account`} element={<Account />} />
          <Route path={`${routePrefix}/bookings`} element={<Bookings />} />
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
