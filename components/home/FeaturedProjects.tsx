import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeaturedProjectsCarousel } from "@/components/home/FeaturedProjectsCarousel";
import { projects } from "@/data/projects";

const featuredProjects = projects
  .filter((project) => project.featured)
  .map((project) => ({
    ...project,
    imageExists: existsSync(
      join(process.cwd(), "public", project.image.replace(/^\//, "")),
    ),
  }));

export function FeaturedProjects() {
  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="projects-heading"
      className="bg-background text-foreground"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-0 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-16 xl:px-12 xl:pt-16">
        <header className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="projects-heading"
              className="text-[48px] font-bold leading-[0.95] tracking-[-0.055em]"
            >
              Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground hover:bg-surface-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
          >
            View all
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </header>

        <FeaturedProjectsCarousel projects={featuredProjects} />
      </div>
    </section>
  );
}
