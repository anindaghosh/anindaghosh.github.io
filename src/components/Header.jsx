// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

// Receive links as a prop
function Header({ name, links }) {
  return (
    // Use flexbox to position items
    <header className="portfolio-header">
      <div className="header-title">
        <h1>👋 Hi there, my name is {name}</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="navbar">
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              {/* Use NavLink for automatic active class styling */}
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
