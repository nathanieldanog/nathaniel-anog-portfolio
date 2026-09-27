export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  highlights: readonly string[];
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
    category: "Full-stack e-commerce",
    year: "2026",
    description:
      "Developed a full-stack e-commerce website featuring product browsing, cart functionality, checkout, and order tracking, providing customers with a centralized platform for online purchases.",
    highlights: [
      "Developed a full-stack e-commerce website featuring product browsing, cart functionality, checkout, and order tracking, providing customers with a centralized platform for online purchases.",
      "Implemented authentication and an admin dashboard for managing products and orders, streamlining day-to-day store operations.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    image: "/images/projects/evelyns-store.jpg",
    githubUrl: "https://github.com/nathanieldanog/evelyns-store",
    demoUrl: null,
    featured: true,
  },
  {
    slug: "nexseekr",
    title: "NexSeekr",
    category: "Mobile item finder",
    year: "2026",
    description:
      "Developed a mobile application for recording the last known locations of household items, helping users locate misplaced belongings more efficiently.",
    highlights: [
      "Developed a mobile application for recording the last known locations of household items, helping users locate misplaced belongings more efficiently.",
      "Implemented item search and local data storage, allowing users to quickly retrieve and manage saved item information directly on their device.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "React Navigation",
      "SQLite",
    ],
    image: "/images/projects/nexbuy.jpg",
    githubUrl: "https://github.com/nathanieldanog/nexseekr",
    demoUrl: null,
    featured: true,
  },
  {
    slug: "progesture",
    title: "ProGesture: An AI-Driven Hand Gesture-Controlled Projector",
    category: "AI-integrated projector",
    year: "2026",
    description:
      "Developed an AI-driven projector integrating real-time hand-gesture controls, QR-based user authentication, and web-based file management, enabling standalone presentations without an external laptop or physical controller.",
    highlights: [
      "Developed an AI-driven projector integrating real-time hand-gesture controls, QR-based user authentication, and web-based file management, enabling standalone presentations without an external laptop or physical controller.",
      "Implemented real-time gesture recognition using OpenCV and MediaPipe to map hand movements to presentation commands, achieving a 3.67/4.00 overall mean evaluation for gesture control.",
      "Built a web application supporting personal file storage, file uploads, organization, and multi-format presentations, receiving a 3.66/4.00 mean evaluation for web-based file uploads.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "Firebase",
      "Render",
      "Python",
      "OpenCV",
      "MediaPipe",
      "PyAutoGUI",
    ],
    image: "/images/projects/progesture.jpg",
    githubUrl: "https://github.com/progesture4410/progesture",
    demoUrl: null,
    featured: true,
  },
] as const satisfies readonly Project[];
