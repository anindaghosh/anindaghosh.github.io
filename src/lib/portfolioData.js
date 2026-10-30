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
    text: 'Security Champion at AB InBev, cutting open security issues by 73% across 25+ apps. Ran Privacy Impact Assessments and SOX compliance for financial reconciliation. Comfortable across Azure, AWS, and GCP, with Terraform and CI pipelines doing the heavy lifting.',
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
    skills: ['Node.js', 'Express.js', 'Hono', 'FastAPI', 'Flask'],
  },
  {
    group: 'AI & ML',
    skills: [
      'RAG Pipelines',
      'Vector Search (Qdrant)',
      'LoRA Fine-Tuning',
      'Agentic Systems (ReAct, Manager-Worker)',
      'LLM Apps (GPT-4, Claude, Gemini, Llama)',
      'IBM watsonx Orchestrate',
      'Prompt Engineering',
      'Vision Pipelines',
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'Ollama',
    ],
  },
  {
    group: 'Cloud & Infrastructure',
    skills: [
      'Microsoft Azure',
      'AWS',
      'Google Cloud',
      'Render',
      'Terraform',
      'Docker',
      'CI/CD',
    ],
  },
  {
    group: 'Data & Platforms',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Azure SQL',
      'SQL Server',
      'MongoDB',
      'Redis',
      'Supabase',
      'Firebase',
      'Apache Airflow',
      'Azure Data Factory',
      'Tableau',
      'PowerBI',
    ],
  },
  {
    group: 'Payments & Web3',
    skills: ['Stripe Connect', 'PayPangea', 'Wagmi', 'Viem', 'RainbowKit', 'Aptos Move', 'Xion'],
  },
  {
    group: 'Security & Monitoring',
    skills: ['Snyk', 'Checkmarx', 'SonarCloud', 'Apiiro', 'Datadog', 'Application Insights'],
  },
  {
    group: 'Testing',
    skills: ['Pytest', 'Jest', 'Cypress', 'Locust', 'K6'],
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
      'Graduate Assistant at the Office of Assessment, Accreditation & Institutional Research (AAIR), building the SeEval course feedback platform for 8,000+ students and faculty and a Tableau dashboards directory for 500+ faculty.',
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
      'A drop-in product NPS survey for internal apps at AB InBev that I owned from design through onboarding: a React component paired with one shared Flask backend, published through an internal Azure DevOps registry so any product team could add in-app feedback without building their own. A metadata JSON field lets each product send its own context without touching the backend schema. 10+ products onboarded.',
    image: null,
    technologies: ['React', 'Flask', 'Python', 'Azure App Service', 'Azure DevOps Artifacts'],
    features: [
      'React component installable from an internal Azure DevOps registry',
      'One shared Flask backend, so product teams do not run their own survey service',
      'Metadata JSON field for product-specific context with no backend schema changes',
      'Owned onboarding for every product team, 10+ products in all',
    ],
    metrics: {
      'products onboarded': '10+',
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
      'apps onboarded': '10+',
    },
    githubUrl: null,
    liveUrl: null,
    courseInfo: 'AB InBev',
  },
  {
    title: 'ROS2 Robotics Assistant (Fine-tuned RAG)',
    description:
      'A retrieval-augmented assistant that answers questions for ROS2 robotics developers, covering Nav2, MoveIt2 and Gazebo. It scrapes and cleans 175 GitHub, Medium and YouTube sources, stores embeddings in Qdrant, and grounds answers in the retrieved chunks with source links. The answering model is Llama 3.1 8B, fine-tuned with LoRA on a synthetic instruction set and served locally through Ollama.',
    image: null,
    technologies: [
      'Python',
      'Llama 3.1',
      'Qdrant',
      'LoRA / Unsloth',
      'Ollama',
      'Hugging Face Transformers',
      'MongoDB',
      'OpenAI GPT-4o',
      'ClearML',
      'Docker Compose',
      'Open WebUI',
    ],
    features: [
      'Ingestion pipeline that scrapes GitHub repositories, Medium articles and YouTube transcripts into MongoDB, with each step tracked as a ClearML task',
      'Per-platform cleaning and chunking, then 384-dimensional MiniLM embeddings indexed in Qdrant with cosine similarity',
      'Synthetic instruction dataset of 3,050 question and answer pairs generated with GPT-4o and published to Hugging Face',
      'LoRA fine-tuning of Llama 3.1 8B in 4-bit with Unsloth and TRL (41.9M trainable parameters, one epoch on an A100)',
      'Retrieve-then-generate CLI that grounds answers in the top-k chunks and cites source URLs',
      'Model exported to GGUF, published on Ollama, and usable through Open WebUI',
      'Entire stack (MongoDB, Qdrant, ClearML, Ollama, Open WebUI) runs from one docker-compose file',
    ],
    metrics: {
      'Sources indexed': 175,
      'Instruction pairs': '3,050',
      'Base model': 'Llama 3.1 8B',
      'Trainable params': '41.9M (LoRA r=16)',
      'Embedding dim': 384,
    },
    githubUrl: 'https://github.com/anindaghosh/cs-gy-6613-artificial-intelligence-project',
    liveUrl: 'https://huggingface.co/anindaghosh/cs-gy-6613-rag-project',
    paperUrl: null,
    courseInfo: 'CS-GY 6613 Artificial Intelligence, NYU Tandon · Team project with Samrudhi Baldota',
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
      'Render',
      'Vercel',
    ],
  },
  {
    position: 'Graduate Assistant',
    company: 'New York University',
    location: 'New York, USA',
    period: 'Sep 2024 - May 2026',
    description:
      'Built data platforms and analytics tools for the Office of Assessment, Accreditation & Institutional Research (AAIR) at NYU Tandon, used by 8,000+ students and 500+ faculty.',
    logo: '/images/nyu-logo.png',
    website: 'https://engineering.nyu.edu/about/assessment-and-institutional-research',
    achievements: [
      'SeEval Course Feedback Platform (8,000+ users): Built a course feedback platform for 8,000+ NYU students and faculty with React, D3.js, FastAPI, and AWS, covering sentiment analysis, historical course feedback, and comparative visualizations. Integrated Microsoft Entra ID for single sign-on.',
      'Tableau Dashboards Directory (500+ faculty): Developed a React/FastAPI portal used by 500+ faculty, with automated metadata extraction through Python Lambda functions calling the Tableau REST API. Consolidated 100+ dashboards behind a three-layer navigation structure, cutting manual reporting maintenance by 60%.',
    ],
    technologies: [
      'React',
      'FastAPI',
      'D3.js',
      'AWS (Amplify, EC2, RDS, Lambda)',
      'Python',
      'PostgreSQL',
      'Tableau REST API',
      'Microsoft Entra ID',
    ],
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
      'Financial Reconciliation Platform (150M+ daily records): Architected an event-driven platform processing 150M+ daily financial records for 7,000+ finance users across 5 regions, built on Azure Data Factory, Azure SQL, Event Grid, and Redis. Cut API latency 120x, from 2 minutes to under 1 second, saving about $600K a year. Ran the Privacy Impact Assessment and kept the platform SOX compliant.',
      'KRIA NPS Platform: Built KRIA, a React/Flask PWA serving 50,000+ stakeholders across 800 teams. Raised the survey response rate from 30% to 70% and reached an 88 NPS, validated by Bain & Company.',
      'Fixed Assets Verification: Led digitization of 700K physical assets across the North American zone, delivering $500K in tax savings with a 2-week turnaround and automated audit workflows.',
      'Enterprise Architecture Standards: Established Azure Landing Zone patterns, Terraform infrastructure as code standards, secure API gateway architectures, and a golden CI pipeline with automated security scanning, adopted across product teams.',
    ],
    technologies: [
      'Azure (Data Factory, Event Grid, SQL, Key Vault, Entra)',
      'Terraform',
      'React',
      'Flask',
      'Python',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Azure DevOps',
      'Snyk',
      'SonarCloud',
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
      'Security Champion: Cut open security issues by 73% across 25+ applications. Enforced a golden CI pipeline (Snyk, SonarCloud, automated SAST/SCA) and mandated Azure Key Vault for secrets, Azure-issued JWTs with RBAC, App Configuration for secure feature flags, and ORMs (SQLAlchemy, Prisma) across web apps.',
      'Maven (2,000 sales reps, 10+ countries): Built an offline-first customer master data app for 2,000 sales reps across 10+ countries. Integrated 7 SAP BAPIs, a Salesforce Connected App, and ServiceNow approval workflows with country-specific validation (IBAN, VAT). Cut data turnaround from 3 days to under 1 day and raised first-time-right from 40% to 95%.',
      'Product NPS (10+ products onboarded): Owned the reusable Product NPS service end to end, from design to onboarding. Shipped a React component through the internal Azure DevOps registry backed by one shared Flask service, with a metadata JSON field so each product could send its own context without changes to the backend schema. Onboarded 10+ products.',
      'Hop-A-Seat (5,000 employees): Shipped a hybrid-work booking PWA with 100% adoption across 5,000 employees and 1,000+ daily bookings, replacing $120K a year in vendor licensing. Integrated the Web Serial API for USB thermal scanners, government health verification APIs, and transport booking. Cut scheduling errors from 25% to under 5%.',
      'COVID Tracker: Deployed an employee health monitoring system during the pandemic, so HR could track vaccination status and quickly help 5,000+ employees, with automated notifications.',
      'Platform Ownership: Kept 8+ production applications at 99.5%+ uptime, managed their Azure infrastructure, set up monitoring with Application Insights and Azure Monitor, and set up automated testing across unit, end-to-end, and load tests.',
    ],
    technologies: [
      'React',
      'Python',
      'Flask',
      'PostgreSQL',
      'Azure App Service',
      'Azure Functions',
      'SAP BAPIs',
      'Salesforce Connected Apps',
      'Web Serial API',
      'Application Insights',
      'Pytest',
      'Jest',
      'Cypress',
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