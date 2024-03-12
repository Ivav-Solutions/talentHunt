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
import Account from './components/dashboard/settingPage/Account';
import Bookings from './components/dashboard/settingPage/Bookings';
import Offers from './components/dashboard/settingPage/Offers';
import Bookking from './components/dashboard/settingPage/Bookking';


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
          <Route path={`${routePrefix}/settings/profile`} element={<Profile />} />
          <Route path={`${routePrefix}/hunters`} element={<Hunters />} />
          <Route path={`${routePrefix}/settings/account`} element={<Account />} />
          <Route path={`${routePrefix}/settings/bookings`} element={<Bookings />} />
          <Route path={`${routePrefix}/settings/offers`} element={<Offers />} />
          <Route path={`${routePrefix}/settings/bookking`} element={<Bookking />} />
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
