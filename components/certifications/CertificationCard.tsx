import { ExternalLink, ScrollText } from "lucide-react";
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
        className={`certification-badge-frame flex shrink-0 items-center justify-center rounded-[8px] border border-border bg-background ${compact ? "size-[60px]" : "size-[68px]"}`}
      >
        <div
          className={`certification-badge relative flex items-center justify-center ${compact ? "size-11" : "size-12"}`}
        >
          {certification.image ? (
            <Image
              src={certification.image}
              alt={`${certification.name} badge`}
              fill
              className="object-contain"
              sizes={compact ? "44px" : "48px"}
            />
          ) : (
            <ScrollText aria-hidden="true" className="size-7 text-muted" strokeWidth={1.5} />
          )}
        </div>
      </div>

      <Heading
        className={`${compact ? "mt-4 text-[15px]" : "mt-5 text-base"} max-w-[240px] font-bold leading-[1.3] tracking-[-0.03em] text-foreground`}
      >
        {certification.name}
      </Heading>
      <p className="mt-2 text-[10px] font-bold uppercase leading-[1.5] tracking-[0.14em] text-muted">
        {certification.issuer}
      </p>
      {certification.issued ? (
        <p className="mt-1 text-[11px] font-semibold text-muted">
          {certification.issued}
        </p>
      ) : null}

      {certification.credentialUrl ? (
        <span className="certification-verify mt-auto inline-flex items-center gap-2 pt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground">
          <span>View on Credly</span>
          <ExternalLink
            aria-hidden="true"
            className="certification-verify-icon size-3.5"
            strokeWidth={2}
          />
        </span>
      ) : (
        <span className="mt-auto pt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
          In progress
        </span>
      )}
    </>
  );
}

export function CertificationCard({
  certification,
  compact = false,
}: CertificationCardProps) {
  const className = `certification-card group flex flex-col items-center rounded-[10px] border border-border bg-surface text-center ${
    compact
      ? "min-h-[226px] px-5 py-5"
      : "min-h-[252px] px-6 py-6"
  }`;

  if (certification.credentialUrl) {
    return (
      <a
        href={certification.credentialUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${certification.name} on Credly`}
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
