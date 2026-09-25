import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionDivider } from "@/components/home/SectionDivider";
import { experiences } from "@/data/experience";

const highlightLabels = ["Systems Support", "Training Operations", "Digital Content"] as const;

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-16 bg-background text-foreground lg:scroll-mt-0"
    >
      <SectionDivider />
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="experience-heading"
            className="text-[48px] font-bold leading-[0.95] tracking-[-0.055em]"
          >
            Experience
          </h2>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all experience details in resume"
            className="inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground hover:bg-surface-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
          >
            View all
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </header>

        <div className="mt-8 space-y-10 sm:mt-10">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="grid gap-8 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.3fr)] lg:gap-10 xl:gap-12"
            >
              <div className="relative min-h-[340px] overflow-hidden rounded-[6px] border border-border bg-surface-hover">
                <Image
                  src="/images/experience-it-support.png"
                  alt="Computer training room with networking equipment and IT support tools"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"
                />
              </div>

              <div className="py-1">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
                  {experience.company}
                </p>

                <h3 className="mt-3 text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[34px]">
                  {experience.role} ({experience.periods
                    .map((period) => period.replace("July – August", "Jul–Aug"))
                    .join(" & ")})
                </h3>

                <ul className="mt-7 border-t border-border">
                  {experience.highlights.map((highlight, index) => (
                    <li
                      key={highlight}
                      className="border-b border-border py-5"
                    >
                      <div>
                        <h4 className="text-[15px] font-semibold text-foreground">
                          {highlightLabels[index]}
                        </h4>
                        <p className="mt-1 text-[15px] leading-[1.55] text-muted">{highlight}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
