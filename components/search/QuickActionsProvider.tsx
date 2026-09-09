"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { profile } from "@/data/profile";
import { CommandPalette } from "./CommandPalette";

type QuickActionsContextValue = {
  openCommandPalette: () => void;
};

const QuickActionsContext = createContext<QuickActionsContextValue | null>(null);

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  );
}

function openResume() {
  window.open(profile.resumePath, "_blank", "noopener,noreferrer");
}

export function QuickActionsProvider({ children }: { children: ReactNode }) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const openCommandPalette = useCallback(() => setIsCommandPaletteOpen(true), []);

  useEffect(() => {
    function handleShortcut(event: globalThis.KeyboardEvent) {
      if (
        event.defaultPrevented ||
        event.repeat ||
        !event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        isEditableTarget(event.target)
      ) {
        return;
      }

      if (event.code === "KeyK") {
        event.preventDefault();
        openCommandPalette();
      } else if (event.code === "KeyR") {
        event.preventDefault();
        openResume();
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [openCommandPalette]);

  const value = useMemo(() => ({ openCommandPalette }), [openCommandPalette]);

  return (
    <QuickActionsContext.Provider value={value}>
      {children}
      <CommandPalette
        open={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </QuickActionsContext.Provider>
  );
}

export function useQuickActions() {
  const context = useContext(QuickActionsContext);

  if (!context) {
    throw new Error("useQuickActions must be used within QuickActionsProvider");
  }

  return context;
}
