import { existsSync } from "node:fs";
import { join } from "node:path";
import { Code2, ExternalLink, ImageIcon, type LucideIcon } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

function ProjectImage({ project }: { project: Project }) {
  const relativeImagePath = project.image.replace(/^\//, "");
  const imageExists = existsSync(join(process.cwd(), "public", relativeImagePath));

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-surface-hover">
      {imageExists ? (
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 320px, (min-width: 768px) 280px, calc(100vw - 40px)"
        />
      ) : (
        <div
          role="img"
          aria-label={`${project.title} image placeholder`}
          className="flex h-full items-center justify-center text-muted"
        >
          <div className="flex flex-col items-center gap-2">
            <ImageIcon aria-hidden="true" className="size-6" strokeWidth={1.6} />
            <span className="text-xs">Project image</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const projectLinks: Array<{ label: string; href: string; icon: LucideIcon }> = [];

  if (project.githubUrl) {
    projectLinks.push({ label: "GitHub", href: project.githubUrl, icon: Code2 });
  }

  if (project.demoUrl) {
    projectLinks.push({ label: "Live demo", href: project.demoUrl, icon: ExternalLink });
  }

  return (
    <article
      id={project.slug}
      className="scroll-mt-20 border-t border-border py-10 sm:py-12 last:border-b"
    >
      <div className="grid items-start gap-6 md:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] md:gap-8 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-12">
        <ProjectImage project={project} />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
              {project.category}
            </p>
            {project.featured ? (
              <span className="border-l border-border pl-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
                Featured
              </span>
            ) : null}
          </div>

          <h2 className="mt-2.5 text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.2] tracking-[-0.03em] text-foreground">
            {project.title}
          </h2>
          <p className="mt-4 max-w-[620px] text-sm leading-7 text-muted sm:text-[15px]">
            {project.description}
          </p>

          <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-[3px] border border-border px-2.5 py-1 text-xs font-semibold text-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>

          {projectLinks.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-5">
              {projectLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:opacity-65"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
