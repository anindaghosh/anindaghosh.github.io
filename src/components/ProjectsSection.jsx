import { projectsData } from '@/lib/portfolioData';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="prompt-label">ls projects/</p>
        </div>
        <div className={styles.grid}>
          {projectsData.map((project) => {
            const link = project.liveUrl || project.githubUrl || project.paperUrl;
            const metricEntries = project.metrics ? Object.entries(project.metrics) : [];
            const [metricLabel, metricValue] = metricEntries[0] || [];

            const card = (
              <>
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
              </>
            );

            return link ? (
              <a
                key={project.title}
                href={link}
                target="_blank"
                rel="noreferrer"
                className={styles.card}
              >
                {card}
              </a>
            ) : (
              <div key={project.title} className={styles.card}>
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
