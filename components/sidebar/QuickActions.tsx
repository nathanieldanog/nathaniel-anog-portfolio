"use client";

import { useQuickActions } from "@/components/search/QuickActionsProvider";
import { profile } from "@/data/profile";
import { Hotkey } from "./Hotkey";

export function QuickActions() {
  const { openCommandPalette } = useQuickActions();

  return (
    <section aria-labelledby="quick-actions-heading">
      <h2
        id="quick-actions-heading"
        className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
      >
        Quick Actions
      </h2>

      <div className="mt-2 space-y-1">
        <button
          type="button"
          onClick={openCommandPalette}
          className="sidebar-quick-action flex h-8 w-full cursor-pointer items-center justify-between rounded-[5px] text-left text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <span className="sidebar-quick-label">Search anything</span>
          <Hotkey shortcutKey="K" />
        </button>

        <a
          href={profile.resumePath}
          target="_blank"
          rel="noreferrer"
          className="sidebar-quick-action flex h-8 w-full items-center justify-between rounded-[5px] text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <span className="sidebar-quick-label">View resume</span>
          <Hotkey shortcutKey="R" />
        </a>
      </div>
    </section>
  );
}
