import React from 'react';
import './Password.css'; // Import your CSS file

function Password() {
  return (
    <div className="password-container">
      <div className="password-form">
        <h2>Password</h2>
        <form>
          <div className="form-group">
            <label htmlFor="password">Enter your password:</label>
            <input type="password" id="password" className="form-control" placeholder="Password" />
          </div>
          <button className="btn btn-primary">Secure Login</button> {/* Change button text */}
        </form>
      </div>
    </div>
  );
}

export default Password;
