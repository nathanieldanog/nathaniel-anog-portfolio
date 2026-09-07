import { Sidebar } from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Sidebar />
      <main id="home" className="ml-[248px] grid min-h-svh place-items-center px-6">
        <p className="text-base font-medium">Portfolio Layout</p>
      </main>
    </div>
  );
}
