import type { Metadata } from "next";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { QuickActionsProvider } from "@/components/search/QuickActionsProvider";
import { SidebarLayout } from "@/components/sidebar/SidebarLayout";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills | Nathaniel Anog",
  description: "Technologies and development skills used by Nathaniel Anog.",
};

export default function SkillsPage() {
  return (
    <QuickActionsProvider>
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader activeItem="Skills" />
        <SidebarLayout activeItem="Skills">
          <section className="mx-auto w-full max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-14 xl:py-24">
            <header className="max-w-[720px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                Technical toolkit
              </p>
              <h1 className="mt-3 text-[clamp(2.5rem,5.5vw,4.25rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.045em] text-foreground">
                Skills
              </h1>
              <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
                The technologies and tools I use to build responsive interfaces,
                maintainable applications, and dependable web solutions.
              </p>
            </header>

            <div className="mt-12 sm:mt-14">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="grid gap-4 border-t border-border py-8 last:border-b sm:py-10 md:grid-cols-[minmax(190px,0.75fr)_minmax(260px,1fr)_minmax(280px,1.15fr)] md:gap-8 lg:gap-12"
                >
                  <h2 className="text-[22px] font-bold leading-tight tracking-[-0.035em] text-foreground sm:text-[24px]">
                    {group.title}
                  </h2>
                  <p className="max-w-[440px] text-[16px] leading-[1.65] text-muted">
                    {group.description}
                  </p>
                  <ul
                    aria-label={`${group.title} technologies`}
                    className="flex flex-wrap content-start gap-2 md:justify-end"
                  >
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-[4px] border border-border bg-surface-hover px-3 py-2 text-[14px] font-semibold text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </SidebarLayout>
      </div>
    </QuickActionsProvider>
  );
}
