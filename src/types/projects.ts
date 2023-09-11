export interface Project {
    id: number;
    name: string;
    excerpt: string;
    description: string;
    images: string[];
    link: string;
    category: string[];
    color: string;
}

export interface ProjectCard {
    id: number;
    name: string;
    images: string[];
    category: string[];
    color: string;
}