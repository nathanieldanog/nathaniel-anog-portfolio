import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionDivider } from "@/components/home/SectionDivider";
import { Reveal } from "@/components/motion/Reveal";
import { FeaturedSkillsGrid } from "@/components/skills/FeaturedSkillsGrid";
import { featuredSkills } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 bg-background text-foreground lg:scroll-mt-0"
    >
      <SectionDivider />
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
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

          <Link
            href="/skills"
            className="motion-button motion-button--secondary inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View all
            <ArrowRight aria-hidden="true" className="motion-action-icon motion-icon-forward size-4" />
          </Link>
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
      </div>
    </section>
  );
}
