import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import LoginManager from './Components/LoginManager/LoginManager'; // Update path
import Sign_Up from './Components/Sign_up/Sign_up';
import Investor from './Components/Investor/Investor';
import Borrower from './Components/Borrower/Borrower';
import Corporate_loanpage from './Components/Corporate_loanpage/Corporate_loanpage';
import ProductMaster from './Components/Product/ProductMaster';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/borrower" element={<Borrower />} />
          <Route path="/corporateloan" element={<Corporate_loanpage />} />
          <Route path="/login" element={<LoginManager />} />
          <Route exact path="/product-master" element={<ProductMaster />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
