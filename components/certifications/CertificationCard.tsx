import { BadgeCheck, ScrollText } from "lucide-react";
import Image from "next/image";
import type { Certification } from "@/data/certifications";

type CertificationCardProps = {
  certification: Certification;
  compact?: boolean;
};

function CardContent({ certification, compact = false }: CertificationCardProps) {
  const Heading = compact ? "h3" : "h2";

  return (
    <>
      <div
        className={`relative flex shrink-0 items-center justify-center ${compact ? "size-20 sm:size-24" : "size-24"}`}
      >
        {certification.image ? (
          <Image
            src={certification.image}
            alt={`${certification.name} badge`}
            fill
            className="object-contain"
            sizes="96px"
          />
        ) : (
          <div className="flex size-20 items-center justify-center rounded-full border border-border bg-background text-muted">
            <ScrollText aria-hidden="true" className="size-8" strokeWidth={1.5} />
          </div>
        )}
      </div>

      <Heading
        className={`${compact ? "mt-4 text-sm" : "mt-5 text-base"} font-bold leading-[1.35] tracking-[-0.025em] text-foreground`}
      >
        {certification.name}
      </Heading>
      <p className="mt-2 text-[11px] font-bold uppercase leading-[1.5] tracking-[0.12em] text-muted">
        {certification.issuer}
      </p>
      {certification.issued ? (
        <p className="mt-2 text-xs font-semibold text-muted">
          Issued {certification.issued}
        </p>
      ) : null}

      {certification.credentialUrl ? (
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-foreground transition-opacity group-hover:opacity-60">
          <BadgeCheck aria-hidden="true" className="size-4" />
          Verify
        </span>
      ) : (
        <span className="mt-auto pt-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
          Training completed
        </span>
      )}
    </>
  );
}

export function CertificationCard({
  certification,
  compact = false,
}: CertificationCardProps) {
  const className = `group flex flex-col items-center rounded-[4px] bg-surface-hover text-center transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none ${
    compact
      ? "min-h-[260px] border border-transparent p-4 hover:border-foreground/20 hover:shadow-lg sm:p-5"
      : "min-h-[300px] border border-border p-5 hover:border-foreground/25 hover:shadow-md"
  }`;

  if (certification.credentialUrl) {
    return (
      <a
        href={certification.credentialUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Verify ${certification.name}`}
        className={`${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
      >
        <CardContent certification={certification} compact={compact} />
      </a>
    );
  }

  return (
    <article className={className}>
      <CardContent certification={certification} compact={compact} />
    </article>
  );
}
