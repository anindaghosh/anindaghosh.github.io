// src/components/ThemeToggleButton.js
import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import the custom hook

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme(); // Get theme state and toggle function

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Display different icons based on the theme */}
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggleButton;
