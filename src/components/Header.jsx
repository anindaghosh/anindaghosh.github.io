// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton'; // Import the toggle button

function Header({ name, links }) {
  return (
    <header className="portfolio-header">
      <div className="header-title">
        <h1>👋 Hi, my name is {name}</h1>
      </div>

      <nav className="navbar">
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {/* Add the Theme Toggle Button here */}
          <li>
            <ThemeToggleButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
