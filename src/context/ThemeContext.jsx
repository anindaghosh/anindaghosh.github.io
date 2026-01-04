// src/context/ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create Context
const ThemeContext = createContext();

// Create Provider Component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme ('light' or 'dark')
  // Initialize state from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return 'light'; // Default theme for SSR
    }
    const savedTheme = localStorage.getItem('theme');
    // You could also check system preference here if needed:
    // const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || 'light'; // Default to light if nothing saved
  });

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect to update the body attribute and localStorage when theme changes
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Set the data-theme attribute on the body
    document.body.setAttribute('data-theme', theme);
    // Save the theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Re-run effect whenever theme changes

  // Provide the theme state and toggle function to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext easily
export const useTheme = () => useContext(ThemeContext);
