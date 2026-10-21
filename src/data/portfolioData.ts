export interface Skill {
  name: string;
  icon: string;
  category: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  github: string;
  live: string;
  gradient: string;
  demoVideo?: string;
}

export interface Education {
  year: string;
  title: string;
  institution: string;
  description: string;
  grade: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  icon: string;
}

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  type: string;
}

export interface BlogPost {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  link: string;
}

export interface OpenSourceContribution {
  repo: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
}

export const personalInfo = {
  name: "Balu Pandi",
  title: "Computer Science Student",
  subtitle: "Full Stack Developer | AI Enthusiast",
  email: "pandibalu30@gmail.com",
  location: "India",
  resumeUrl: "#",
  social: {
    github: "https://github.com/balupandi",
    linkedin: "https://linkedin.com/in/balupandi",
    email: "mailto:pandibalu30@gmail.com",
  },
  about: {
    summary: "I'm a passionate Computer Science student with a deep love for building innovative solutions that bridge the gap between cutting-edge technology and real-world applications. My journey in tech is driven by an insatiable curiosity for how things work and a desire to create meaningful impact through code.",
    objective: "Seeking opportunities to leverage my skills in full-stack development and artificial intelligence to solve complex problems and contribute to transformative projects. I aim to work at the intersection of software engineering and AI, creating intelligent systems that make a difference.",
  }
};

export const skills: Skill[] = [
  { name: "Python", icon: "🐍", category: "Programming", level: 90 },
  { name: "Java", icon: "☕", category: "Programming", level: 85 },
  { name: "JavaScript", icon: "📜", category: "Programming", level: 88 },
  { name: "HTML", icon: "🌐", category: "Frontend", level: 95 },
  { name: "CSS", icon: "🎨", category: "Frontend", level: 92 },
  { name: "React", icon: "⚛️", category: "Frontend", level: 85 },
  { name: "Node.js", icon: "🚀", category: "Backend", level: 82 },
  { name: "Express", icon: "⚡", category: "Backend", level: 80 },
  { name: "Git", icon: "🔀", category: "Tools", level: 88 },
  { name: "GitHub", icon: "🐙", category: "Tools", level: 90 },
  { name: "VS Code", icon: "💻", category: "Tools", level: 92 },
  { name: "AI Tools", icon: "🤖", category: "Tools", level: 85 },
];


export const projects: Project[] = [
  {
    title: "JARVIS AI Assistant",
    description:
      "An intelligent AI assistant inspired by Iron Man's JARVIS, designed for voice commands, natural language processing, and desktop task automation.",
    features: [
      "Voice Commands and Real-time Processing",
      "AI Chat with Context Awareness",
      "Desktop System Automation",
      "Multimodal Assistant Capabilities",
    ],
    techStack: [
      "Python",
      "NLP",
      "Voice Recognition",
      "Machine Learning",
      "OpenAI API",
      "Tkinter",
    ],
    github: "https://github.com/balupandi/jarvis-ai",
    live: "#",
    gradient: "from-purple-600 via-blue-500 to-cyan-400",
  },
  {
    title: "ShootOutMaxx",
    description:
      "A sports photography and instant-shoot booking platform designed to connect customers with photography services through a streamlined online experience.",
    features: [
      "Online Photography Booking Experience",
      "Sports and Event Photography Focus",
      "Responsive Website Interface",
      "Simple Customer Booking Journey",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Web Development"],
    github: "#",
    live: "https://shootoutmaxx.in",
    gradient: "from-orange-500 via-rose-500 to-purple-500",
  },
  {
    title: "LookMint",
    description:
      "A men's fashion discovery platform that helps users explore styles, discover products, save looks, and match outfit ideas to their budgets.",
    features: [
      "Product Discovery and Category Browsing",
      "Search and Price Filtering",
      "Saved Looks and Wishlist Experience",
      "Style Inspiration and Budget Outfit Matching",
    ],
    techStack: ["React", "TypeScript", "Fashion Discovery", "Web Development"],
    github: "#",
    live: "https://thread-mens-style.pandibalu30.chatgpt.site",
    gradient: "from-emerald-500 via-teal-500 to-lime-400",
  },
  {
    title: "AI-Powered System for Cyber Incidents Detection and Response in Cloud",
    description:
      "An AI-powered cybersecurity system designed to detect potential cyber incidents in cloud environments and support threat analysis and incident response.",
    features: [
      "AI/ML-Based Cyber Threat Detection",
      "Cloud Incident Analysis and Response",
      "Anomaly Detection and Behavioral Analysis",
      "Security Monitoring Dashboard",
    ],
    techStack: [
      "Python",
      "Machine Learning",
      "Cloud Security",
      "AI",
      "Threat Detection",
      "Automation",
    ],
    github: "https://github.com/Balu5G7/BaluAI",
    live: "#",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
  },
];

export const education: Education[] = [
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science",
    institution: "SBIT College",
    description: "Pursuing Bachelor of Technology in Computer Science with focus on AI, Machine Learning, and Full Stack Development.",
    grade: "Pursuing"
  },
  {
    year: "2021 - 2023",
    title: "Intermediate (XII)",
    institution: "Madhu Junior College",
    description: "Completed intermediate education with focus on Mathematics, Physics, and Computer Science.",
    grade: "Excellent"
  },
  {
    year: "2019 - 2021",
    title: "High School (X)",
    institution: "ZPHS Paladugu",
    description: "Completed secondary education with distinction in all subjects.",
    grade: "Distinction"
  }
];

