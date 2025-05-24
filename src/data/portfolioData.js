// src/data/portfolioData.js

export const personalInfo = {
  name: 'Aninda Ghosh',
  photo: '/images/aninda.jpg',
};

export const aboutContent = [
  {
    icon: '📍',
    text: "Master's student in Computer Science at NYU Tandon. Focused on cloud computing, AI, and system design.",
  },
  {
    icon: '💼',
    text: 'Former Solutions Architect at AB InBev. Designed secure digital products on Azure for Finance, Supply Chain, and HR. Delivered over $1.8M in business savings through account reconciliation, asset verification, and workspace optimization.',
  },
  {
    icon: '🚀',
    text: 'Targeting roles in software, ML, or cloud engineering. Keen to drive secure and scalable architectures in AI and compliance-focused ecosystems.',
  },
  {
    icon: '🎮',
    text: 'Enjoy building practical tools, exploring OWASP practices, and refining RAG pipelines. Passionate about AI agents, productivity tech, and cloud automation.',
  },
  {
    icon: '💡',
    text: 'Fluent in Python, SQL, JavaScript, Java. Skilled with Azure, AWS, Terraform, React, Flask, TensorFlow, PyTorch, and Tableau. Strong in SAST, DAST, SCA tools and ETL pipelines.',
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
  { name: 'About', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Education', path: '/education' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
];

export const skillsData = [
  {
    group: 'Core Languages',
    skills: ['Python', 'JavaScript', 'Java', 'SQL'],
  },
  {
    group: 'Web & Frameworks',
    skills: ['React', 'Flask', 'Express.js', 'Django'],
  },
  {
    group: 'Cloud & DevOps',
    skills: [
      'Microsoft Azure',
      'AWS Cloud',
      'Google Cloud',
      'Terraform',
      'Azure DevOps',
    ],
  },
  {
    group: 'Security Tools',
    skills: ['Snyk', 'Checkmarx', 'SonarCloud', 'Apiiro'],
  },
  {
    group: 'Data & Analytics',
    skills: ['PostgreSQL', 'Mongo', 'PowerBI', 'Tableau'],
  },
  {
    group: 'Machine Learning',
    skills: ['Tensorflow', 'Keras', 'PyTorch'],
  },
  {
    group: 'Testing & Monitoring',
    skills: ['Pytest', 'Jest', 'Cypress', 'Locust', 'K6', 'Datadog'],
  },
  {
    group: 'Design',
    skills: ['Figma'],
  },
];

export const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'New York University - Tandon School of Engineering',
    location: 'Brooklyn, NY',
    period: '2024 - 2026',
    description: 'Specialized in AI, ML, and Cloud Computing',
    logo: '/images/nyu-logo.png',
    website: 'https://engineering.nyu.edu/',
    achievements: [
      'GPA: 3.9/4.0',
      'Graduate Assistant in Tableau-based reporting and automation',
      'TA for Machine Learning course',
      'BLEU 0.87 RAG system optimization for academic research',
    ],
    courses: [
      'Deep Learning',
      'Natural Language Processing',
      'Cloud Computing',
      'Reinforcement Learning',
    ],
  },
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: '2017 - 2021',
    description: 'Focused on systems engineering and robotics research',
    logo: '/images/srm-logo.png',
    website: 'https://www.srmist.edu.in/',
    achievements: [
      'Graduated with Distinction (CGPA 9.02)',
      'Academic Excellence Award recipient',
      'Published paper on distributed systems and robotics using AprilTags',
    ],
    courses: [
      'Algorithms',
      'Database Systems',
      'Distributed Systems',
      'Operating Systems',
    ],
  },
];

