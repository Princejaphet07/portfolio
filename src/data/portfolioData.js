export const personalInfo = {
  name: "Prince Japhet Vender",
  title: "Full Stack Web & App Developer",
  badge: "Available for new projects & full-time roles",
  bio: "Passionate Full Stack Developer with expertise in modern JavaScript/React ecosystems, responsive UI design, Firebase, and backend web architectures. Creator of the Archivio Institutional Research Archival System, Swellbrew, Dive-Cebu, and interactive web and app applications.",
  location: "Cebu, Philippines",
  timezone: "Asia/Manila (UTC+8)",
  email: "japhetvender00@gmail.com",
  github: "https://github.com/Princejaphet07",
  githubUsername: "Princejaphet07",
  avatarUrl: "https://avatars.githubusercontent.com/u/148513182?v=4",
  linkedin: "https://linkedin.com/in/prince-japhet-vender",
  stats: [
    { label: "Repositories & Projects", value: "10+", suffix: "Public & Systems" },
    { label: "Years Experience", value: "3+", suffix: "Years Building" },
    { label: "Core Technologies", value: "12+", suffix: "Mastered" },
    { label: "Code Quality & Uptime", value: "99.9%", suffix: "Reliable" },
  ],
  titles: [
    "Full Stack Web & App Developer",
    "React & JavaScript Specialist",
    "Firebase & Backend Architect",
    "Web & Mobile App Developer",
    "Frontend & Backend Builder",
  ],
};

export const skillsData = {
  frontend: [
    { name: "React / Vite", level: 95, icon: "react", category: "Core Framework", highlight: true },
    { name: "JavaScript (ES6+)", level: 95, icon: "javascript", category: "Language", highlight: true },
    { name: "Tailwind CSS", level: 92, icon: "tailwind", category: "Styling", highlight: true },
    { name: "HTML5 / Modern CSS", level: 98, icon: "html", category: "Markup & Layout", highlight: true },
    { name: "Responsive Design & A11y", level: 94, icon: "responsive", category: "UI/UX" },
    { name: "State Management & Hooks", level: 90, icon: "state", category: "Architecture" },
  ],
  backend: [
    { name: "Node.js & Express", level: 88, icon: "nodejs", category: "Runtime & Framework", highlight: true },
    { name: "RESTful API Development", level: 92, icon: "api", category: "Architecture", highlight: true },
    { name: "Role-Based Auth (RBAC)", level: 90, icon: "security", category: "Security", highlight: true },
    { name: "C# / Object-Oriented Dev", level: 82, icon: "csharp", category: "Language" },
  ],
  database: [
    { name: "Firebase / Cloud Firestore", level: 95, icon: "firebase", category: "BaaS & Realtime", highlight: true },
    { name: "Firebase Authentication & Hosting", level: 94, icon: "cloud", category: "Cloud Services", highlight: true },
    { name: "SQL & Relational Databases", level: 84, icon: "database", category: "Relational DB" },
    { name: "Cloud Storage & Media Pipelines", level: 88, icon: "storage", category: "File Management" },
  ],
  devops: [
    { name: "Git & GitHub Workflow", level: 94, icon: "git", category: "Version Control", highlight: true },
    { name: "Vite & Modern Tooling", level: 92, icon: "vite", category: "Bundlers", highlight: true },
    { name: "Firebase Deployments & CI/CD", level: 92, icon: "deploy", category: "Hosting & Ops", highlight: true },
    { name: "Postman & API Testing", level: 88, icon: "postman", category: "Testing" },
  ],
};

