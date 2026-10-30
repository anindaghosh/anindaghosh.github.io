import { footerInfo } from '@/lib/portfolioData';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className="container">
      <div className={styles.footer}>
        <p>
          © {footerInfo.year} {footerInfo.name}
        </p>
        <p>built with next.js on vercel</p>
      </div>
    </footer>
  );
}
