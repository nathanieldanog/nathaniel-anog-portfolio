"use client";

import { Menu } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import type { NavigationLabel } from "@/data/navigation";
import { Sidebar } from "./Sidebar";

type SidebarLayoutProps = {
  children: ReactNode;
  activeItem?: NavigationLabel;
  mainId?: string;
};

export function SidebarLayout({
  children,
  activeItem = "Home",
  mainId,
}: SidebarLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Sidebar
        activeItem={activeItem}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {!isSidebarOpen && (
        <button
          type="button"
          aria-label="Open sidebar"
          aria-controls="desktop-sidebar"
          aria-expanded="false"
          title="Open sidebar"
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-4 top-5 z-40 hidden size-9 cursor-pointer items-center justify-center rounded-md border border-border bg-surface text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:inline-flex"
        >
          <Menu aria-hidden="true" className="size-[18px]" strokeWidth={2} />
        </button>
      )}

      <main
        id={mainId}
        className={`min-h-[calc(100svh-4rem)] transition-[margin-left] duration-300 ease-out motion-reduce:transition-none lg:min-h-svh ${
          isSidebarOpen
            ? "lg:ml-[220px] xl:ml-[280px]"
            : "lg:mx-auto lg:w-full"
        }`}
      >
        {children}
      </main>
    </>
  );
}
