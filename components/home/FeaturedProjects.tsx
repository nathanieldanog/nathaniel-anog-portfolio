import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeaturedProjectsCarousel } from "@/components/home/FeaturedProjectsCarousel";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

export function FeaturedProjects() {
  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="projects-heading"
      className="bg-background text-foreground"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
        <Reveal
          as="header"
          stagger
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2
              id="projects-heading"
              className="text-[42px] font-bold leading-[0.95] tracking-[-0.055em] sm:text-[44px]"
            >
              Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="motion-button motion-button--secondary inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View all
            <ArrowRight aria-hidden="true" className="motion-action-icon motion-icon-forward size-4" />
          </Link>
        </Reveal>

        <FeaturedProjectsCarousel
          projects={featuredProjects}
          showHighlights
        />
      </div>
    </section>
  );
}
