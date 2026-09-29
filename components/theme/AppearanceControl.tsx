"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function AppearanceControl({ compact = false }: { compact?: boolean }) {
  const { mode, resolvedTheme, setMode } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme preference"
      className={`flex items-center ${
        compact
          ? "rounded-md border border-border bg-background px-3 py-2"
          : ""
      }`}
    >
      <span
        aria-hidden="true"
        data-active={resolvedTheme === "light" ? "true" : "false"}
        className={`theme-icon theme-icon--sun inline-flex size-7 items-center justify-center ${
          resolvedTheme === "light" ? "text-foreground" : "text-muted"
        }`}
      >
        <Sun aria-hidden="true" className="size-[18px]" strokeWidth={2} />
      </span>

      <button
        type="button"
        role="switch"
        aria-label="Dark mode"
        aria-checked={resolvedTheme === "dark"}
        onClick={() => setMode(resolvedTheme === "dark" ? "light" : "dark")}
        className="theme-toggle mx-1.5 flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border border-border bg-background px-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background xl:mx-2"
      >
        <span aria-hidden="true" className="theme-thumb size-4 rounded-full bg-foreground" />
      </button>

      <span
        aria-hidden="true"
        data-active={resolvedTheme === "dark" ? "true" : "false"}
        className={`theme-icon theme-icon--moon inline-flex size-7 items-center justify-center ${
          resolvedTheme === "dark" ? "text-foreground" : "text-muted"
        }`}
      >
        <Moon aria-hidden="true" className="size-[18px]" strokeWidth={2} />
      </span>

      <span aria-hidden="true" className="mx-1.5 h-6 w-px bg-border xl:mx-2" />

      <button
        type="button"
        data-theme-option="system"
        aria-label={`Use system theme${mode === "system" ? `, currently ${resolvedTheme}` : ""}`}
        aria-pressed={mode === "system"}
        onClick={() => setMode("system")}
        className="theme-option flex h-7 min-w-0 items-center gap-1 rounded-[5px] border border-transparent px-1.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Monitor
          aria-hidden="true"
          className="theme-system-icon size-4 shrink-0"
          strokeWidth={2}
        />
        <span>System</span>
      </button>
    </div>
  );
}
