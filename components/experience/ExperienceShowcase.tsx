import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { experiences } from "@/data/experience";

export function ExperienceShowcase() {
  return (
    <div className="mt-8 space-y-10 sm:mt-10">
      {experiences.map((experience) => (
        <Reveal
          as="article"
          key={`${experience.company}-${experience.role}`}
          variant="scale-in"
          className="grid gap-8 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.3fr)] lg:gap-10 xl:gap-12"
        >
          <div className="relative min-h-[340px] overflow-hidden rounded-[6px] border border-border bg-surface-hover">
            <Image
              src="/images/experience-it-support.png"
              alt="Computer training room with networking equipment and IT support tools"
              fill
              sizes="(min-width: 960px) 36vw, 100vw"
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
              {experience.responsibilities.map((responsibility) => (
                <li
                  key={responsibility.title}
                  className="border-b border-border py-5 last:border-b-0 last:pb-0 lg:last:border-b lg:last:pb-5"
                >
                  <h4 className="text-[15px] font-semibold text-foreground">
                    {responsibility.title}
                  </h4>
                  <p className="mt-1 text-[15px] leading-[1.55] text-muted">
                    {responsibility.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
