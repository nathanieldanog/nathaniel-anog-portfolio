"use client";

import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { themeModes, type ThemeMode } from "./theme";
import { useTheme } from "./ThemeProvider";

const modeDetails: Record<ThemeMode, { label: string; icon: LucideIcon }> = {
  light: { label: "Light", icon: Sun },
  dark: { label: "Dark", icon: Moon },
  system: { label: "System", icon: Monitor },
};

export function AppearanceControl({ compact = false }: { compact?: boolean }) {
  const { mode, resolvedTheme, setMode } = useTheme();

  if (compact) {
    return (
      <div
        role="group"
        aria-label="Theme preference"
        className="grid grid-cols-3 gap-1 rounded-md border border-border bg-background p-1"
      >
        {themeModes.map((themeMode) => {
          const { label, icon: Icon } = modeDetails[themeMode];

          return (
            <button
              key={themeMode}
              type="button"
              data-theme-option={themeMode}
              aria-label={`Use ${label.toLowerCase()} theme`}
              aria-pressed={mode === themeMode}
              onClick={() => setMode(themeMode)}
              className="theme-option flex min-w-0 flex-col items-center gap-1 rounded px-1 py-2 text-[10px] font-semibold"
            >
              <Icon aria-hidden="true" className="size-4" strokeWidth={2} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div role="group" aria-label="Theme preference" className="flex items-center">
      <button
        type="button"
        data-theme-option="light"
        aria-label="Use light theme"
        aria-pressed={mode === "light"}
        onClick={() => setMode("light")}
        className="theme-option inline-flex size-7 items-center justify-center rounded"
      >
        <Sun aria-hidden="true" className="size-[18px]" strokeWidth={2} />
      </button>

      <button
        type="button"
        aria-label={`Use ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
        onClick={() => setMode(resolvedTheme === "dark" ? "light" : "dark")}
        className="mx-1.5 flex h-5 w-10 shrink-0 items-center rounded-full border border-border bg-background px-0.5 xl:mx-2"
      >
        <span aria-hidden="true" className="theme-thumb size-4 rounded-full bg-foreground" />
      </button>

      <button
        type="button"
        data-theme-option="dark"
        aria-label="Use dark theme"
        aria-pressed={mode === "dark"}
        onClick={() => setMode("dark")}
        className="theme-option inline-flex size-7 items-center justify-center rounded"
      >
        <Moon aria-hidden="true" className="size-[18px]" strokeWidth={2} />
      </button>

      <span aria-hidden="true" className="mx-1.5 h-6 w-px bg-border xl:mx-2" />

      <button
        type="button"
        data-theme-option="system"
        aria-label="Use system theme"
        aria-pressed={mode === "system"}
        onClick={() => setMode("system")}
        className="theme-option flex h-7 min-w-0 items-center gap-1 rounded px-1 text-xs"
      >
        <Monitor aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
        <span>System</span>
      </button>
    </div>
  );
}
