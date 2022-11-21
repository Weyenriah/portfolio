export interface Project {
  id: number;
  slug: string;
  title: string;
  bullets: Array<"designer" | "developer">;
  img: string;
}
