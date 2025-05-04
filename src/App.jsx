// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Links from './components/Links';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import { personalInfo, aboutContent, contactLinks, footerInfo, navLinks } from './data/portfolioData';
import './index.css';

function App() {
  return (
    // Wrap BrowserRouter with ThemeProvider
    <ThemeProvider>
      <BrowserRouter>
        <div className="portfolio-container">
          <Header name={personalInfo.name} links={navLinks} />

          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AboutSection content={aboutContent} />
                    <Links links={contactLinks} />
                  </>
                }
              />
              {/* <Route path="/projects" element={<div>Projects Page Content Goes Here</div>} />
              <Route path="/work" element={<div>Work Experience Content Goes Here</div>} />
              <Route path="/education" element={<div>Education Content Goes Here</div>} /> */}
            </Routes>
          </main>

          <Footer info={footerInfo} />
        </div>
      </BrowserRouter>
    </ThemeProvider> // Close ThemeProvider
  );
}

export default App;
