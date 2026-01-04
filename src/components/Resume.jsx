import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFilePdf, FaDownload, FaEye } from 'react-icons/fa';

const Resume = ({ resumeData }) => {
  return (
    <>
      <Helmet>
        <title>Resume | Aninda Ghosh</title>
        <meta
          name="description"
          content="Download or view Aninda Ghosh's resume. Full Stack Developer with expertise in cloud architecture, React, Node.js, AWS, and secure application development."
        />
        <meta property="og:title" content="Resume | Aninda Ghosh" />
        <meta
          property="og:description"
          content="Professional resume showcasing experience in cloud engineering, full-stack development, and software architecture."
        />
        <meta property="og:url" content="https://www.anindaghosh.com/resume" />
        <link rel="canonical" href="https://www.anindaghosh.com/resume" />
      </Helmet>
      <section id="resume" className="resume-section">
      <h2 className="section-title">
        <span className="section-icon">📄</span>
        {`Resume`}
      </h2>

      <div className="resume-container">
        <div className="resume-card">
          <div className="resume-icon">
            <FaFilePdf size={48} />
          </div>

          <div className="resume-content">
            <h3 className="resume-title">Professional Background</h3>
            <p className="resume-description">
              {`View my Resume to learn more about my professional experience, skills, and qualifications.`}
            </p>

            <div className="resume-links">
              <a
                href={resumeData.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link view-link"
              >
                <FaEye />
                <span>{`View`}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Resume;
