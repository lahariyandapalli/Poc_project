import React, { useState } from 'react';
import './LoginManager.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate



function LoginManager() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const [currentPage, setCurrentPage] = useState('login');
  const navigate = useNavigate();  // Define navigate using useNavigate

  const handleProceed = (direction) => {
    if (direction === 'next') {
      if (currentPage === 'login') {
        setCurrentPage('password');
      } else if (currentPage === 'password') {
        setCurrentPage('otp');
      } else {
        // Handle OTP submission logic
      }
    } else if (direction === 'back') {
      if (currentPage === 'password') {
        setCurrentPage('login');
      } else if (currentPage === 'otp') {
        setCurrentPage('password');
      }
    }
  };

  const handleNavigateToHome = () => {
    // Use the navigate function to go to the "Home" route
    navigate('/');
  };
  const handleNavigateToProductMaster = () => {
    navigate('/product-master');
  };

  return (
    <div className="card-container-container">
      <img src="/Images/E-Wallet-pana.png" alt="E-Wallet Image" className="small-image" />
      {currentPage === 'login' && (
        <div className="card-container login-box">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button type="button" onClick={() => handleProceed('next')} className="login-button">
                Next
              </button>
            </div>
          </form>
        </div>
      )}

      {currentPage === 'password' && (
        <div className="card-container password-form">
          <h2>Password</h2>
          <form>
            <div className="form-group">
              <label htmlFor="password">Enter your password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="button-container">
              <button type="button" onClick={() => handleProceed('back')} className="login-button">
                Back
              </button>
              <button type="button" onClick={() => handleProceed('next')} className="login-button">
                Next
              </button>
            </div>
          </form>
        </div>
      )}

      {currentPage === 'otp' && (
        <div className="card-container otp-box">
          <h2>Enter OTP</h2>
          <form>
            <div className="form-group">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                className="form-control"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <p className="resend-link">
              Didn't receive OTP? <span>Resend OTP</span>
            </p>
            <div className="button-container">
          <button
            type="button"
            onClick={handleNavigateToHome}
            className="login-button"
          >
            Submit
          </button>
          {/* Add a button to navigate to the ProductMaster component */}
          <button
            type="button"
            onClick={handleNavigateToProductMaster}
            className="login-button"
          >
            Go to Product Master
          </button>
        </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginManager;