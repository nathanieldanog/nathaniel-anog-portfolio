export type Experience = {
  role: string;
  company: string;
  location: string;
  periods: readonly string[];
  highlights: readonly string[];
};

export const experiences = [
  {
    role: "IT Support Intern",
    company: "NexusCloud I.T. Solutions Inc.",
    location: "Ortigas Center, Pasig",
    periods: ["July – August 2024", "July – August 2025"],
    highlights: [
      "Diagnosed and resolved hardware and software issues across 20+ computers, restoring system functionality and minimizing downtime during training operations.",
      "Supported 10+ CCNA and IT training sessions and webinars by preparing equipment, assisting participants, and troubleshooting technical issues to keep sessions running smoothly.",
      "Designed 10+ digital promotional materials for IT courses and events, strengthening the company’s social media content and online promotion.",
    ],
  },
] as const satisfies readonly Experience[];
