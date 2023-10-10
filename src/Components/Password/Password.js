import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Password.css'; // Import your CSS file

function Password({ handleProceed }) {

  return (
    <div className="password-container">
      <div className="password-form">
        <h2>Password</h2>
        <form>
          <div className="form-group">
            <label htmlFor="password">Enter your password:</label>
            <input type="password" id="password" className="form-control" placeholder="Password" />
          </div>
          <div className="btn-container">
            <button type="button" onClick={() => handleProceed("otp")} className="securelogin-button">
              Secure login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Password;
