// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Links from './components/Links';
import Footer from './components/Footer';
import { personalInfo, aboutContent, contactLinks, footerInfo, navLinks } from './data/portfolioData'; // Import navLinks
import './index.css';

function App() {
  return (
    <BrowserRouter> {/* Wrap everything in BrowserRouter */}
      <div className="portfolio-container">
        {/* Pass navLinks to Header */}
        <Header name={personalInfo.name} links={navLinks} />

        <main> {/* Wrap content sections in main */}
          <Routes> {/* Define routes */}
            <Route
              path="/"
              element={
                <> {/* Use Fragment for multiple elements on home route */}
                  <AboutSection content={aboutContent} />
                  <Links links={contactLinks} />
                </>
              }
            />
            {/* Placeholder routes for other sections */}
            {/* You would create components like ProjectsPage, WorkPage etc. */}
            <Route path="/projects" element={<div>Projects Page Content Goes Here</div>} />
            <Route path="/work" element={<div>Work Experience Content Goes Here</div>} />
            <Route path="/education" element={<div>Education Content Goes Here</div>} />
            {/* Add routes for other links */}
          </Routes>
        </main>

        <Footer info={footerInfo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
