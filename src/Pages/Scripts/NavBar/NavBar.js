import React, {useState} from 'react';
import './NavBar.css';
import logo from '../../../pics/logo.jpg';
import LoginModal from '../../../Components/LoginModal';
const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
  
    const handleLoginClick = () => {
      setShowModal(!showModal);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" className="logo-image" />
          <h1>SmartDivvy</h1>
        </div>
        <button className='login-button' onClick={handleLoginClick}>
        Login
      </button>
      <LoginModal show={showModal} onClose={handleLoginClick} /> 
      </nav>
    );
  }
  
  export default Navbar;
  