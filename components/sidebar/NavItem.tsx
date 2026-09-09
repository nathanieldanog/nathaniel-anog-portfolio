import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type NavItemProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  active?: boolean;
};

export function NavItem({ href, icon: Icon, label, active = false }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`-mx-2 flex h-9 items-center gap-3 rounded-[5px] px-2 text-xs leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface xl:h-10 xl:gap-3.5 xl:text-[13px] ${
          active
            ? "bg-surface-hover font-semibold text-foreground"
            : "font-normal text-foreground hover:bg-surface-hover"
        }`}
      >
        <Icon
          aria-hidden="true"
          className="size-[17px] shrink-0 xl:size-[18px]"
          strokeWidth={2}
        />
        <span>{label}</span>
      </Link>
    </li>
  );
}
