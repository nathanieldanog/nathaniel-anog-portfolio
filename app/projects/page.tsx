import type { Metadata } from "next";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { QuickActionsProvider } from "@/components/search/QuickActionsProvider";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Nathaniel Anog",
  description: "A selection of web development and computer-vision projects.",
};

export default function ProjectsPage() {
  return (
    <QuickActionsProvider>
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader activeItem="Projects" />
        <Sidebar activeItem="Projects" />

        <main className="min-h-[calc(100svh-4rem)] lg:ml-[220px] lg:min-h-svh xl:ml-[280px]">
          <section className="mx-auto w-full max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-14 xl:py-24">
            <header className="max-w-[720px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                Selected Work
              </p>
              <h1 className="mt-3 text-[clamp(2.5rem,5.5vw,4.25rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.045em] text-foreground">
                Projects
              </h1>
              <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
                A selection of web development and computer-vision projects focused on
                practical, user-centered solutions.
              </p>
            </header>

            <div className="mt-12 sm:mt-14">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </QuickActionsProvider>
  );
}
