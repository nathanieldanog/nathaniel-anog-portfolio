import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionDivider } from "@/components/home/SectionDivider";
import { featuredSkills } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 bg-background text-foreground lg:scroll-mt-0"
    >
      <SectionDivider />
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="skills-heading"
            className="text-[48px] font-bold leading-[0.95] tracking-[-0.055em]"
          >
            Skills
          </h2>

          <Link
            href="/skills"
            className="inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground hover:bg-surface-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
          >
            View all
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </header>

        <div className="mt-8 sm:mt-10">
          <p className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
            Technical expertise
          </p>
          <h3 className="mt-3 font-display text-[34px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground">
            Technologies and Tools I Use to Build Reliable Digital Solutions
          </h3>
        </div>

        <ul
          aria-label="Featured technologies"
          className="mt-8 grid grid-cols-2 border-l border-t border-border sm:mt-10 sm:grid-cols-3 md:grid-cols-5"
        >
          {featuredSkills.map((skill) => (
            <li
              key={skill.name}
              className="group flex min-h-[122px] flex-col items-center justify-center border-b border-r border-border px-3 py-4 text-center transition-[background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-surface-hover motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="relative flex size-12 items-center justify-center">
                <Image
                  src={skill.image}
                  alt=""
                  width={48}
                  height={48}
                  sizes="48px"
                  className={`size-full object-contain p-2 ${
                    skill.name === "Next.js" ? "nextjs-brand-logo" : ""
                  }`}
                />
              </div>
              <h3 className="mt-3 text-[13px] font-semibold leading-[1.3] text-foreground">
                {skill.name}
              </h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                {skill.category}
              </p>
            </li>
          ))}

          <li className="border-b border-r border-border">
            <Link
              href="/skills"
              aria-label="View more skills"
              className="group flex min-h-[120px] h-full flex-col items-center justify-center px-3 py-4 text-center transition-[background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center text-[24px] font-light leading-none text-foreground"
              >
                &middot;&middot;&middot;
              </span>
              <span className="mt-3 text-[13px] font-semibold leading-[1.3] text-foreground">
                More
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                View all
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
