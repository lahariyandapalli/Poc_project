import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
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
          <Link to="/pswd"> {/* Use Link to navigate */}
            <button className="btn btn-primary">
              <p>Next</p>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
