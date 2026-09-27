export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
] as const;

export type NavigationLabel = (typeof navigationItems)[number]["label"];
