import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { QuickActionsProvider } from "@/components/search/QuickActionsProvider";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <QuickActionsProvider>
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader />
        <Sidebar />
        <main
          id="home"
          className="min-h-[calc(100svh-4rem)] lg:ml-[220px] lg:min-h-svh xl:ml-[280px]"
        >
          <Hero />
          <FeaturedProjects />
        </main>
      </div>
    </QuickActionsProvider>
  );
}
