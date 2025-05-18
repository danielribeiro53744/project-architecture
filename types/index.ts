export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'residential' | 'commercial' | 'interior' | 'conceptual';
  description: string;
  shortDescription: string;
  coverImage: string;
  images: string[];
  year: number;
  client: string;
  location: string;
  architect: string;
  size: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export type ProjectCategory = 'residential' | 'commercial' | 'interior' | 'conceptual' | 'all';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  author: {
    name: string;
    image: string;
  };
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  cta: {
    text: string;
    link: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}