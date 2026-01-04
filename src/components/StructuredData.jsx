import React from 'react';
import { Helmet } from 'react-helmet-async';

function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aninda Ghosh',
    url: 'https://www.anindaghosh.com',
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Persistent Systems',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'New York University',
        sameAs: 'https://www.nyu.edu',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'VIT Vellore',
        sameAs: 'https://vit.ac.in',
      },
    ],
    sameAs: [
      'https://linkedin.com/in/anindaghosh99',
      'https://github.com/anindaghosh',
    ],
    knowsAbout: [
      'Software Engineering',
      'Cloud Computing',
      'Full Stack Development',
      'AWS',
      'Azure',
      'React',
      'Node.js',
      'Python',
      'Artificial Intelligence',
      'Machine Learning',
      'DevOps',
      'Application Security',
    ],
    description: 'Full Stack Developer and Cloud Engineer specializing in React, Node.js, AWS, Azure, and AI/ML solutions.',
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
}

export default StructuredData;
