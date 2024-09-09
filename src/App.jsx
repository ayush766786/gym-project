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
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/gallery" element={<h1>Gallery Page</h1>} />
          <Route path="/product" element={<h1>Product Page</h1>} />
          <Route path="/signup" element={<h1>SignUp Page</h1>} />
         
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </div>
    </Router>
  
    </>
  )
}

export default App
