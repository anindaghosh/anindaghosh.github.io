// src/lib/portfolioData.js

export const personalInfo = {
  name: 'Aninda Ghosh',
  photo: '/images/aninda.jpg',
};

export const aboutContent = [
  {
    icon: '🧭',
    text: "Full-stack and forward-deployed engineer. I start from a user's real problem and take it all the way to a shipped product, and I do my best work in small, founder-led teams. Available to start within two weeks.",
  },
  {
    icon: '🎓',
    text: "Finished my MS in Computer Science at NYU Tandon in May 2026 (GPA 3.75), with coursework in AI/ML, Cloud Computing, Big Data, Software Engineering, and Security.",
  },
  {
    icon: '🚀',
    text: 'Founding Engineer at Parallel Worlds (Feb to May 2026). Built the engineering foundation, a Stripe Connect settlement pipeline with T+14 escrow, an AI buyer-artist matching system, and a white-label deployment for WRTH ($100M+ inventory).',
  },
  {
    icon: '💼',
    text: '3 years at AB InBev, first as a Software Development Engineer and then as a Solutions Architect. Shipped a reconciliation platform handling 150M+ daily records with a 120x latency improvement, an NPS PWA for 50,000+ stakeholders (88 NPS, validated by Bain & Company), and an offline-first master data app for 2,000 sales reps in 10+ countries.',
  },
  {
    icon: '🔒',
    text: 'Security Champion at AB InBev, cutting open security issues by 73% across 25+ apps. Comfortable across Azure, AWS, and GCP, with Terraform and CI pipelines doing the heavy lifting.',
  },
  {
    icon: '🏆',
    text: '1st place at the IBM AI Demystified Hackathon 2026 for NYC Property Scout, a multi-agent system on watsonx Orchestrate. Excellence in Action Award (Transformation) at AB InBev in 2022. Huge Formula 1 fan.',
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
  { name: 'about', href: '#about' },
  { name: 'experience', href: '#experience' },
  { name: 'projects', href: '#projects' },
  { name: 'contact', href: '#contact' },
];

export const skillsData = [
  {
    group: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    group: 'Frontend',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind', 'D3.js', 'PWAs & Offline-First', 'WebSockets'],
  },
  {
    group: 'Backend',
    skills: ['Node.js', 'Hono', 'FastAPI', 'Flask', 'Stripe Connect'],
  },
  {
    group: 'AI',
    skills: [
      'LLM & Agent Apps',
      'GPT-4',
      'Claude',
      'Gemini',
      'IBM watsonx Orchestrate',
      'Vision Pipelines',
    ],
  },
  {
    group: 'Cloud & Infrastructure',
    skills: ['Microsoft Azure', 'AWS', 'Google Cloud', 'Terraform', 'Docker'],
  },
  {
    group: 'Data',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Azure SQL',
      'MongoDB',
      'Redis',
      'Supabase',
      'Firebase',
      'Apache Airflow',
    ],
  },
  {
    group: 'Web3',
    skills: ['Xion', 'On-Chain Verification'],
  },
  {
    group: 'Tools',
    skills: [
      'Claude Code',
      'Cursor',
      'GitHub Actions',
      'Azure DevOps',
      'Vercel',
      'Turborepo',
      'Datadog',
      'PostHog',
    ],
  },
];

