import type { Metadata } from "next";
import Image from "next/image";
import {
  CloudCog,
  CodeXml,
  Cpu,
  Database,
  Laptop,
  Languages as LanguagesIcon,
  Smartphone,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DetailPageShell } from "@/components/pages/DetailPageShell";
import {
  featuredSkills,
  languages,
  professionalSkills,
  technicalSkills,
} from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills | Nathaniel Anog",
  description:
    "Technical skills, development tools, and professional strengths of Nathaniel Anog.",
};

const appliedExperience = [
  {
    number: "01",
    title: "Full-stack web",
    description: "Next.js, React, TypeScript, Supabase, PostgreSQL, and Vercel",
  },
  {
    number: "02",
    title: "Mobile applications",
    description: "React Native, Expo, TypeScript, navigation, and SQLite",
  },
  {
    number: "03",
    title: "AI-integrated systems",
    description: "Python, Flask, OpenCV, MediaPipe, Firebase, and Render",
  },
] as const;

const capabilityIcons: Record<string, LucideIcon> = {
  Frontend: CodeXml,
  "Mobile Development": Smartphone,
  "Backend & AI": Cpu,
  "Databases & Backend Services": Database,
  "Cloud & Deployment": CloudCog,
  "Development Tools": Wrench,
  "IT Support": Laptop,
  "AI Tools": Sparkles,
};

export default function SkillsPage() {
  return (
    <DetailPageShell
      activeItem="Skills"
      title="Skills"
      titleClassName="text-[48px] font-bold leading-[0.95] tracking-[-0.055em] text-foreground"
      description="The technologies, tools, and professional strengths I use to build reliable and user-friendly digital products."
      descriptionClassName="text-[16px] leading-[1.6] text-muted"
      headerClassName="max-w-[1080px]"
      descriptionWidthClassName="max-w-[760px]"
      showDivider={false}
    >
      <section aria-labelledby="core-stack-heading" className="pt-16 sm:pt-20">
        <header className="max-w-[800px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
            Core stack
          </p>
          <h2
            id="core-stack-heading"
            className="mt-3 text-[34px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground"
          >
            Technologies I build with
          </h2>
          <p className="mt-4 max-w-[680px] text-[16px] leading-[1.6] text-muted">
            A practical toolkit shaped by full-stack web, mobile, and AI-integrated projects.
          </p>
        </header>

        <ul
          aria-label="Core technologies"
          className="mt-10 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-5"
        >
          {featuredSkills.map((skill) => (
            <li
              key={skill.name}
              className="group flex min-h-[148px] flex-col justify-between border-b border-r border-border bg-surface p-5 transition-[background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-surface-hover motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span className="relative flex size-12 items-center justify-center">
                <Image
                  src={skill.image}
                  alt=""
                  width={48}
                  height={48}
                  sizes="48px"
                  loading={skill.name === "HTML" ? "eager" : "lazy"}
                  className={`size-full object-contain p-1.5 ${
                    skill.name === "Next.js" ? "nextjs-brand-logo" : ""
                  }`}
                />
              </span>
              <span className="mt-6">
                <span className="block text-[13px] font-semibold leading-[1.3] text-foreground">
                  {skill.name}
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                  {skill.category}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid border-l border-t border-border lg:grid-cols-3">
          {appliedExperience.map((item) => (
            <article
              key={item.title}
              className="grid grid-cols-[32px_1fr] gap-4 border-b border-r border-border p-5 sm:p-6"
            >
              <span className="pt-0.5 text-[10px] font-bold tracking-[0.12em] text-muted">
                {item.number}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="capabilities-heading"
        className="grid gap-10 pt-20 sm:pt-24 lg:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.28fr)] lg:gap-16"
      >
        <header className="lg:sticky lg:top-20 lg:self-start">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
            Capabilities
          </p>
          <h2
            id="capabilities-heading"
            className="mt-3 text-[34px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground"
          >
            Beyond the core stack
          </h2>
          <p className="mt-4 max-w-[430px] text-[16px] leading-[1.6] text-muted">
            Supporting technologies and practical skills used across development, deployment, and technical support.
          </p>
        </header>

        <div className="border-t border-border">
          {technicalSkills.map((group, index) => {
            const Icon = capabilityIcons[group.title] ?? CodeXml;

            return (
              <article
                key={group.title}
                className="grid gap-5 border-b border-border py-7 sm:grid-cols-[48px_minmax(150px,0.72fr)_minmax(0,1.28fr)] sm:gap-6 sm:py-8"
              >
                <div className="flex items-center gap-3 sm:block">
                  <span className="flex size-10 items-center justify-center rounded-[4px] border border-border bg-surface-hover text-foreground">
                    <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.12em] text-muted sm:mt-3 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-[19px] font-bold leading-[1.15] tracking-[-0.03em] text-foreground">
                  {group.title}
                </h3>

                <ul className="flex flex-wrap content-start gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-full border border-border bg-surface px-3.5 py-2 text-[12px] font-semibold leading-[1.25] text-foreground"
                    >
                      {skill.name}
                      {skill.proficiency ? (
                        <span className="ml-2 text-[9px] font-bold uppercase tracking-[0.1em] text-muted">
                          {skill.proficiency}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <div className="mt-20 grid gap-5 sm:mt-24 lg:grid-cols-2">
        <section
          aria-labelledby="professional-strengths-heading"
          className="rounded-[6px] border border-border bg-surface-hover p-6 sm:p-8"
        >
          <div className="flex size-10 items-center justify-center rounded-[4px] border border-border bg-background text-foreground">
            <UsersRound aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
          </div>
          <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
            Professional strengths
          </p>
          <h2
            id="professional-strengths-heading"
            className="mt-3 text-[30px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground"
          >
            How I work
          </h2>
          <ol className="mt-7 divide-y divide-border border-y border-border">
            {professionalSkills.map((skill, index) => (
              <li
                key={skill}
                className="flex min-h-14 items-center gap-4 py-3 text-[14px] font-semibold text-foreground"
              >
                <span className="w-5 text-[10px] font-bold tracking-[0.1em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {skill}
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="languages-heading"
          className="rounded-[6px] border border-border bg-surface-hover p-6 sm:p-8"
        >
          <div className="flex size-10 items-center justify-center rounded-[4px] border border-border bg-background text-foreground">
            <LanguagesIcon aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
          </div>
          <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
            Communication
          </p>
          <h2
            id="languages-heading"
            className="mt-3 text-[30px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground"
          >
            Languages
          </h2>
          <dl className="mt-7 divide-y divide-border border-y border-border">
            {languages.map((language) => (
              <div
                key={language.name}
                className="flex min-h-[76px] items-center justify-between gap-5 py-4"
              >
                <dt className="text-[17px] font-bold tracking-[-0.025em] text-foreground">
                  {language.name}
                </dt>
                <dd className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                  {language.proficiency}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </DetailPageShell>
  );
}
