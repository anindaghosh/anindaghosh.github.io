import { personalInfo, resumeData, contactLinks } from '@/lib/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const email = contactLinks.find((link) => link.name === 'Email');

  return (
    <section id="top" className={styles.hero}>
      <div className="container">
        <p className="prompt-label">whoami</p>
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <p className={styles.tagline}>
          <span className={styles.prompt}>&gt;</span> Full-stack engineer. I live in the
          terminal — figured my site should too.
          <span className="blink-cursor" />
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.buttonPrimary}>
            [ see my work ]
          </a>
          <a href={resumeData.viewUrl} target="_blank" rel="noreferrer" className={styles.buttonGhost}>
            [ resume ]
          </a>
          {email && (
            <a href={email.url} className={styles.buttonGhost}>
              [ {email.email} ]
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
