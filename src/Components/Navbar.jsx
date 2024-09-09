import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons
import './NavBar.css';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false); // State for mobile menu toggle

  return (
    <nav className="navbar">
      <div className="logo">Ultimate-Fit-Zone</div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        {/* <li><Link to="/login">Login</Link></li> */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      {/* Hamburger icon */}
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default NavBar;
