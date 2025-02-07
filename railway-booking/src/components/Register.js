
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const API_BASE_URL = 'http://localhost:3000';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('❌ Passwords do not match!');
      return;
    }
    
    try {
      await axios.post(`${API_BASE_URL}/register`, { username, password });
      alert('✅ Registration successful!');
      navigate('/');
    } catch (error) {
      setError('❌ Registration failed. Try again!');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            className="input-field" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input-field" 
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            className="input-field" 
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="register-btn">Register</button>
          {/* <p className="login-link">Already have an account? <a href="/login">Login</a></p> */}
        </form>
      </div>
    </div>
  );
}

export default Register;
