import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

const ProjectsSection = ({ projects }) => {
  return (
    <>
      <Helmet>
        <title>Projects | Aninda Ghosh - Portfolio</title>
        <meta
          name="description"
          content="Explore my portfolio of cloud infrastructure, AI/ML, and full-stack web development projects including CareVault, vulnerability scanners, and housing platforms."
        />
        <meta property="og:title" content="Projects | Aninda Ghosh" />
        <meta
          property="og:description"
          content="Portfolio showcasing cloud, AI/ML, and full-stack projects with React, AWS, Python, and modern tech stacks."
        />
        <meta property="og:url" content="https://www.anindaghosh.com/projects" />
        <meta property="og:image" content="https://www.anindaghosh.com/images/project-carevault.png" />
        <link rel="canonical" href="https://www.anindaghosh.com/projects" />
      </Helmet>
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

              {project.courseInfo && (
                <div className="course-badge">{project.courseInfo}</div>
              )}

              <p className="project-description">{project.description}</p>

              {project.metrics && (
                <div className="project-metrics">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="metric-item">
                      <span className="metric-label">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="metric-value">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {project.features && (
                <details className="project-features">
                  <summary>Key Features</summary>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </details>
              )}

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

                {project.paperUrl && (
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link paper-link"
                  >
                    <FaFileAlt />
                    <span>Paper</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default ProjectsSection;
