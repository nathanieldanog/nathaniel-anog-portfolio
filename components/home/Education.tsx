import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { education } from "@/data/education";

const featuredHonors = [
  {
    label: "Academic Distinction",
    detail: `${education.distinction} · GWA ${education.gwa}`,
  },
  { label: "Scholarship", detail: education.scholarships[0] },
  { label: "Awards", detail: education.scholarships[1] },
] as const;

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-16 border-t border-border bg-background text-foreground lg:scroll-mt-0"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
        <Reveal
          as="header"
          stagger
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
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
            className="motion-button motion-button--secondary inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View all
            <ArrowRight aria-hidden="true" className="motion-action-icon motion-icon-forward size-4" />
          </Link>
        </Reveal>

        <Reveal as="article" stagger delay={100} className="mt-8 w-full sm:mt-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
            {education.institution}
          </p>

          <h3 className="mt-3 text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[34px]">
            {education.degree} with Specialization in {education.specialization}
          </h3>

          <ul className="mt-8 grid gap-6 border-t border-border text-[15px] leading-[1.55] text-muted sm:grid-cols-3 sm:gap-0">
            {featuredHonors.map((honor, index) => (
              <li
                key={honor.label}
                className={`pt-6 sm:px-6 ${index === 0 ? "sm:pl-0" : "sm:border-l sm:border-border"} ${index === featuredHonors.length - 1 ? "sm:pr-0" : ""}`}
              >
                <span>
                  <span className="mb-1 block text-[15px] font-semibold text-foreground">
                    {honor.label}
                  </span>
                  {honor.detail}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
