import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import type { Project } from "@/data/projects";

type CarouselProject = Project & {
  imageExists: boolean;
};

const placeholderGithubUrl = "https://github.com/your-username";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.41-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function ProjectVisual({ project, index }: { project: CarouselProject; index: number }) {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[4px] border border-border bg-surface-hover p-4 sm:min-h-[480px] sm:p-6 lg:min-h-[590px]">
      <span className="relative z-10 inline-flex rounded-[4px] bg-[#0a0b0d] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.04em] text-white">
        {project.category}
      </span>

      <div className="absolute inset-x-4 bottom-4 top-20 overflow-hidden rounded-[4px] bg-[#0a0b0d] sm:inset-x-6 sm:bottom-6 sm:top-24">
        {project.imageExists ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className="object-cover grayscale"
            sizes="(min-width: 1280px) 690px, (min-width: 1024px) 56vw, calc(100vw - 72px)"
          />
        ) : (
          <div
            role="img"
            aria-label={`${project.title} project cover`}
            className="flex h-full flex-col justify-between p-6 text-white sm:p-9"
          >
            <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-white/55">
              <span>Featured work</span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex items-end justify-between gap-6">
              <p className="max-w-[11ch] font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.88] tracking-[-0.065em]">
                {project.title}
              </p>
              <ArrowUpRight aria-hidden="true" className="hidden size-10 shrink-0 sm:block" strokeWidth={1.4} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function FeaturedProjectsCarousel({
  projects,
}: {
  projects: readonly CarouselProject[];
}) {
  return (
    <div className="mt-12 space-y-20 sm:mt-16 sm:space-y-24 lg:space-y-32">
      {projects.map((project, index) => (
        <article
          key={project.slug}
          className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-12 xl:gap-16"
        >
          <ProjectVisual project={project} index={index} />

          <div className="flex flex-col justify-center py-1 lg:py-8">
            <h3 className="text-[32px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[40px]">
              {project.title}
            </h3>
            <p className="mt-4 text-[16px] leading-[1.65] text-muted">
              {project.description}
            </p>

            <div className="mt-7">
              <p className="text-[14px] font-bold uppercase tracking-[0.08em] text-foreground">
                Project info
              </p>
              <dl className="mt-3 text-[15px]">
                <div className="flex items-start justify-between gap-6 border-t border-border py-4">
                  <dt className="font-semibold text-foreground">Category</dt>
                  <dd className="max-w-[65%] text-right font-semibold text-muted">
                    {project.category}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-y border-border py-4">
                  <dt className="font-semibold text-foreground">Technology</dt>
                  <dd className="max-w-[70%] text-right font-semibold text-muted">
                    {project.technologies.join(" · ")}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
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
