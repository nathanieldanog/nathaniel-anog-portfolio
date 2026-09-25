import Image from "next/image";
import { SectionDivider } from "@/components/home/SectionDivider";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 bg-background text-foreground lg:scroll-mt-0"
    >
      <SectionDivider />
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
        <h2
          id="skills-heading"
          className="text-[48px] font-bold leading-[0.95] tracking-[-0.055em]"
        >
          Skills
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="group flex min-h-[88px] items-center gap-4 rounded-[4px] border border-border bg-background p-4 transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-surface-hover hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="relative size-12 shrink-0 overflow-hidden rounded-[4px] bg-white p-2">
                <Image
                  src={skill.image}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain p-2"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-semibold leading-[1.3] text-foreground">
                  {skill.name}
                </h3>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                  {skill.category}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
