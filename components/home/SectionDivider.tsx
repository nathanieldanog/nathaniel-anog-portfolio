import { Reveal } from "@/components/motion/Reveal";

export function SectionDivider() {
  return (
    <Reveal
      aria-hidden="true"
      variant="fade-in"
      className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
    >
      {null}
    </Reveal>
  );
}
