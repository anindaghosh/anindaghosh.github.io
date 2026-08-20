import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { personalInfo } from '@/lib/portfolioData';
import './globals.css';

export const metadata = {
  title: `${personalInfo.name} — Portfolio`,
  description:
    'Full-stack engineer specializing in backend systems, cloud infrastructure, and AI/ML.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
