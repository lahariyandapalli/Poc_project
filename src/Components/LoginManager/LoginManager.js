import React, { useState } from 'react';
import Login from '../Login/Login'; // Import Login component
import Password from '../Password/Password'; // Import Password component
import Otp from '../Otp/Otp'; // Import Otp component

function LoginManager() {
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
    
      {currentPage === 'login' && (
        <Login onNext={() => handlePageChange('password')} />
      )}
      {currentPage === 'password' && (
        <Password onNext={() => handlePageChange('otp')} />
      )}
      {currentPage === 'otp' && <Otp />}
    </div>
  );
}

export default LoginManager;
