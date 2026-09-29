import { FeaturedProjectsCarousel } from "@/components/home/FeaturedProjectsCarousel";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";
import { ViewAllLink } from "./ViewAllLink";

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

          <ViewAllLink
            href="/projects"
            className="hidden lg:inline-flex"
          />
        </Reveal>

        <FeaturedProjectsCarousel
          projects={featuredProjects}
          showHighlights
        />

        <ViewAllLink href="/projects" className="mt-8 flex w-full lg:hidden" />
      </div>
    </section>
  );
}
