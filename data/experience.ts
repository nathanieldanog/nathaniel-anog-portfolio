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

export type Activity = {
  name: string;
  role: string;
  location: string;
  date: string;
  highlights: readonly string[];
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

export const activities = [
  {
    name: "Stratum: Career Guidance Seminar",
    role: "Program Director",
    location: "Sta. Mesa, Manila",
    date: "May 12–14, 2026",
    highlights: [
      "Led the planning and execution of a career guidance seminar for 200+ attendees, overseeing program flow, scheduling, and event coordination to ensure smooth and timely delivery.",
      "Coordinated with 20+ committee members across multiple teams, aligning responsibilities and program requirements to support efficient event preparation and execution.",
      "Directed event-day operations and resolved program and logistical concerns, keeping the seminar on schedule from opening to closing.",
    ],
  },
] as const satisfies readonly Activity[];
