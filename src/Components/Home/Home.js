import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom';
// import VideoFile from './public/Images/video.mp4';

const Home = () => {
  const navigate = useNavigate(); // Create a navigate function

  const handleLogin = () => {
    // Use the navigate function to navigate to the login page
    navigate('/login');
  };

  const handleSignUp = () => {
    // Use the navigate function to navigate to the sign-up page
    navigate('/signup');
  };

  return (
    <div className='home'>
      <div className='left-h'>
        <Header />
        <div className='heading'>
          <div>
            <span>Revolutionize </span>
            <span>Finance</span>
          </div>
          <div>
            <span>Embracing the Future</span>
          </div>
        </div>
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
<<<<<<< HEAD
          <button
            className="btn btn-dark btn-block"
            onClick={handleLogin}
          >
            Login
          </button>
=======
            </div>
            <div className='video-container'>
               <video width="100%" height="500" autoPlay loop muted style={{maxWidth:"100%"}}>
               <source src="./Images/video.mp4" type="video/mp4" />
            </video>
>>>>>>> 76004dfbc39a73dcf78d2d20405b1b8d7a7eb481
        </div>
        <div className='image-container'>
          <img className="image" src="./Images/Home_image.jpg" alt="Home Image" />
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default Home;
=======
export default Home
>>>>>>> 76004dfbc39a73dcf78d2d20405b1b8d7a7eb481
