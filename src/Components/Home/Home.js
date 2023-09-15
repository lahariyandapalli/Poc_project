import React from 'react'
import "./Home.css"
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Create a navigate function

  const handleLogin = () => {
    // Use the navigate function to navigate to the login page
    navigate('/login');
  };
  return (
    <div className='home'>
        <div className='left-h'>
            <Header/>
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
          {/* <div>
            <button className='btn'>Get Started</button>
          </div> */}
        </div>
        <div className='right-h'>
            <div className='home-buttons'>
            <button
        className="btn btn-dark btn-block"
        onClick={handleLogin}
      >
        Login
      </button>
               <button className='btn'>Sign Up</button>
            </div>
            <div className='image-container'>
          <img  className = "image" src="./Images/Home_image.jpg" alt="Home Image" />
        </div>

        </div>
    </div >
  )
}

export default Home