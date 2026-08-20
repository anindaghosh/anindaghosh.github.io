'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { navLinks, personalInfo } from '@/lib/portfolioData';
import styles from './StickyHeader.module.css';

export default function StickyHeader() {
  const [activeSection, setActiveSection] = useState(navLinks[0].name);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const initials = personalInfo.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toLowerCase();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          {initials}
        </a>
        <div className={styles.navGroup}>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${styles.navLink} ${
                  activeSection === link.href.slice(1) ? styles.navLinkActive : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {mounted && (resolvedTheme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />)}
          </button>
        </div>
      </div>
    </header>
  );
}
