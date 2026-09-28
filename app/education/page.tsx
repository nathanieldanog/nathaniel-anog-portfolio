import type { Metadata } from "next";
import { SectionDivider } from "@/components/home/SectionDivider";
import { Reveal } from "@/components/motion/Reveal";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { QuickActionsProvider } from "@/components/search/QuickActionsProvider";
import { SidebarLayout } from "@/components/sidebar/SidebarLayout";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Education | Nathaniel Anog",
  description: "Academic background, distinctions, coursework, and achievements.",
};

const academicStats = [
  { label: "General weighted average", value: education.gwa },
  { label: "Academic distinction", value: education.distinction },
  { label: "Regular semesters with academic recognition", value: "8 / 8" },
  { label: "Top-five departmental exam rankings", value: "7×" },
] as const;

const recognitions = [
  {
    eyebrow: "Scholarship",
    title: education.scholarships[0],
    description:
      "Selected under the Department of Science and Technology – Science Education Institute undergraduate scholarship program.",
  },
  {
    eyebrow: "Academic award",
    title: education.scholarships[1],
    description:
      "Recognized for academic achievement in science, technology, and engineering education.",
  },
] as const;

const achievements = [
  {
    eyebrow: "First-year academic ranking",
    title: "Ranked 1st Overall",
    description:
      "Among first-year Bachelor of Science in Computer Engineering students.",
  },
  {
    eyebrow: "Departmental examinations",
    title: "Top 5 in Seven Departmental Examinations",
    description:
      "Achieved seven Top-5 placements, including 1st in Software Design and 4th in Database Management Systems.",
  },
  {
    eyebrow: "Consistent academic recognition",
    title: "President’s/Dean’s Lister for All 8 Regular Semesters",
    description:
      "Maintained academic distinction throughout every regular semester of the Computer Engineering program.",
  },
] as const;

const courseworkDescriptions: Record<(typeof education.coursework)[number], string> = {
  "Software Design":
    "Software architecture, problem decomposition, and structured solution development.",
  "Data Structures and Algorithms":
    "Fundamental data organization, algorithmic thinking, and efficient problem solving.",
  "Object-Oriented Programming":
    "Classes, objects, abstraction, inheritance, and reusable software design.",
  "Database Management Systems":
    "Relational databases, data modeling, SQL, and structured information management.",
  "Computer Project Management":
    "Planning, coordination, documentation, and management of technical projects.",
  "Cloud Computing":
    "Cloud concepts, services, deployment models, and modern computing infrastructure.",
};

const eyebrowClassName =
  "text-[12px] font-bold uppercase leading-[1.4] tracking-[0.16em] text-muted";

