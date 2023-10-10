import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Login.css';

function Login({ handleProceed = () => { } }) {

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email address" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter your password" />
          </div>
          <div className="btn-container">
            <button type="button" onClick={() => handleProceed("pwd")} className="next-button">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
