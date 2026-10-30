import StickyHeader from '@/components/StickyHeader';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SiteFooter from '@/components/SiteFooter';

export default function HomePage() {
  return (
    <>
      <StickyHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
