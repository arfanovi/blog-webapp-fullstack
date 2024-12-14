import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Navigation */}
        <nav className="footer_nav category">
          <ul className="footer_links">
            <li><Link to="/posts/categories/:React">React JS</Link></li>
            <li><Link to="/posts/categories/:Node">Node JS</Link></li>
            <li><Link to="/posts/categories/:Express">Express JS</Link></li>
            <li><Link to="/posts/categories/:MongoDB">MongoDB</Link></li>
          </ul>
        </nav>

        {/* Footer Info */}
        <div className="footer_info">
          <p>&copy; {currentYear} MERN Department. All rights reserved.</p>
          <p>
            Built with ❤️ by 
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer"> Ovi</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
