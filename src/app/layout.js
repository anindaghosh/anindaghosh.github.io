import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { personalInfo, contactLinks, educationData } from '@/lib/portfolioData';
import './globals.css';

const siteUrl = 'https://www.anindaghosh.com';

// schema.org Person data so search engines and recruiting crawlers can read the profile.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.name,
  url: siteUrl,
  image: `${siteUrl}${personalInfo.photo}`,
  jobTitle: 'Full-Stack and Forward-Deployed Engineer',
  email: `mailto:${contactLinks.find((link) => link.name === 'Email')?.email}`,
  sameAs: contactLinks.filter((link) => link.name !== 'Email').map((link) => link.url),
  alumniOf: educationData.map((edu) => ({ '@type': 'CollegeOrUniversity', name: edu.institution })),
  knowsAbout: ['Full-Stack Engineering', 'Agentic AI', 'Platform Engineering', 'Cloud Architecture'],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personalInfo.name} | Portfolio`,
  description:
    'Full-stack and forward-deployed engineer building agentic AI apps and reusable platforms. NYU MS in Computer Science, 2026.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
