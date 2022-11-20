import type { Project } from "@/types/project";

export const projects: Array<Project> = [
  {
    id: 1,
    slug: "foptec",
    title: "Foptec",
    bullets: ["design", "development"],
    img: new URL(`@/assets/images/projects/foptec.png`, import.meta.url).href,
  },
  {
    id: 2,
    slug: "lifeconcern",
    title: "Scholander Lifeconcern",
    bullets: ["design", "development"],
    img: new URL(`@/assets/images/projects/lifeconcern.png`, import.meta.url)
      .href,
  },
  {
    id: 3,
    slug: "orebro-katthem",
    title: "Örebro Katthem",
    bullets: ["design", "development"],
    img: new URL(`@/assets/images/projects/orebrokatthem.png`, import.meta.url)
      .href,
  },
  {
    id: 4,
    slug: "yo-adrian",
    title: "Yo Adrian",
    bullets: ["development"],
    img: new URL(`@/assets/images/projects/yoadrian.png`, import.meta.url).href,
  },
  {
    id: 5,
    slug: "grain-cloud",
    title: "Grain Cloud",
    bullets: ["development"],
    img: new URL(`@/assets/images/projects/graincloud.png`, import.meta.url)
      .href,
  },
  {
    id: 6,
    slug: "freja-partner",
    title: "Freja Partner",
    bullets: ["development"],
    img: new URL(`@/assets/images/projects/frejapartner.png`, import.meta.url)
      .href,
  },
];
