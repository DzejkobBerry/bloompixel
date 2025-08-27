export interface Technology {
  id: number;
  name: string;
  icon: string;
  category: string;
  level: number;
  color: string;
}

export const technologies: Technology[] = [
  // Frontend Technologies
  {
    id: 1,
    name: "React",
    icon: "fab fa-react",
    category: "frontend",
    level: 95,
    color: "#61DAFB"
  },
  {
    id: 2,
    name: "Next.js",
    icon: "fas fa-code",
    category: "frontend",
    level: 90,
    color: "#000000"
  },
  {
    id: 3,
    name: "TypeScript",
    icon: "fab fa-js-square",
    category: "frontend",
    level: 88,
    color: "#3178C6"
  },
  {
    id: 4,
    name: "Vue.js",
    icon: "fab fa-vuejs",
    category: "frontend",
    level: 85,
    color: "#4FC08D"
  },
  {
    id: 5,
    name: "Angular",
    icon: "fab fa-angular",
    category: "frontend",
    level: 80,
    color: "#DD0031"
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: "fas fa-paint-brush",
    category: "frontend",
    level: 92,
    color: "#06B6D4"
  },
  {
    id: 7,
    name: "SASS/SCSS",
    icon: "fab fa-sass",
    category: "frontend",
    level: 90,
    color: "#CC6699"
  },
  {
    id: 8,
    name: "Three.js",
    icon: "fas fa-cube",
    category: "frontend",
    level: 75,
    color: "#000000"
  },
  
  // Backend Technologies
  {
    id: 9,
    name: "Node.js",
    icon: "fab fa-node-js",
    category: "backend",
    level: 92,
    color: "#339933"
  },
  {
    id: 10,
    name: "Express.js",
    icon: "fas fa-server",
    category: "backend",
    level: 90,
    color: "#000000"
  },
  {
    id: 11,
    name: "Python",
    icon: "fab fa-python",
    category: "backend",
    level: 85,
    color: "#3776AB"
  },
  {
    id: 12,
    name: "Django",
    icon: "fas fa-code",
    category: "backend",
    level: 82,
    color: "#092E20"
  },
  {
    id: 13,
    name: "PHP",
    icon: "fab fa-php",
    category: "backend",
    level: 88,
    color: "#777BB4"
  },
  {
    id: 14,
    name: "Laravel",
    icon: "fab fa-laravel",
    category: "backend",
    level: 85,
    color: "#FF2D20"
  },
  {
    id: 15,
    name: "MongoDB",
    icon: "fas fa-database",
    category: "backend",
    level: 87,
    color: "#47A248"
  },
  {
    id: 16,
    name: "PostgreSQL",
    icon: "fas fa-database",
    category: "backend",
    level: 85,
    color: "#336791"
  },
  {
    id: 17,
    name: "MySQL",
    icon: "fas fa-database",
    category: "backend",
    level: 90,
    color: "#4479A1"
  },
  {
    id: 18,
    name: "GraphQL",
    icon: "fas fa-project-diagram",
    category: "backend",
    level: 78,
    color: "#E10098"
  },
  
  // Tools
  {
    id: 19,
    name: "Git",
    icon: "fab fa-git-alt",
    category: "tools",
    level: 95,
    color: "#F05032"
  },
  {
    id: 20,
    name: "GitHub",
    icon: "fab fa-github",
    category: "tools",
    level: 93,
    color: "#181717"
  },
  {
    id: 21,
    name: "Docker",
    icon: "fab fa-docker",
    category: "tools",
    level: 82,
    color: "#2496ED"
  },
  {
    id: 22,
    name: "AWS",
    icon: "fab fa-aws",
    category: "tools",
    level: 80,
    color: "#FF9900"
  },
  {
    id: 23,
    name: "Vercel",
    icon: "fas fa-cloud",
    category: "tools",
    level: 88,
    color: "#000000"
  },
  {
    id: 24,
    name: "Figma",
    icon: "fab fa-figma",
    category: "tools",
    level: 85,
    color: "#F24E1E"
  },
  {
    id: 25,
    name: "VS Code",
    icon: "fas fa-code",
    category: "tools",
    level: 95,
    color: "#007ACC"
  },
  {
    id: 26,
    name: "Webpack",
    icon: "fas fa-box",
    category: "tools",
    level: 78,
    color: "#8DD6F9"
  },
  {
    id: 27,
    name: "Vite",
    icon: "fas fa-bolt",
    category: "tools",
    level: 85,
    color: "#646CFF"
  },
  {
    id: 28,
    name: "Jest",
    icon: "fas fa-vial",
    category: "tools",
    level: 80,
    color: "#C21325"
  }
];