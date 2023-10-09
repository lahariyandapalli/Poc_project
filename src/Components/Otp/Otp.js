import React from 'react';
import { Link } from 'react-router-dom';
import './Otp.css'; // Import your CSS file

function Otp() {
  return (
    <div className="container">
      <div className="otp-box">
        <h2>Enter OTP</h2>
        <form>
          <div className="form-group">
            <label htmlFor="otp">OTP</label>
            <input type="text" id="otp" className="form-control" placeholder="Enter OTP" />
          </div>
          <button className="btn btn-primary">
            <p>Submit</p>
          </button>
        </form>
        <p className="resend-link">
          Didn't receive OTP? <Link to="/resend">Resend OTP</Link>
        </p>
      </div>
    </div>
  );
}

export default Otp;