export const certifications: Certification[] = [
  {
    title: "AI & Machine Learning",
    issuer: "IBM",
    date: "2024",
    credential: "IBM Certificate - Artificial Intelligence",
    icon: "🧠"
  },
  {
    title: "Software Engineering",
    issuer: "IBM",
    date: "2024",
    credential: "IBM Certificate - Software Engineering",
    icon: "💻"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2024",
    credential: "IBM Certificate - Python",
    icon: "🐍"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Dr. S. Kumar",
    role: "Professor, Computer Science Dept.",
    text: "Balu is one of the most dedicated students I've mentored. His ability to grasp complex AI/ML concepts and implement them in real-world projects is exceptional.",
    avatar: "👨‍🏫"
  },
  {
    name: "Priya Sharma",
    role: "Senior Developer, Tech Corp",
    text: "Working with Balu on the Church Management System was a great experience. His full-stack skills and attention to detail made the project a success.",
    avatar: "👩‍💻"
  },
  {
    name: "Rahul Verma",
    role: "AI Engineer, StartupX",
    text: "Balu's JARVIS AI project showcases his deep understanding of NLP and voice recognition. He has a bright future in AI engineering.",
    avatar: "🧑‍🔬"
  }
];

export const experiences: Experience[] = [
  {
    year: "2026",
    title: "Intern",
    company: "UniConverge Technologies Pvt. Ltd",
    description: "Working as an intern at UniConverge Technologies, contributing to software development projects and gaining hands-on experience in the tech industry.",
    type: "Internship"
  },
  {
    year: "2024 - 2025",
    title: "AI Research Assistant",
    company: "University Lab",
    description: "Assisted in research projects focused on machine learning models for cybersecurity. Developed data preprocessing pipelines and trained classification models.",
    type: "Research"
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: "Building an AI Assistant with Python and NLP",
    date: "2024-03-15",
    summary: "A comprehensive guide on how I built JARVIS AI assistant using Python, natural language processing, and voice recognition technologies.",
    tags: ["Python", "AI", "NLP", "Tutorial"],
    link: "#"
  },
  {
    title: "Getting Started with IBM Cloud AI Services",
    date: "2024-02-20",
    summary: "My experience earning IBM certifications in AI, Software Engineering, and Python. Tips and resources for aspiring AI engineers.",
    tags: ["IBM", "Cloud", "AI", "Certification"],
    link: "#"
  },
  {
    title: "Cyber Threat Detection Using Machine Learning",
    date: "2024-01-10",
    summary: "Exploring how machine learning models can be used to detect and respond to cyber incidents in cloud environments effectively.",
    tags: ["Cybersecurity", "ML", "Cloud", "AI"],
    link: "#"
  }
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    repo: "react-hooks-library",
    description: "Contributed custom React hooks for state management and side effects handling.",
    language: "TypeScript",
    stars: 45,
    forks: 12
  },
  {
    repo: "python-ml-toolkit",
    description: "Added new preprocessing utilities and model evaluation metrics to the toolkit.",
    language: "Python",
    stars: 120,
    forks: 34
  },
  {
    repo: "awesome-ai-resources",
    description: "Curated list of AI/ML learning resources. Added sections for IBM courses and cloud AI services.",
    language: "Markdown",
    stars: 280,
    forks: 56
  }
];

export const achievements: Achievement[] = [
  { value: 10, suffix: "+", label: "Projects Completed", icon: "🚀" },
  { value: 500, suffix: "+", label: "Hours of Coding", icon: "💻" },
  { value: 5, suffix: "+", label: "Certifications", icon: "🏆" },
  { value: 3, suffix: "+", label: "Hackathons Won", icon: "🎯" }
];