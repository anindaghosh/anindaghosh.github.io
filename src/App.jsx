// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import WorkSection from './components/WorkSection';
import ProjectsSection from './components/ProjectsSection';
import Links from './components/Links';
import Education from './components/Education';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import {
  personalInfo,
  aboutContent,
  contactLinks,
  footerInfo,
  navLinks,
  skillsData,
  educationData,
  projectsData,
  resumeData,
  workData,
} from './data/portfolioData';
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
                    <AboutSection
                      content={aboutContent}
                      photo={personalInfo.photo}
                    />
                    <SkillsSection skills={skillsData} />
                    <Links links={contactLinks} />
                  </>
                }
              />
              <Route
                path="/projects"
                element={<ProjectsSection projects={projectsData} />}
              />
              <Route
                path="/work"
                element={<WorkSection workData={workData} />}
              />
              <Route
                path="/education"
                element={<Education educationData={educationData} />}
              />
              <Route
                path="/resume"
                element={<Resume resumeData={resumeData} />}
              />
            </Routes>
          </main>

          <Footer info={footerInfo} />
        </div>
      </BrowserRouter>
    </ThemeProvider> // Close ThemeProvider
  );
}

export default App;
