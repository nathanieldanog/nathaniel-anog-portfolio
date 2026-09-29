import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ViewAllLinkProps = {
  href: string;
  className: string;
  ariaLabel?: string;
};

export function ViewAllLink({ href, className, ariaLabel }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`motion-button motion-button--secondary h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      View all
      <ArrowRight
        aria-hidden="true"
        className="motion-action-icon motion-icon-forward size-4"
      />
    </Link>
  );
}
