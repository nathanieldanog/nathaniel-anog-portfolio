import {
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  Folder,
  GraduationCap,
  House,
  ScrollText,
} from "lucide-react";
import { NavItem } from "./NavItem";

const navigation = [
  { label: "Home", href: "#home", icon: House, active: true },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Skills", href: "#skills", icon: ChartNoAxesColumnIncreasing },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Certifications", href: "#certifications", icon: ScrollText },
] as const;

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-[248px] overflow-y-auto border-r border-border bg-surface">
      <div className="px-6 pb-7 pt-8">
        <header>
          <h1 className="whitespace-nowrap text-lg font-extrabold leading-tight tracking-[-0.035em] text-foreground">
            NATHANIEL D. ANOG
          </h1>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            Software Engineer
          </p>
        </header>

        <div className="mt-5 border-t border-border" />

        <nav aria-label="Primary navigation" className="mt-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
