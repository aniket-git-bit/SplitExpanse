import React from 'react';
import './Login.css';

const Login = ({ onClose }) => {
  return (
    <div className="login-modal">
      <div className="login-form">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
