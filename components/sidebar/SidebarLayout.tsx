"use client";

import { Menu } from "lucide-react";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { RouteTransition } from "@/components/motion/RouteTransition";
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
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  function closeSidebar() {
    setIsSidebarOpen(false);
    requestAnimationFrame(() => openButtonRef.current?.focus());
  }

  function openSidebar() {
    setIsSidebarOpen(true);
    requestAnimationFrame(() => closeButtonRef.current?.focus());
  }

  return (
    <>
      <Sidebar
        activeItem={activeItem}
        isOpen={isSidebarOpen}
        closeButtonRef={closeButtonRef}
        onClose={closeSidebar}
      />

      <button
        ref={openButtonRef}
        type="button"
        aria-label="Open sidebar"
        aria-controls="desktop-sidebar"
        aria-expanded={isSidebarOpen}
        aria-hidden={isSidebarOpen}
        tabIndex={isSidebarOpen ? -1 : 0}
        title="Open sidebar"
        onClick={openSidebar}
        data-sidebar-state={isSidebarOpen ? "open" : "closed"}
        className="sidebar-open-button fixed left-4 top-5 z-40 hidden size-9 cursor-pointer items-center justify-center rounded-md border border-border bg-surface text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:inline-flex"
      >
        <Menu
          aria-hidden="true"
          className="sidebar-control-icon size-[18px]"
          strokeWidth={2}
        />
      </button>

      <main
        id={mainId}
        className={`sidebar-main min-h-[calc(100svh-4rem)] lg:min-h-svh ${
          isSidebarOpen
            ? "lg:ml-[220px] xl:ml-[280px]"
            : "lg:mx-auto lg:w-full"
        }`}
      >
        <RouteTransition>{children}</RouteTransition>
      </main>
    </>
  );
}