export const projectsData = [
  {
    id: "archivio-research-system",
    title: "Archivio-Research-System",
    subtitle: "Institutional Manuscript & Research Archival Platform",
    category: "Full Stack",
    featured: true,
    tags: ["React", "Firebase", "Firestore", "Tailwind CSS", "Role-Based Auth", "Vite"],
    description:
      "A flagship institutional research repository and manuscript management system. Built with multi-tier role authorization for Deans, Research Advisers, and Authors. Features real-time manuscript approval workflows, departmental search indexing, automated invitation dispatches, and public manuscript previewing.",
    architecture: [
      "Multi-Role Access Control (Dean, Research Adviser, Student)",
      "Real-time manuscript status transitions & automated invitations",
      "Firebase Cloud Firestore reactive listener architecture",
      "Public manuscript search with faculty & department filtering",
    ],
    metrics: "Deployed live on Firebase Hosting serving institutional research manuscripts.",
    githubUrl: "https://github.com/Princejaphet07/Archivio-Research-System",
    liveUrl: "https://archivio-public.web.app/",
    color: "from-blue-500/20 via-indigo-500/20 to-cyan-500/20",
    glowColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    id: "swellbrew-coffee-shop",
    title: "Swellbrew-Coffee-shop",
    subtitle: "Aesthetic Modern Café & Beverage Storefront",
    category: "Frontend",
    featured: true,
    tags: ["JavaScript", "HTML5", "Modern CSS", "UI/UX Design", "Responsive"],
    description:
      "An immersive digital storefront and menu experience designed for artisanal coffee roasters and cafés. Features interactive drink selection cards, specialty brew categories, pricing matrix, and fluid responsive styling across all viewports.",
    architecture: [
      "Custom responsive CSS layout with aesthetic typography and color harmony",
      "Interactive menu filtering for hot brews, cold specials, and bakery items",
      "Smooth micro-animations and intuitive navigation architecture",
      "Cross-browser tested with zero layout shifts",
    ],
    metrics: "Clean and visually stunning responsive café presentation.",
    githubUrl: "https://github.com/Princejaphet07/Swellbrew-Coffee-shop",
    liveUrl: "https://github.com/Princejaphet07/Swellbrew-Coffee-shop",
    color: "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
    glowColor: "rgba(245, 158, 11, 0.5)",
  },
  {
    id: "dive-cebu",
    title: "Dive-Cebu",
    subtitle: "Premier Tourism & Scuba Adventure Discovery Portal",
    category: "Frontend",
    featured: true,
    tags: ["HTML5", "CSS3", "JavaScript", "Tourism", "Responsive"],
    description:
      "A rich travel and adventure discovery portal showcasing Cebu's world-famous diving spots (Moalboal, Malapascua, Mactan). Features destination spotlights, marine life guides, dive packages, and an interactive booking inquiry interface.",
    architecture: [
      "Rich media showcases highlighting marine sanctuaries and dive maps",
      "Modular travel package grid with pricing and equipment details",
      "Optimized lightweight asset delivery for mobile travelers",
      "Intuitive booking contact flow",
    ],
    metrics: "Promoting local tourism and marine adventures across Cebu, Philippines.",
    githubUrl: "https://github.com/Princejaphet07/Dive-Cebu",
    liveUrl: "https://github.com/Princejaphet07/Dive-Cebu",
    color: "from-cyan-500/20 via-teal-500/20 to-blue-500/20",
    glowColor: "rgba(6, 182, 212, 0.5)",
  },
  {
    id: "trace",
    title: "TRACE — Event & Asset Tracking System",
    subtitle: "Real-time Monitoring & Status Telemetry Workflow",
    category: "Full Stack",
    featured: false,
    tags: ["JavaScript", "Node.js", "Firebase", "Realtime", "Dashboard"],
    description:
      "A streamlined tracking and status monitoring application built to trace records, activity logs, and status updates with real-time feedback, interactive status badges, and search filtering.",
    architecture: [
      "Real-time event logging pipeline with instant status propagation",
      "Dynamic filtering by status, date ranges, and entity identifiers",
      "Modular dashboard widgets and clean visual telemetry",
      "Reliable data persistence and validation",
    ],
    metrics: "Instant tracking visibility with zero data latency.",
    githubUrl: "https://github.com/Princejaphet07/TRACE",
    liveUrl: "https://github.com/Princejaphet07/TRACE",
    color: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    glowColor: "rgba(16, 185, 129, 0.5)",
  },
  {
    id: "geargrid",
    title: "GEARGRID",
    subtitle: "Hardware & Equipment Inventory Management",
    category: "Frontend",
    featured: false,
    tags: ["JavaScript", "CSS3", "HTML5", "Inventory", "Catalog"],
    description:
      "A dynamic inventory and hardware catalog grid designed to manage equipment specifications, availability status, category categorization, and rapid asset lookup.",
    architecture: [
      "Faceted filter controls by brand, gear type, and availability",
      "Compact card grid layout with quick detail previews",
      "Local state storage with responsive touch interaction",
    ],
    metrics: "Fast asset retrieval with sub-50ms search filtering.",
    githubUrl: "https://github.com/Princejaphet07/GEARGRID",
    liveUrl: "https://github.com/Princejaphet07/GEARGRID",
    color: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    glowColor: "rgba(99, 102, 241, 0.5)",
  },
  {
    id: "hyllas-quest",
    title: "Hyllas-Quest",
    subtitle: "2D/3D Interactive Adventure Game Engine",
    category: "Full Stack",
    featured: false,
    tags: ["C#", "Game Dev", "Interactive Physics", "Animation", "Asset Pipelines"],
    description:
      "An interactive adventure game programmed in C#. Implements character movement controllers, collision physics, inventory systems, quest trigger events, and dynamic game audio.",
    architecture: [
      "Object-oriented game state manager with modular quest script triggers",
      "Custom physics interactions, hitbox detection, and enemy AI pathing",
      "Audio and sprite animation state machines",
    ],
    metrics: "Smooth 60 FPS gameplay execution with structured C# codebase.",
    githubUrl: "https://github.com/Princejaphet07/Hyllas-Quest",
    liveUrl: "https://github.com/Princejaphet07/Hyllas-Quest",
    color: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
    glowColor: "rgba(168, 85, 247, 0.5)",
  },
  {
    id: "flourish-app",
    title: "FLOURISH-APP & WEB-FLOURISH",
    subtitle: "Wellness & Lifestyle Routine Platform",
    category: "Frontend",
    featured: false,
    tags: ["JavaScript", "HTML5", "CSS3", "Wellness", "Interactive UI"],
    description:
      "A modern lifestyle web platform focused on daily habit tracking, mindful routines, and wellness content presentation with clean aesthetics and gentle animations.",
    architecture: [
      "Component-based UI with interactive daily routine checklists",
      "Gentle pastel aesthetic with accessible typography and calm color palette",
      "Lightweight responsive bundle with zero external bloat",
    ],
    metrics: "Designed for peaceful daily habit tracking and intuitive self-care.",
    githubUrl: "https://github.com/Princejaphet07/FLOURISH-APP",
    liveUrl: "https://github.com/Princejaphet07/FLOURISH-APP",
    color: "from-rose-500/20 via-pink-500/20 to-purple-500/20",
    glowColor: "rgba(244, 63, 94, 0.5)",
  },
];

