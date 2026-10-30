import { contactLinks, resumeData } from '@/lib/portfolioData';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const email = contactLinks.find((link) => link.name === 'Email');
  const otherLinks = contactLinks.filter((link) => link.name !== 'Email');

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-heading">
          <h2 id="contact-heading" className="prompt-label">
            <span aria-hidden="true">contact --send</span>
            <span className="sr-only">Contact</span>
          </h2>
        </div>

        <h3 className={styles.heading}>Want to talk more?</h3>
        <p className={styles.subheading}>
          Currently accepting: hard problems, good ideas, and unsolicited Formula 1 takes.
        </p>

        {email && (
          <a href={email.url} className={styles.email}>
            {email.email}
          </a>
        )}

        <ul className={styles.links}>
          {otherLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noreferrer" className={styles.link}>
                {link.name.toLowerCase()} <span aria-hidden="true">&#8599;</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
          <li>
            <a href={resumeData.viewUrl} target="_blank" rel="noreferrer" className={styles.link}>
              resume <span aria-hidden="true">&#8599;</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
