// src/data/portfolioData.js

export const personalInfo = {
  name: 'Aninda Ghosh',
  photo: '/images/aninda.jpg',
};

export const aboutContent = [
  {
    icon: '🎓',
    text: "CS Master's from NYU Tandon (May 2026, GPA 3.75) focusing on AI/ML, Cloud Computing, Big Data, Software Engineering, and Security.",
  },
  {
    icon: '🚀',
    text: 'Founding Engineer at Parallel Worlds, building end to end payment infrastructure (Stripe Connect, escrow, dispute handling) and a white label deployment for WRTH ($100M+ real world asset inventory) with on chain verification and AI valuation.',
  },
  {
    icon: '💼',
    text: 'Prev Solutions Architect at AB InBev (4 years). Shipped a financial reconciliation platform processing 150M+ daily records with 120x latency improvement, an enterprise NPS PWA serving 50,000+ stakeholders (88 NPS, Bain validated), and sales automation across 13 European countries.',
  },
  {
    icon: '🔒',
    text: 'Security Champion with 73% vulnerability reduction across 25+ apps. Led Privacy Impact Assessments and SOX compliance for financial reconciliation. Comfortable across Azure, AWS, and GCP with secure infrastructure and DevSecOps pipelines.',
  },
  {
    icon: '🏆',
    text: '1st Place at the IBM AI Demystified Hackathon (Feb 2026) for NYC Property Scout, a multi agent RAG system on watsonx Orchestrate. AI/ML researcher exploring adversarial detection, RAG, and platform safety. Huge Formula 1 fan.',
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
    group: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    group: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Flask', 'Express.js', 'D3.js'],
  },
  {
    group: 'Cloud & Infrastructure',
    skills: [
      'Microsoft Azure',
      'AWS',
      'Google Cloud',
      'Render',
      'Vercel',
      'Terraform',
      'Docker',
      'CI/CD',
      'Azure DevOps',
      'GitHub Actions',
    ],
  },
  {
    group: 'AI & Data',
    skills: [
      'RAG Pipelines',
      'Agentic Systems (ReAct, Manager-Worker)',
      'LLM Integration (GPT-4, Claude, Gemini)',
      'Vector Search',
      'Prompt Engineering',
      'TensorFlow',
      'PyTorch',
    ],
  },
  {
    group: 'Data & Platforms',
    skills: [
      'PostgreSQL',
      'MySQL',
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
];

export const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'New York University - Tandon School of Engineering',
    location: 'Brooklyn, NY',
    period: '2024 - 2026',
    description: 'GPA 3.75/4.0. Specializing in AI/ML, Cloud Computing, Big Data, Software Engineering, and Security.',
    logo: '/images/nyu-logo.png',
    website: 'https://engineering.nyu.edu/',
    achievements: [
      'Graduate Assistant at the Office of Assessment, Accreditation & Institutional Research (AAIR), building institutional data platforms serving 8,000+ students and faculty.',
      '1st Place, IBM AI Demystified Hackathon (Feb 2026) for NYC Property Scout, a multi-agent RAG system on IBM watsonx Orchestrate.',
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
    title: 'NYC Property Scout: Multi-Agent Property Transparency System',
    description:
      "1st Place at IBM AI Demystified Hackathon (Feb 2026). Built a multi-agent RAG system on IBM watsonx Orchestrate using a ReAct-based manager-worker pattern. A routing agent delegates queries to dataset-scoped worker agents (ACRIS, HPD, DOB, 311), each specialized in a single NYC public records source. Worker outputs are aggregated into a unified Transparency Report Card exposed through a chat interface for questions on rent inflation trends, ownership history, and building violations.",
    image: '/images/project-property-scout.png',
    technologies: [
      'IBM watsonx Orchestrate',
      'GPT-4',
      'ReAct Agents',
      'Next.js',
      'NYC Open Data APIs',
      'Vector Search',
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
    githubUrl: null,
    liveUrl: null,
    courseInfo: 'IBM AI Demystified Hackathon, Feb 2026',
  },
  {
    title: 'Streamjacking Detection System: Multimodal Fraud Detection for YouTube Livestreams',
    description:
      "Multimodal fraud detection pipeline flagging YouTube livestream impersonation scams promoting cryptocurrency fraud. Combines 16 rule-based signals (channel age, subscriber-to-view ratios, comment moderation patterns, metadata anomalies) with a fine-tuned CryptoBERT classifier operating over stream titles, descriptions, and chat transcripts. Visual frame analysis is in progress to add a third modality. Deployed on Cloud Run with MongoDB for labeled data and evaluation runs, and evaluated on 1,500+ manually labeled videos. Research project for NYU's Trust & Safety Engineering course.",
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
      'Visual frame analysis pipeline (in progress) for third detection modality',
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
      'Founding engineer at Parallel Worlds, building end-to-end payment, settlement, and fulfillment infrastructure for a live art marketplace, and architecting the white-label expansion for WRTH (real-world asset commerce, $100M+ inventory).',
    logo: '/images/parallel-worlds-logo.png',
    website: 'https://parallelworlds.io',
    achievements: [
      'Custom Stripe Connect Settlement Pipeline: Designed and shipped a settlement engine with T+14 escrow triggered on delivery confirmation, state-by-state tax calculation, platform fee deductions, and credit card fee handling. Replaced Stripe\'s hosted checkout with custom UI components for tighter marketplace-native UX, backed by webhook-driven dispute and chargeback handling.',
      'Order Fulfillment & Logistics: Integrated Shippo for label generation, pickup scheduling, and live tracking. Escrow release logic keyed off delivery confirmation events, with idempotent fund hold mechanisms to guard against duplicate webhook processing.',
      'WRTH White-Label Expansion ($100M+ inventory): Led architecture of a white-label deployment for real-world asset commerce. Migrated Firebase to Supabase with edge functions, redesigned the multi-channel inventory data model, integrated on-chain asset verification via Xion blockchain, and built a Gemini-powered valuation pipeline using computer vision to identify items from photos and pull cross-marketplace pricing (eBay, StockX).',
      'Crypto & Fiat Payment Infrastructure: Built end-to-end payment rails handling differing reversibility rules for fiat and crypto transactions. Node.js/TypeScript BFF services deployed to Render, integrating PayPangea alongside Wagmi/Viem/RainbowKit for wallet flows.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Stripe Connect',
      'Shippo',
      'PayPangea',
      'Wagmi',
      'Viem',
      'RainbowKit',
      'Xion Blockchain',
      'Supabase',
      'Firebase',
      'Gemini Vision',
      'Render',
      'Vercel',
    ],
  },
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
      'Financial Reconciliation Platform (150M+ daily records): Architected an event-driven platform processing 150M+ daily financial records for 7,000+ finance users across 5 regions. Ingested ERP data via Azure Data Factory pipelines into zone-partitioned Azure SQL with deferred join strategies, used Event Grid for async processing and Storage Containers for document handling, and layered Redis caching on top. Cut API latency from 2 minutes to under 1 second (120x improvement), saving $600K annually.',
      'Enterprise NPS Platform: Built a React/Flask PWA with WebSocket-powered real-time dashboards and Azure Entra SSO, serving 50,000+ stakeholders across 800 teams. Increased survey response rate from 30% to 70% and achieved an 88 NPS score, externally validated by Bain & Company.',
      'Security Champion: Led security architecture reviews across NA/Europe/Africa product teams. Enforced a golden CI pipeline (Snyk, SonarCloud, automated SAST/SCA), mandated Azure Key Vault for secrets, Azure-generated JWTs with RBAC, App Configuration for secure feature flags, and ORM usage (SQLAlchemy, Prisma) across all web apps. Reduced vulnerabilities by 73% across 25+ applications, ran Privacy Impact Assessments, and ensured SOX compliance for the reconciliation platform.',
      'Fixed Assets Verification: Led digitization of 700K physical assets across the North American zone, delivering $500K in tax savings with a 2-week turnaround and automated audit workflows.',
      'Enterprise Architecture Standards: Established Azure Landing Zone patterns, Terraform IaC standards, and secure API gateway architectures adopted across the Digital Solutions organization.',
    ],
    technologies: [
      'Azure (Data Factory, Event Grid, SQL, Key Vault, Entra)',
      'Terraform',
      'PostgreSQL',
      'React',
      'Flask',
      'Python',
      'Node.js',
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
      'Built full-stack enterprise applications for workforce management and sales operations. Delivered customer-embedded solutions across Europe and India requiring stakeholder collaboration across 13+ countries.',
    logo: '/images/ab-inbev-logo.jpg',
    website: 'https://www.ab-inbev.com',
    achievements: [
      'European Sales Automation (13 countries): Built an offline-first React SPA for 2,000 sales reps across 13 European countries. Integrated 7 SAP BAPIs, Salesforce Connected App, and ServiceNow approval workflows with country-specific validation (IBAN, VAT). Cut data turnaround from 3 days to under 1 day and lifted first-time-right rate from 40% to 95%.',
      'Hybrid Work Platform (5,000 employees): Shipped an end-to-end workspace management PWA serving 5,000 employees with 100% adoption and 1,000+ daily bookings, replacing a $120K/year vendor. Integrated Web Serial API for USB thermal scanners, government health verification APIs, and transport booking systems. Cut scheduling errors from 25% to under 5%.',
      'Reusable Product NPS Platform: Architected a shared Azure App Registration authorization pattern granting scoped JWT access across 10+ AB InBev apps. Built Product NPS end-to-end as a reusable Azure App Service backend paired with a React npm component distributed via internal Azure DevOps registry.',
      'COVID Tracker: Deployed an employee health monitoring system during the pandemic, enabling HR to track vaccination status and provide rapid assistance to 5,000+ employees with automated notifications.',
      'Platform Ownership: Maintained 8+ production applications at 99.5%+ uptime, managed Azure infrastructure, and implemented monitoring via Application Insights and Azure Monitor.',
    ],
    technologies: [
      'React',
      'Python',
      'Flask',
      'PostgreSQL',
      'Azure App Service',
      'Azure Functions',
      'REST APIs',
      'SAP BAPIs',
      'Salesforce Connected Apps',
      'Web Serial API',
    ],
  },
  {
    position: 'Graduate Assistant',
    company: 'New York University',
    location: 'New York, USA',
    period: 'Sep 2024 - May 2026',
    description:
      'Engineering data platforms and analytics infrastructure for the Office of Assessment, Accreditation & Institutional Research (AAIR) at NYU Tandon. Built React/FastAPI applications serving 8,000+ students and 500+ faculty covering course feedback analysis, dashboard consolidation, and institutional research automation.',
    logo: '/images/nyu-logo.png',
    website: 'https://engineering.nyu.edu/about/assessment-and-institutional-research',
    achievements: [
      'SeEval Course Feedback Platform (8,000+ users): Built with React, D3.js, FastAPI, and AWS (Amplify, EC2, RDS, Redis) serving 8,000+ NYU students and faculty. Designed a read-optimized backend with pre-aggregated target tables and Redis caching, holding sub-500ms p95 latency for sentiment analysis, historical course feedback, and comparative visualizations across large historical datasets.',
      'Tableau Dashboards Directory (500+ faculty): Developed a React/FastAPI portal consumed by 500+ faculty with automated metadata extraction via Python Lambda functions calling Tableau REST APIs. Consolidated 100+ dashboards behind a three-layer navigation structure, reducing manual reporting maintenance by 60%.',
      'Enterprise SSO Integration: Implemented Microsoft Entra ID authentication across both platforms, enabling seamless single sign-on for students and faculty.',
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