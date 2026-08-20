'use client';

import { useEffect } from 'react';
import styles from './ProjectDrawer.module.css';

export default function ProjectDrawer({ project, onClose }) {
  const isOpen = Boolean(project);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const metricEntries = project?.metrics ? Object.entries(project.metrics) : [];

  return (
    <div className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`} onClick={onClose}>
      <div
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        {project && (
          <div className={styles.content}>
            <div className={styles.header}>
              <p className="prompt-label">cat projects/{slugify(project.title)}.md</p>
              <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
                [ x ]
              </button>
            </div>

            <h3 className={styles.title}>{project.title}</h3>
            {project.courseInfo && <p className={styles.courseInfo}>{project.courseInfo}</p>}

            <p className={styles.description}>{project.description}</p>

            {project.features && project.features.length > 0 && (
              <>
                <p className={styles.subheading}>features</p>
                <ul className={styles.features}>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <>
                <p className={styles.subheading}>stack</p>
                <div className={styles.tags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}

            {metricEntries.length > 0 && (
              <>
                <p className={styles.subheading}>metrics</p>
                <div className={styles.metrics}>
                  {metricEntries.map(([label, value]) => (
                    <div key={label} className={styles.metric}>
                      <span className={styles.metricValue}>{value}</span>
                      <span className={styles.metricLabel}>{label}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className={styles.actions}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.actionButton}>
                  [ view source ]
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.actionButton}>
                  [ live demo ]
                </a>
              )}
              {project.paperUrl && (
                <a href={project.paperUrl} target="_blank" rel="noreferrer" className={styles.actionButton}>
                  [ read paper ]
                </a>
              )}
              {!project.githubUrl && !project.liveUrl && !project.paperUrl && (
                <p className={styles.noLinks}>no links available</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function slugify(title) {
  return title
    .toLowerCase()
    .split(':')[0]
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
