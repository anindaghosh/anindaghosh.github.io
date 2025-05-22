import React from 'react';
import { FaFilePdf, FaDownload, FaEye } from 'react-icons/fa';

const Resume = ({ resumeData }) => {
  return (
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
  );
};

export default Resume;
