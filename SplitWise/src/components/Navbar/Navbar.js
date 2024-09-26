import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../pics/logo1.png';
import Login from '../Login/Login'; // Import your Login component

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Company Logo" className="logo-image" />
        <h1>SmartDivvy</h1>
      </div>
      <button className="login-button" onClick={handleLoginClick}>Login</button>
      {showLogin && <Login onClose={handleCloseLogin} />}
    </nav>
  );
}

export default Navbar;
