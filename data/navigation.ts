export const navigationItems = [
  { label: "Home", href: "/#home" },
  { label: "Education", href: "/#education" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
] as const;

export type NavigationLabel = (typeof navigationItems)[number]["label"];
