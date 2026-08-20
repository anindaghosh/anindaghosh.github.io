import { workData, educationData } from '@/lib/portfolioData';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="prompt-label">ls experience/</p>
        </div>

        <div className={styles.timeline}>
          {workData.map((job) => (
            <article key={`${job.company}-${job.period}`} className={styles.entry}>
              <p className={styles.period}>{job.period}</p>
              <div>
                <h3 className={styles.title}>{job.position}</h3>
                <p className={styles.subtitle}>
                  {job.company} · {job.location}
                </p>
                <p className={styles.description}>{job.description}</p>
                {job.achievements.length > 0 && (
                  <ul className={styles.achievements}>
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
                <div className={styles.tags}>
                  {job.technologies.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className={`prompt-label ${styles.educationPrompt}`}>ls education/</p>
        <div className={styles.timeline}>
          {educationData.map((edu) => (
            <article key={edu.degree} className={styles.entry}>
              <p className={styles.period}>{edu.period}</p>
              <div>
                <h3 className={styles.title}>{edu.degree}</h3>
                <p className={styles.subtitle}>
                  {edu.institution} · {edu.location}
                </p>
                <p className={styles.description}>{edu.description}</p>
                {edu.achievements.length > 0 && (
                  <ul className={styles.achievements}>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
