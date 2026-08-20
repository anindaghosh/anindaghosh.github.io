import { contactLinks, resumeData, footerInfo } from '@/lib/portfolioData';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const email = contactLinks.find((link) => link.name === 'Email');
  const otherLinks = contactLinks.filter((link) => link.name !== 'Email');

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="prompt-label">contact --send</p>
        </div>

        <h2 className={styles.heading}>Want to talk more?</h2>
        <p className={styles.subheading}>
          Currently accepting: hard problems, good ideas, and unsolicited Formula 1 takes.
        </p>

        {email && (
          <a href={email.url} className={styles.email}>
            {email.email}
          </a>
        )}

        <div className={styles.links}>
          {otherLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className={styles.link}>
              {link.name.toLowerCase()} &#8599;
            </a>
          ))}
          <a href={resumeData.viewUrl} target="_blank" rel="noreferrer" className={styles.link}>
            resume &#8599;
          </a>
        </div>

        <footer className={styles.footer}>
          <span>
            © {footerInfo.year} {footerInfo.name}
          </span>
          <span>built with next.js on vercel</span>
        </footer>
      </div>
    </section>
  );
}
