import type { ReactNode } from "react";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { QuickActionsProvider } from "@/components/search/QuickActionsProvider";
import { SidebarLayout } from "@/components/sidebar/SidebarLayout";
import type { NavigationLabel } from "@/data/navigation";

type DetailPageShellProps = {
  activeItem: NavigationLabel;
  eyebrow?: string;
  title: string;
  titleClassName?: string;
  description: string;
  descriptionClassName?: string;
  headerClassName?: string;
  descriptionWidthClassName?: string;
  showDivider?: boolean;
  children: ReactNode;
};

export function DetailPageShell({
  activeItem,
  eyebrow,
  title,
  titleClassName = "text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.06em] text-foreground",
  description,
  descriptionClassName = "text-base leading-[1.7] text-muted",
  headerClassName = "max-w-[760px]",
  descriptionWidthClassName = "max-w-[680px]",
  showDivider = true,
  children,
}: DetailPageShellProps) {
  return (
    <QuickActionsProvider>
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader activeItem={activeItem} />
        <SidebarLayout activeItem={activeItem}>
          <div className="mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12 xl:py-24">
            <header className={headerClassName}>
              {eyebrow ? (
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  {eyebrow}
                </p>
              ) : null}
              <h1
                className={`${eyebrow ? "mt-3" : ""} ${titleClassName}`}
              >
                {title}
              </h1>
              <p className={`mt-5 ${descriptionWidthClassName} ${descriptionClassName}`}>
                {description}
              </p>
            </header>

            {showDivider ? (
              <div aria-hidden="true" className="mt-12 h-px bg-border sm:mt-14" />
            ) : null}
            {children}
          </div>
        </SidebarLayout>
      </div>
    </QuickActionsProvider>
  );
}
