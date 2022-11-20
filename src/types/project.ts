export interface Project {
  id: number;
  slug: string;
  title: string;
  bullets: Array<"design" | "development">;
  img: string;
}
