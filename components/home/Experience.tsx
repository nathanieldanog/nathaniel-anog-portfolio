import { ExperienceShowcase } from "@/components/experience/ExperienceShowcase";
import { Reveal } from "@/components/motion/Reveal";
import { ViewAllLink } from "./ViewAllLink";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-16 bg-background text-foreground lg:scroll-mt-0"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
        <Reveal
          as="header"
          stagger
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2
            id="experience-heading"
            className="text-[48px] font-bold leading-[0.95] tracking-[-0.055em]"
          >
            Experience
          </h2>
          <ViewAllLink
            href="/experience"
            ariaLabel="View all experience details"
            className="hidden lg:inline-flex"
          />
        </Reveal>

        <ExperienceShowcase />

        <ViewAllLink
          href="/experience"
          ariaLabel="View all experience details"
          className="mt-8 flex w-full lg:hidden"
        />
      </div>
    </section>
  );
}
