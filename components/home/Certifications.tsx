import { CertificationCard } from "@/components/certifications/CertificationCard";
import { Reveal } from "@/components/motion/Reveal";
import { certifications } from "@/data/certifications";
import { ViewAllLink } from "./ViewAllLink";

const featuredCertifications = certifications.slice(0, 3);

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="scroll-mt-16 bg-background text-foreground min-[1024px]:scroll-mt-0"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
        <Reveal
          as="header"
          stagger
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2
            id="certifications-heading"
            className="text-[42px] font-bold leading-[0.95] tracking-[-0.055em] sm:text-[44px]"
          >
            Certifications
          </h2>

          <ViewAllLink
            href="/certifications"
            className="hidden lg:inline-flex"
          />
        </Reveal>

        <Reveal
          stagger
          delay={80}
          className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredCertifications.map((certification) => (
            <CertificationCard
              key={certification.name}
              certification={certification}
              compact
            />
          ))}
        </Reveal>

        <ViewAllLink href="/certifications" className="mt-8 flex w-full lg:hidden" />
      </div>
    </section>
  );
}
