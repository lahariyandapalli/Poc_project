import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);

  const handleMobileNumberChange = (e) => {
    const newMobileNumber = e.target.value;
    // Check if the input is a 10-digit number
    if (/^\d{10}$/.test(newMobileNumber)) {
      setIsMobileValid(true);
    } else {
      setIsMobileValid(false);
    }
    setMobileNumber(newMobileNumber);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleMobileNumberSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement logic to send an OTP to the provided mobile number
    // For the example, we'll just toggle the OTP form
    setShowOtpForm(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic here...
    // Redirect to the desired page (e.g., Home) after successful login
    navigate('/login'); // Replace '/' with the path to the home page
  };

  return (
    <div className="login-container">
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input type="text" id="id" name="id" placeholder="Enter your ID" />
          </div>
          </form>
        {!showOtpForm ? (
          <form onSubmit={handleMobileNumberSubmit}>
            <div className="input-group">
              <input
                type="tel" // Use type "tel" for mobile number input
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter your mobile number (e.g., 9876543210)"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
              />
            </div>
            <button
              type="submit"
              className="login-button"
              disabled={!isMobileValid}
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="text" // Use type "text" for OTP input
                id="otp"
                name="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
              />
            </div>
            <button type="submit" className="login-button">
              Verify OTP
            </button>
          </form>
        )}
        <div className="forgot-password">
          <a href="#">Resend OTP</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
