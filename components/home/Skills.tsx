import { Reveal } from "@/components/motion/Reveal";
import { FeaturedSkillsGrid } from "@/components/skills/FeaturedSkillsGrid";
import { featuredSkills } from "@/data/skills";
import { ViewAllLink } from "./ViewAllLink";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 bg-background text-foreground min-[1024px]:scroll-mt-0"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
        <Reveal
          as="header"
          stagger
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2
            id="skills-heading"
            className="text-[48px] font-bold leading-[0.95] tracking-[-0.055em]"
          >
            Skills
          </h2>

          <ViewAllLink
            href="/skills"
            className="hidden lg:inline-flex"
          />
        </Reveal>

        <Reveal stagger delay={80} className="mt-8 sm:mt-10">
          <p className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
            Technical expertise
          </p>
          <h3 className="mt-3 font-display text-[34px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground">
            Technologies and Tools I Use to Build Reliable Digital Solutions
          </h3>
        </Reveal>

        <FeaturedSkillsGrid
          skills={featuredSkills}
          showOthersTile
          className="mt-8 sm:mt-10"
        />

        <ViewAllLink href="/skills" className="mt-8 flex w-full lg:hidden" />
      </div>
    </section>
  );
}
