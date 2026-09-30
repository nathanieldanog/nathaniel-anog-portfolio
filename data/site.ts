import type { Metadata } from "next";

export const siteConfig = {
  name: "Nathaniel Anog",
  domain: "nathanielanog.com",
  url: "https://nathanielanog.com",
  role: "Software Engineer",
  homeTitle: "Nathaniel Anog | Software Engineer",
  description:
    "Nathaniel Anog is a software engineer and Cum Laude Computer Engineering graduate in Metro Manila who builds reliable, responsive, and user-friendly web, mobile, and AI applications.",
  locale: "en_PH",
  profileImage: "/images/profile.jpg",
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  home?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  home = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = home ? siteConfig.homeTitle : `${title} | ${siteConfig.name}`;

  return {
    title: home ? { absolute: fullTitle } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: siteConfig.profileImage,
          width: 1023,
          height: 1537,
          alt: `Portrait of ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.profileImage],
    },
  };
}
