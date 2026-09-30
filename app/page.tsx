import { Certifications } from "@/components/home/Certifications";
import { Education } from "@/components/home/Education";
import { Experience } from "@/components/home/Experience";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { Skills } from "@/components/home/Skills";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { QuickActionsProvider } from "@/components/search/QuickActionsProvider";
import { SidebarLayout } from "@/components/sidebar/SidebarLayout";
import { profile } from "@/data/profile";
import { createPageMetadata, siteConfig } from "@/data/site";

export const metadata = createPageMetadata({
  title: siteConfig.homeTitle,
  description:
    "A Cum Laude graduate with a Bachelor of Science in Computer Engineering, focused on developing reliable, responsive, and user-friendly web applications.",
  path: "/",
  home: true,
});

const socialProfiles = [
  profile.linkedin,
  profile.github,
  profile.facebook,
  profile.instagram,
].filter((url): url is string => Boolean(url));

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      alternateName: siteConfig.domain,
      inLanguage: "en-PH",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile-page`,
      url: `${siteConfig.url}/`,
      name: siteConfig.homeTitle,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: profile.name,
      url: `${siteConfig.url}/`,
      image: `${siteConfig.url}${siteConfig.profileImage}`,
      jobTitle: profile.title,
      description: siteConfig.description,
      email: `mailto:${profile.email}`,
      homeLocation: {
        "@type": "Place",
        name: profile.location,
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Polytechnic University of the Philippines",
        sameAs: "https://www.pup.edu.ph/",
      },
      sameAs: socialProfiles,
    },
  ],
};

export default function Home() {
  return (
    <QuickActionsProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader />
        <SidebarLayout mainId="home">
          <Hero />
          <Education />
          <FeaturedProjects />
          <Certifications />
          <Experience />
          <Skills />
        </SidebarLayout>
      </div>
    </QuickActionsProvider>
  );
}
