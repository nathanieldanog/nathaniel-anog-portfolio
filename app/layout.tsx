import type { Metadata } from "next";
import { Montserrat, Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { THEME_STORAGE_KEY } from "@/components/theme/theme";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  subsets: ["latin"],
  weight: "variable",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  display: "swap",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website.",
};

const themeInitializationScript = `
  (function () {
    var root = document.documentElement;
    var mode = "system";

    try {
      var storedMode = window.localStorage.getItem("${THEME_STORAGE_KEY}");
      if (storedMode === "light" || storedMode === "dark" || storedMode === "system") {
        mode = storedMode;
      }
    } catch (error) {}

    var resolvedTheme = mode;
    if (mode === "system") {
      resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    root.dataset.theme = resolvedTheme;
    root.dataset.themeMode = mode;
    root.style.colorScheme = resolvedTheme;
  })();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-theme-mode="system"
      suppressHydrationWarning
      className={`${montserrat.variable} ${nunitoSans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
