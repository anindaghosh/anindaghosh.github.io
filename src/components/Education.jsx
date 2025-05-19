import React from 'react';
import { FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa';

function Education({ educationData }) {
  return (
   <section id="education" className="education-section">
      <h2 className="section-title">
        <FaGraduationCap className="section-icon" />
        Education
      </h2>
      
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <div className="timeline-marker"></div>
            
            <div className="education-date">
              <span>{item.period}</span>
            </div>
            
            <div className="education-content">
              <div className="education-header">
                {item.logo && (
                  <div className="education-logo">
                    <img src={item.logo} alt={`${item.institution} logo`} />
                  </div>
                )}
                
                <div className="education-title-group">
                  <h3 className="education-degree">{item.degree}</h3>
                  <div className="education-institution">
                    {item.institution}
                    {item.website && (
                      <a 
                        href={item.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="institution-link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  <div className="education-location">{item.location}</div>
                </div>
              </div>
              
              {item.description && (
                <p className="education-description">{item.description}</p>
              )}
              
              {item.achievements && item.achievements.length > 0 && (
                <div className="education-achievements-container">
                  <h4 className="achievements-title">Key Achievements</h4>
                  <ul className="education-achievements">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {item.courses && item.courses.length > 0 && (
                <div className="education-courses">
                  <h4 className="courses-title">Notable Courses</h4>
                  <div className="course-tags">
                    {item.courses.map((course, i) => (
                      <span key={i} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
