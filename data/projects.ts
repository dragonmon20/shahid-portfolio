// Path: data/projects.ts

export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  tags?: string[];
  image?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "smart-portfolio",
    title: "Smart Portfolio App",
    description: "A modern, customizable portfolio built with React, Next.js, and Tailwind CSS.",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    tags: ["UI/UX", "Portfolio", "Responsive"],
    image: "/images/profile.png",
    link: "https://shahid-smartportfolio.vercel.app"
  }
];
