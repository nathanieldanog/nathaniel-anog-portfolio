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
          loading={project.slug === "evelyns-store" ? "eager" : "lazy"}
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
  const projectLinks: Array<{
    label: string;
    href: string | null;
    icon: LucideIcon;
  }> = [
    { label: "View project", href: project.demoUrl, icon: ExternalLink },
    { label: "See on GitHub", href: project.githubUrl, icon: Code2 },
  ];

  return (
    <article
      id={project.slug}
      className="scroll-mt-20 py-10 sm:py-12"
    >
      <div className="grid items-start gap-6 md:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] md:gap-8 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-12">
        <ProjectImage project={project} />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
              {project.category}
            </p>
            <span className="border-l border-border pl-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
              {project.year}
            </span>
            {project.featured ? (
              <span className="border-l border-border pl-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground">
                Featured
              </span>
            ) : null}
          </div>

          <h2 className="mt-3 text-[28px] font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-[32px]">
            {project.title}
          </h2>
          <ul className="mt-5 max-w-[720px] space-y-3 text-[15px] leading-[1.6] text-muted">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-foreground">
                {highlight}
              </li>
            ))}
          </ul>

          <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-border px-3 py-1.5 text-[12px] font-semibold text-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-5">
            {projectLinks.map(({ label, href, icon: Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-foreground hover:opacity-65"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {label}
                </a>
              ) : (
                <span
                  key={label}
                  aria-disabled="true"
                  title={`${label} link coming soon`}
                  className="inline-flex cursor-not-allowed items-center gap-2 text-[13px] font-bold text-muted opacity-55"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
