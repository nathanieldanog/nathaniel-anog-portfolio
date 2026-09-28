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
  code: string;
  proficiency: string;
  description: string;
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
  { name: "Python", category: "Language", image: "/logos/python-logo.png" },
  {
    name: "PostgreSQL",
    category: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/postgresql/postgresql-original.svg",
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
    title: "Backend",
    items: [
      { name: "Node.js", proficiency: "Familiar" },
      { name: "Python", proficiency: "Familiar" },
      { name: "Flask", proficiency: null },
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
    title: "Development and AI Tools",
    items: [
      { name: "Git", proficiency: null },
      { name: "GitHub", proficiency: null },
      { name: "Visual Studio Code", proficiency: null },
      { name: "PyCharm", proficiency: null },
      { name: "OpenCV", proficiency: null },
      { name: "MediaPipe", proficiency: null },
      { name: "Claude Code", proficiency: null },
      { name: "Codex", proficiency: null },
    ],
  },
] as const satisfies readonly TechnicalSkill[];

export const professionalSkills = [
  {
    name: "Problem Solving",
    description:
      "Breaks complex challenges into practical, reliable solutions.",
  },
  {
    name: "Team Collaboration",
    description:
      "Works openly with teammates to coordinate and achieve shared goals.",
  },
  {
    name: "Communication",
    description: "Explains ideas clearly and keeps collaborators aligned.",
  },
  {
    name: "Attention to Detail",
    description:
      "Reviews work carefully for quality, accuracy, and consistency.",
  },
  {
    name: "Time Management",
    description:
      "Prioritizes responsibilities and delivers dependable work on schedule.",
  },
] as const;

export const languages = [
  {
    name: "English",
    code: "EN",
    proficiency: "Fluent",
    description: "Professional, technical, and everyday communication.",
  },
  {
    name: "Filipino",
    code: "FIL",
    proficiency: "Native",
    description: "Natural communication and collaboration in Filipino.",
  },
] as const satisfies readonly Language[];
