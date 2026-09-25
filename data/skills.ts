export type Skill = {
  name: string;
  category: string;
  image: string;
};

export const skills = [
  { name: "HTML", category: "Frontend", image: "/logos/html5-logo.png" },
  { name: "CSS", category: "Frontend", image: "/logos/css3-logo.png" },
  { name: "JavaScript", category: "Language", image: "/logos/javascript-logo.png" },
  { name: "React", category: "Library", image: "/logos/react-logo.jpg" },
  { name: "Next.js", category: "Framework", image: "/logos/nextjs-logo.png" },
  { name: "Tailwind CSS", category: "Framework", image: "/logos/tailwind-css-logo.webp" },
  { name: "Node.js", category: "Runtime", image: "/logos/nodejs-logo.png" },
] as const satisfies readonly Skill[];
