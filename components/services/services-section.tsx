import { ServicesIntro } from "./services-intro";
import { ServiceCard } from "./services-card";
import { ServicesCTA } from "./services-cta";
import { services } from "./services-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServicesLayout } from "./services-layout";

export function ServicesSection() {
  return (
    <ServicesLayout>
      {/* <SectionHeading
        title="Our Services"
        subtitle="We offer a comprehensive range of architectural services tailored to your specific needs."
        align="center"
      /> */}
      <ServicesIntro />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <ServicesCTA />
    </ServicesLayout>
  );
}
