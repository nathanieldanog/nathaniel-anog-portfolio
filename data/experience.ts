export type Experience = {
  role: string;
  company: string;
  location: string;
  periods: readonly string[];
  hours: string;
  responsibilities: readonly {
    title: string;
    description: string;
  }[];
};

export const experiences = [
  {
    role: "IT Support Intern",
    company: "NexusCloud I.T. Solutions Inc.",
    location: "Ortigas Center, Pasig",
    periods: ["July – August 2024", "July – August 2025"],
    hours: "600-hour internship",
    responsibilities: [
      {
        title: "Hardware & Software Support",
        description:
          "Diagnosed and resolved hardware and software issues across 10+ computers, restoring system functionality and minimizing downtime during training operations.",
      },
      {
        title: "Technical Setup",
        description:
          "Configured computers, peripherals, and presentation equipment for 5+ training sessions and webinars, ensuring all technical resources were operational and ready before each session.",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Performed routine system checks and preventive maintenance on 10+ computers and peripherals, helping identify potential issues before they disrupted training activities.",
      },
    ],
  },
] as const satisfies readonly Experience[];
