import { experiences } from "@/data/experience";

const highlightLabels = ["Systems support", "Training operations", "Digital content"] as const;

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-16 border-t border-border bg-background text-foreground lg:scroll-mt-0"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
        <h2
          id="experience-heading"
          className="text-[42px] font-bold leading-[0.95] tracking-[-0.055em] sm:text-[44px]"
        >
          Experience
        </h2>

        <div className="mt-8 space-y-10 sm:mt-10">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="w-full"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                    Professional experience
                  </p>
                  <h3 className="mt-3 text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-[1.08] tracking-[-0.045em] text-foreground">
                    {experience.role}
                  </h3>
                  <p className="mt-2 text-[14px] font-bold uppercase tracking-[0.12em] text-muted">
                    {experience.company}
                  </p>
                </div>

                <dl className="flex flex-wrap gap-x-10 gap-y-4 lg:justify-end lg:pb-1">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                      Location
                    </dt>
                    <dd className="mt-1 text-[14px] font-bold text-foreground">
                      {experience.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                      Terms
                    </dt>
                    <dd className="mt-1 text-[14px] font-bold leading-6 text-foreground">
                      {experience.periods.map((period) => (
                        <span key={period} className="block">
                          {period}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <ol className="mt-8 grid gap-6 text-[14px] leading-[1.6] text-muted sm:grid-cols-3">
                {experience.highlights.map((highlight, index) => (
                  <li key={highlight}>
                    <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.14em] text-foreground">
                      {String(index + 1).padStart(2, "0")} / {highlightLabels[index]}
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
