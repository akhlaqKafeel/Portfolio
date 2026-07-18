export const siteConfig = {
  name: "Akhlaq Kafel",
  title: "Full-Stack Software Developer",
  description:
    "Full-Stack Software Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and SQL. I build scalable production-grade web applications with clean architecture, modern user experiences, and reliable backend systems.",
  email: "ikhlaqkafeelbusiness@gmail.com",
  linkedin: "https://linkedin.com/in/akhlaqkafel",
  github: "https://github.com/akhlaqKafeel",
  resumeUrl: "/Akhlaq_Kafel_Resume.pdf",
  location: "Jammu & Kashmir, India",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const experience = [
  {
    company: "Hatim Technologies",
    role: "Full-Stack Developer",
    period: "October 2025 – Present",
    location: "Remote (Company Headquarters: Bengaluru, India)",
    description:
      "Develop and maintain production-grade web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Build scalable frontend interfaces, backend services, REST APIs, and continuously improve production performance and reliability.",
    highlights: [
      "Developed scalable frontend and backend features for production applications.",
      "Built and integrated REST APIs across multiple modules.",
      "Fixed production issues and optimized application performance.",
      "Worked with MongoDB for production data management.",
      "Collaborated with designers, QA engineers, and product teams to deliver reliable software.",
    ],
  },
  {
    company: "Hamari Dairy",
    role: "Junior Software Developer",
    period: "September 2024 – September 2025",
    location: "Jaipur, Rajasthan, India",
    description:
      "Worked on both frontend and backend development for production software. Built responsive interfaces, backend APIs, SQL integrations, and contributed to maintaining production applications.",
    highlights: [
      "Developed frontend modules using React.js.",
      "Built backend APIs using Node.js and Express.js.",
      "Worked with SQL databases.",
      "Fixed production issues and maintained existing applications.",
      "Collaborated with senior developers to implement new business features.",
    ],
  },
] as const;

export const education = [
  {
    school: "University of Technology, Jaipur",
    detail: "Bachelor of Computer Applications (BCA) · Computer Science",
    period: "August 2024 – July 2027",
  },
] as const;

export const techStack = [
  {
    name: "React.js",
    description: "Building scalable component-driven interfaces.",
    category: "Frontend",
    tag: "Daily",
  },
  {
    name: "Next.js",
    description: "Shipping production apps with App Router & SSR.",
    category: "Frontend",
    tag: "Core",
  },
  {
    name: "Node.js",
    description: "Running reliable server-side JavaScript services.",
    category: "Backend",
    tag: "Daily",
  },
  {
    name: "Express.js",
    description: "Designing clean, modular REST API layers.",
    category: "Backend",
    tag: "Core",
  },
  {
    name: "MongoDB",
    description: "Modeling flexible schemas for production data.",
    category: "Database",
    tag: "Production",
  },
  {
    name: "MySQL",
    description: "Working with structured relational datasets.",
    category: "Database",
    tag: "Production",
  },
  {
    name: "JavaScript",
    description: "Core language for interactive web applications.",
    category: "Language",
    tag: "Daily",
  },
  {
    name: "HTML5",
    description: "Semantic structure for accessible interfaces.",
    category: "Language",
    tag: "Core",
  },
  {
    name: "CSS3",
    description: "Polished layouts with responsive visual detail.",
    category: "Language",
    tag: "Core",
  },
  {
    name: "SQL",
    description: "Querying and shaping relational data precisely.",
    category: "Language",
    tag: "Core",
  },
  {
    name: "Git",
    description: "Version control for every meaningful change.",
    category: "Tool",
    tag: "Daily",
  },
  {
    name: "GitHub",
    description: "Collaboration, reviews, and code hosting.",
    category: "Tool",
    tag: "Daily",
  },
  {
    name: "Visual Studio Code",
    description: "Primary environment for day-to-day engineering.",
    category: "Tool",
    tag: "Daily",
  },
  {
    name: "Postman",
    description: "Designing, testing, and documenting APIs.",
    category: "Tool",
    tag: "Core",
  },
  {
    name: "REST APIs",
    description: "Clean, predictable service contracts at scale.",
    category: "Tool",
    tag: "Production",
  },
] as const;

export const techCategories = [
  { label: "Frontend", items: "React • Next.js" },
  { label: "Backend", items: "Node.js • Express.js" },
  { label: "Database", items: "MongoDB • MySQL" },
  { label: "Languages", items: "JavaScript • HTML5 • CSS3 • SQL" },
  { label: "Tools", items: "Git • GitHub • VS Code • Postman" },
] as const;

export const projects = [
  {
    title: "BetSea Gaming Platform",
    description:
      "Developed and maintained a production online gaming platform by building scalable frontend interfaces, backend APIs, MongoDB integrations, and resolving production issues for live users.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    liveUrl: "http://ph.betsea.net",
    githubUrl: null,
    images: [
      "/2026-07-18_154106.png",
      "/2026-07-18_154202.png",
      "/2026-07-18_154314.png",
    ],
    accent: "#C9A227",
  },
  {
    title: "Hamari Dairy",
    description:
      "Built and maintained production software for dairy operations including frontend development, backend APIs, SQL database integration, and business workflow management.",
    tech: ["React.js", "Node.js", "Express.js", "SQL"],
    liveUrl: "https://hamaridairy.com",
    githubUrl: null,
    images: [
      "/b1d82021-d91f-44c0-89d4-dc1d9c15a6d9.png",
      "/49807697-0086-4ac5-9ff2-e44f602cabba.png",
      "/4fd955f2-4f34-4ea8-8f6c-217e9d67345b.png",
    ],
    accent: "#8C734A",
  },
  {
    title: "Invoice Management System (Confidential Client)",
    description:
      "Developed frontend modules for a confidential invoice management system. Built responsive dashboards, integrated APIs, and improved user workflows for invoice management.",
    tech: ["React.js", "JavaScript", "SQL"],
    liveUrl: null,
    githubUrl: null,
    images: [
      "/invoice_management_software.png",
      "/c9b78287-5a25-473b-918e-65f4d6c3ef40.png",
      "/3eb7222c-7cf3-41b2-9d68-fa43885a8003.png",
    ],
    accent: "#E8D5A3",
  },
] as const;

export const skills = [
  {
    name: "Frontend Development",
    description:
      "Building responsive, modern interfaces using React.js and Next.js.",
  },
  {
    name: "Backend Development",
    description: "Developing scalable APIs with Node.js and Express.js.",
  },
  {
    name: "REST API Development",
    description: "Designing and integrating production-ready REST APIs.",
  },
  {
    name: "Database Management",
    description: "Working with MongoDB and SQL databases.",
  },
  {
    name: "Performance Optimization",
    description:
      "Improving application speed, scalability, and maintainability.",
  },
  {
    name: "Problem Solving",
    description: "Debugging production issues and delivering reliable software.",
  },
] as const;

export const whyMe = [
  {
    title: "Clean Architecture",
    description:
      "I structure apps so they're easy to extend — reusable components, clear boundaries, and code that won't fight you six months later.",
    badge: "How I Build",
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    title: "Production Experience",
    description:
      "I've shipped and supported live products at Hatim Technologies and Hamari Dairy — not just demos, real users and real deadlines.",
    badge: "Live Work",
    span: "sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Continuous Learning",
    description:
      "I stay curious — picking up better patterns, tools, and practices so the next project is sharper than the last.",
    badge: "Always Growing",
    span: "sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Problem Solving",
    description:
      "When something breaks in production, I dig in, simplify the problem, and ship a fix that lasts.",
    badge: "Owner Mindset",
    span: "sm:col-span-2 lg:col-span-2",
  },
] as const;

export const aboutStory = {
  intro:
    "I'm Akhlaq Kafel — a Full-Stack Software Developer from Jammu & Kashmir, India. I build scalable web apps that solve real business problems.",
  body: [
    "Right now I'm at Hatim Technologies, shipping production software with React.js, Next.js, Node.js, Express.js, MongoDB, and REST APIs — frontend, backend, bug fixes, and everything in between for real users.",
    "Before that I was a Junior Software Developer at Hamari Dairy in Jaipur, where I built frontend modules, backend APIs, worked with SQL, and learned what it takes to keep production software running.",
    "I care about clean code, clear UX, and shipping work I'm proud to put my name on. Always learning, always building.",
  ],
};

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "3+" },
  { label: "Production Apps", value: "3" },
  { label: "Technologies", value: "15+" },
] as const;

export const projectMetrics = {
  "BetSea Gaming Platform": [
    { label: "Stack", value: "Full-Stack" },
    { label: "Status", value: "Live" },
    { label: "Focus", value: "Scale" },
  ],
  "Hamari Dairy": [
    { label: "Stack", value: "Full-Stack" },
    { label: "Status", value: "Live" },
    { label: "Focus", value: "Ops" },
  ],
  "Invoice Management System (Confidential Client)": [
    { label: "Stack", value: "Frontend" },
    { label: "Status", value: "Private" },
    { label: "Focus", value: "UX" },
  ],
} as const;

