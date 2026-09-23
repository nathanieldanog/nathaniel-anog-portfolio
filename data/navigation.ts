export const navigationItems = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Certifications", href: "/#certifications" },
] as const;

export type NavigationLabel = (typeof navigationItems)[number]["label"];
