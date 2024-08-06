import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import googleIcon from './img/Group 9.png';
import facebookIcon from './img/Rectangle 17.png';
import errorIcon from './img/Group 2.png';
import './Login.css';
const useStyles = makeStyles({
  errorText: {
    color: '#EE2D6E',
    fontSize: '13px',
    lineHeight: '19px',
    letterSpacing: '0px',
    textAlign: 'left',
    marginTop: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  errorIcon: {
    width: '14px',
    height: '14px',
    marginRight: '5px',
  },
  loginButton: {
    backgroundColor: '#20B716',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '40px',
    cursor: 'pointer',
    width: '100%',
    height: '49px',
    '&:hover': {
      backgroundColor: '#1a9614',
    },
  },
  socialButton: {
    width: '48%',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    color: '#fff',
  },
  googleBtn: {
    backgroundColor: '#DB4437',
  },
  facebookBtn: {
    backgroundColor: '#3b5998',
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
        borderBottom: '1px solid #ccc',
        borderRadius: '0',
      },
      '&:hover fieldset': {
        borderBottom: '2px solid #999',
      },
      '&.Mui-focused fieldset': {
        borderBottom: '2px solid #20B716',
      },
    },
  },
  label: {
    textAlign: 'left',
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '0px',
    color: '#20B716',
    opacity: 1,
    marginBottom: '8px',
  },
  loginCard: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
});
const Login = ({ onLogin }) => { 
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@') || password.length < 8) {
      toast.error('Please enter a valid email and an 8-character password.');
    } else {
      toast.success('Login successful');
      onLogin(); 
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === '') {
      setEmailError('The email field is required');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="login-container">
  <div className="login-rectangle"></div>
  <div className="login-card">
  <div className="login-amazon"></div>
    <h2 className="login-title">Login</h2>
    <div className="login-background"></div>
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-field">
        <TextField
        id="standard-basic"
        label="Email"
          type="email"
          variant="standard"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          margin="normal"
          className={classes.textField}
          InputLabelProps={{
            style: { color: '#20B716' }, 
          }}
          InputProps={{
            style: { borderBottom: '#0000' },
          }}
        />
        {emailError && (
              <div className={classes.errorText}>
                <img  src={errorIcon} alt="Error Icon" className={classes.errorIcon} />
                {emailError}
              </div>
            )}
      </div>
      <div className="login-field">
        <TextField
        id="standard-basic"
        label="Password"
          type="password"
          variant="standard"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          className={classes.textField}
          InputLabelProps={{
            style: { color: '#20B716' }, 
          }}
          InputProps={{
            style: { borderBottom: '#0000' },
          }}
        />
      </div>
      <button className={classes.loginButton}>Sign In</button>
      <div className="forgot-password">
        <div>Forgot Password?</div>
        <a className="new-user" href="/login">New User? Sign Up</a>
      </div>
      <div className="or">
        or
      </div>
      <div className="social-buttons">
        <div className="social-button google-btn">
          <img src={googleIcon} alt="Google Icon" className="social-icon" />
          <span className="social-text">CONTINUE WITH GOOGLE</span>
        </div>
      </div>
      <div className="social-buttons">
        <div className="social-button facebook-btn">
          <img src={facebookIcon} alt="Facebook Icon" className="social-icon" />
          <span className="social-text">CONTINUE WITH FACEBOOK</span>
        </div>
      </div>
    </form>
    <ToastContainer />
  </div>
</div>

  );
};

export default Login;
