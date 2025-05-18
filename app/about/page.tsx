import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMembers } from "@/data/team";

export const metadata = {
  title: "About | ARCH STUDIO",
  description: "Learn about our architectural firm, our design philosophy, and the talented team behind our award-winning projects.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <SectionHeading
        title="About Our Studio"
        subtitle="We are a team of passionate architects dedicated to creating sustainable, beautiful, and functional spaces."
      />

      {/* Studio Philosophy */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center mb-24">
        <div className="relative aspect-square w-full">
          <Image
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Architecture Team Working"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Philosophy</h2>
          <p className="text-muted-foreground mb-4">
            At ARCH STUDIO, we believe that architecture is more than just
            creating buildings—it's about crafting experiences and spaces that
            positively impact lives. Our design approach is rooted in three
            fundamental principles:
          </p>
          <ul className="space-y-4">
            <li className="flex">
              <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <div>
                <h3 className="font-medium text-lg">Human-Centered Design</h3>
                <p className="text-muted-foreground">
                  We prioritize the needs, behaviors, and experiences of the
                  people who will inhabit our spaces, creating environments that
                  enhance well-being and functionality.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <div>
                <h3 className="font-medium text-lg">
                  Environmental Responsibility
                </h3>
                <p className="text-muted-foreground">
                  Sustainability is integral to our process. We design with
                  ecological consciousness, utilizing sustainable materials and
                  energy-efficient systems.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <div>
                <h3 className="font-medium text-lg">Contextual Sensitivity</h3>
                <p className="text-muted-foreground">
                  We believe that great architecture responds to its context—both
                  physical and cultural—creating spaces that are meaningful and
                  appropriate to their surroundings.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Our Team */}
      <SectionHeading
        title="Our Team"
        subtitle="Meet the talented architects and designers who bring our vision to life."
        className="mb-12"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <h3 className="text-xl font-medium">{member.name}</h3>
            <p className="text-muted-foreground mb-2">{member.role}</p>
            <p className="text-sm text-muted-foreground line-clamp-4">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}