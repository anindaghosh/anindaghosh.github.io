import { aboutContent, skillsData } from '@/lib/portfolioData';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="prompt-label">cat about.md</p>
        </div>
        <div className={styles.list}>
          {aboutContent.map((item, i) => (
            <p key={i} className={styles.item}>
              <span className={styles.icon}>{item.icon}</span>
              {item.text}
            </p>
          ))}
        </div>

        <p className={`prompt-label ${styles.skillsPrompt}`}>ls skills/</p>
        <div className={styles.skillGroups}>
          {skillsData.map((group) => (
            <div key={group.group} className={styles.skillGroup}>
              <p className={styles.skillGroupName}>{group.group}</p>
              <div className={styles.tags}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
