import { ExperienceShowcase } from "@/components/experience/ExperienceShowcase";
import { DetailPageShell } from "@/components/pages/DetailPageShell";
import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata({
  title: "Experience",
  description: "Technical experience and leadership responsibilities of Nathaniel Anog.",
  path: "/experience",
});

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
