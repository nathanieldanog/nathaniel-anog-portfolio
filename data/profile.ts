export type Profile = {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: readonly string[];
  linkedin: string;
  github: string;
  facebook: string | null;
  instagram: string | null;
  resumePath: string;
};

export const profile = {
  name: "Nathaniel Anog",
  title: "Software Engineer",
  email: "nathanielanog072727@gmail.com",
  location: "Taguig City, Metro Manila",
  bio: [
    "A graduate with a Bachelor of Science in Computer Engineering, focused on developing reliable, responsive, and user-friendly web applications.",
    "I am committed to transforming ideas into practical digital solutions through clean code and thoughtful design, while continuously developing my technical skills and knowledge as a software developer.",
  ],
  linkedin: "https://www.linkedin.com/in/nathaniel-anog-951403331",
  github: "https://github.com/nathanieldanog",
  facebook: "https://www.facebook.com/nathaniel.anog/",
  instagram: "https://www.instagram.com/nthnlngx/",
  resumePath: "/resume.pdf",
} satisfies Profile;
