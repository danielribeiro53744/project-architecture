import { Building2, Compass, HomeIcon, PenTool } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
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

export function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="We offer a comprehensive range of architectural services tailored to your specific needs."
          align="center"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}