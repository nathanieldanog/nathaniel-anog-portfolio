export type FeaturedSkill = {
  name: string;
  category: string;
  image: string;
};

export type TechnicalSkill = {
  title: string;
  items: readonly {
    name: string;
    proficiency: "Proficient" | "Familiar" | null;
  }[];
};

export type Language = {
  name: string;
  proficiency: string;
};

export const featuredSkills = [
  { name: "HTML", category: "Frontend", image: "/logos/html5-logo.svg" },
  { name: "CSS", category: "Frontend", image: "/logos/css-logo.svg" },
  {
    name: "JavaScript",
    category: "Language",
    image: "/logos/javascript-logo.svg",
  },
  {
    name: "TypeScript",
    category: "Language",
    image: "/logos/typescript-logo.svg",
  },
  { name: "React", category: "Library", image: "/logos/react-logo.svg" },
  {
    name: "Next.js",
    category: "Framework",
    image: "/logos/nextjs-logo.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Framework",
    image: "/logos/tailwind-css-logo.svg",
  },
  { name: "Python", category: "Language", image: "/logos/python-logo.svg" },
  {
    name: "PostgreSQL",
    category: "Database",
    image: "/logos/postgresql-logo.svg",
  },
] as const satisfies readonly FeaturedSkill[];

export const technicalSkills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", proficiency: "Proficient" },
      { name: "CSS", proficiency: "Proficient" },
      { name: "JavaScript", proficiency: "Proficient" },
      { name: "TypeScript", proficiency: null },
      { name: "React", proficiency: "Proficient" },
      { name: "Next.js", proficiency: "Familiar" },
      { name: "Vue.js", proficiency: "Familiar" },
      { name: "Tailwind CSS", proficiency: "Familiar" },
    ],
  },
  {
    title: "Mobile Development",
    items: [
      { name: "React Native", proficiency: null },
      { name: "Expo", proficiency: null },
      { name: "Expo Router", proficiency: null },
      { name: "React Navigation", proficiency: null },
    ],
  },
  {
    title: "Backend & AI",
    items: [
      { name: "Node.js", proficiency: "Familiar" },
      { name: "Python", proficiency: "Familiar" },
      { name: "Flask", proficiency: null },
      { name: "OpenCV", proficiency: null },
      { name: "MediaPipe", proficiency: null },
      { name: "PyAutoGUI", proficiency: null },
    ],
  },
  {
    title: "Databases & Backend Services",
    items: [
      { name: "PostgreSQL", proficiency: null },
      { name: "MySQL", proficiency: null },
      { name: "SQLite", proficiency: null },
      { name: "Supabase", proficiency: null },
      { name: "Firebase", proficiency: null },
    ],
  },
  {
    title: "Cloud & Deployment",
    items: [
      { name: "Render", proficiency: null },
      { name: "Vercel", proficiency: null },
    ],
  },
  {
    title: "Development Tools",
    items: [
      { name: "Git", proficiency: null },
      { name: "GitHub", proficiency: null },
      { name: "Visual Studio Code", proficiency: null },
      { name: "PyCharm", proficiency: null },
    ],
  },
  {
    title: "IT Support",
    items: [
      { name: "Hardware & Software Troubleshooting", proficiency: null },
      { name: "System Configuration", proficiency: null },
      { name: "Preventive Maintenance", proficiency: null },
      { name: "Training & Webinar Setup", proficiency: null },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "ChatGPT", proficiency: null },
      { name: "Codex", proficiency: null },
      { name: "Claude Code", proficiency: null },
    ],
  },
] as const satisfies readonly TechnicalSkill[];

export const professionalSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Attention to Detail",
  "Time Management",
] as const;

export const languages = [
  { name: "English", proficiency: "Fluent" },
  { name: "Filipino", proficiency: "Native" },
] as const satisfies readonly Language[];
