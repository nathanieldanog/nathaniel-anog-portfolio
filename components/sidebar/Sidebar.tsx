import {
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  Folder,
  GraduationCap,
  House,
  Mail,
  ScrollText,
  type LucideIcon,
} from "lucide-react";
import { AppearanceControl } from "@/components/theme/AppearanceControl";
import { navigationItems, type NavigationLabel } from "@/data/navigation";
import { NavItem } from "./NavItem";
import { QuickActions } from "./QuickActions";

const navigationIcons: Record<NavigationLabel, LucideIcon> = {
  Home: House,
  Projects: Folder,
  Skills: ChartNoAxesColumnIncreasing,
  Experience: BriefcaseBusiness,
  Education: GraduationCap,
  Certifications: ScrollText,
};

export function Sidebar({ activeItem = "Home" }: { activeItem?: NavigationLabel }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden h-svh w-[220px] overflow-hidden border-r border-border bg-surface lg:block xl:w-[280px]">
      <div className="h-full px-5 py-[clamp(1.25rem,3svh,2rem)] xl:px-6">
        <header className="border-b border-border pb-[clamp(0.875rem,2svh,1.25rem)]">
          <h1 className="whitespace-nowrap font-display text-sm font-semibold leading-tight tracking-[-0.025em] text-foreground xl:text-[15px]">
            Nathaniel Anog
          </h1>
        </header>

        <nav
          aria-label="Primary navigation"
          className="mt-[clamp(0.875rem,2svh,1.25rem)]"
        >
          <ul className="space-y-0.5">
            {navigationItems.map((item) => (
              <NavItem
                key={item.label}
                {...item}
                icon={navigationIcons[item.label]}
                active={activeItem === item.label}
              />
            ))}
          </ul>
        </nav>

        <div className="mt-[clamp(0.875rem,2svh,1.25rem)] border-t border-border pt-[clamp(0.875rem,2svh,1.25rem)]">
          <QuickActions />
        </div>

        <section
          aria-labelledby="contact-heading"
          className="mt-[clamp(0.875rem,2svh,1.25rem)] border-t border-border pt-[clamp(0.875rem,2svh,1.25rem)]"
        >
          <h2
            id="contact-heading"
            className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
          >
            Contact
          </h2>

          <p className="mt-2 text-[11px] leading-[1.6] text-foreground xl:text-xs">
            For employment opportunities and inquiries, please reach out at
          </p>

          <div className="mt-3">
            <a
              href="mailto:nathanielanog072727@gmail.com"
              className="flex items-center gap-1.5 text-[10px] tracking-[-0.045em] text-foreground xl:text-xs"
            >
              <Mail aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
              <span className="whitespace-nowrap">nathanielanog072727@gmail.com</span>
            </a>
          </div>
        </section>

        <section
          aria-labelledby="appearance-heading"
          className="mt-[clamp(0.875rem,2svh,1.25rem)] border-t border-border pt-[clamp(0.875rem,2svh,1.25rem)]"
        >
          <h2
            id="appearance-heading"
            className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
          >
            Appearance
          </h2>

          <div className="mt-2">
            <AppearanceControl />
          </div>
        </section>

      </div>
    </aside>
  );
}
