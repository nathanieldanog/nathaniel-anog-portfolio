import type { Metadata } from "next";
import { FeaturedProjectsCarousel } from "@/components/home/FeaturedProjectsCarousel";
import { Reveal } from "@/components/motion/Reveal";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { QuickActionsProvider } from "@/components/search/QuickActionsProvider";
import { SidebarLayout } from "@/components/sidebar/SidebarLayout";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Nathaniel Anog",
  description: "Applications and systems designed and developed by Nathaniel Anog.",
};

export default function ProjectsPage() {
  return (
    <QuickActionsProvider>
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader activeItem="Projects" />
        <SidebarLayout activeItem="Projects">
          <header className="relative overflow-hidden">
            <Reveal
              stagger
              className="relative mx-auto w-full max-w-[1180px] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-18 xl:px-12 xl:pt-20"
            >
              <h1 className="max-w-[1080px] text-[48px] font-bold leading-[0.95] tracking-[-0.055em] text-foreground">
                Projects
              </h1>
              <p className="mt-5 w-full text-[16px] leading-[1.6] text-muted">
                A collection of web, mobile, and AI-driven projects that
                showcase my experience in building practical, user-focused
                solutions with modern technologies.
              </p>
            </Reveal>
          </header>

          <main className="mx-auto w-full max-w-[1180px] px-5 pb-10 sm:px-8 sm:pb-14 lg:px-10 lg:pb-16 xl:px-12">
            <section aria-label="Project portfolio">
              <FeaturedProjectsCarousel projects={projects} showHighlights />
            </section>
          </main>
        </SidebarLayout>
      </div>
    </QuickActionsProvider>
  );
}
