import { personalInfo, resumeData, contactLinks } from '@/lib/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const email = contactLinks.find((link) => link.name === 'Email');

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-name">
      <div className="container">
        <p className="prompt-label" aria-hidden="true">
          whoami
        </p>
        <h1 id="hero-name" className={styles.name}>
          {personalInfo.name}
        </h1>
        <p className={styles.tagline}>
          <span className={styles.prompt} aria-hidden="true">
            &gt;
          </span>{' '}
          Full-stack, forward-deployed engineer. I take real
          user problems to shipped products, from agentic AI to reusable platforms.
          <span className="blink-cursor" aria-hidden="true" />
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.buttonPrimary}>
            [ see my work ]
          </a>
          <a href={resumeData.viewUrl} target="_blank" rel="noreferrer" className={styles.buttonGhost}>
            [ resume ]<span className="sr-only"> (opens in a new tab)</span>
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
