import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Otp.css';

function Otp() {
  const navigate = useNavigate(); // Initialize navigate

  const handleProceed = () => {
    // Handle any logic here if needed
    
    // Redirect to the home page (/)
    navigate('/');
  };

  return (
    <div className="container">
      <div className="otp-box">
        <h2>Enter OTP</h2>
        <form>
          <div className="form-group">
            <label htmlFor="otp">OTP</label>
            <input type="text" id="otp" className="form-control" placeholder="Enter OTP" />
          </div>
          <div className="btn-container">
            <button type="button" onClick={handleProceed} className="submit-button">
              Submit
            </button>
          </div>
        </form>
        <p className="resend-link">
          Didn't receive OTP? <span onClick={() => navigate('/resend')}>Resend OTP</span>
        </p>
      </div>
    </div>
  );
}

export default Otp;
