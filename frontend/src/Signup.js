import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import './Auth2.css';
import './Auth3.css';

function Signup({ onSignup, onSwitchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/signup', { email, password });
      localStorage.setItem('token', res.data.token);
      onSignup();
    } catch (error) {
      setError(error.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div className="error">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <span onClick={onSwitchToLogin}>Login</span></p>
      </form>
    </div>
  );
}

export default Signup;
