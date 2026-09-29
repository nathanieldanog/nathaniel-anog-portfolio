import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
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
  children,
}: DetailPageShellProps) {
  return (
    <QuickActionsProvider>
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader activeItem={activeItem} />
        <SidebarLayout activeItem={activeItem}>
          <header className="relative overflow-hidden">
            <div className="relative mx-auto w-full max-w-[1180px] px-5 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-16 lg:px-10 lg:pb-10 lg:pt-18 xl:px-12 xl:pb-12 xl:pt-20">
              <Reveal stagger className={headerClassName}>
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
              </Reveal>
            </div>
          </header>

          <main className="mx-auto w-full max-w-[1180px] px-5 pb-10 sm:px-8 sm:pb-14 lg:px-10 lg:pb-16 xl:px-12">
            {children}
          </main>
        </SidebarLayout>
      </div>
    </QuickActionsProvider>
  );
}
