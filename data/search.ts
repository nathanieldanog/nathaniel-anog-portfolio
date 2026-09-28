import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { navigationItems } from "@/data/navigation";
import { projects } from "@/data/projects";
import { technicalSkills } from "@/data/skills";

export type SearchItem = {
  id: string;
  label: string;
  href: string;
  category: string;
  keywords: readonly string[];
};

function slugify(value: string) {
  return value
    .toLocaleLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const pageSearchItems: SearchItem[] = navigationItems.map((item) => ({
  id: `page-${slugify(item.label)}`,
  label: item.label,
  href: item.href,
  category: "Page",
  keywords: [item.label, "portfolio page"],
}));

const projectSearchItems: SearchItem[] = projects.map((project) => ({
  id: `project-${project.slug}`,
  label: project.title,
  href: `/projects#${project.slug}`,
  category: "Project",
  keywords: [
    project.category,
    project.description,
    ...project.highlights,
    ...project.technologies,
  ],
}));

const skillSearchItems: SearchItem[] = technicalSkills.flatMap((group) =>
  group.items.map((skill) => ({
    id: `skill-${slugify(skill.name)}`,
    label: skill.name,
    href: `/skills#${slugify(group.title)}`,
    category: "Skill",
    keywords: [group.title, skill.proficiency ?? "", "technology technical skill"],
  })),
);

const certificationSearchItems: SearchItem[] = certifications.map(
  (certification) => ({
    id: `certification-${slugify(certification.name)}`,
    label: certification.name,
    href: `/certifications#${slugify(certification.category)}-certifications`,
    category: "Certification",
    keywords: [
      certification.issuer,
      certification.category,
      certification.issued ?? "",
      "certificate training credential",
    ],
  }),
);

const courseworkSearchItems: SearchItem[] = education.coursework.map((course) => ({
  id: `course-${slugify(course)}`,
  label: course,
  href: "/education#coursework-heading",
  category: "Coursework",
  keywords: [education.degree, education.specialization, "education subject course"],
}));

const experienceSearchItems: SearchItem[] = experiences.map((experience) => ({
  id: `experience-${slugify(experience.role)}`,
  label: experience.role,
  href: "/experience#professional-experience",
  category: "Experience",
  keywords: [
    experience.company,
    experience.location,
    experience.hours,
    ...experience.periods,
    ...experience.responsibilities.flatMap((responsibility) => [
      responsibility.title,
      responsibility.description,
    ]),
  ],
}));

export const searchItems: SearchItem[] = [
  ...pageSearchItems,
  ...projectSearchItems,
  ...skillSearchItems,
  ...certificationSearchItems,
  ...courseworkSearchItems,
  ...experienceSearchItems,
];

export function findSearchItems(query: string) {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery.split(/\s+/);

  return searchItems
    .map((item) => {
      const normalizedLabel = item.label.toLocaleLowerCase();
      const searchableText = [item.label, item.category, ...item.keywords]
        .join(" ")
        .toLocaleLowerCase();

      if (!terms.every((term) => searchableText.includes(term))) {
        return null;
      }

      const score =
        normalizedLabel === normalizedQuery
          ? 0
          : normalizedLabel.startsWith(normalizedQuery)
            ? 1
            : normalizedLabel.includes(normalizedQuery)
              ? 2
              : 3;

      return { item, score };
    })
    .filter((result): result is { item: SearchItem; score: number } => Boolean(result))
    .sort((a, b) => a.score - b.score || a.item.label.localeCompare(b.item.label))
    .slice(0, 10)
    .map(({ item }) => item);
}
