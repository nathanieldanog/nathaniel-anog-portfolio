import type { Metadata } from "next";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { Reveal } from "@/components/motion/Reveal";
import { DetailPageShell } from "@/components/pages/DetailPageShell";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications | Nathaniel Anog",
  description:
    "Certifications and training in web development, cloud, networking, and cybersecurity.",
};

const certificationGroups = [
  { title: "Web Development", id: "web-development-certifications" },
  { title: "Cloud Computing", id: "cloud-computing-certifications" },
  { title: "Cybersecurity", id: "cybersecurity-certifications" },
  { title: "Networking", id: "networking-certifications" },
  { title: "Prompt Engineering", id: "prompt-engineering-certifications" },
] as const;

export default function CertificationsPage() {
  return (
    <DetailPageShell
      activeItem="Certifications"
      title="Certifications and Training"
      titleClassName="text-[42px] font-bold leading-[0.95] tracking-[-0.055em] text-foreground sm:text-[44px]"
      description="Continuous learning through certifications and training in web development, cloud computing, networking, and cybersecurity."
      descriptionClassName="text-[15px] leading-7 text-muted sm:text-base sm:leading-8"
      headerClassName="w-full"
      descriptionWidthClassName="w-full"
      showDivider
    >
      <div className="space-y-14 pt-12 sm:pt-14">
        {certificationGroups.map((group) => {
          const groupedCertifications = certifications.filter(
            (certification) => certification.category === group.title,
          );

          return (
            <Reveal
              as="section"
              key={group.title}
              aria-labelledby={group.id}
            >
              <h2
                id={group.id}
                className="text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground"
              >
                {group.title}
              </h2>

              <Reveal stagger delay={80} className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {groupedCertifications.map((certification) => (
                  <CertificationCard
                    key={certification.name}
                    certification={certification}
                    compact
                  />
                ))}
              </Reveal>
            </Reveal>
          );
        })}
      </div>
    </DetailPageShell>
  );
}
