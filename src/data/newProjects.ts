export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
layout?: {
    style: { top: string; left?: string; right?: string; width: string };
    delay: number;
};
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Web Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization and user management.",
    longDescription: "Built with React and TypeScript, this dashboard provides businesses with powerful insights through interactive charts, customizable widgets, and role-based access control. Features include real-time updates via WebSocket, responsive design for all devices, and an intuitive interface that makes complex data easy to understand.",
    image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYyMjU5NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Tailwind CSS", "Charts"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project1",// Here is its unique layout data
    layout: {
      style: { top: '0%', left: '2%', width: '350px' },
      delay: 100
    }
  },
  {
    id: 2,
    title: "Mobile App Design System",
    description: "A complete design system for iOS and Android with reusable components and comprehensive documentation.",
    longDescription: "Created a unified design language across platforms with over 50 customizable components. Includes detailed guidelines for typography, color usage, spacing, and interaction patterns. The system has improved design consistency by 85% and reduced development time by 40% across multiple teams.",
    image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMzE3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "React Native", "Design System", "UI/UX"],
    link: "https://example.com",
    layout: {
      style: { top: '12%', right: '3%', width: '380px' },
      delay: 200
    }
  },
  {
    id: 3,
    title: "Creative Portfolio Platform",
    description: "A platform for artists and designers to showcase their work with customizable templates and galleries.",
    longDescription: "Built a full-stack application that allows creatives to build stunning portfolio websites without coding. Features include drag-and-drop page builder, custom domain support, analytics, client collaboration tools, and SEO optimization. Over 500 artists have launched their portfolios using this platform.",
    image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIzNTA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Node.js", "MongoDB", "AWS"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project3",
    layout: {
      style: { top: '55%', left: '12%', width: '360px' },
      delay: 100
    }
  },
  {
    id: 4,
    title: "Collaborative Design Tool",
    description: "Real-time collaborative design tool for teams to brainstorm and prototype together.",
    longDescription: "Developed a web-based design tool with real-time collaboration features, allowing multiple users to work on the same canvas simultaneously. Includes vector editing, commenting system, version history, and seamless Figma integration. Used by design teams at startups and enterprises for rapid prototyping and ideation sessions.",
    image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW98ZW58MXx8fHwxNzYyMzE5NzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["WebGL", "Socket.io", "Vue.js", "Canvas"],
    link: "https://example.com",
    layout: {
      style: { top: '72%', right: '15%', width: '370px' },
      delay: 200
    }
  },
];