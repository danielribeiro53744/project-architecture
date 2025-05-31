import { Building2, Compass, HomeIcon, PenTool } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Residential Architecture",
    description:
      "Creating personalized homes that reflect your lifestyle, needs, and aspirations, from concept to completion.",
    icon: HomeIcon,
  },
  {
    title: "Commercial Design",
    description:
      "Designing innovative workplaces and retail spaces that enhance productivity, brand identity, and user experience.",
    icon: Building2,
  },
  {
    title: "Interior Architecture",
    description:
      "Crafting thoughtful interior spaces that balance functionality, aesthetics, and comfort for optimal living and working.",
    icon: PenTool,
  },
  {
    title: "Master Planning",
    description:
      "Developing comprehensive plans for large-scale projects that consider environmental impact, connectivity, and future growth.",
    icon: Compass,
  },
];
