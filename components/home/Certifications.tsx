import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { SectionDivider } from "@/components/home/SectionDivider";
import { certifications } from "@/data/certifications";

const featuredCertifications = certifications.slice(0, 4);

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="scroll-mt-16 bg-background text-foreground lg:scroll-mt-0"
    >
      <SectionDivider />
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="certifications-heading"
            className="text-[42px] font-bold leading-[0.95] tracking-[-0.055em] sm:text-[44px]"
          >
            Certifications
          </h2>

          <Link
            href="/certifications"
            className="inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground hover:bg-surface-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
          >
            View all
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </header>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCertifications.map((certification) => (
            <CertificationCard
              key={certification.name}
              certification={certification}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}
