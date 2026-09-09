export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  image: string;
  githubUrl: string | null;
  demoUrl: string | null;
  featured: boolean;
};

export const projects = [
  {
    slug: "evelyns-store",
    title: "Evelyn's Store",
    category: "E-commerce",
    description:
      "A streamlined storefront experience designed to make product browsing and purchasing feel clear, approachable, and efficient.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/evelyns-store.jpg",
    // TODO: Add the repository and live demo URLs when they are available.
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },
  {
    slug: "nexbuy",
    title: "NexBuy",
    category: "Online shopping platform",
    description:
      "An online shopping platform focused on organized product discovery, straightforward navigation, and a dependable customer journey.",
    technologies: ["Next.js", "TypeScript", "REST API"],
    image: "/images/projects/nexbuy.jpg",
    // TODO: Add the repository and live demo URLs when they are available.
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },
  {
    slug: "progesture",
    title: "ProGesture",
    category: "Real-time hand gesture recognition",
    description:
      "A computer-vision project that interprets hand gestures in real time and translates them into responsive on-screen feedback.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    image: "/images/projects/progesture.jpg",
    // TODO: Add the repository and live demo URLs when they are available.
    githubUrl: null,
    demoUrl: null,
    featured: true,
  },
] as const satisfies readonly Project[];
