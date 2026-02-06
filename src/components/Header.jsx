// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import ThemeToggleButton from './ThemeToggleButton';

function Header({ name, links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="portfolio-header">
        <div className="header-title">
          <h1>👋 Hi, my name is {name}</h1>
        </div>

        {/* Hamburger button - visible on mobile */}
        <button
          className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Desktop nav - stays inside header */}
        <nav className={`navbar desktop-nav`}>
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <ThemeToggleButton />
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile menu overlay - outside header */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile nav - outside header to avoid backdrop-filter containing block */}
      <nav className={`navbar mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <ThemeToggleButton />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

