export const personalInfo = {
  name: "Shreyansh Tripathi",
  title: "Software Developer & B.Tech Student",
  tagline: "Engineering clean, efficient solutions — from AI-powered systems to full-stack web platforms.",
  email: "14shreyansh7896@gmail.com",
  github: "https://github.com/shreyanshtripathi-01",
  linkedin: "https://www.linkedin.com/in/shreyanshtripathi",
  mobile: "+91 8302572704",
  resumeUrl: "/Shreyansh_Resume.pdf",
  avatar: "/photo_2025-09-09_19-17-44.jpg",
};

export const aboutMe = {
  bio: "I'm a passionate Computer Science student at Lovely Professional University with hands-on experience in AI, IoT, and full-stack web development. From building AI-powered privacy systems on edge devices to crafting full-stack publishing platforms, I thrive on solving real-world problems with clean, maintainable code. I'm constantly learning and pushing my boundaries through hackathons, open-source contributions, and freelance projects.",
  education: {
    university: "Lovely Professional University, Phagwara, Punjab",
    degree: "B.Tech in Computer Science & Engineering",
    year: "2023 - 2027",
  },
  techStack: [
    "C", "C++", "Java", "JavaScript", "Python",
    "React.js", "Node.js", "Tailwind CSS", "HTML5/CSS3",
    "MongoDB", "PostgreSQL", "Supabase", "Firebase",
    "Git", "GitHub", "AWS", "GCP", "Azure",
  ],
};

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "PowerPlays",
    description: "A full-stack platform for publishing analytical articles on technology, geopolitics, finance, and economics. Features real-time article creation, editing, commenting, and optimized API workflows — boosting user engagement by 40% and performance by 30%.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=600&h=400&fit=crop",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Supabase", "PostgreSQL", "AWS"],
    github: "https://github.com/shreyanshtripathi-01",
    live: "#",
    featured: true,
  },
  {
    id: "2",
    title: "CodeLens",
    description: "A secure online proctoring system designed to uphold exam integrity by detecting and preventing malpractices in real time. Delivered 100% real-time proctoring and boosted platform adoption by 70% during hackathons and recruitment drives.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "SQL", "PHP", "AWS"],
    github: "https://github.com/shreyanshtripathi-01",
    live: "#",
    featured: true,
  },
  {
    id: "3",
    title: "AI Privacy Blurring System",
    description: "An AI-based automated blurring system using OpenCV and ONNX, achieving real-time performance at 24 FPS (H.265) with 100% privacy compliance. Integrated into Raspberry Pi smart-camera hardware with tamper-proof firmware — reducing security vulnerabilities by 86%.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Python", "OpenCV", "ONNX", "FastAPI", "AWS", "Shell Scripting"],
    github: "https://github.com/shreyanshtripathi-01",
    live: "#",
    featured: true,
  },
];

export const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "C/C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    name: "Tools & Cloud",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "AWS / GCP / Azure", level: 70 },
      { name: "Supabase / Firebase", level: 75 },
    ],
  },
];

export const experience = [
  {
    role: "AIoT Intern",
    company: "Aeyi — Avyant Technologies",
    period: "May 2025 – Aug 2025",
    description: "Engineered an AI-based automated blurring system using OpenCV and ONNX at 24 FPS. Integrated AI models into Raspberry Pi hardware and developed tamper-proof firmware, reducing security vulnerabilities by 86%.",
  },
];

export const achievements = [
  "🏆 Secured 1st Rank among 750+ participants — Web-E-Stan 2.0 Hackathon (Feb 2025)",
  "🥈 Attained 2nd place in Group Discussion organized by UNYC (Feb 2024)",
];

export const certificates = [
  { name: "Cloud Computing", issuer: "NPTEL", date: "Oct 2025" },
  { name: "Frontend Developer (React)", issuer: "HackerRank", date: "Oct 2025" },
];

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Performant React Applications",
    date: "2026-02-15",
    excerpt: "Learn the best practices for optimizing React apps, from code splitting to memoization strategies.",
    content: `React performance optimization is crucial for delivering smooth user experiences. Here are some key strategies I've learned:\n\n**Code Splitting**: Use React.lazy() and Suspense to split your bundle into smaller chunks that load on demand.\n\n**Memoization**: Use React.memo(), useMemo(), and useCallback() wisely to prevent unnecessary re-renders.\n\n**Virtual Lists**: For large datasets, use virtualization libraries like react-window to render only visible items.\n\n**State Management**: Keep state as close to where it's needed as possible. Not everything belongs in global state.\n\nThese techniques have helped me reduce load times by up to 60% in production applications.`,
    tags: ["React", "Performance", "JavaScript"],
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Why TypeScript Changed My Development Workflow",
    date: "2026-01-20",
    excerpt: "A deep dive into how adopting TypeScript improved code quality and developer experience in my projects.",
    content: `TypeScript has been a game-changer for my development workflow. Here's why:\n\n**Catch Bugs Early**: Type checking catches errors at compile time rather than runtime, saving hours of debugging.\n\n**Better IDE Support**: TypeScript enables superior autocomplete, refactoring tools, and inline documentation.\n\n**Self-Documenting Code**: Types serve as living documentation that stays in sync with your code.\n\n**Confident Refactoring**: When you rename or restructure code, TypeScript ensures nothing breaks.\n\nThe initial learning curve is worth it. My bug count dropped by 40% after migrating my main project to TypeScript.`,
    tags: ["TypeScript", "DX", "Best Practices"],
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Getting Started with Docker for Development",
    date: "2025-12-10",
    excerpt: "A beginner-friendly guide to containerizing your development environment with Docker.",
    content: `Docker simplifies development by ensuring consistent environments across teams. Here's how to get started:\n\n**Dockerfile Basics**: Start with a base image, copy your code, install dependencies, and define your startup command.\n\n**Docker Compose**: Use docker-compose.yml to define multi-container setups (app + database + cache).\n\n**Volume Mounting**: Mount your source code as a volume for hot-reloading during development.\n\n**Best Practices**: Use multi-stage builds, .dockerignore files, and minimize layer count for smaller images.\n\nDocker has made my "works on my machine" problems disappear entirely.`,
    tags: ["Docker", "DevOps", "Tutorial"],
    readTime: "6 min read",
  },
];
