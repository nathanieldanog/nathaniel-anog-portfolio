import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 bg-background text-foreground lg:scroll-mt-0"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-16 xl:px-12 xl:pb-32 xl:pt-16">
        <header className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="skills-heading"
            className="text-[48px] font-bold leading-[0.95] tracking-[-0.055em]"
          >
            Skills
          </h2>

          <Link
            href="/skills"
            className="inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground hover:bg-surface-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
          >
            View all
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </header>

        <div className="mt-12 sm:mt-16">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="grid gap-4 border-t border-border py-8 last:border-b sm:py-10 md:grid-cols-[minmax(190px,0.75fr)_minmax(260px,1fr)_minmax(280px,1.15fr)] md:gap-8 lg:gap-12"
            >
              <h3 className="text-[22px] font-bold leading-tight tracking-[-0.035em] text-foreground sm:text-[24px]">
                {group.title}
              </h3>
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
      </div>
    </section>
  );
}
