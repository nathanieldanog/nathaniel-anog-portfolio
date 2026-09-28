import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { FeaturedSkill } from "@/data/skills";

type FeaturedSkillsGridProps = {
  skills: readonly FeaturedSkill[];
  showOthersTile?: boolean;
  className?: string;
};

export function FeaturedSkillsGrid({
  skills,
  showOthersTile = false,
  className = "",
}: FeaturedSkillsGridProps) {
  return (
    <Reveal
      as="ul"
      aria-label="Featured technologies"
      stagger
      className={`grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 md:grid-cols-5 ${className}`}
    >
      {skills.map((skill) => (
        <li
          key={skill.name}
          className="skill-tile group flex min-h-[122px] flex-col items-center justify-center border-b border-r border-border px-3 py-4 text-center"
        >
          <div className="skill-logo relative flex size-12 items-center justify-center">
            <Image
              src={skill.image}
              alt=""
              width={48}
              height={48}
              sizes="48px"
              loading={skill.name === "HTML" ? "eager" : "lazy"}
              className={`size-full object-contain p-2 ${
                skill.name === "Next.js" ? "nextjs-brand-logo" : ""
              }`}
            />
          </div>
          <h3 className="skill-tile-label mt-3 text-[13px] font-semibold leading-[1.3] text-foreground">
            {skill.name}
          </h3>
          <p className="skill-tile-meta mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            {skill.category}
          </p>
        </li>
      ))}

      {showOthersTile ? (
        <li className="flex min-h-[122px] flex-col items-center justify-center border-b border-r border-border px-3 py-4 text-center">
          <span
            aria-hidden="true"
            className="skill-logo skill-more-glyph flex size-12 items-center justify-center text-[24px] font-light leading-none text-foreground"
          >
            &middot;&middot;&middot;
          </span>
          <span className="skill-tile-label mt-3 text-[13px] font-semibold leading-[1.3] text-foreground">
            Many more
          </span>
        </li>
      ) : null}
    </Reveal>
  );
}
