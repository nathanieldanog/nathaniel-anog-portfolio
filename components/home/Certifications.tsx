import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { Reveal } from "@/components/motion/Reveal";
import { certifications } from "@/data/certifications";

const featuredCertifications = certifications.slice(0, 3);

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="scroll-mt-16 bg-background text-foreground lg:scroll-mt-0"
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

          <Link
            href="/certifications"
            className="motion-button motion-button--secondary inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View all
            <ArrowRight aria-hidden="true" className="motion-action-icon motion-icon-forward size-4" />
          </Link>
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
      </div>
    </section>
  );
}