export const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'New York University - Tandon School of Engineering',
    location: 'Brooklyn, NY',
    period: 'Sep 2024 - May 2026',
    description: 'GPA 3.75/4.0. Completed May 2026, with coursework in AI/ML, Cloud Computing, Big Data, Software Engineering, and Security.',
    logo: '/images/nyu-logo.png',
    website: 'https://engineering.nyu.edu/',
    achievements: [
      'Graduate Assistant at the Office of Assessment, Accreditation & Institutional Research (AAIR), building the SeEval course feedback platform for 8,000+ students and faculty.',
      '1st Place, IBM AI Demystified Hackathon 2026 for NYC Property Scout, a ReAct manager-worker agent system on IBM watsonx Orchestrate.',
    ],
    courses: [
      'Artificial Intelligence',
      'Cloud Computing',
      'Big Data',
      'Trust & Safety Engineering',
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
    period: 'Jul 2017 - Jul 2021',
    description: 'Focused on systems engineering and robotics research.',
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
    title: 'PromptOff: Competitive Multiplayer Prompt Engineering Game',
    description:
      'Real-time multiplayer game where up to 8 players race to recreate a reference image by writing AI image prompts within a token budget. Prompts are sent to Gemini 2.5 Flash for image generation, then scored against the reference across visual similarity (Gemini vision), prompt efficiency, and speed. Includes six offensive/defensive/utility powerups, private rooms, configurable rounds, SpacetimeAuth-backed profiles with game history, and Gemini-powered post-game coaching insights. Backend logic runs entirely inside SpacetimeDB as a WASM module with deterministic reducers and real-time WebSocket table subscriptions, so there is no separate API server.',
    image: '/images/project-promptoff.png',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'SpacetimeDB',
      'Gemini 2.5 Flash',
      'SpacetimeAuth (OIDC)',
    ],
    features: [
      'Real-time multiplayer via SpacetimeDB WebSocket subscriptions, no polling',
      'Three-dimension scoring: visual similarity, prompt efficiency, speed',
      'Six powerups (offensive/defensive/utility) assignable per player per game',
      'SpacetimeAuth login with stable cross-device identity',
      'Gemini-powered AI coaching insights unlocked after 5 games',
      'Global leaderboard and per-player game history',
    ],
    metrics: {
      maxPlayers: 8,
      scoringWeights: '60/25/15 similarity/efficiency/speed',
      architecture: 'Serverless WASM reducers, no separate API server',
    },
    githubUrl: 'https://github.com/anindaghosh/prompter/tree/main',
    liveUrl: 'https://promptoff.vercel.app/',
    courseInfo: null,
  },
  {
    title: 'NYC Property Scout: Multi-Agent Property Transparency System',
    description:
      "1st Place at IBM AI Demystified Hackathon (Feb 2026). Built a ReAct-based manager-worker agent system on IBM watsonx Orchestrate. A routing agent delegates queries to dataset-scoped worker agents (ACRIS, HPD, DOB, 311), each specialized in a single NYC public records source. Worker outputs are aggregated into a unified Transparency Report Card exposed through a chat interface for questions on rent inflation trends, ownership history, and building violations.",
    image: '/images/project-property-scout.png',
    technologies: [
      'IBM watsonx Orchestrate',
      'GPT-4',
      'ReAct Agents',
      'Next.js',
      'NYC Open Data APIs',
    ],
    features: [
      'Manager-worker agent architecture with dataset-scoped delegation',
      'Live integration with ACRIS, HPD, DOB, and 311 public records',
      'Unified Transparency Report Card synthesis across sources',
      'Chat interface for natural language property queries',
    ],
    metrics: {
      award: '1st Place / all competing teams',
      dataSources: 4,
      pattern: 'ReAct Manager-Worker',
    },
    githubUrl: 'https://github.com/LaxmanSRawat/NYC-Property-Scout',
    liveUrl: 'https://youtu.be/dFMHC6LWsw4',
    courseInfo: 'IBM AI Demystified Hackathon, Feb 2026',
  },
  {
    title: 'Streamjacking Detection System: Multimodal Fraud Detection for YouTube Livestreams',
    description:
      "Multimodal fraud detection pipeline flagging YouTube livestream impersonation scams promoting cryptocurrency fraud. Combines 16 rule-based signals (channel age, subscriber-to-view ratios, comment moderation patterns, metadata anomalies) with a fine-tuned CryptoBERT classifier operating over stream titles, descriptions, and chat transcripts. Deployed on Cloud Run with MongoDB for labeled data and evaluation runs, and evaluated on 1,500+ manually labeled videos. Research project for NYU's Trust & Safety Engineering course.",
    image: '/images/project-streamjacking.png',
    technologies: [
      'Python',
      'CryptoBERT (fine-tuned)',
      'YouTube Data API v3',
      'Google Cloud Run',
      'MongoDB',
      'scikit-learn',
      'PyTorch',
      'NLTK',
    ],
    features: [
      '16 rule-based signals across metadata, engagement, and channel patterns',
      'Fine-tuned CryptoBERT classifier for text-based scam detection',
      'Cloud Run + MongoDB deployment for labeled dataset and evaluation',
      'Evaluation on 1,500+ manually labeled videos',
    ],
    metrics: {
      labeledDataset: '1,500+ videos',
      ruleBasedSignals: 16,
      deployment: 'Cloud Run + MongoDB',
    },
    githubUrl: 'https://github.com/anindaghosh/trustsafety-streamjacking-detector',
    liveUrl: null,
    paperUrl: null,
    courseInfo: 'NYU Tandon School of Engineering - Trust & Safety Engineering',
  },
  {
    title: 'CareVault: AI-Powered Healthcare Document Management',
    description:
      'Secure healthcare management platform for patients and caregivers to organize medical documents, schedule appointments, and track medications. RAG-powered assistant lets users query their own documents and derive health insights. Multi-profile support allows a single caregiver to manage records across dependents.',
    image: '/images/project-carevault.png',
    technologies: ['Flask', 'Supabase', 'PostgreSQL', 'RAGFlow', 'React', 'Docker'],
    githubUrl: null,
    liveUrl: 'https://youtu.be/ZuuEdnYPFfQ',
  },
  {
    title: 'AI-Powered Vulnerability Detector',
    description:
      'Cloud-based web app that scans Python GitHub repos for security vulnerabilities using Bandit for static analysis and LLaMA 3B for contextual fix suggestions. Reports are CWE-tagged and include AI-generated remediation guidance alongside code snippets.',
    image: '/images/project-vulnscanner.jpg',
    technologies: ['Flask', 'Supabase', 'AWS', 'Bandit', 'LLaMA 3B', 'React'],
    githubUrl: 'https://github.com/CS-GY-9223-Cloud-Vuln-Detector/backend',
    liveUrl: 'https://main.d3k1a8dkhmpya0.amplifyapp.com/',
  },
  {
    title: 'RoomScout: Student Housing Platform',
    description:
      'End-to-end web app for international students to find verified housing near NYC schools. Features property listings, advanced filters, student verification workflows, and GPT-powered amenity insights extracted from listing descriptions.',
    image: '/images/project-roomscout.png',
    technologies: ['React', 'Django', 'PostgreSQL', 'OpenAI API', 'Figma', 'Jest', 'Pytest', 'Locust'],
    githubUrl: 'https://github.com/anindaghosh/roomscout',
    liveUrl: null,
  },
  {
    title: 'Reusable Product NPS Component',
    description:
      'A drop-in product NPS survey for internal apps at AB InBev: a React component paired with a shared Flask backend, published through an internal Azure DevOps registry so any product team could add in-app feedback without building their own. Shipped to 10+ products.',
    image: null,
    technologies: ['React', 'Flask', 'Python', 'Azure App Service', 'Azure DevOps Artifacts'],
    features: [
      'React component installable from an internal Azure DevOps registry',
      'Shared Flask backend so product teams do not run their own survey service',
      'Adopted across 10+ internal products',
    ],
    metrics: {
      products: '10+',
    },
    githubUrl: null,
    liveUrl: null,
    courseInfo: 'AB InBev',
  },
  {
    title: 'Shared Azure App Registration Auth Pattern',
    description:
      'A shared Azure App Registration pattern at AB InBev that gives internal apps scoped JWT access to each other, so teams reuse one authorization model instead of wiring their own. Rolled out across 10+ apps.',
    image: null,
    technologies: ['Microsoft Entra ID', 'Azure App Registration', 'JWT', 'OAuth 2.0'],
    features: [
      'Scoped JWT access between internal apps from one shared App Registration',
      'One authorization pattern reused across product teams',
      'Adopted across 10+ apps',
    ],
    metrics: {
      apps: '10+',
    },
    githubUrl: null,
    liveUrl: null,
    courseInfo: 'AB InBev',
  },
  {
    title: 'Fine-Tuned Retrieval-Augmented Generation (RAG) System',
    description:
      'Performant document QA agent built with LangChain, Qdrant, OpenAI, and FAISS. Fine-tuning retrieval and reranking layers lifted BLEU to 0.87 and reduced end-to-end latency by 25% compared to the baseline pipeline.',
    image: '/images/project-nyu-ai-rag.png',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Qdrant', 'FAISS'],
    githubUrl: 'https://github.com/anindaghosh/cs-gy-6613-artificial-intelligence-project',
    liveUrl: null,
  },
  {
    title: "PC Makr: India's First PC Component Aggregator",
    description:
      'Aggregated 5,000+ PC components across major Indian e-commerce sites. Attracted 4,000 users and deployed a recommendation system achieving 80% accuracy on build compatibility.',
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
    position: 'Founding Engineer',
    company: 'Parallel Worlds',
    location: 'New York, NY',
    period: 'Feb 2026 - May 2026',
    description:
      'Founding engineer at Parallel Worlds, an art marketplace. Built the engineering foundation, payments and settlement, AI matching, and a white-label deployment for WRTH, a real-world asset commerce platform with $100M+ in inventory.',
    logo: '/images/parallel-worlds-logo.png',
    website: 'https://parallelworlds.io',
    achievements: [
      'Engineering Foundation: Set up the Turborepo monorepo, a shared component package used across apps, and PostHog product analytics.',
      'Settlement Pipeline: Built a settlement pipeline on Stripe Connect with T+14 escrow and a PIN-gated wallet.',
      'AI Buyer-Artist Matching: Built an AI matching system that connects buyers with artists whose work fits what they are looking for.',
      'WRTH White-Label Deployment ($100M+ inventory): Led the white-label deployment for WRTH. Migrated Firebase to Supabase, added on-chain asset verification with Xion, and built a Gemini vision valuation pipeline that cut average inventory upload time from about 15 minutes to under 2.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Turborepo',
      'Stripe Connect',
      'Supabase',
      'Firebase',
      'Xion Blockchain',
      'Gemini Vision',
      'PostHog',
      'Vercel',
    ],
  },
  {
    position: 'Graduate Assistant',
    company: 'New York University',
    location: 'New York, USA',
    period: 'Sep 2024 - May 2026',
    description:
      'Built data platforms and analytics tools for the Office of Assessment, Accreditation & Institutional Research (AAIR) at NYU Tandon.',
    logo: '/images/nyu-logo.png',
    website: 'https://engineering.nyu.edu/about/assessment-and-institutional-research',
    achievements: [
      'SeEval Course Feedback Platform (8,000+ users): Built a course feedback platform for 8,000+ NYU students and faculty with React, D3.js, FastAPI, and AWS, covering sentiment analysis, historical course feedback, and comparative visualizations.',
    ],
    technologies: ['React', 'FastAPI', 'D3.js', 'AWS', 'Python', 'PostgreSQL'],
  },
  {
    position: 'Solutions Architect',
    company: 'AB InBev',
    location: 'Bengaluru, India',
    period: 'Jan 2023 - Jul 2024',
    description:
      'Led architecture for business-critical applications across Finance, Operations, and Employee Experience, on secure, scalable Azure solutions used across 5 global regions.',
    logo: '/images/ab-inbev-logo.jpg',
    website: 'https://www.ab-inbev.com',
    achievements: [
      'Financial Reconciliation Platform (150M+ daily records): Architected an event-driven platform processing 150M+ daily financial records for 7,000+ finance users across 5 regions, built on Azure Data Factory, Azure SQL, Event Grid, and Redis. Cut API latency 120x, from 2 minutes to under 1 second, saving about $600K a year.',
      'KRIA NPS Platform: Built KRIA, a React/Flask PWA serving 50,000+ stakeholders across 800 teams. Raised the survey response rate from 30% to 70% and reached an 88 NPS, validated by Bain & Company.',
      'Platform Standards: Drove adoption of Terraform infrastructure as code and a golden CI pipeline with automated security scanning across product teams.',
    ],
    technologies: [
      'Azure (Data Factory, Event Grid, SQL, Key Vault, Entra)',
      'Terraform',
      'React',
      'Flask',
      'Python',
      'Node.js',
      'Redis',
      'Azure DevOps',
    ],
  },
  {
    position: 'Software Development Engineer I',
    company: 'AB InBev',
    location: 'Bengaluru, India',
    period: 'Jul 2021 - Dec 2022',
    description:
      'Built full-stack enterprise applications for sales operations and workforce management across Europe and India, and served as the team Security Champion.',
    logo: '/images/ab-inbev-logo.jpg',
    website: 'https://www.ab-inbev.com',
    achievements: [
      'Security Champion: Cut open security issues by 73% across 25+ applications.',
      'Maven (2,000 sales reps, 10+ countries): Built an offline-first customer master data app for 2,000 sales reps across 10+ countries. Cut data turnaround from 3 days to under 1 day and raised first-time-right from 40% to 95%.',
      'Hop-A-Seat (5,000 employees): Shipped a hybrid-work booking PWA with 100% adoption across 5,000 employees, replacing $120K a year in vendor licensing.',
    ],
    technologies: [
      'React',
      'Python',
      'Flask',
      'PostgreSQL',
      'Azure App Service',
      'Azure Functions',
      'PWAs',
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