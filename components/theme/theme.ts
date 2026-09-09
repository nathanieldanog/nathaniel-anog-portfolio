export const THEME_STORAGE_KEY = "portfolio-theme";

export const themeModes = ["light", "dark", "system"] as const;

export type ThemeMode = (typeof themeModes)[number];
export type ResolvedTheme = Exclude<ThemeMode, "system">;

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return themeModes.some((mode) => mode === value);
}

export function resolveTheme(mode: ThemeMode, prefersDark: boolean): ResolvedTheme {
  if (mode === "system") {
    return prefersDark ? "dark" : "light";
  }

  return mode;
}
