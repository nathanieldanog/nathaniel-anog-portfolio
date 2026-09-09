export type Profile = {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: readonly string[];
  linkedin: string;
  github: string;
  facebook: string;
  instagram: string;
  resumePath: string;
};

export const profile = {
  name: "Nathaniel Anog",
  title: "Software Engineer",
  email: "nathanielanog072727@gmail.com",
  location: "Metro Manila, Philippines",
  bio: [
    "A graduate with a Bachelor of Science in Computer Engineering, focused on developing reliable, responsive, and user-friendly web applications.",
    "I am committed to transforming ideas into practical digital solutions through clean code and thoughtful design, while continuously developing my technical skills and knowledge as a software developer.",
  ],
  // TODO: Replace with Nathaniel's LinkedIn profile URL.
  linkedin: "https://www.linkedin.com/in/your-profile",
  // TODO: Replace with Nathaniel's GitHub profile URL.
  github: "https://github.com/your-username",
  // TODO: Replace with Nathaniel's Facebook profile URL.
  facebook: "https://www.facebook.com/your-profile",
  // TODO: Replace with Nathaniel's Instagram profile URL.
  instagram: "https://www.instagram.com/your-profile",
  resumePath: "/resume.pdf",
} satisfies Profile;