export const experienceData = [
  {
    period: "2024 — Present",
    role: "Full Stack Web & App Developer",
    company: "Archivio Research Platform & Independent Systems",
    location: "Cebu, Philippines",
    type: "Lead Developer / Open Source",
    description:
      "Lead developer and architect of the Archivio Research System and web application projects. Specializing in React, Firebase/Firestore, role-based security, and production deployments.",
    achievements: [
      "Architected and deployed the Archivio Research System on Firebase with multi-tier role access (Dean, Adviser, Author).",
      "Developed automated manuscript status notifications and departmental research indexing.",
      "Maintained active GitHub repositories across web applications, game scripts, and digital storefronts.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Web Application & Frontend Developer",
    company: "Specialized Web Projects (Swellbrew, Dive-Cebu, TRACE)",
    location: "Cebu, Philippines",
    type: "Project-based",
    description:
      "Built interactive web applications including Swellbrew Coffee Shop, Dive-Cebu adventure portal, TRACE monitoring, and GEARGRID catalog.",
    achievements: [
      "Built modern responsive layouts with pixel-perfect attention to typography and animations.",
      "Constructed modular JavaScript components with zero dependency overhead.",
      "Implemented comprehensive mobile-first design systems across commercial and community platforms.",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Computer Studies & Web/App Development",
    company: "Academic & Tech Foundations",
    location: "Philippines",
    type: "Education & Foundations",
    description:
      "Studied core computer science concepts, object-oriented programming (C#, JavaScript), web fundamentals, algorithms, and relational data architecture.",
    achievements: [
      "Developed interactive software prototypes including Hyllas-Quest and inventory management tools.",
      "Collaborated in agile team sprints to design institutional research software workflows.",
    ],
  },
];

export const servicesData = [
  {
    title: "Full Stack Web Applications",
    icon: "code",
    description:
      "Developing end-to-end web applications with React, Vite, Tailwind CSS, and Firebase/Node.js backends like the Archivio Research System.",
    tags: ["React", "Firebase", "JavaScript", "Tailwind CSS", "Full Stack"],
  },
  {
    title: "Role-Based Auth & Backend Systems",
    icon: "server",
    description:
      "Designing multi-role permission systems (Adviser, Dean, Author, Admin), real-time Firestore listeners, and secure data validation.",
    tags: ["RBAC", "Firebase Auth", "Firestore", "REST APIs", "Security"],
  },
  {
    title: "Modern UI/UX & Responsive Storefronts",
    icon: "layout",
    description:
      "Crafting memorable, high-converting digital storefronts (like Swellbrew & Dive-Cebu) with modern animations and fluid mobile responsiveness.",
    tags: ["Design Systems", "Glassmorphism", "Responsive", "Micro-Interactions"],
  },
  {
    title: "Custom Inventory & Asset Systems",
    icon: "database",
    description:
      "Building clean catalog, inventory, and tracking systems (like GEARGRID and TRACE) with rapid search and real-time status visibility.",
    tags: ["Asset Management", "Data Grids", "Realtime Sync", "Optimization"],
  },
];

export const terminalCommands = {
  help: `Available Commands:
  - whoami      : Display personal identity, location and developer mission
  - skills      : List technical stack (React, Firebase, JavaScript, etc.)
  - projects    : Output real GitHub projects (Archivio, Swellbrew, Dive-Cebu, TRACE, etc.)
  - contact     : Get direct email (japhetvender00@gmail.com) and GitHub link
  - stats       : View developer metrics & repository counts
  - cat resume  : Summary of career history, education and credentials
  - sudo hire   : Trigger direct hiring priority channel 🎉
  - clear       : Clear the terminal screen`,

  whoami: `Prince Japhet Vender — Full Stack Web & App Developer
GitHub   : @Princejaphet07 (https://github.com/Princejaphet07)
Email    : japhetvender00@gmail.com
Location : Cebu, Philippines (UTC+8)
Mission  : Building high-standard full-stack web applications, research platforms, and responsive digital experiences.`,

  skills: `Technical Matrix:
  [Frontend]  React, Vite, JavaScript (ES6+), Tailwind CSS, HTML5, Modern CSS, Zustand
  [Backend]   Node.js, Express, RESTful APIs, Role-Based Access Control (RBAC), C#
  [Database]  Firebase (Firestore, Realtime DB, Auth, Hosting, Storage), SQL
  [DevOps]    Git/GitHub Workflow, Firebase CLI, Vite Bundler, Postman`,

  projects: `Prince Japhet Vender's Real GitHub Projects:
  1. Archivio-Research-System : Institutional Manuscript Archival Platform (React + Firebase)
     Live: https://archivio-public.web.app/ | Repo: https://github.com/Princejaphet07/Archivio-Research-System
  2. Swellbrew-Coffee-shop    : Modern Artisanal Café & Drink Storefront
     Repo: https://github.com/Princejaphet07/Swellbrew-Coffee-shop
  3. Dive-Cebu                : Premier Scuba Diving & Tourism Adventure Portal
     Repo: https://github.com/Princejaphet07/Dive-Cebu
  4. TRACE                    : Real-time Event & Status Tracking System
     Repo: https://github.com/Princejaphet07/TRACE
  5. GEARGRID                 : Hardware & Equipment Inventory Catalog
     Repo: https://github.com/Princejaphet07/GEARGRID
  6. Hyllas-Quest             : 2D/3D Interactive Adventure Game in C#
     Repo: https://github.com/Princejaphet07/Hyllas-Quest
  7. FLOURISH-APP             : Wellness & Routine Habit Tracker
     Repo: https://github.com/Princejaphet07/FLOURISH-APP`,

  contact: `Direct Contact Channels:
  - Email   : japhetvender00@gmail.com
  - GitHub  : https://github.com/Princejaphet07
  - Status  : 🟢 Open for Full-Stack Opportunities & Contracts`,

  stats: `Developer Stats:
  - GitHub Repos     : 10+ Public Projects
  - Experience       : 3+ Years Building
  - Flagship System  : Archivio Research Platform (Live on Firebase)
  - Passion / Code   : 100% Dedicated`,

  "cat resume": `PRINCE JAPHET VENDER — Full Stack Developer
GitHub  : https://github.com/Princejaphet07
Email   : japhetvender00@gmail.com
Location: Cebu, Philippines
Focus   : React, Firebase, Node.js, Web Architectures & Modern UI/UX`,
};
