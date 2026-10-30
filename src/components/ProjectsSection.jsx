'use client';

import { useState } from 'react';
import { projectsData } from '@/lib/portfolioData';
import ProjectDrawer from './ProjectDrawer';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-heading">
          <h2 id="projects-heading" className="prompt-label">
            <span aria-hidden="true">ls projects/</span>
            <span className="sr-only">Projects</span>
          </h2>
        </div>
        <ul className={styles.grid}>
          {projectsData.map((project) => {
            const metricEntries = project.metrics ? Object.entries(project.metrics) : [];
            const [metricLabel, metricValue] = metricEntries[0] || [];

            return (
              <li key={project.title} className={styles.card}>
                <h3 className={styles.title}>
                  {/* The button's ::after covers the whole card, so the card stays one click target. */}
                  <button
                    type="button"
                    className={styles.cardButton}
                    aria-haspopup="dialog"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </button>
                </h3>
                <p className={styles.description}>{project.description}</p>
                {project.technologies && (
                  <ul className={styles.tags} aria-label="Technologies">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <li key={tech} className={styles.tag}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
                {metricValue !== undefined && (
                  <p className={styles.metric}>
                    <span className={styles.metricValue}>{metricValue}</span>
                    <span className={styles.metricLabel}>{metricLabel}</span>
                  </p>
                )}
                <p className={styles.expandHint} aria-hidden="true">
                  [ details ]
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <ProjectDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
