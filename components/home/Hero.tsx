import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  ArrowUpRight,
  Atom,
  Database,
  Download,
  Zap,
} from "lucide-react";
import Image from "next/image";
import type { SVGProps } from "react";
import { profile } from "@/data/profile";

const portraitPath = "/profile-portrait.png";

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.57h.05c.47-.91 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.54V8.99H7.1v11.46Z" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.41-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.8v8h3.4Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
  { label: "GitHub", href: profile.github, icon: GitHubIcon },
  { label: "Facebook", href: profile.facebook, icon: FacebookIcon },
  { label: "Instagram", href: profile.instagram, icon: InstagramIcon },
] as const;

const technologies = [
  { label: "React", mark: "react" },
  { label: "Next.js", mark: "next" },
  { label: "TypeScript", mark: "typescript" },
  { label: "Node.js", mark: "node" },
  { label: "PostgreSQL", mark: "postgresql" },
  { label: "Supabase", mark: "supabase" },
] as const;

type TechnologyMark = (typeof technologies)[number]["mark"];

function TechMark({ mark }: { mark: TechnologyMark }) {
  if (mark === "react") {
    return <Atom aria-hidden="true" className="size-8" strokeWidth={1.8} />;
  }

  if (mark === "next") {
    return (
      <span aria-hidden="true" className="font-display text-3xl font-medium leading-none">
        N<span className="ml-0.5 text-xl">↗</span>
      </span>
    );
  }

  if (mark === "typescript") {
    return (
      <span
        aria-hidden="true"
        className="flex size-8 items-end justify-end rounded-[2px] bg-foreground p-1 font-display text-[10px] font-bold leading-none text-background"
      >
        TS
      </span>
    );
  }

  if (mark === "node") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex items-center gap-1.5 font-display leading-none"
      >
        <span className="text-[1.65rem] font-bold tracking-[-0.13em]">node</span>
        <span className="flex size-[18px] items-center justify-center border-[1.5px] border-current text-[5px] font-extrabold tracking-[-0.04em] [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]">
          JS
        </span>
      </span>
    );
  }

  if (mark === "postgresql") {
    return <Database aria-hidden="true" className="size-8" strokeWidth={1.8} />;
  }

  return <Zap aria-hidden="true" className="size-8 fill-current" strokeWidth={1.5} />;
}

function TechnologyItems({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      aria-label={duplicate ? undefined : "Core technologies"}
      className={`tech-stack-marquee-group flex shrink-0 ${duplicate ? "tech-stack-marquee-duplicate" : ""}`}
    >
      {technologies.map((technology, index) => (
        <li
          key={technology.label}
          className="group relative flex min-h-[104px] w-[180px] shrink-0 items-center gap-3 overflow-hidden border-r border-black/10 bg-white/95 px-5 py-5 text-black/55 transition-colors duration-300 hover:bg-[#0b0c0e] hover:text-white sm:min-h-[116px] sm:w-[208px] sm:px-6 lg:min-h-[132px] lg:w-[224px] lg:flex-col lg:items-start lg:justify-end lg:gap-4"
        >
          <span className="text-black transition-colors duration-300 group-hover:text-white">
            <TechMark mark={technology.mark} />
          </span>
          <span className="text-sm font-semibold tracking-[-0.02em] sm:text-[15px]">
            {technology.label}
          </span>

          <span
            aria-hidden="true"
            className="absolute right-4 top-3 font-display text-[10px] font-semibold tabular-nums text-black/25 transition-colors duration-300 group-hover:text-white/35"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </li>
      ))}
    </ul>
  );
}

function TechnologyStrip() {
  return (
    <section
      id="skills"
      aria-label="Technology stack"
      className="tech-stack-panel relative z-20 scroll-mt-16 border-b border-black/10 bg-white text-[#0b0c0e] lg:scroll-mt-0"
    >
      <div
        aria-hidden="true"
        className="hero-stack-transition pointer-events-none absolute inset-x-0 top-0 z-30 h-28 -translate-y-full sm:h-32 lg:h-40"
      />
      <div aria-hidden="true" className="tech-stack-architecture absolute inset-0" />

      <div className="tech-stack-marquee relative mx-auto w-full max-w-[1280px] overflow-hidden border-x border-black/10">
        <div className="tech-stack-marquee-track flex w-max">
          <TechnologyItems />
          <TechnologyItems duplicate />
        </div>
      </div>
    </section>
  );
}

function Portrait() {
  const portraitExists = existsSync(
    join(process.cwd(), "public", "profile-portrait.png"),
  );

  if (!portraitExists) {
    return (
      <div
        role="img"
        aria-label="Portrait placeholder"
        className="relative z-10 h-[460px] w-full self-end bg-surface-hover sm:h-[580px] lg:h-[min(80svh,820px)]"
      />
    );
  }

  return (
    <div className="relative z-10 h-[460px] w-full self-end sm:h-[580px] lg:h-[min(80svh,820px)]">
      <Image
        src={portraitPath}
        alt={"Portrait of " + profile.name}
        fill
        className="object-contain object-bottom"
        sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, (min-width: 640px) 500px, 100vw"
        preload
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home-hero"
      aria-labelledby="home-heading"
      className="inspired-hero relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-background text-foreground lg:min-h-svh"
    >
      <div aria-hidden="true" className="hero-grid-background absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-[1280px] flex-1 grid-cols-1 items-center gap-8 px-5 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)] lg:gap-4 lg:px-10 lg:pb-0 lg:pt-8 xl:px-12">
        <div className="relative z-30 max-w-[600px] py-4 lg:py-16">
          <h1
            id="home-heading"
            className="text-[48px] font-normal leading-[0.95] tracking-[-0.055em] text-foreground"
          >
            <span className="block font-bold">Hi, I am</span>
            <span className="block whitespace-nowrap font-bold">{profile.name}.</span>
          </h1>

          <div className="mt-5 max-w-[560px] space-y-2.5 text-[16px] leading-[1.6] text-muted">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={"mailto:" + profile.email}
              className="group inline-flex h-12 min-w-[180px] items-center justify-center gap-3 rounded-[4px] bg-foreground px-7 text-[13px] font-bold uppercase tracking-[0.01em] text-background transition-[transform,opacity] duration-200 ease-out hover:-translate-y-0.5 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
            >
              Contact me
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              />
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 min-w-[220px] items-center justify-center gap-4 rounded-[4px] border border-foreground bg-background/70 px-7 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Download resume
              <Download aria-hidden="true" className="size-5" strokeWidth={2} />
            </a>
          </div>

          <div className="mt-5 flex items-center gap-2.5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-[4px] border border-foreground/20 bg-background/75 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon aria-hidden="true" className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <Portrait />
      </div>

      <TechnologyStrip />
    </section>
  );
}
