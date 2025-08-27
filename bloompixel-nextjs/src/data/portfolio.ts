export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-commerce Fashion Store",
    description: "Nowoczesny sklep internetowy z modą damską i męską. Pełna integracja z systemami płatności i zarządzaniem magazynem.",
    category: "ecommerce",
    image: "/images/portfolio/project1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Corporate Website",
    description: "Reprezentacyjna strona internetowa dla firmy konsultingowej. Responsywny design z systemem CMS.",
    category: "websites",
    image: "/images/portfolio/project2.jpg",
    tags: ["Next.js", "TypeScript", "Sanity CMS"]
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description: "Konwersyjna strona docelowa dla aplikacji SaaS. Optymalizacja pod kątem konwersji i SEO.",
    category: "landing",
    image: "/images/portfolio/project3.jpg",
    tags: ["React", "Tailwind", "Framer Motion"]
  },
  {
    id: 4,
    title: "Restaurant Booking System",
    description: "System rezerwacji stolików dla restauracji z panelem administracyjnym i powiadomieniami.",
    category: "websites",
    image: "/images/portfolio/project4.jpg",
    tags: ["Vue.js", "Laravel", "MySQL"]
  },
  {
    id: 5,
    title: "Crypto Trading Platform",
    description: "Platforma do handlu kryptowalutami z zaawansowanymi wykresami i analizą techniczną.",
    category: "websites",
    image: "/images/portfolio/project5.jpg",
    tags: ["React", "WebSocket", "Chart.js"]
  },
  {
    id: 6,
    title: "Fitness App Landing",
    description: "Strona promocyjna aplikacji fitness z animacjami i interaktywnymi elementami.",
    category: "landing",
    image: "/images/portfolio/project6.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"]
  }
];