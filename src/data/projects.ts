import type { Project } from "@/types/project";

export const projects: Array<Project> = [
  {
    id: 1,
    slug: "foptec",
    title: "Foptec",
    description:
      "Foptec is a company that provides the food industry with the best solutions for the packaging of their products, mainly the stickers ontop that provide the customer with information about the product. The focus of the project was to create a website that showcase the company's products and services.",
    bullets: ["designer", "developer"],
    img: new URL(`@/assets/images/projects/foptec.png`, import.meta.url).href,
    link: "https://www.foptec.com",
  },
  {
    id: 2,
    slug: "lifeconcern",
    title: "Scholander Lifeconcern",
    description:
      "The focus of this project was to upgrade the old website: from XHTML (made somewhere between 2005 - 2010) to WordPress; from no responsiveness to fully functional in all popular screen sizes.",
    bullets: ["designer", "developer"],
    img: new URL(`@/assets/images/projects/lifeconcern.png`, import.meta.url)
      .href,
    link: "https://www.lifeconcern.se",
  },
  {
    id: 3,
    slug: "orebro-katthem",
    title: "Örebro Katthem",
    description:
      "The purpose of this project was to create an easy to use website - both to update, use and maintain - and provide all who want to support the cat shelter a place to find all the necessary information. The website is built as plain as can be to test out my knowledge of fullstack development during my studies at Kristianstad University.",
    bullets: ["designer", "developer"],
    img: new URL(`@/assets/images/projects/orebrokatthem.png`, import.meta.url)
      .href,
    link: "https://www.orebrokatthem.com",
  },
  {
    id: 4,
    slug: "yo-adrian",
    title: "Yo Adrian",
    description:
      "The project was through my current employer (Quality Think) and the purpose of the website was to showcase Yo Adrian's expertise as a creative content studio. My role in the project was to develop the website as well as giving input on the design and the user experience",
    bullets: ["developer"],
    img: new URL(`@/assets/images/projects/yoadrian.png`, import.meta.url).href,
    link: "https://www.yoadrian.se",
  },
  {
    id: 5,
    slug: "grain-cloud",
    title: "Grain Cloud",
    description:
      "The project was through my current employer (Quality Think), and the design is provided by the marketing agency Dragster. My role was to develop the website (together with my team) as well as handling the project management on our end. The purpose of the website is to provide Grain Cloud's customers with a place to find all the necessary information about their products as well as strengthen the company's digital presence.",
    bullets: ["developer"],
    img: new URL(`@/assets/images/projects/graincloud.png`, import.meta.url)
      .href,
    link: "https://www.graincloud.com",
  },
  {
    id: 6,
    slug: "freja-partner",
    title: "Freja Partner",
    description:
      "The project was through my current employer (Quality Think), and the design is provided by the marketing agency Sultan & Sultan. My role was to develop the website, and is my first project at Quality Think.",
    bullets: ["developer"],
    img: new URL(`@/assets/images/projects/frejapartner.png`, import.meta.url)
      .href,
    link: "https://www.frejapartner.se",
  },
];
