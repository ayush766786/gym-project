import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Products from './Components/Products';
import SignUp from './Components/SignUp';
import Contact from './Components/Contact';

import React from 'react';
import NavBar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
       <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/signup" element={<SignUp/>} />
         
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  
    </>
  )
}

export default App
