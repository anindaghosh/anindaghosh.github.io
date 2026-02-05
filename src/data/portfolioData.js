// src/data/portfolioData.js

export const personalInfo = {
  name: 'Aninda Ghosh',
  photo: '/images/aninda.jpg',
};

export const aboutContent = [
  {
    icon: '🎓',
    text: "CS Master's student at NYU Tandon (May 2026). Published Trust & Safety research on cryptocurrency scam detection achieving 62.2% precision across 358 validated YouTube videos.",
  },
  {
    icon: '💼',
    text: 'Prev Solutions Architect at AB InBev (4 years). Built financial reconciliation systems processing 150M+ daily records, hybrid work platform serving 5K employees (100% adoption), and Sales automation across 13 European countries.',
  },
  {
    icon: '🔒',
    text: 'Security Champion with 73% vulnerability reduction across 25+ applications. Azure-certified architect specializing in secure cloud infrastructure, DevSecOps pipelines, and enterprise compliance.',
  },
  {
    icon: '🎮',
    text: 'AI/ML researcher exploring adversarial detection, RAG systems, and platform safety. Huge Formula 1 fan and aspiring Dark Knight coder.',
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
    description: 'Specializing in AI, Security and Cloud Computing',
    logo: '/images/nyu-logo.png',
    website: 'https://engineering.nyu.edu/',
    achievements: ['Graduate Assistant - Tableau data automation for academic performance reporting',],
    courses: [
      'Artificial Intelligence',
      'Cloud Computing',
      'Trust & Safety',
      'Data Science & AI for Business - Stern School of Business',
      'Human Computer Interaction',
      'Information, Security & Privacy',
      'Software Engineering',
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
      'Graduated First Class with Distinction (CGPA 9.02)',
      'Published paper on distributed systems and robotics using AprilTags',
    ],
    courses: [
      'Algorithm Design and Analysis',
      'Database Management Systems',
      'Artificial Intelligence',
      'Data Science and Big Data Analytics',
      'Operating Systems',
    ],
  },
];

export const projectsData = [
  {
    title: 'Streamjacking Detector: Cryptocurrency Scam Detection on YouTube',
    description:
      'Machine learning-based detection system for identifying hijacked YouTube livestreams promoting cryptocurrency scams. Analyzes video metadata, channel information, and live chat patterns to classify fraudulent streams. Evaluated on 358 manually validated videos, achieving 62.2% precision, 95.5% specificity, and sub-second inference latency. Open-source research project that received the highest score in NYU Trust & Safety Engineering course.',
    image: '/images/project-streamjacking.png',
    technologies: [
      'Python',
      'YouTube Data API v3',
      'scikit-learn',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'NLTK',
      'Regular Expressions'
    ],
    features: [
      'Automated detection of hijacked livestreams',
      'Multi-feature analysis (metadata, channel stats, chat patterns)',
      'Binary classification with multiple ML models',
      'Real-time detection with sub-second latency',
      'Comprehensive evaluation with confusion matrices and performance metrics'
    ],
    metrics: {
      precision: '62.2%',
      specificity: '95.5%',
      datasetSize: 358,
      inferenceLatency: '< 1 second'
    },
    githubUrl: 'https://github.com/anindaghosh/trustsafety-streamjacking-detector',
    liveUrl: null,
    paperUrl: null, // Add if you have a published paper or report
    courseInfo: 'NYU Tandon School of Engineering - Trust & Safety Engineering'
  },
  { title: 'Minto', },
  {
    title: 'CareVault',
    description:
      'A secure healthcare management platform for patients and caregivers to organize medical documents, schedule appointments, and track medications. Features an AI assistant for querying documents and deriving health insights. Supports multi-profile management for caregivers.',
    image: '/images/project-carevault.png',
    technologies: [
      'Flask',
      'Supabase',
      'PostgreSQL',
      'RAGFlow',
      'React',
      'Docker',
    ],
    githubUrl: null,
    liveUrl: 'https://youtu.be/ZuuEdnYPFfQ',
  },
  {
    title: 'AI-Powered Vulnerability Detector',
    description:
      'Built a cloud-based web app that scans Python-based GitHub repos for security vulnerabilities using Bandit and LLaMA 3B. The tool provides CWE-tagged issues with AI-generated fix suggestions.',
    image: '/images/project-vulnscanner.jpg',
    technologies: ['Flask', 'Supabase', 'AWS', 'Bandit', 'LLaMA 3B', 'React'],
    githubUrl: 'https://github.com/CS-GY-9223-Cloud-Vuln-Detector/backend',
    liveUrl: 'https://main.d3k1a8dkhmpya0.amplifyapp.com/',
  },
  {
    title: 'RoomScout - Student Housing Platform',
    description:
      'End-to-end web app for international students to find verified housing near NYC schools. Features property listings, advanced filters, student verification, and GPT-powered amenity insights.',
    image: '/images/project-roomscout.png',
    technologies: [
      'React',
      'Django',
      'PostgreSQL',
      'OpenAI API',
      'Figma',
      'Jest',
      'Pytest',
      'Locust',
    ],
    githubUrl: 'https://github.com/anindaghosh/roomscout',
    liveUrl: null,
  },
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
];

export const resumeData = {
  viewUrl:
    'https://drive.google.com/file/d/1xJ4-WAr3B8i8oEH9t6CEqQzdn9QbDWDb/view',
  downloadUrl:
    'https://drive.google.com/uc?export=download&id=1xJ4-WAr3B8i8oEH9t6CEqQzdn9QbDWDb',
};

export const workData = [
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
];
