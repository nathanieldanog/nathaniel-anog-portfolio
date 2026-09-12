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
          className="flex h-8 w-full cursor-pointer items-center justify-between text-left text-xs text-foreground"
        >
          <span>Search anything</span>
          <Hotkey shortcutKey="K" />
        </button>

        <a
          href={profile.resumePath}
          target="_blank"
          rel="noreferrer"
          className="flex h-8 w-full items-center justify-between text-xs text-foreground"
        >
          <span>View resume</span>
          <Hotkey shortcutKey="R" />
        </a>
      </div>
    </section>
  );
}
