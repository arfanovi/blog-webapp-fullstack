import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import "../style.css"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <Link to="/" className="logo">
          <img src="logo.png" alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="nav_list">
            <li><Link to="/profile">Ernest Achiever</Link></li>
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>

          {/* Close Button */}
          <button className="nav_toggle_btn" onClick={toggleNav}>
            <AiOutlineClose />
          </button>
        </nav>

        {/* Hamburger Menu */}
        {!isNavOpen && (
          <button className="nav_toggle_btn" onClick={toggleNav}>
            <AiOutlineMenu />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
