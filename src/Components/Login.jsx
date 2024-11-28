import React, { useState } from 'react';

function Login({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Placeholder logic for logging in
    alert(`Logging in with username: ${username} and password: ${password}`);
    onClose(); // Close the modal after login (optional)
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <div>
        <button onClick={handleLogin} style={{ padding: '10px' }}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
