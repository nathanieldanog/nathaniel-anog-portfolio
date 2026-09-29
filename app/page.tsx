import type { Metadata } from "next";
import { Certifications } from "@/components/home/Certifications";
import { Education } from "@/components/home/Education";
import { Experience } from "@/components/home/Experience";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { Skills } from "@/components/home/Skills";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { QuickActionsProvider } from "@/components/search/QuickActionsProvider";
import { SidebarLayout } from "@/components/sidebar/SidebarLayout";

export const metadata: Metadata = {
  title: "Nathaniel Anog | Software Engineer",
  description:
    "A Cum Laude graduate with a Bachelor of Science in Computer Engineering, focused on developing reliable, responsive, and user-friendly web applications.",
};

export default function Home() {
  return (
    <QuickActionsProvider>
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader />
        <SidebarLayout mainId="home">
          <Hero />
          <Education />
          <FeaturedProjects />
          <Certifications />
          <Experience />
          <Skills />
        </SidebarLayout>
      </div>
    </QuickActionsProvider>
  );
}
