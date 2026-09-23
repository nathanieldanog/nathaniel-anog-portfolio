import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { education } from "@/data/education";

const featuredHonors = [
  {
    label: "Academic Distinction",
    detail: `GWA: ${education.gwa} | ${education.distinction}`,
  },
  { label: "Scholarship", detail: education.honors[0] },
  { label: "Awards", detail: education.honors[1] },
] as const;

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-16 border-t border-border bg-background text-foreground lg:scroll-mt-0"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="education-heading"
              className="text-[48px] font-bold leading-[0.95] tracking-[-0.055em]"
            >
              Education
            </h2>
          </div>

          <Link
            href="/education"
            className="inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground hover:bg-surface-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
          >
            View all
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </header>

        <article className="mt-8 w-full sm:mt-10">
          <h3 className="text-[34px] font-bold leading-[1.08] tracking-[-0.055em] text-foreground lg:whitespace-nowrap">
            {education.institution}
          </h3>

          <p className="mt-4 text-[16px] font-bold leading-[1.6] text-foreground">
            {education.degree} with Specialization in {education.specialization}
          </p>

          <ul className="mt-8 grid gap-6 text-[15px] leading-[1.55] text-muted sm:grid-cols-3 sm:gap-0">
            {featuredHonors.map((honor, index) => (
              <li
                key={honor.label}
                className={`sm:px-6 ${index === 0 ? "sm:pl-0" : "sm:border-l sm:border-border"} ${index === featuredHonors.length - 1 ? "sm:pr-0" : ""}`}
              >
                <span>
                  <span className="mb-1 block text-[15px] font-bold tracking-[-0.01em] text-foreground">
                    {honor.label}
                  </span>
                  {honor.detail}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
