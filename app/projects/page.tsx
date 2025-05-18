import { ProjectGallery } from "@/components/projects/project-gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | ARCH STUDIO",
  description: "Explore our portfolio of architectural projects across residential, commercial, interior, and conceptual designs.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <SectionHeading
        title="Our Projects"
        subtitle="Explore our diverse portfolio of architectural works spanning residential, commercial, interior, and conceptual designs."
      />
      <ProjectGallery projects={projects} />
    </div>
  );
}