export default function EducationPage() {
  return (
    <QuickActionsProvider>
      <div className="min-h-svh bg-background text-foreground">
        <MobileHeader activeItem="Education" />
        <SidebarLayout activeItem="Education">
          <header className="relative overflow-hidden">
            <Reveal
              stagger
              className="relative mx-auto w-full max-w-[1180px] px-5 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-16 lg:px-10 lg:pb-10 lg:pt-18 xl:px-12 xl:pb-12 xl:pt-20"
            >
              <h1 className="max-w-[760px] text-[48px] font-bold leading-[0.95] tracking-[-0.055em] text-foreground">
                Education
              </h1>
              <p className="mt-5 w-full text-[16px] leading-[1.65] text-muted">
                A Cum Laude Computer Engineering graduate from the Polytechnic
                University of the Philippines, recognized for academic
                excellence, strong technical foundations, and consistent
                achievement throughout my undergraduate journey.
              </p>
            </Reveal>
          </header>
          <SectionDivider />

          <main className="mx-auto w-full max-w-[1180px] px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8 lg:px-10 lg:pb-16 lg:pt-10 xl:px-12">
            <Reveal as="section" stagger aria-labelledby="degree-heading">
              <p className={eyebrowClassName}>{education.institution}</p>
              <h2
                id="degree-heading"
                className="mt-3 max-w-[1040px] text-[34px] font-bold leading-[1.05] tracking-[-0.05em] text-foreground"
              >
                {education.degree} with Specialization in {education.specialization}
              </h2>

              <p className="mt-6 flex flex-wrap items-center gap-x-2 text-[14px] text-muted">
                <span>{education.location}</span>
                <span aria-hidden="true">·</span>
                <span>Graduated {education.graduation}</span>
              </p>

              <Reveal
                as="dl"
                stagger
                delay={100}
                className="mt-8 grid grid-cols-2 sm:grid-cols-4"
              >
                {academicStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex min-h-[126px] flex-col items-center justify-center px-3 py-5 text-center sm:min-h-[138px] sm:px-5 ${
                      index % 2 === 1 ? "border-l border-border" : ""
                    } ${index > 0 ? "sm:border-l sm:border-border" : ""}`}
                  >
                    <dt className="max-w-[190px] text-[11px] font-bold uppercase leading-[1.4] tracking-[0.11em] text-muted">
                      {stat.label}
                    </dt>
                    <dd className="mt-3 text-[27px] font-bold leading-none tracking-[-0.045em] text-foreground sm:text-[30px]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </Reveal>
            </Reveal>

            <Reveal as="section" aria-labelledby="recognition-heading" className="mt-12 sm:mt-16">
              <h2
                id="recognition-heading"
                className="text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[32px]"
              >
                Scholarship and Recognition
              </h2>
              <Reveal stagger delay={80} className="mt-6 grid gap-4 md:grid-cols-2">
                {recognitions.map((recognition) => (
                  <article
                    key={recognition.title}
                    className="rounded-[6px] border border-border bg-surface px-5 py-6 transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-surface-hover hover:shadow-sm motion-reduce:transform-none motion-reduce:transition-none sm:px-6"
                  >
                    <p className={eyebrowClassName}>{recognition.eyebrow}</p>
                    <h3 className="mt-3 max-w-[480px] text-[18px] font-bold leading-[1.18] tracking-[-0.035em] text-foreground sm:text-[20px]">
                      {recognition.title}
                    </h3>
                    <p className="mt-3 max-w-[520px] text-[14px] leading-[1.6] text-muted">
                      {recognition.description}
                    </p>
                  </article>
                ))}
              </Reveal>
            </Reveal>

            <Reveal as="section" aria-labelledby="achievements-heading" className="mt-12 sm:mt-16">
              <h2
                id="achievements-heading"
                className="text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[32px]"
              >
                Honors and Achievements
              </h2>
              <Reveal as="ol" stagger delay={80} className="mt-6">
                {achievements.map((achievement, index) => (
                  <li
                    key={achievement.title}
                    className="grid grid-cols-[20px_minmax(0,1fr)] gap-4 sm:gap-6"
                  >
                    <div className="relative flex justify-center">
                      {index < achievements.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 top-3 w-px bg-border"
                        />
                      ) : null}
                      <span
                        aria-hidden="true"
                        className="relative z-10 mt-1.5 size-3 rounded-full border-2 border-background bg-foreground ring-1 ring-border"
                      />
                    </div>
                    <div className="pb-7 pt-0.5 sm:pb-8">
                      <p className={eyebrowClassName}>{achievement.eyebrow}</p>
                      <h3 className="mt-1.5 text-[18px] font-bold leading-[1.25] tracking-[-0.035em] text-foreground sm:text-[20px]">
                        {achievement.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-[1.6] text-muted">
                        {achievement.description}
                      </p>
                    </div>
                  </li>
                ))}
              </Reveal>
            </Reveal>

            <Reveal as="section" stagger aria-labelledby="coursework-heading" className="mt-8 sm:mt-10">
              <h2
                id="coursework-heading"
                className="text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[32px]"
              >
                Relevant Coursework
              </h2>
              <p className="mt-3 max-w-[720px] text-[14px] leading-[1.6] text-muted">
                Key subjects that built my technical foundation in software
                development, systems, and networks.
              </p>

              <Reveal as="ol" stagger delay={100} className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {education.coursework.map((course, index) => (
                  <li
                    key={course}
                    className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 rounded-[6px] border border-border bg-surface p-4 transition-colors duration-200 hover:bg-surface-hover"
                  >
                    <span className="flex size-9 items-center justify-center rounded-[4px] bg-surface-hover font-display text-[14px] font-semibold text-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[14px] font-bold leading-[1.35] tracking-[-0.025em] text-foreground">
                        {course}
                      </h3>
                      <p className="mt-1 text-[13px] leading-[1.5] text-muted">
                        {courseworkDescriptions[course]}
                      </p>
                    </div>
                  </li>
                ))}
              </Reveal>
            </Reveal>

          </main>
        </SidebarLayout>
      </div>
    </QuickActionsProvider>
  );
}
