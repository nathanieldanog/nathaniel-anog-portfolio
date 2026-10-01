export type ProjectDemoImage = {
  src: string;
  title: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  focus: string;
  year: string;
  description: string;
  highlights: readonly string[];
  technologies: readonly string[];
  image: string;
  githubUrl: string | null;
  demoUrl: string | null;
  demoImages: readonly ProjectDemoImage[];
  featured: boolean;
};

export const projects = [
  {
    slug: "evelyns-store",
    title: "Evelyn's Store",
    category: "Full-stack e-commerce web application",
    focus: "E-commerce and inventory management",
    year: "2026",
    description:
      "Developed a full-stack e-commerce web application for a local sari-sari store, enabling product browsing, cart functionality, checkout, order tracking, and inventory management.",
    highlights: [
      "Developed a full-stack e-commerce web application for a local sari-sari store using Next.js, React, TypeScript, and PostgreSQL, enabling product browsing, cart functionality, checkout, order tracking, and inventory management.",
      "Implemented an admin dashboard for managing products, inventory, and customer orders, streamlining day-to-day store operations.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    image: "/images/projects/evelyns-store.png",
    githubUrl: "https://github.com/nathanieldanog/evelyns-store",
    demoUrl: null,
    demoImages: [],
    featured: true,
  },
  {
    slug: "progesture",
    title: "ProGesture: An AI-Driven Hand Gesture-Controlled Projector",
    category: "AI-integrated projector",
    focus: "Gesture control and file management",
    year: "2026",
    description:
      "Developed an AI-driven projector with real-time hand-gesture controls and web-based file management for standalone presentations without an external laptop or physical controller.",
    highlights: [
      "Developed an AI-driven projector using Python, OpenCV, and MediaPipe to enable real-time hand-gesture control for standalone presentations without an external laptop or physical controller.",
      "Built a web-based file management system using JavaScript, Flask, and Firestore for uploading, organizing, and presenting files across multiple formats, achieving a mean evaluation score of 3.66/4.00.",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "JavaScript",
      "Flask",
      "Firestore",
    ],
    image: "/images/projects/progesture.png",
    githubUrl: "https://github.com/progesture4410/progesture",
    demoUrl: "https://progesture-m1rc.onrender.com/",
    demoImages: [],
    featured: true,
  },
  {
    slug: "nexseekr",
    title: "NexSeekr",
    category: "Mobile item-tracking application",
    focus: "Offline item tracking and organization",
    year: "2026",
    description:
      "Built a mobile item-tracking application that lets users record and retrieve the last known locations of household items.",
    highlights: [
      "Built a mobile item-tracking application using React Native, TypeScript, and SQLite, enabling users to record and retrieve the last known locations of household items.",
      "Implemented searchable local data persistence with SQLite, allowing users to quickly access, update, and manage saved item records directly on their devices.",
    ],
    technologies: ["React Native", "TypeScript", "SQLite"],
    image: "/images/projects/nexseekr.png",
    githubUrl: "https://github.com/nathanieldanog/nexseekr",
    demoUrl: null,
    demoImages: [
      {
        src: "/images/projects/nexseekr/demo/home.webp",
        title: "Home",
        alt: "NexSeekr home dashboard showing rooms, recent items, and notifications.",
      },
      {
        src: "/images/projects/nexseekr/demo/add-item.webp",
        title: "Add Item",
        alt: "NexSeekr add-item flow with fields for a photo, category, room, spot, quantity, and notes.",
      },
      {
        src: "/images/projects/nexseekr/demo/search.webp",
        title: "Search",
        alt: "NexSeekr item list and search results for locating saved objects.",
      },
      {
        src: "/images/projects/nexseekr/demo/manage.webp",
        title: "Manage",
        alt: "NexSeekr room and category management screens.",
      },
      {
        src: "/images/projects/nexseekr/demo/backup.webp",
        title: "Backup",
        alt: "NexSeekr profile, notifications, and local data backup controls.",
      },
    ],
    featured: true,
  },
] as const satisfies readonly Project[];
