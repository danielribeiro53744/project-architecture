import { Metadata } from "next";
import { ServicesSection } from "@/components/services/services-section";

export const metadata: Metadata = {
  title: "Our Services | YourCompanyName",
  description: "Explore the full range of architectural services we offer.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesSection />
    </main>
  );
}
