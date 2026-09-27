import type { Metadata } from "next";
import { FeaturedProjectsCarousel } from "@/components/home/FeaturedProjectsCarousel";
import { DetailPageShell } from "@/components/pages/DetailPageShell";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Nathaniel Anog",
  description: "Applications and systems designed and developed by Nathaniel Anog.",
};

export default function ProjectsPage() {
  return (
    <DetailPageShell
      activeItem="Projects"
      title="Projects"
      titleClassName="text-[48px] font-bold leading-[0.95] tracking-[-0.055em] text-foreground"
      description="A selection of web, mobile, and AI-powered applications I have designed and developed, combining practical problem-solving with thoughtful user experiences and reliable technical implementation."
      descriptionClassName="text-[16px] leading-[1.6] text-muted"
      headerClassName="max-w-[1080px]"
      descriptionWidthClassName="max-w-[1040px]"
      showDivider={false}
    >
      <section aria-label="Project portfolio">
        <FeaturedProjectsCarousel projects={projects} />
      </section>
    </DetailPageShell>
  );
}
