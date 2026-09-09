"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  isThemeMode,
  resolveTheme,
  THEME_STORAGE_KEY,
  type ResolvedTheme,
  type ThemeMode,
} from "./theme";

type ThemeContextValue = {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const THEME_CHANGE_EVENT = "portfolio-theme-change";
const SERVER_SNAPSHOT = "system:light";

function applyTheme(mode: ThemeMode, prefersDark: boolean) {
  const resolvedTheme = resolveTheme(mode, prefersDark);
  const root = document.documentElement;

  root.dataset.theme = resolvedTheme;
  root.dataset.themeMode = mode;
  root.style.colorScheme = resolvedTheme;

  return resolvedTheme;
}

function getThemeSnapshot() {
  const root = document.documentElement;
  const mode = isThemeMode(root.dataset.themeMode) ? root.dataset.themeMode : "system";
  const resolvedTheme = root.dataset.theme === "dark" ? "dark" : "light";

  return `${mode}:${resolvedTheme}`;
}

function getServerThemeSnapshot() {
  return SERVER_SNAPSHOT;
}

function subscribeToTheme(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function handleThemeChange() {
    onStoreChange();
  }

  function handleSystemThemeChange(event: MediaQueryListEvent) {
    if (document.documentElement.dataset.themeMode === "system") {
      applyTheme("system", event.matches);
      onStoreChange();
    }
  }

  function handleStorageChange(event: StorageEvent) {
    if (event.key !== THEME_STORAGE_KEY) {
      return;
    }

    const nextMode = isThemeMode(event.newValue) ? event.newValue : "system";
    applyTheme(nextMode, mediaQuery.matches);
    onStoreChange();
  }

  window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  window.addEventListener("storage", handleStorageChange);
  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    window.removeEventListener("storage", handleStorageChange);
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [snapshotMode, snapshotResolvedTheme] = snapshot.split(":");
  const mode: ThemeMode = isThemeMode(snapshotMode) ? snapshotMode : "system";
  const resolvedTheme: ResolvedTheme =
    snapshotResolvedTheme === "dark" ? "dark" : "light";

  const setMode = useCallback((nextMode: ThemeMode) => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(nextMode, prefersDark);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextMode);
    } catch {
      // Theme switching still works when storage is unavailable.
    }

    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  const value = useMemo(
    () => ({ mode, resolvedTheme, setMode }),
    [mode, resolvedTheme, setMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
