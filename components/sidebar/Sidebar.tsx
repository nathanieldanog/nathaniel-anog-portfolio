import {
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  Folder,
  GraduationCap,
  House,
  Mail,
  Monitor,
  Moon,
  ScrollText,
  Sun,
} from "lucide-react";
import { Hotkey } from "./Hotkey";
import { NavItem } from "./NavItem";

const navigation = [
  { label: "Home", href: "#home", icon: House, active: true },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Skills", href: "#skills", icon: ChartNoAxesColumnIncreasing },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Certifications", href: "#certifications", icon: ScrollText },
] as const;

function SidebarSpace({ divider = false }: { divider?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`min-h-2 flex-1 ${divider ? "border-b border-border" : ""}`}
    />
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 h-svh w-[248px] overflow-hidden border-r border-border bg-surface">
      <div className="flex h-full flex-col px-6">
        <SidebarSpace />

        <div>
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

        <SidebarSpace divider />
        <SidebarSpace />

        <section aria-labelledby="quick-actions-heading">
          <h2
            id="quick-actions-heading"
            className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
          >
            Quick Actions
          </h2>

          <div className="mt-2 space-y-1">
            <button
              type="button"
              className="flex h-8 w-full cursor-default items-center justify-between text-left text-xs text-foreground"
            >
              <span>Search anything</span>
              <Hotkey shortcutKey="K" />
            </button>

            <a
              href="/resume.pdf"
              className="flex h-8 w-full items-center justify-between text-xs text-foreground"
            >
              <span>View resume</span>
              <Hotkey shortcutKey="R" />
            </a>
          </div>
        </section>

        <SidebarSpace divider />
        <SidebarSpace />

        <section aria-labelledby="contact-heading">
          <h2
            id="contact-heading"
            className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
          >
            Contact
          </h2>

          <p className="mt-2 text-xs leading-[1.55] text-foreground">
            For employment opportunities and inquiries, please reach out at
          </p>

          <div className="mt-3">
            <a
              href="mailto:nathanielanog072727@gmail.com"
              className="flex items-center gap-1.5 text-xs tracking-[-0.045em] text-foreground"
            >
              <Mail aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
              <span className="whitespace-nowrap">nathanielanog072727@gmail.com</span>
            </a>
          </div>
        </section>

        <SidebarSpace divider />
        <SidebarSpace />

        <section aria-labelledby="appearance-heading">
          <h2
            id="appearance-heading"
            className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
          >
            Appearance
          </h2>

          <div className="mt-3 flex items-center text-foreground">
            <Sun aria-hidden="true" className="size-[18px] shrink-0" strokeWidth={2} />
            <span
              aria-hidden="true"
              className="mx-2 flex h-5 w-10 items-center rounded-full border border-border bg-background px-0.5"
            >
              <span className="size-4 rounded-full bg-foreground" />
            </span>
            <Moon aria-hidden="true" className="size-[18px] shrink-0" strokeWidth={2} />
            <span aria-hidden="true" className="mx-3 h-6 w-px bg-border" />
            <span className="flex items-center gap-1.5 text-xs">
              <Monitor aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
              System
            </span>
          </div>
        </section>

        <SidebarSpace />
      </div>
    </aside>
  );
}
