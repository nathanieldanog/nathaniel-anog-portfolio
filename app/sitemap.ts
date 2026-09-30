import type { MetadataRoute } from "next";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigationItems.map(({ href }) => ({
    url: new URL(href, siteConfig.url).toString(),
    lastModified: "2026-09-30",
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : href === "/projects" ? 0.9 : 0.8,
    ...(href === "/" && {
      images: [`${siteConfig.url}${siteConfig.profileImage}`],
    }),
  }));
}
