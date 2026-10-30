import { aboutContent, skillsData } from '@/lib/portfolioData';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-heading">
          <h2 id="about-heading" className="prompt-label">
            <span aria-hidden="true">cat about.md</span>
            <span className="sr-only">About</span>
          </h2>
        </div>
        <ul className={styles.list}>
          {aboutContent.map((item, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>
              {item.text}
            </li>
          ))}
        </ul>

        <h3 className={`prompt-label ${styles.skillsPrompt}`}>
          <span aria-hidden="true">ls skills/</span>
          <span className="sr-only">Skills</span>
        </h3>
        <div className={styles.skillGroups}>
          {skillsData.map((group) => (
            <div key={group.group} className={styles.skillGroup}>
              <h4 className={styles.skillGroupName}>{group.group}</h4>
              <ul className={styles.tags}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.tag}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
