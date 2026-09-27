import type { Metadata } from "next";
import { CertificationCard } from "@/components/certifications/CertificationCard";
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
      description="Completed certifications and professional training in web development, cloud computing, computer networking, and cybersecurity, strengthening both software development and IT infrastructure skills."
      descriptionClassName="text-[15px] leading-7 text-muted sm:text-base sm:leading-8"
      headerClassName="max-w-[1080px]"
      descriptionWidthClassName="max-w-[1040px]"
      showDivider={false}
    >
      <div className="space-y-14 pt-12 sm:pt-14">
        {certificationGroups.map((group) => {
          const groupedCertifications = certifications.filter(
            (certification) => certification.category === group.title,
          );

          return (
            <section
              key={group.title}
              aria-labelledby={group.id}
            >
              <h2
                id={group.id}
                className="text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground"
              >
                {group.title}
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {groupedCertifications.map((certification) => (
                  <CertificationCard
                    key={certification.name}
                    certification={certification}
                    compact
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </DetailPageShell>
  );
}
