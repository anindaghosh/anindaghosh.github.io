// src/data/portfolioData.js

export const personalInfo = {
  name: 'Aninda Ghosh',
  photo: '/images/aninda.jpg',
};

export const aboutContent = [
  {
    icon: '📍',
    text: "Currently a Master's student in Computer Science at NYU, passionate about cloud computing, AI, and system design.",
  },
  {
    icon: '💼',
    text: 'Former Solutions Architect at AB InBev, with experience designing scalable, cloud-native solutions in Finance, Logistics, and Employee Experience. Led teams on projects that resulted in cost savings and efficiency gains, including a global Net Promoter Score app with an NPS score of 88.',
  },
  {
    icon: '🚀',
    text: 'Looking to build on my experience in cloud computing and AI, aiming for roles in software engineering, AI/ML engineering, or security. Interested in contributing to innovative projects that leverage cutting-edge technologies.',
  },
  {
    icon: '🎮',
    text: "Enjoy coding, solving complex problems, and staying up-to-date with the latest in technology. Outside of work, I'm interested in machine learning, tech entrepreneurship, and exploring new AI trends.",
  },
  {
    icon: '💡',
    text: 'Proficient in Python, R, SQL, Django, and cloud technologies (AWS, Azure). Experienced with frameworks like React, Flask, and machine learning tools (TensorFlow, PyTorch). Strong background in data analysis, system architecture, and application security.',
  },
];

export const contactLinks = [
  {
    name: 'LinkedIn',
    handle: '@anindaghosh99',
    url: 'https://www.linkedin.com/in/anindaghosh99/',
  },
  {
    name: 'GitHub',
    handle: '@anindaghosh',
    url: 'https://github.com/anindaghosh',
  },
  {
    name: 'Email',
    email: 'aninda.ghosh99@gmail.com',
    url: 'mailto:aninda.ghosh99@gmail.com',
  },
];

export const footerInfo = {
  year: new Date().getFullYear(),
  name: personalInfo?.name,
  tagline: `Dark Knight Coding 🦇`,
};

export const navLinks = [
  // Assuming the main page "/" shows the "About" content
  { name: 'About', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Education', path: '/education' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  // Add other links as needed
];

export const skillsData = [
  { name: 'Python', level: 9 },
  { name: 'R', level: 8 },
  { name: 'SQL', level: 9 },
  { name: 'Django', level: 7 },
  { name: 'AWS', level: 8 },
  { name: 'Azure', level: 8 },
  { name: 'React', level: 7 },
  { name: 'TensorFlow', level: 6 },
  { name: 'PyTorch', level: 6 },
  { name: 'Flask', level: 7 },
];

export const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'New York University',
    location: 'New York, NY',
    period: '2024 - 2026',
    description: 'Specialized in Artificial Intelligence and Machine Learning',
    logo: '/images/nyu-logo.png',
    website: 'https://engineering.nyu.edu/', // Add university website
    achievements: [
      'GPA: 3.9/4.0',
      'Teaching Assistant for Introduction to Machine Learning',
      'Research project on neural network optimization techniques',
    ],
    courses: [
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Reinforcement Learning',
    ],
  },
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: '2017 - 2021',
    description: 'Focus on algorithms and data structures',
    logo: '/images/srm-logo.png',
    website: 'https://www.srmist.edu.in/',
    achievements: [
      'Graduated with honors',
      'Recipient of Academic Excellence Award',
      'Published paper on distributed systems',
    ],
    courses: [
      'Data Structures',
      'Algorithms',
      'Database Systems',
      'Operating Systems',
    ],
  },
];

export const projectsData = [
  {
    title: 'AI-Powered Sentiment Analysis Dashboard',
    description:
      'A real-time sentiment analysis dashboard for social media monitoring, featuring custom NLP models and interactive visualizations.',
    image: '/images/project-sentiment.jpg', // Add this image to your public/images folder
    technologies: ['Python', 'React', 'TensorFlow', 'Flask', 'D3.js'],
    githubUrl: 'https://github.com/anindaghosh/sentiment-analysis',
    liveUrl: 'https://sentiment-dashboard.example.com',
  },
  {
    title: 'Cloud-Native Microservices Framework',
    description:
      'A lightweight framework for building and deploying scalable microservices on Kubernetes with built-in observability tools.',
    image: '/images/project-microservices.jpg', // Add this image to your public/images folder
    technologies: ['Go', 'Kubernetes', 'Docker', 'Prometheus', 'gRPC'],
    githubUrl: 'https://github.com/anindaghosh/microservices-framework',
    liveUrl: 'https://docs.microframe.example.com',
  },
  {
    title: 'Secure Authentication Service',
    description:
      'A secure, standards-compliant authentication and authorization service supporting OAuth 2.0, OIDC, and FIDO2 WebAuthn.',
    image: '/images/project-auth.jpg', // Add this image to your public/images folder
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'JWT'],
    githubUrl: 'https://github.com/anindaghosh/auth-service',
    liveUrl: null, // No live demo available
  },
];

export const resumeData = {
  viewUrl:
    'https://drive.google.com/file/d/1xJ4-WAr3B8i8oEH9t6CEqQzdn9QbDWDb/view',
  downloadUrl:
    'https://drive.google.com/uc?export=download&id=1xJ4-WAr3B8i8oEH9t6CEqQzdn9QbDWDb',
};
