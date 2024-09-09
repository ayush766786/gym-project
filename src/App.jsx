import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Products from './Pages/Products';
import SignUp from './Pages/SignUp';
import Contact from './Pages/Contact';

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
