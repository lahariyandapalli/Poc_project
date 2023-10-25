<<<<<<< HEAD
import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
  const navigate = useNavigate(); // Create a navigate function
 
=======
import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

>>>>>>> 95ad50e445b23d590a7deb6951c25e40c200a56a
  const handleLogin = () => {
    navigate('/login');
  };
<<<<<<< HEAD
 
=======

>>>>>>> 95ad50e445b23d590a7deb6951c25e40c200a56a
  const handleSignUp = () => {
    navigate('/signup');
  };
<<<<<<< HEAD
 
  return (
    <div className='home'>
      <div className='left-h'>
        <Header />
        <div className='heading'>
=======

  return (
    <div className="home">
      <div className="left-h">
        <Header />
        <div className="heading">
>>>>>>> 95ad50e445b23d590a7deb6951c25e40c200a56a
          <div>
            <span>Revolutionize </span>
            <span>Finance</span>
          </div>
          <div>
            <span>Embracing the Future</span>
          </div>
        </div>
<<<<<<< HEAD
        <div className='para'>
          <span>Introducing the Pioneering Credit Discovery and Investment Platform, Redefining Possibilities in Finance</span>
        </div>
      </div>
      <div className='right-h'>
        <div className='home-buttons'>
          <button
            className='btn'
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button
            className="btn btn-dark btn-block"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className='image-container'>
          <img className="image" src="./Images/Home_image.jpg" alt="Home Image" />
        </div>
      </div>
    </div>
  )
}
 
export default Home;
 
=======
        <div className="para">
          <span>Introducing the Pioneering Credit Discovery and Investment Platform, Redefining Possibilities in Finance</span>
        </div>
      </div>
      <div className="right-h">
        <div className="home-buttons">
          <button className="btn" onClick={handleSignUp}>
            Sign Up
          </button>
          <button className="btn btn-dark btn-block" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
      <div className="image-container">
        <img className="image" src="./Images/Home_image.jpg" alt="Home Image" />
      </div>
    </div>
  );
};

export default Home;
>>>>>>> 95ad50e445b23d590a7deb6951c25e40c200a56a
