import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import type { Project } from "@/data/projects";

const placeholderGithubUrl = "https://github.com/your-username";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.41-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-[4px] border border-border bg-surface-hover p-3 sm:min-h-[320px] sm:p-4 lg:min-h-[380px]">
      <span className="relative z-10 inline-flex rounded-[4px] bg-[#0a0b0d] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.04em] text-white">
        {project.category}
      </span>

      <div className="absolute inset-x-3 bottom-3 top-14 overflow-hidden rounded-[4px] bg-[#0a0b0d] sm:inset-x-4 sm:bottom-4 sm:top-16">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 500px, (min-width: 1024px) 42vw, calc(100vw - 72px)"
        />
      </div>
    </div>
  );
}

export function FeaturedProjectsCarousel({
  projects,
}: {
  projects: readonly Project[];
}) {
  return (
    <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-16 lg:mt-12 lg:space-y-20">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="grid items-stretch gap-5 sm:gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(320px,1.15fr)] lg:gap-8 xl:gap-10"
        >
          <ProjectVisual project={project} />

          <div className="flex flex-col justify-center py-1 lg:py-4">
            <h3 className="text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[34px]">
              {project.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-muted">
              {project.description}
            </p>

            <div className="mt-5">
              <p className="text-[14px] font-bold uppercase tracking-[0.08em] text-foreground">
                Project info
              </p>
              <dl className="mt-3 text-[15px]">
                <div className="flex items-start justify-between gap-6 border-t border-border py-3">
                  <dt className="font-semibold text-foreground">Category</dt>
                  <dd className="max-w-[65%] text-right font-semibold text-muted">
                    {project.category}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-y border-border py-3">
                  <dt className="font-semibold text-foreground">Technology</dt>
                  <dd className="max-w-[70%] text-right font-semibold text-muted">
                    {project.technologies.join(" · ")}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={`/projects#${project.slug}`}
                className="inline-flex items-center gap-2 border-b-2 border-foreground pb-1.5 text-[14px] font-bold uppercase tracking-[0.02em] text-foreground transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground motion-reduce:transform-none motion-reduce:transition-none"
              >
                View project
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>

              <a
                href={project.githubUrl ?? placeholderGithubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b-2 border-foreground pb-1.5 text-[14px] font-bold uppercase tracking-[0.02em] text-foreground transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground motion-reduce:transform-none motion-reduce:transition-none"
              >
                See on GitHub
                <GitHubIcon aria-hidden="true" className="size-[18px]" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
