export interface BlogPostMeta {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export const blogMeta: BlogPostMeta[] = [
  {
    slug: "future-architecture-trends",
    title: "Designing for the Future",
    summary: "Explore innovative architectural trends shaping our future.",
    date: "2025-05-10",
    author: "Jane Doe",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    tags: ["Futurism", "Innovation"],
  },
  {
    slug: "sustainable-architecture",
    title: "Sustainable Architecture in Practice",
    summary: "How to design energy-efficient, eco-friendly buildings.",
    date: "2025-04-22",
    author: "John Smith",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    tags: ["Sustainability", "Design"],
  },
];
