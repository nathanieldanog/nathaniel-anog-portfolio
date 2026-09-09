import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowUpRight, Code2, ExternalLink, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

function FeaturedProjectImage({ project }: { project: Project }) {
  const relativeImagePath = project.image.replace(/^\//, "");
  const imageExists = existsSync(join(process.cwd(), "public", relativeImagePath));

  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-surface-hover p-5 sm:p-8">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-surface">
        {imageExists ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 340px, (min-width: 768px) 280px, calc(100vw - 80px)"
          />
        ) : (
          <div
            role="img"
            aria-label={`${project.title} image placeholder`}
            className="flex h-full items-center justify-center text-muted"
          >
            <div className="flex flex-col items-center gap-2">
              <ImageIcon aria-hidden="true" className="size-7" strokeWidth={1.5} />
              <span className="text-xs font-semibold">Project preview</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-[minmax(260px,340px)_minmax(0,1fr)] md:gap-10 xl:grid-cols-[380px_minmax(0,1fr)] xl:gap-14">
      <FeaturedProjectImage project={project} />

      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
          {project.category}
        </p>
        <h3 className="mt-2.5 text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.2] tracking-[-0.03em] text-foreground">
          {project.title}
        </h3>
        <p className="mt-4 max-w-[580px] text-sm leading-7 text-muted sm:text-[15px]">
          {project.description}
        </p>

        <div className="mt-6">
          <p className="border-b border-border pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground">
            Project Info
          </p>
          <dl className="text-xs sm:text-sm">
            <div className="flex items-start justify-between gap-6 border-b border-border py-3">
              <dt className="text-muted">Category</dt>
              <dd className="max-w-[65%] text-right font-semibold text-foreground">
                {project.category}
              </dd>
            </div>
            <div className="flex items-start justify-between gap-6 border-b border-border py-3">
              <dt className="text-muted">Stack</dt>
              <dd className="max-w-[70%] text-right font-semibold text-foreground">
                {project.technologies.join(" · ")}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link
            href={`/projects#${project.slug}`}
            className="inline-flex items-center gap-1.5 border-b border-foreground pb-1 text-xs font-bold uppercase tracking-[0.04em] text-foreground hover:opacity-65"
          >
            View project
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border-b border-foreground pb-1 text-xs font-bold uppercase tracking-[0.04em] text-foreground hover:opacity-65"
            >
              Live demo
              <ExternalLink aria-hidden="true" className="size-3.5" />
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border-b border-foreground pb-1 text-xs font-bold uppercase tracking-[0.04em] text-foreground hover:opacity-65"
            >
              GitHub
              <Code2 aria-hidden="true" className="size-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="featured-projects-heading" className="border-t border-border">
      <div className="mx-auto w-full max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-14 xl:py-28">
        <header className="flex items-start justify-between gap-8">
          <div className="max-w-[620px]">
            <h2
              id="featured-projects-heading"
              className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.04em] text-foreground"
            >
              Featured Projects
            </h2>
            <p className="mt-4 max-w-[580px] text-sm leading-7 text-muted sm:text-[15px]">
              Selected projects that reflect my focus on thoughtful interfaces, practical
              engineering, and dependable user experiences.
            </p>
          </div>

          <Link
            href="/projects"
            className="mt-2 hidden shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-[0.05em] text-foreground hover:opacity-65 lg:inline-flex"
          >
            View all projects
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </header>

        <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-20 lg:mt-20 lg:space-y-24">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-6 sm:mt-20 lg:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.05em] text-foreground hover:opacity-65"
          >
            View all projects
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
