'use client';

import { useState } from 'react';
import { projectsData } from '@/lib/portfolioData';
import ProjectDrawer from './ProjectDrawer';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="prompt-label">ls projects/</p>
        </div>
        <div className={styles.grid}>
          {projectsData.map((project) => {
            const metricEntries = project.metrics ? Object.entries(project.metrics) : [];
            const [metricLabel, metricValue] = metricEntries[0] || [];

            return (
              <button
                key={project.title}
                type="button"
                className={styles.card}
                onClick={() => setSelectedProject(project)}
              >
                <div className={styles.cardHeader}>
                  <h3 className={styles.title}>{project.title}</h3>
                </div>
                <p className={styles.description}>{project.description}</p>
                {project.technologies && (
                  <div className={styles.tags}>
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className={styles.tag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {metricValue !== undefined && (
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>{metricValue}</span>
                    <span className={styles.metricLabel}>{metricLabel}</span>
                  </div>
                )}
                <p className={styles.expandHint}>[ details ]</p>
              </button>
            );
          })}
        </div>
      </div>

      <ProjectDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
