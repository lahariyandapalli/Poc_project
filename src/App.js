import React from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sign_Up from './Components/Sign_up/Sign_up';
import Investor from "./Components/Investor/Investor"
import Borrower from "./Components/Borrower/Borrower"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/investor" element={<Investor/>} />
          <Route path="/borrower" element={<Borrower/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
