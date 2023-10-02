import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const toggleSubMenu1 = () => {
    setShowSubMenu1(!showSubMenu1);
    // Close sub-menu 2 when opening sub-menu 1
    setShowSubMenu2(false);
  };

  const toggleSubMenu2 = () => {
    setShowSubMenu2(!showSubMenu2);
  };

  const closeSubMenus = () => {
    setShowSubMenu1(false);
    setShowSubMenu2(false);
  };

  const handleCorporateLoanClick = () => {
    // Navigate to the desired route when "Corporate Loan" is clicked
    navigate('/corporateloan'); // Replace '/corporate-loan' with your actual route
  };

  return (
    <div className='header'>
      <ul className='header-menu'>
        <li
          className={`menu-item ${showSubMenu1 ? 'active' : ''}`}
          onMouseEnter={toggleSubMenu1}
          onMouseLeave={closeSubMenus}
          onClick={handleCorporateLoanClick} // Add onClick handler
        >
          Products
          <span className={`arrow ${showSubMenu1 ? 'open' : ''}`}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
          {showSubMenu1 && (
            <ul className={`sub-menu ${showSubMenu2 ? 'sub-menu2' : ''}`}>
              <li
                className={`menu-item ${showSubMenu2 ? 'active' : ''}`}
                onMouseEnter={toggleSubMenu2}
                onMouseLeave={closeSubMenus}
              >
                Corporate Loan
                <span className={`arrow ${showSubMenu2 ? 'open' : ''}`}>
                  {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                </span>
                {/* {showSubMenu2 && (
                  <ul className='sub-menu'>
                    <li>Option 1</li>
                    <li>Option 2</li>
                  </ul>
                )} */}
              </li>
              <li>Term Loan</li>
              <li>Pool Buyout</li>
            </ul>
          )}
        </li>
        <li>Knowledge</li>
        <li>About</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
