import {
  personalInfo,
  aboutContent,
  workData,
  educationData,
  projectsData,
  skillsData,
  contactLinks,
  resumeData,
} from '@/lib/portfolioData';

export const dynamic = 'force-static';

// Plain-text profile for crawlers and AI agents, built from the same data as the site.
function buildProfile() {
  const lines = [
    `# ${personalInfo.name}`,
    '',
    '> Full-stack and forward-deployed engineer building agentic AI apps and reusable platforms.',
    '',
    '## About',
    ...aboutContent.map((item) => `- ${item.text}`),
    '',
    '## Experience',
  ];

  workData.forEach((job) => {
    lines.push('', `### ${job.position}, ${job.company} (${job.period})`, job.description);
    job.achievements.forEach((achievement) => lines.push(`- ${achievement}`));
  });

  lines.push('', '## Education');
  educationData.forEach((edu) => {
    lines.push('', `### ${edu.degree}, ${edu.institution} (${edu.period})`, edu.description);
    edu.achievements.forEach((achievement) => lines.push(`- ${achievement}`));
  });

  lines.push('', '## Projects');
  projectsData.forEach((project) => {
    const link = project.liveUrl || project.githubUrl;
    lines.push('', `### ${project.title}`, project.description);
    if (link) lines.push(`Link: ${link}`);
  });

  lines.push('', '## Skills');
  skillsData.forEach((group) => lines.push(`- ${group.group}: ${group.skills.join(', ')}`));

  lines.push('', '## Contact');
  contactLinks.forEach((link) => lines.push(`- ${link.name}: ${link.email || link.url}`));
  lines.push(`- Resume: ${resumeData.viewUrl}`);

  return lines.join('\n') + '\n';
}

export function GET() {
  return new Response(buildProfile(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
