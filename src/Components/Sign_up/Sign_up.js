// Sign_up.js
import React, { useState } from 'react';
import './Sign_up.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Sign_up = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleProceed = () => {
    if (selectedCategory === 'Investor') {
      navigate('/investor'); // Redirect to the Investor page
    } else if (selectedCategory === 'Borrower') {
      navigate('/borrower'); // Redirect to the Borrower page
    }
  };

  return (
    <div className="signup-container">
      <div className="card">
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select</option>
            <option value="Investor">Investor</option>
            <option value="Borrower">Borrower</option>
          </select>
        </div>

        <div className="btn-container">
          <button type="button" onClick={handleProceed} className="proceed-button">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sign_up;
