import type { Metadata } from "next";
import { MousePointer2 } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
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

type SkillLogo = {
  src: string;
  invertInDark?: boolean;
};

const skillLogos = new Map<string, SkillLogo>(
  [
    ...featuredSkills.map(
      (skill) =>
        [
          skill.name,
          {
            src: skill.image,
            invertInDark: skill.name === "Next.js",
          },
        ] as const,
    ),
    [
      "Vue.js",
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vuejs/vuejs-original.svg",
      },
    ],
    ["React Native", { src: "/logos/react-logo.svg" }],
    [
      "Expo",
      { src: "https://cdn.simpleicons.org/expo", invertInDark: true },
    ],
    [
      "Expo Router",
      { src: "/logos/expo-router-logo.png", invertInDark: true },
    ],
    [
      "React Navigation",
      { src: "https://reactnavigation.org/img/favicon.ico" },
    ],
    ["Node.js", { src: "https://cdn.simpleicons.org/nodedotjs" }],
    [
      "Flask",
      { src: "https://cdn.simpleicons.org/flask", invertInDark: true },
    ],
    [
      "OpenCV",
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/opencv/opencv-original.svg",
      },
    ],
    ["MediaPipe", { src: "https://cdn.simpleicons.org/mediapipe" }],
    ["MySQL", { src: "/logos/mysql-logo.png" }],
    ["SQLite", { src: "/logos/sqlite-logo.png" }],
    ["Supabase", { src: "https://cdn.simpleicons.org/supabase" }],
    ["Firebase", { src: "/logos/firebase-logo.png" }],
    [
      "Render",
      { src: "https://cdn.simpleicons.org/render", invertInDark: true },
    ],
    [
      "Vercel",
      { src: "https://cdn.simpleicons.org/vercel", invertInDark: true },
    ],
    ["Git", { src: "https://cdn.simpleicons.org/git" }],
    [
      "GitHub",
      { src: "https://cdn.simpleicons.org/github", invertInDark: true },
    ],
    [
      "Visual Studio Code",
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/vscode/vscode-original.svg",
      },
    ],
    [
      "PyCharm",
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/pycharm/pycharm-original.svg",
      },
    ],
    [
      "Codex",
      {
        src: "https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/openai.svg",
        invertInDark: true,
      },
    ],
    ["Claude Code", { src: "/logos/claude-code-logo.png" }],
  ],
);

const skillGroupDetails: Record<string, { title: string; description: string }> = {
  Frontend: {
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces with modern web technologies.",
  },
  "Mobile Development": {
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile experiences with familiar React-based workflows.",
  },
  Backend: {
    title: "Backend",
    description:
      "Building server-side services and application logic for practical, scalable solutions.",
  },
  "Databases & Backend Services": {
    title: "Databases and Services",
    description:
      "Working with relational databases and backend services for dependable data-driven features.",
  },
  "Cloud & Deployment": {
    title: "Cloud and Deployment",
    description:
      "Deploying and maintaining applications on modern hosting and cloud platforms.",
  },
  "Development and AI Tools": {
    title: "Development and AI Tools",
    description:
      "Tools I use for coding, version control, computer vision, AI assistance, and productivity.",
  },
};

const skillGroupOrder = [
  "Frontend",
  "Development and AI Tools",
  "Mobile Development",
  "Databases & Backend Services",
  "Backend",
  "Cloud & Deployment",
] as const;

const orderedTechnicalSkills = skillGroupOrder.flatMap((title) => {
  const group = technicalSkills.find((skillGroup) => skillGroup.title === title);
  return group ? [group] : [];
});

const skillGridColumns: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5 sm:gap-x-2",
  8: "sm:grid-cols-4",
};

