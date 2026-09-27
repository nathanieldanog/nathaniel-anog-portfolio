import type { Metadata } from "next";
import { ExperienceShowcase } from "@/components/experience/ExperienceShowcase";
import { DetailPageShell } from "@/components/pages/DetailPageShell";
import { activities } from "@/data/experience";

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
      description="Technical experience and leadership responsibilities."
      descriptionClassName="text-[16px] leading-[1.6] text-muted"
      headerClassName="max-w-[1080px]"
      descriptionWidthClassName="max-w-[1040px]"
      showDivider={false}
    >
      <section aria-label="Professional experience">
        <ExperienceShowcase />
      </section>

      <section
        aria-labelledby="leadership-heading"
        className="mt-20 sm:mt-24"
      >
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
          Leadership &amp; Activities
        </p>
        <h2
          id="leadership-heading"
          className="mt-3 text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[34px]"
        >
          Program Leadership
        </h2>

        <div className="mt-7">
          {activities.map((activity) => (
            <article
              key={activity.name}
              className="grid gap-8 rounded-[4px] border border-border bg-surface-hover p-6 sm:p-8 lg:grid-cols-[minmax(260px,0.7fr)_minmax(0,1.3fr)] lg:gap-12"
            >
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
                  {activity.role}
                </p>
                <h3 className="mt-3 text-[28px] font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-[32px]">
                  {activity.name}
                </h3>
                <p className="mt-5 text-[15px] font-semibold leading-[1.6] text-muted">
                  {activity.location}
                  <br />
                  {activity.date}
                </p>
              </div>

              <ul className="divide-y divide-border border-t border-border">
                {activity.highlights.map((highlight) => (
                  <li key={highlight} className="py-4 text-[15px] leading-[1.6] text-muted">
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </DetailPageShell>
  );
}
