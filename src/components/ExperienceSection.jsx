import { workData, educationData } from '@/lib/portfolioData';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-heading">
          <h2 id="experience-heading" className="prompt-label">
            <span aria-hidden="true">ls experience/</span>
            <span className="sr-only">Experience</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          {workData.map((job) => (
            <article key={`${job.company}-${job.period}`} className={styles.entry}>
              <p className={styles.period}>{job.period}</p>
              <div>
                <h3 className={styles.title}>{job.position}</h3>
                <p className={styles.subtitle}>
                  {job.company} <span aria-hidden="true">·</span>
                  <span className="sr-only">,</span> {job.location}
                </p>
                <p className={styles.description}>{job.description}</p>
                {job.achievements.length > 0 && (
                  <ul className={styles.achievements}>
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
                <ul className={styles.tags} aria-label={`${job.position} technologies`}>
                  {job.technologies.map((tech) => (
                    <li key={tech} className={styles.tag}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <h3 className={`prompt-label ${styles.educationPrompt}`}>
          <span aria-hidden="true">ls education/</span>
          <span className="sr-only">Education</span>
        </h3>
        <div className={styles.timeline}>
          {educationData.map((edu) => (
            <article key={edu.degree} className={styles.entry}>
              <p className={styles.period}>{edu.period}</p>
              <div>
                <h4 className={styles.title}>{edu.degree}</h4>
                <p className={styles.subtitle}>
                  {edu.institution} <span aria-hidden="true">·</span>
                  <span className="sr-only">,</span> {edu.location}
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