export default function SkillsPage() {
  return (
    <DetailPageShell
      activeItem="Skills"
      title="Skills"
      titleClassName="text-[48px] font-bold leading-[0.95] tracking-[-0.055em] text-foreground"
      description="Technical skills and tools I use to build, troubleshoot, and support reliable digital solutions."
      descriptionClassName="text-[16px] leading-[1.6] text-muted"
      headerClassName="w-full"
      descriptionWidthClassName="w-full"
    >
      <section aria-label="Technical skills" className="pt-8 sm:pt-10">
        <div className="grid gap-5 md:grid-cols-2">
          {orderedTechnicalSkills.map((group) => {
            const details = skillGroupDetails[group.title] ?? {
              title: group.title.replace(/&/g, "and"),
              description: "Technologies and tools I use in practical development work.",
            };
            const gridColumns =
              skillGridColumns[group.items.length] ?? "sm:grid-cols-4";

            return (
              <Reveal
                as="article"
                key={group.title}
                id={group.title
                  .toLocaleLowerCase()
                  .replace(/&/g, "and")
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "")}
                className="skill-category-card scroll-mt-8 rounded-[12px] border border-border bg-surface p-5 sm:p-6"
              >
                <header>
                  <h2 className="text-[20px] font-bold leading-[1.15] tracking-[-0.035em] text-foreground sm:text-[22px]">
                    {details.title}
                  </h2>
                  <p className="mt-2 min-h-[52px] text-[14px] leading-[1.55] text-muted">
                    {details.description}
                  </p>
                </header>

                <ul
                  aria-label={`${details.title} skills`}
                  className={`mt-5 grid grid-cols-2 gap-x-3 gap-y-4 border-t border-border pt-5 ${gridColumns}`}
                >
                  {group.items.map((skill) => {
                    const logo = skillLogos.get(skill.name);

                    return (
                      <li
                        key={skill.name}
                        className="skill-tile group flex min-h-[96px] flex-col items-center justify-center rounded-[8px] px-1.5 py-3 text-center"
                      >
                        <span className="skill-logo relative flex size-11 items-center justify-center">
                          {logo ? (
                            <Image
                              src={logo.src}
                              alt=""
                              width={44}
                              height={44}
                              sizes="44px"
                              loading={skill.name === "HTML" ? "eager" : "lazy"}
                              className={`size-full object-contain p-1${
                                logo.invertInDark ? " skill-logo-dark-invert" : ""
                              }`}
                            />
                          ) : (
                            <MousePointer2
                              aria-hidden="true"
                              className="size-8 text-[#3776AB]"
                              strokeWidth={1.8}
                            />
                          )}
                        </span>
                        <span className="skill-tile-label mt-2.5 text-[12px] font-semibold leading-[1.25] text-foreground">
                          {skill.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section
        aria-labelledby="professional-skills-heading"
        className="mt-5 grid gap-5 md:grid-cols-2"
      >
        <Reveal
          as="article"
          className="skill-category-card rounded-[12px] border border-border bg-surface p-5 sm:p-6"
        >
          <header>
            <h2
              id="professional-skills-heading"
              className="text-[20px] font-bold leading-[1.15] tracking-[-0.035em] text-foreground sm:text-[22px]"
            >
              Soft Skills
            </h2>
            <p className="mt-2 text-[14px] leading-[1.55] text-muted">
              Key strengths I apply in academic, project, and team environments.
            </p>
          </header>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {professionalSkills.map((skill) => (
              <li
                key={skill.name}
                title={skill.description}
                className="skill-summary-pill rounded-full border border-border bg-surface-hover px-4 py-2 text-[13px] font-semibold text-foreground"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          as="article"
          className="skill-category-card rounded-[12px] border border-border bg-surface p-5 sm:p-6"
        >
          <header>
            <h2 className="text-[20px] font-bold leading-[1.15] tracking-[-0.035em] text-foreground sm:text-[22px]">
              Languages
            </h2>
            <p className="mt-2 text-[14px] leading-[1.55] text-muted">
              Languages I use for communication and collaboration.
            </p>
          </header>

          <dl className="mt-6 grid grid-cols-2 gap-2.5">
            {languages.map((language) => (
              <div
                key={language.name}
                title={language.description}
                className="skill-summary-pill flex items-center justify-center gap-1 whitespace-nowrap rounded-full border border-border bg-surface-hover px-4 py-2.5 text-center text-[13px] font-semibold text-foreground"
              >
                <dt className="leading-[1.2]">{language.name}</dt>
                <dd className="leading-[1.2]">({language.proficiency})</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </DetailPageShell>
  );
}
