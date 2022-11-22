export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  bullets: Array<"designer" | "developer">;
  img: string;
  link: string;
}
