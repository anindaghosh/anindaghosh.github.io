import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        <span className="section-icon">💻</span>
        Projects
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">{project.description}</p>

              {project.technologies && (
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
