// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const profile = {
  name: "Mohamed Aziz Ben Hassine Temimi",
  firstName: "Aziz",
  title: "Data Science Engineering Student",
  tagline:
    "I build intelligent systems — from machine learning models to multi-agent AI chatbots. Currently seeking a final-year internship (PFE) abroad in Data Science / AI.",
  location: "Hammamet, Tunisia",
  openTo: "Open to international opportunities",
  email: "azizbenhssine7@gmail.com",
  phone: "+216 90 505 949",
  github: "https://github.com/aziztemimii",
  linkedin: "https://www.linkedin.com/in/mohamed-aziz-ben-hassine-temimi-2b92ba232/",
  cvFile: "/CV.pdf",
  photo: "/photo.jpg", // profile photo in public/ — set to null to hide
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Fluent" },
    { name: "English", level: "Professional" },
  ],
};

export const skills = [
  {
    category: "Machine Learning",
    icon: "cpu",
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "PCA",
      "Reinforcement Learning",
      "Statistical Modeling",
    ],
  },
  {
    category: "Deep Learning",
    icon: "brain",
    items: ["ANN", "CNN", "RNN / LSTM", "Transformers", "NLP"],
  },
  {
    category: "GenAI & LLMs",
    icon: "sparkles",
    items: [
      "Multi-Agent Systems",
      "RAG",
      "LlamaIndex",
      "ReAct Agents",
      "Vector Databases (pgvector)",
      "Guardrails (NeMo)",
    ],
  },
  {
    category: "Data Engineering",
    icon: "database",
    items: [
      "SQL",
      "Data Cleaning & Preparation",
      "Missing Values Handling",
      "APIs",
      "Web Scraping",
      "Database Management",
    ],
  },
  {
    category: "Programming & Tools",
    icon: "terminal",
    items: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "TensorFlow / PyTorch",
      "FastAPI",
      "Git",
      "Docker",
    ],
  },
  {
    category: "Mathematics & Statistics",
    icon: "sigma",
    items: ["Probability", "Statistics", "Predictive Analysis"],
  },
];

export const experience = [
  {
    role: "AI Engineer Intern — LinkedLevel Multi-Agent Chatbot",
    company: "Obeya IT",
    period: "Jun — Aug 2026 · 2 months",
    location: "Tunisia",
    description:
      "Designed and built LinkedLevel's AI assistant: a multi-agent chatbot with voice, RAG and reporting capabilities.",
    highlights: [
      "Architected a multi-agent system: a ReAct orchestrator (LlamaIndex) routing queries to specialized agents",
      "Built a RAG agent for document search (PostgreSQL + pgvector embeddings)",
      "Built a Data agent to query structured business data (SQL) in natural language",
      "Developed the FastAPI backend with a voice interface (speech-to-text / text-to-speech) and automatic report generation",
      "Secured the assistant with NVIDIA NeMo Guardrails (topic filtering, confidentiality rules) with multilingual support",
    ],
    tags: ["Python", "FastAPI", "LlamaIndex", "ReAct", "RAG", "pgvector", "NeMo Guardrails", "STT/TTS"],
  },
  {
    role: "Summer Intern — E-Transfert",
    company: "GTI",
    period: "Jul — Aug 2025",
    location: "Tunisia",
    description:
      "Built a web application to digitalize the bank transfer process.",
    highlights: [
      "Designed a microservices architecture ensuring modularity, scalability and resilience",
      "Developed a client interface for initiating and tracking transfer requests",
      "Reduced request processing time compared to the traditional process",
    ],
    tags: ["Microservices", "Web Development", "Banking"],
  },
];

export const projects = [
  {
    title: "LinkedLevel — Multi-Agent AI Chatbot",
    subtitle: "Internship Project — Obeya IT",
    period: "2026",
    description:
      "AI assistant for the LinkedLevel platform, powered by cooperating agents: a ReAct orchestrator routes each query to a RAG agent (document search over pgvector) or a Data agent for structured business data. Includes a voice interface (STT/TTS), automatic report generation, multilingual support and NeMo guardrails for safe responses.",
    tags: ["FastAPI", "LlamaIndex", "ReAct", "pgvector", "RAG", "NeMo", "Voice"],
    github: null, // optional: repo URL — link shown only if set
    demo: null,
    featured: true,
  },
  {
    title: "MediNote",
    subtitle: "Intelligent Medical Report Analysis & Scoring",
    period: "Feb — May 2026",
    description:
      "An NLP system that automatically evaluates medical visit reports for VITAL: scores report quality and completeness, extracts key points, rewrites and generates professional summaries, and includes a chatbot answering questions about the company and its products.",
    tags: ["NLP", "Python", "Transformers", "Chatbot", "Text Generation"],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: "MLOps Pipeline",
    subtitle: "Modular ML Lifecycle with CI/CD",
    period: "2025",
    description:
      "Machine learning pipeline split into independent stages (prepare, train, evaluate, save, load) with three interchangeable classifiers — Random Forest, AdaBoost and XGBoost. Model and scaler are persisted together to avoid train/serve skew, and a GitHub Actions workflow runs an end-to-end smoke test on every push.",
    tags: ["Python", "scikit-learn", "XGBoost", "GitHub Actions", "CI/CD", "Joblib"],
    github: "https://github.com/aziztemimii/aziz-temimi-mlops_project",
    demo: null,
    featured: false,
  },
  {
    title: "E-Transfert",
    subtitle: "Summer Internship — GTI",
    period: "2025",
    description:
      "Web application digitalizing the bank transfer process, built on a microservices architecture for modularity and scalability, with a client interface to initiate and track requests.",
    tags: ["Microservices", "Web", "Banking"],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: "E-Trade",
    subtitle: "Bachelor's Final Year Project — GTI",
    period: "2024",
    description:
      "Platform for managing bank transfers and import domiciliations. Automated documentary credit processing and modeled financial data (clients, operations, transactions).",
    tags: ["Web", "Finance", "Databases"],
    github: null,
    demo: null,
    featured: false,
  },
];

export const education = [
  {
    degree: "Engineering Degree in Computer Science — Data Science",
    school: "ESPRIT — School of Engineering and Technology",
    period: "2024 — Present",
    location: "Tunis, Tunisia",
    details: [
      "Data analysis & Machine Learning",
      "Statistical modeling & predictive analysis",
      "Software engineering & systems architecture",
    ],
  },
  {
    degree: "Bachelor's Degree in Computer Science & Multimedia",
    school: "ISAMM — Higher Institute of Multimedia Arts of Manouba",
    period: "2021 — 2024",
    location: "Manouba, Tunisia",
    details: [
      "Web & mobile development",
      "Relational databases",
      "Algorithms & data structures",
    ],
  },
  {
    degree: "Baccalaureate in Experimental Sciences",
    school: "Lycée Privé Idéale",
    period: "2020 — 2021",
    location: "Nabeul, Tunisia",
    details: [],
  },
];
