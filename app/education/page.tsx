import type { Metadata } from "next";
import { GraduationCap, MapPin } from "lucide-react";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { QuickActionsProvider } from "@/components/search/QuickActionsProvider";
import { SidebarLayout } from "@/components/sidebar/SidebarLayout";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Education | Nathaniel Anog",
  description: "Academic background, honors, and relevant coursework of Nathaniel Anog.",
};

export default function EducationPage() {
  return (
    <QuickActionsProvider>
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader activeItem="Education" />
        <SidebarLayout activeItem="Education">
          <section className="mx-auto w-full max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-14 xl:py-24">
            <header className="max-w-[760px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                Academic background
              </p>
              <h1 className="mt-3 text-[clamp(2.5rem,5.5vw,4.25rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.045em] text-foreground">
                Education
              </h1>
              <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
                My academic foundation in computer engineering, software development,
                and network engineering.
              </p>
            </header>

            <article className="mt-12 border-y border-border py-10 sm:mt-14 sm:py-12">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                    <GraduationCap aria-hidden="true" className="size-5 text-foreground" strokeWidth={1.8} />
                    <span>{education.year}</span>
                  </div>
                  <h2 className="mt-4 max-w-[760px] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.045em] text-foreground">
                    {education.institution}
                  </h2>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-muted">
                    <MapPin aria-hidden="true" className="size-4" strokeWidth={1.8} />
                    {education.location}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-12">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                    Degree
                  </p>
                  <p className="mt-3 text-[20px] font-bold leading-[1.4] text-foreground sm:text-[22px]">
                    {education.degree}
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-muted">
                    Specialization in {education.specialization}
                  </p>
                </div>

                <dl className="grid grid-cols-2 border-y border-border">
                  <div className="border-r border-border py-4 pr-5">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                      GWA
                    </dt>
                    <dd className="mt-1 text-[26px] font-bold tracking-[-0.035em] text-foreground">
                      {education.gwa}
                    </dd>
                  </div>
                  <div className="py-4 pl-5">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                      Distinction
                    </dt>
                    <dd className="mt-1 text-[26px] font-bold tracking-[-0.035em] text-foreground">
                      {education.distinction}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-14">
                <section aria-labelledby="honors-heading">
                  <h3 id="honors-heading" className="text-[18px] font-bold text-foreground">
                    Honors &amp; Awards
                  </h3>
                  <ul className="mt-4 divide-y divide-border border-y border-border">
                    {education.honors.map((honor) => (
                      <li key={honor} className="py-4 text-[15px] leading-7 text-muted">
                        {honor}
                      </li>
                    ))}
                  </ul>
                </section>

                <section aria-labelledby="coursework-heading">
                  <h3 id="coursework-heading" className="text-[18px] font-bold text-foreground">
                    Relevant Coursework
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <li
                        key={course}
                        className="rounded-[4px] border border-border bg-surface-hover px-3 py-2 text-[13px] font-semibold text-foreground"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          </section>
        </SidebarLayout>
      </div>
    </QuickActionsProvider>
  );
}
