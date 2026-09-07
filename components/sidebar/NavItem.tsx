import type { LucideIcon } from "lucide-react";

type NavItemProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  active?: boolean;
};

export function NavItem({ href, icon: Icon, label, active = false }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        aria-current={active ? "page" : undefined}
        className={`-mx-3 flex h-9 items-center gap-4 rounded-md px-3 text-[13px] leading-none text-foreground ${
          active
            ? "bg-surface-hover font-semibold"
            : "font-normal hover:bg-surface-hover"
        }`}
      >
        <Icon aria-hidden="true" className="size-[18px] shrink-0" strokeWidth={2} />
        <span>{label}</span>
      </a>
    </li>
  );
}
