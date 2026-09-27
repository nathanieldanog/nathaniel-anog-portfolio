export type Certification = {
  name: string;
  issuer: string;
  category:
    | "Web Development"
    | "Cloud Computing"
    | "Cybersecurity"
    | "Networking"
    | "Prompt Engineering";
  issued: string | null;
  image: string | null;
  credentialUrl: string | null;
};

export const certifications = [
  {
    name: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    category: "Web Development",
    issued: "September 2026",
    image: "/images/certifications/javascript-essentials-1.webp",
    credentialUrl: "https://www.credly.com/badges/77ea5dfb-e6ac-4008-b344-22d727b6a1be",
  },
  {
    name: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    category: "Cloud Computing",
    issued: "May 2026",
    image: "/images/certifications/aws-cloud-foundations.webp",
    credentialUrl: "https://www.credly.com/badges/e6cfce4a-9f15-4f29-9839-8aa8de735fcb",
  },
  {
    name: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    issued: "February 2026",
    image: "/images/certifications/junior-cybersecurity-analyst.webp",
    credentialUrl: "https://www.credly.com/badges/04ec8ac8-cb91-4e8b-8485-05b01f9b62e6",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    category: "Networking",
    issued: "July 2025",
    image: "/images/certifications/ccna-ensa.webp",
    credentialUrl: "https://www.credly.com/badges/2b4d2999-7757-43e4-9c06-ae595f1a9d4f",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    category: "Networking",
    issued: "July 2025",
    image: "/images/certifications/ccna-srwe.webp",
    credentialUrl: "https://www.credly.com/badges/b02a5d5b-954f-4f8a-bf75-fc9193efb580",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    category: "Networking",
    issued: "February 2025",
    image: "/images/certifications/ccna-itn.webp",
    credentialUrl: "https://www.credly.com/badges/47e5cdff-980e-4b4a-bcc6-0eb94f9e7ccf",
  },
  {
    name: "HTML Essentials",
    issuer: "Cisco Networking Academy",
    category: "Web Development",
    issued: null,
    image: null,
    credentialUrl: null,
  },
  {
    name: "CSS Essentials",
    issuer: "Cisco Networking Academy",
    category: "Web Development",
    issued: null,
    image: null,
    credentialUrl: null,
  },
  {
    name: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    category: "Web Development",
    issued: null,
    image: null,
    credentialUrl: null,
  },
  {
    name: "Prompt Like an Engineer",
    issuer: "Cisco Networking Academy",
    category: "Prompt Engineering",
    issued: null,
    image: null,
    credentialUrl: null,
  },
] as const satisfies readonly Certification[];
