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
    'https://drive.google.com/file/d/15H551MT5BBuzjlTFXDNopv4TsZQHWSNP/view',
  downloadUrl:
    'https://drive.google.com/uc?export=download&id=15H551MT5BBuzjlTFXDNopv4TsZQHWSNP',
};

export const workData = [
  {
    position: 'Solutions Architect',
    company: 'AB InBev',
    location: 'Bengaluru, India',
    period: 'Jan 2023 - Jul 2024',
    description:
      'Led enterprise architecture for critical business applications across Finance, Operations, and Employee Experience. Designed secure, scalable Azure solutions serving 7,000+ users across 5 global regions.',
    logo: '/images/ab-inbev-logo.jpg',
    website: 'https://www.ab-inbev.com',
    achievements: [
      'Account Reconciliation Platform: Architected system processing 150M+ daily financial records across 6 regions with multi-currency support, reducing API response time from 2 minutes to <1 second with ACID guarantees.',
      'Global NPS Platform (KRIA): Designed and deployed enterprise feedback system achieving 88 NPS score and 70% response rate across all business units with real-time analytics dashboards.',
      'Fixed Assets Verification (AMI): Led digitization of 700K physical assets across North American zone, delivering $500K in tax savings with 2-week turnaround and automated audit workflows.',
      'Security Champion: Reduced vulnerabilities by 73% across 25+ applications serving 7,000+ users through Azure Key Vault adoption, JWT authentication, and CI/CD security tooling (Snyk, SonarCloud, Apiiro).',
      'Enterprise Architecture: Established Azure Landing Zone patterns, Terraform IaC standards, and secure API gateway architectures adopted across Digital Solutions organization.',
    ],
    technologies: [
      'Azure',
      'Terraform',
      'PostgreSQL',
      'React',
      'Flask',
      'Python',
      'Node.js',
      'Azure DevOps',
    ],
  },
  {
    position: 'Software Development Engineer I',
    company: 'AB InBev',
    location: 'Bengaluru, India',
    period: 'Jul 2021 - Dec 2022',
    description:
      'Built full-stack enterprise applications for workforce management and sales operations. Delivered customer-embedded solutions across Europe and India requiring stakeholder collaboration across 13+ countries.',
    logo: '/images/ab-inbev-logo.jpg',
    website: 'https://www.ab-inbev.com',
    achievements: [
      'Hybrid Work Platform (Hop-A-Seat): Built end-to-end workspace management PWA serving 5,000 employees with 100% adoption rate, 1,000+ daily bookings, replacing $120K/year vendor. Integrated thermal scanner APIs (Web Serial), government health verification, and transport booking systems.',
      'European Sales Automation (Maven): Developed customer master data platform for 2,000+ sales reps across 13 countries, reducing turnaround from 3 days to <1 day and improving accuracy from 40% to 95%. Implemented country-specific IBAN/VAT validation, SAP ECC integration, and Salesforce Connected Apps.',
      'COVID Tracker: Deployed employee health monitoring system during pandemic, enabling HR team to track vaccination status and provide rapid assistance to 5,000+ employees with automated notifications.',
      'Platform Ownership: Maintained 8+ production applications with 99.5%+ uptime, managed Azure infrastructure, and implemented monitoring via Application Insights and Azure Monitor.',
    ],
    technologies: [
      'React',
      'Python',
      'Flask',
      'PostgreSQL',
      'Azure App Service',
      'Azure Functions',
      'REST APIs',
      'SAP Integration',
    ],
  },
  {
  position: 'Graduate Assistant',
  company: 'New York University',
  location: 'New York, USA',
  period: 'Sep 2024 - Present',
  description:
    'Engineering data platforms and analytics infrastructure for the Office of the Dean. Building React/FastAPI applications serving 8,000+ students and 500+ faculty with course feedback analysis, dashboard consolidation, and institutional research automation.',
  logo: '/images/nyu-logo.png',
  website: 'https://engineering.nyu.edu',
  achievements: [
    'SeEval Course Feedback Platform: Built with React, D3.js, FastAPI, and AWS (Amplify, EC2, RDS, Redis) serving 8,000+ students. Implemented read-optimized architecture with pre-aggregated target tables and Redis caching achieving <500ms API response times for historical course feedback, sentiment analysis, and comparative visualizations.',
    'Tableau Dashboards Directory: Developed React/FastAPI portal consumed by 500+ faculty with automated metadata extraction via Python Lambda functions calling Tableau REST APIs. Consolidated 100+ dashboards with three-layer navigation, reducing manual maintenance by 60%.',
    'Enterprise SSO Integration: Implemented Microsoft Entra authentication across both platforms, enabling seamless single sign-on for students and faculty.',
    'Performance Optimization: Designed read-optimized database architecture with pre-aggregated target tables, achieving sub-500ms response times for complex analytical queries across large historical datasets.',
  ],
  technologies: [
    'React',
    'FastAPI',
    'D3.js',
    'AWS (Amplify, EC2, RDS, Lambda)',
    'PostgreSQL',
    'Redis',
    'Tableau REST API',
    'Microsoft Entra ID',
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
