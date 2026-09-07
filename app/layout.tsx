import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  display: "swap",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={notoSansJP.variable}>
      <body>{children}</body>
    </html>
  );
}
