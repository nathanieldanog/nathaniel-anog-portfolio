import { Certifications } from "@/components/home/Certifications";
import { Education } from "@/components/home/Education";
import { Experience } from "@/components/home/Experience";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { QuickActionsProvider } from "@/components/search/QuickActionsProvider";
import { SidebarLayout } from "@/components/sidebar/SidebarLayout";

export default function Home() {
  return (
    <QuickActionsProvider>
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader />
        <SidebarLayout mainId="home">
          <Hero />
          <Education />
          <Experience />
          <FeaturedProjects />
          <Certifications />
        </SidebarLayout>
      </div>
    </QuickActionsProvider>
  );
}
