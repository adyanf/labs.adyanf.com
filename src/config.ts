export const SITE = {
  website: "https://labs.adyanf.com/",
  blog: "https://blog.adyanf.com/",
  title: "Adya Labs",
  author: "Adya Naufal Fikri",
  desc: "A small, independent lab where Adya experiments with ideas and turns the promising ones into products.",
  email: "adyanaufalf@gmail.com",
};

export type Social = {
  name: "LinkedIn" | "Instagram" | "Github" | "Mail";
  href: string;
  linkTitle: string;
};

// Same links as blog.adyanf.com
export const SOCIALS: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adyanf/",
    linkTitle: `${SITE.author} on LinkedIn`,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/adyanaufalfikri",
    linkTitle: `${SITE.author} on Instagram`,
  },
  {
    name: "Github",
    href: "https://github.com/adyanf",
    linkTitle: `${SITE.author} on Github`,
  },
  {
    name: "Mail",
    href: `mailto:${SITE.email}`,
    linkTitle: `Send an email to ${SITE.author}`,
  },
];

export type ProjectStatus =
  | "Concept"
  | "Building"
  | "Beta"
  | "Launched"
  | "Archived";

export type Project = {
  name: string;
  status: ProjectStatus;
  description: string;
  href?: string;
};

// Add a new entry here to show it in the "Building now" section.
export const PROJECTS: Project[] = [
  {
    name: "Finance app (name TBA)",
    status: "Building",
    description:
      "A personal finance app to help people reach financial freedom: understand where your money goes, grow it steadily, and see how close you are to the finish line.",
  },
];
