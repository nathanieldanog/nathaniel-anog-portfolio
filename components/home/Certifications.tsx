import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { certifications, credlyProfileUrl } from "@/data/certifications";

const featuredCertifications = certifications.slice(0, 4);

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="scroll-mt-16 border-t border-border bg-background text-foreground lg:scroll-mt-0"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16 xl:px-12">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="certifications-heading"
            className="text-[42px] font-bold leading-[0.95] tracking-[-0.055em] sm:text-[44px]"
          >
            Certifications
          </h2>

          <a
            href={credlyProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 min-w-[150px] shrink-0 items-center justify-center gap-4 rounded-[4px] border border-foreground/65 bg-background/70 px-6 text-[13px] font-bold uppercase tracking-[0.01em] text-foreground transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground hover:bg-surface-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
          >
            View all
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </header>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCertifications.map((certification) => (
            <a
              key={certification.name}
              href={certification.credentialUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Verify ${certification.name} on Credly`}
              className="group flex min-h-[260px] flex-col items-center rounded-[4px] border border-transparent bg-surface-hover p-4 text-center transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transform-none motion-reduce:transition-none sm:p-5"
            >
              <div className="relative size-20 shrink-0 sm:size-24">
                <Image
                  src={certification.image}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>

              <h3 className="mt-4 text-[14px] font-bold leading-[1.3] tracking-[-0.025em] text-foreground">
                {certification.name}
              </h3>
              <p className="mt-2 text-[9px] font-bold uppercase leading-[1.5] tracking-[0.12em] text-muted">
                {certification.issuer}
              </p>
              <p className="mt-1.5 text-[11px] font-semibold text-muted">
                Issued {certification.issued}
              </p>

              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[10px] font-bold uppercase tracking-[0.1em] text-foreground transition-opacity group-hover:opacity-60">
                <BadgeCheck aria-hidden="true" className="size-3.5" />
                Verify
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
