import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ExperienceShowcase } from "@/components/experience/ExperienceShowcase";
import { SectionDivider } from "@/components/home/SectionDivider";
import { Reveal } from "@/components/motion/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-16 bg-background text-foreground lg:scroll-mt-0"
    >
      <SectionDivider />
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
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
          <Link
            href="/experience"
            aria-label="View all experience details"
            className="motion-button motion-button--secondary inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View all
            <ArrowRight aria-hidden="true" className="motion-action-icon motion-icon-forward size-4" />
          </Link>
        </Reveal>

        <ExperienceShowcase />
      </div>
    </section>
  );
}
