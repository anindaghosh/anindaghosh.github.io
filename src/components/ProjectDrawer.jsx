'use client';

import { useEffect, useRef } from 'react';
import styles from './ProjectDrawer.module.css';

// Native modal <dialog>: the browser handles focus trapping, Escape, making the
// rest of the page inert, and returning focus to the card that opened it.
export default function ProjectDrawer({ project, onClose }) {
  const dialogRef = useRef(null);
  const isOpen = Boolean(project);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    document.body.style.overflow = '';
    onClose();
  };

  // Clicks on the dialog element itself land on the backdrop, outside the content.
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) dialogRef.current.close();
  };

  const metricEntries = project?.metrics ? Object.entries(project.metrics) : [];

  return (
    <dialog
      ref={dialogRef}
      className={styles.drawer}
      aria-labelledby="project-dialog-title"
      onClose={handleClose}
      onClick={handleBackdropClick}
    >
      {project && (
        <div className={styles.content}>
          <div className={styles.header}>
            <p className="prompt-label" aria-hidden="true">
              cat projects/{slugify(project.title)}.md
            </p>
            <button
              type="button"
              className={styles.close}
              onClick={() => dialogRef.current.close()}
              aria-label="Close project details"
            >
              [ x ]
            </button>
          </div>

          <h2 id="project-dialog-title" className={styles.title}>
            {project.title}
          </h2>
          {project.courseInfo && <p className={styles.courseInfo}>{project.courseInfo}</p>}

          <p className={styles.description}>{project.description}</p>

          {project.features && project.features.length > 0 && (
            <>
              <h3 className={styles.subheading}>features</h3>
              <ul className={styles.features}>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <>
              <h3 className={styles.subheading}>stack</h3>
              <ul className={styles.tags}>
                {project.technologies.map((tech) => (
                  <li key={tech} className={styles.tag}>
                    {tech}
                  </li>
                ))}
              </ul>
            </>
          )}

          {metricEntries.length > 0 && (
            <>
              <h3 className={styles.subheading}>metrics</h3>
              <dl className={styles.metrics}>
                {metricEntries.map(([label, value]) => (
                  <div key={label} className={styles.metric}>
                    <dt className={styles.metricLabel}>{label}</dt>
                    <dd className={styles.metricValue}>{value}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}

          <div className={styles.actions}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.actionButton}>
                [ view source ]<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.actionButton}>
                [ live demo ]<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {project.paperUrl && (
              <a href={project.paperUrl} target="_blank" rel="noreferrer" className={styles.actionButton}>
                [ read paper ]<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {!project.githubUrl && !project.liveUrl && !project.paperUrl && (
              <p className={styles.noLinks}>no links available</p>
            )}
          </div>
        </div>
      )}
    </dialog>
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