export const projectsData = [
  {
    title: 'Fine-Tuned Retrieval-Augmented Generation (RAG) System',
    description:
      'Built a performant document QA agent using LangChain, Qdrant, OpenAI, and FAISS. Improved BLEU to 0.87 and reduced latency by 25%.',
    image: '/images/project-nyu-ai-rag.png',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Qdrant', 'FAISS'],
    githubUrl:
      'https://github.com/anindaghosh/cs-gy-6613-artificial-intelligence-project',
    liveUrl: null,
  },
  {
    title: "PC Makr - India's First PC Component Aggregator",
    description:
      'Aggregated 5000+ products across e-commerce sites. Attracted 4000 users. Deployed 80% accurate recommendation system.',
    image: '/images/project-pcmakr.jpg',
    technologies: ['React', 'Flask', 'PostgreSQL', 'Python'],
    githubUrl: 'https://github.com/PCMakr/api',
    liveUrl: null,
  },
  {
    title: 'Global NPS Application',
    description:
      'Designed and scaled a cross-market NPS tool. Reached score of 88 with 70% response rate. Recognized by Bain & Co.',
    image: '/images/project-nps.jpg',
    technologies: ['React', 'Node.js', 'Azure'],
    githubUrl: 'https://github.com/anindaghosh/nps-platform',
    liveUrl: null,
  },
];

export const resumeData = {
  viewUrl:
    'https://drive.google.com/file/d/1xJ4-WAr3B8i8oEH9t6CEqQzdn9QbDWDb/view',
  downloadUrl:
    'https://drive.google.com/uc?export=download&id=1xJ4-WAr3B8i8oEH9t6CEqQzdn9QbDWDb',
};

export const workData = [
  {
    position: 'Graduate Assistant',
    company: 'New York University',
    location: 'New York, USA',
    period: 'Sept 2024 - Present',
    description:
      'Assisting the Office of the Dean in automating Tableau-based data reporting for academic performance and strategic planning.',
    logo: '/images/nyu-logo.png',
    website: 'https://engineering.nyu.edu',
    achievements: [
      'Optimized multi-department reporting pipelines.',
      'Created interactive dashboards for institutional research.',
    ],
    technologies: ['Tableau', 'Python', 'SQL'],
  },
  {
    position: 'Solutions Architect',
    company: 'AB InBev',
    location: 'Bengaluru, India',
    period: 'Jul 2020 - Jul 2024',
    description:
      'Led cross-functional squads to design and deploy Azure-based digital solutions across Finance, Logistics, and Employee Experience domains.',
    logo: '/images/ab-inbev-logo.jpg',
    website: 'https://www.ab-inbev.com',
    achievements: [
      'Saved $1.8M+ through secure, scalable app design for reconciliation, asset management, and workspace digitization.',
      'Security Champion enforcing SAST, DAST, SCA tools like Snyk, Checkmarx, and Apiiro.',
      'Automated CI/CD with Terraform for efficient and secure Azure deployment.',
      'Built and deployed the global NPS tool (88 NPS score, 70% response rate).',
    ],
    technologies: [
      'Azure',
      'Terraform',
      'React',
      'Node.js',
      'PostgreSQL',
      'Flask',
      'Python',
    ],
  },
  {
    position: 'Deep Learning Intern',
    company: 'VNaad Technologies',
    location: 'Bengaluru, India',
    period: 'May 2019 - Jun 2019',
    description:
      'Developed a face recognition system on a single-board computer using live video processing to detect and identify human faces.',
    logo: '/images/vnaad-logo.jpg',
    website: '',
    achievements: [],
    technologies: ['Python', 'OpenCV', 'Raspberry Pi'],
  },
  {
    position: 'Software Developer Intern',
    company: 'Justdial',
    location: 'Bengaluru, India',
    period: 'Jun 2018 - Jul 2018',
    description:
      'Built a prototype home assistant using Python, JavaScript, and MQTT on Raspberry Pi. Integrated Justdial search bot backend and developed image classifier with CNNs.',
    logo: '/images/justdial-logo.jpg',
    website: '',
    achievements: [],
    technologies: ['Python', 'JavaScript', 'Node.js', 'MQTT', 'Raspberry Pi'],
  },
];
