import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FaExternalLinkAlt,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from 'react-icons/fa';

function WorkSection({ workData }) {
  return (
    <>
      <Helmet>
        <title>Work Experience | Aninda Ghosh</title>
        <meta
          name="description"
          content="Professional experience as Solutions Architect at AB InBev, Software Engineer at Persistent Systems, and internships at Juniper Networks. Expertise in cloud engineering, full-stack development, and DevOps."
        />
        <meta property="og:title" content="Work Experience | Aninda Ghosh" />
        <meta
          property="og:description"
          content="Professional experience in cloud engineering, full-stack development, and secure application architecture."
        />
        <meta property="og:url" content="https://www.anindaghosh.com/work" />
        <link rel="canonical" href="https://www.anindaghosh.com/work" />
      </Helmet>
      <section id="work" className="work-section">
      <h2 className="section-title">
        <span className="section-icon">🧑🏻‍💻</span>
        Work Experience
      </h2>

      <div className="work-timeline">
        {workData.map((job, index) => (
          <div key={index} className="work-item">
            <div className="timeline-marker"></div>

            <div className="work-date">
              <FaCalendarAlt className="date-icon" />
              <span>{job.period}</span>
            </div>

            <div className="work-content">
              <div className="work-header">
                {job.logo && (
                  <div className="company-logo">
                    <img src={job.logo} alt={`${job.company} logo`} />
                  </div>
                )}

                <div className="work-title-group">
                  <h3 className="work-position">{job.position}</h3>
                  <div className="work-company">
                    {job.company}
                    {job.website && (
                      <a
                        href={job.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  <div className="work-location">
                    <FaMapMarkerAlt className="location-icon" />
                    {job.location}
                  </div>
                </div>
              </div>

              {job.description && (
                <p className="work-description">{job.description}</p>
              )}

              {job.achievements && job.achievements.length > 0 && (
                <div className="work-achievements-container">
                  <h4 className="achievements-title">Key Achievements</h4>
                  <ul className="work-achievements">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.technologies && job.technologies.length > 0 && (
                <div className="work-technologies">
                  <h4 className="technologies-title">Technologies Used</h4>
                  <div className="tech-tags">
                    {job.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default WorkSection;
