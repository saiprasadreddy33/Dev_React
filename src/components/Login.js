import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; // Import the custom CSS

const Login = ({ onLogin }) => { // Accept onLogin prop to notify successful login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and password
    if (!email.includes('@') || password.length < 8) {
      toast.error('Please enter a valid email and an 8-character password.');
    } else {
      toast.success('Login successful');
      onLogin(); // Notify successful login
    }
  };

  return (
    <div className="login-container">
      <div className="login-rectangle"></div>
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <div className="login-background"></div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label className="login-label">Email</label>
            <input
              type="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="login-field">
            <label className="login-label">Password</label>
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button className="login-button">Sign In</button>
          <div className="forgot-password">Forgot Password?</div>
          <div className="new-user">New User? <a href="/signup">Sign Up</a></div>
          <div className="social-buttons">
            <div className="social-button google-btn">
              <img src="path-to-google-icon.png" alt="Google Icon" style={{ marginRight: '10px' }} />
              Continue with Google
            </div>
            <div className="social-button facebook-btn">
              <img src="path-to-facebook-icon.png" alt="Facebook Icon" style={{ marginRight: '10px' }} />
              Continue with Facebook
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
