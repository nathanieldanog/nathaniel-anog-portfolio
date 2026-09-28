import type { Metadata } from "next";
import { ExperienceShowcase } from "@/components/experience/ExperienceShowcase";
import { DetailPageShell } from "@/components/pages/DetailPageShell";

export const metadata: Metadata = {
  title: "Experience | Nathaniel Anog",
  description: "Technical experience and leadership responsibilities of Nathaniel Anog.",
};

export default function ExperiencePage() {
  return (
    <DetailPageShell
      activeItem="Experience"
      title="Experience"
      titleClassName="text-[48px] font-bold leading-[0.95] tracking-[-0.055em] text-foreground"
      description="Hands-on experience supporting IT operations, troubleshooting technical issues, and preparing systems and equipment for training environments."
      descriptionClassName="text-[16px] leading-[1.6] text-muted"
      headerClassName="w-full"
      descriptionWidthClassName="w-full"
      showDivider
    >
      <section
        id="professional-experience"
        aria-label="Professional experience"
        className="scroll-mt-8"
      >
        <ExperienceShowcase />
      </section>
    </DetailPageShell>
  );
}
